import type { TodoCategory, TodoItem, TodoPriority, TodoState } from '@/types';
import { SmartStorageManager } from '../../core/storage/SmartStorageManager';
import type { StorageType } from '../../core/storage/types';

const STORAGE_TYPE_KEY = 'app_storage_type';

export class TodoManager {
  private state: TodoState;
  private readonly TODO_KEY = 'turnip_todo_items';
  private readonly TODO_STATE_KEY = 'turnip_todo_state';
  private storage: SmartStorageManager;
  private initialized = false;
  private initPromise: Promise<void> | null = null;

  constructor() {
    const preferredStorage = this.getPreferredStorageType();
    this.storage = new SmartStorageManager(preferredStorage);

    // 默认状态
    const defaultState: TodoState = {
      todos: [],
      currentCategory: 'all',
      panelPosition: { x: window.innerWidth - 320, y: 100 },
      panelDocked: false,
      panelDockPosition: null,
      panelCollapsed: true,
      panelVisible: true,
    };

    // 从 localStorage 读取
    const storedTodos = this.getFromLocalStorage<TodoItem[]>(this.TODO_KEY);
    const storedState = this.getFromLocalStorage<Partial<TodoState>>(
      this.TODO_STATE_KEY,
    );

    this.state = {
      ...defaultState,
      ...(storedState || {}),
      todos: storedTodos || [],
    };

    if (!storedTodos) {
      this.saveToLocalStorage(this.TODO_KEY, this.state.todos);
    }
    if (!storedState) {
      this.saveToLocalStorage(this.TODO_STATE_KEY, {
        panelPosition: this.state.panelPosition,
        panelDocked: this.state.panelDocked,
        panelDockPosition: this.state.panelDockPosition,
        panelCollapsed: this.state.panelCollapsed,
        panelVisible: this.state.panelVisible,
        currentCategory: this.state.currentCategory,
      });
    }

    this.initPromise = this.initialize();
  }

  private getPreferredStorageType(): StorageType {
    try {
      const saved = localStorage.getItem(STORAGE_TYPE_KEY);
      if (
        saved === 'localStorage' ||
        saved === 'indexedDB' ||
        saved === 'auto'
      ) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'auto';
  }

  private getFromLocalStorage<T>(key: string): T | null {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error(`Error reading from localStorage: ${error}`);
      return null;
    }
  }

  private saveToLocalStorage<T>(key: string, data: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error saving to localStorage: ${error}`);
    }
  }

  private async saveToStorage<T>(key: string, data: T): Promise<void> {
    this.saveToLocalStorage(key, data);

    try {
      await this.storage.set(key, data);
    } catch (error) {
      console.error(`Failed to save ${key} to storage:`, error);
    }
  }

  private saveSync<T>(key: string, data: T): void {
    this.saveToLocalStorage(key, data);
    this.saveToStorage(key, data).catch(console.error);
  }

  private saveTodos(): void {
    this.saveSync(this.TODO_KEY, this.state.todos);
  }

  private saveState(): void {
    this.saveSync(this.TODO_STATE_KEY, {
      panelPosition: this.state.panelPosition,
      panelDocked: this.state.panelDocked,
      panelDockPosition: this.state.panelDockPosition,
      panelCollapsed: this.state.panelCollapsed,
      panelVisible: this.state.panelVisible,
      currentCategory: this.state.currentCategory,
    });
  }

  async initialize(): Promise<void> {
    if (this.initialized) return;

    try {
      const [storedTodos, storedState] = await Promise.all([
        this.storage.get<TodoItem[]>(this.TODO_KEY),
        this.storage.get<Partial<TodoState>>(this.TODO_STATE_KEY),
      ]);

      if (storedTodos) {
        this.state.todos = storedTodos;
      }

      if (storedState) {
        Object.assign(this.state, storedState);
      }

      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize TodoManager:', error);
      this.initialized = true;
    }
  }

  async waitForInit(): Promise<void> {
    if (this.initPromise) {
      await this.initPromise;
    }
  }

  // ===== 待办 CRUD 操作 =====

  addTodo(
    content: string,
    priority: TodoPriority = 'medium',
    category: TodoCategory = 'work',
    dueDate?: string,
  ): TodoItem {
    const newId = this.state.todos.length
      ? Math.max(...this.state.todos.map((t) => t.id)) + 1
      : 1;

    const newOrder = this.state.todos.length
      ? Math.max(...this.state.todos.map((t) => t.order)) + 1
      : 0;

    const newTodo: TodoItem = {
      id: newId,
      content,
      priority,
      category,
      dueDate,
      createdAt: new Date().toISOString(),
      completed: false,
      order: newOrder,
    };

    this.state.todos.push(newTodo);
    this.saveTodos();
    return newTodo;
  }

  updateTodo(
    id: number,
    data: Partial<Omit<TodoItem, 'id' | 'createdAt'>>,
  ): boolean {
    const todo = this.state.todos.find((t) => t.id === id);
    if (!todo) return false;

    Object.assign(todo, data);
    this.saveTodos();
    return true;
  }

  deleteTodo(id: number): boolean {
    const index = this.state.todos.findIndex((t) => t.id === id);
    if (index === -1) return false;

    this.state.todos.splice(index, 1);
    this.saveTodos();
    return true;
  }

  toggleComplete(id: number): boolean {
    const todo = this.state.todos.find((t) => t.id === id);
    if (!todo) return false;

    todo.completed = !todo.completed;
    this.saveTodos();
    return true;
  }

  // ===== 待办查询 =====

  getAllTodos(): TodoItem[] {
    return [...this.state.todos].sort((a, b) => a.order - b.order);
  }

  getTodosByCategory(category: TodoCategory | 'all'): TodoItem[] {
    const todos =
      category === 'all'
        ? this.getAllTodos()
        : this.getAllTodos().filter((t) => t.category === category);

    return todos.sort((a, b) => a.order - b.order);
  }

  getTodoById(id: number): TodoItem | undefined {
    return this.state.todos.find((t) => t.id === id);
  }

  // ===== 排序 =====

  reorderTodos(newOrder: number[]): boolean {
    // newOrder 是 todo id 的新顺序数组
    const todoMap = new Map(this.state.todos.map((t) => [t.id, t]));

    for (let i = 0; i < newOrder.length; i++) {
      const todo = todoMap.get(newOrder[i]);
      if (todo) {
        todo.order = i;
      }
    }

    this.saveTodos();
    return true;
  }

  // ===== 快捷操作 =====

  clearCompleted(): number {
    const beforeCount = this.state.todos.length;
    this.state.todos = this.state.todos.filter((t) => !t.completed);
    this.saveTodos();
    return beforeCount - this.state.todos.length;
  }

  toggleAllComplete(complete: boolean): number {
    let count = 0;
    this.state.todos.forEach((todo) => {
      if (todo.completed !== complete) {
        todo.completed = complete;
        count++;
      }
    });
    this.saveTodos();
    return count;
  }

  // ===== 数据导出 =====

  exportToText(): string {
    const todos = this.getAllTodos();
    if (todos.length === 0) return '# 待办清单\n\n暂无待办';

    const categoryNames: Record<TodoCategory, string> = {
      work: '工作',
      life: '生活',
      study: '学习',
    };

    const priorityNames: Record<TodoPriority, string> = {
      high: '高',
      medium: '中',
      low: '低',
    };

    let text = '# 待办清单\n\n';
    text += `**生成时间**: ${new Date().toLocaleString()}\n\n`;
    text += '---\n\n';

    const completed = todos.filter((t) => t.completed);
    const uncompleted = todos.filter((t) => !t.completed);

    if (uncompleted.length > 0) {
      text += `## 未完成 (${uncompleted.length})\n\n`;
      uncompleted.forEach((todo) => {
        text += `- [ ] **${todo.content}**`;
        text += `  - 分类: ${categoryNames[todo.category]}`;
        text += `  - 优先级: ${priorityNames[todo.priority]}`;
        if (todo.dueDate) {
          text += `  - 截止: ${new Date(todo.dueDate).toLocaleDateString()}`;
        }
        text += '\n';
      });
      text += '\n';
    }

    if (completed.length > 0) {
      text += `## 已完成 (${completed.length})\n\n`;
      completed.forEach((todo) => {
        text += `- [x] ${todo.content}`;
        text += `  - 分类: ${categoryNames[todo.category]}`;
        text += '\n';
      });
    }

    return text;
  }

  // ===== 面板状态管理 =====

  getState(): TodoState {
    return { ...this.state };
  }

  setPanelPosition(x: number, y: number): void {
    this.state.panelPosition = { x, y };
    this.state.panelDocked = false;
    this.state.panelDockPosition = null;
    this.saveState();
  }

  setPanelDocked(position: 'left' | 'right' | 'top'): void {
    this.state.panelDocked = true;
    this.state.panelDockPosition = position;
    this.saveState();
  }

  setPanelUndocked(): void {
    this.state.panelDocked = false;
    this.state.panelDockPosition = null;
    this.saveState();
  }

  setPanelCollapsed(collapsed: boolean): void {
    this.state.panelCollapsed = collapsed;
    this.saveState();
  }

  setPanelVisible(visible: boolean): void {
    this.state.panelVisible = visible;
    this.saveState();
  }

  setCurrentCategory(category: TodoCategory | 'all'): void {
    this.state.currentCategory = category;
    this.saveState();
  }

  // ===== 数据管理 =====

  async clearAllData(): Promise<void> {
    this.state.todos = [];
    this.state.currentCategory = 'all';
    this.saveTodos();
    this.saveState();

    localStorage.removeItem(this.TODO_KEY);
    localStorage.removeItem(this.TODO_STATE_KEY);
    await Promise.all([
      this.storage.remove(this.TODO_KEY),
      this.storage.remove(this.TODO_STATE_KEY),
    ]);
  }
}
