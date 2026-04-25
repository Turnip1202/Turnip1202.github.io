import { TodoManager } from '@/utils/todo';
import { message } from 'antd';
import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { DraggablePanel } from './DraggablePanel';
import { TodoList } from './TodoList';

// 创建 TodoManager 实例
const todoManager = new TodoManager();

interface TodoListWidgetProps {
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
}

export const TodoListWidget: React.FC<TodoListWidgetProps> = ({
  visible: externalVisible,
  onVisibleChange,
}) => {
  const [state, setState] = useState(() => todoManager.getState());
  const [initialized, setInitialized] = useState(false);

  // 初始化
  useEffect(() => {
    const init = async () => {
      await todoManager.waitForInit();
      setState(todoManager.getState());
      setInitialized(true);
    };
    init();
  }, []);

  // 监听外部 visible 变化
  useEffect(() => {
    if (
      externalVisible !== undefined &&
      externalVisible !== state.panelVisible
    ) {
      todoManager.setPanelVisible(externalVisible);
      setState(todoManager.getState());
    }
  }, [externalVisible, state.panelVisible]);

  // 更新本地状态
  const updateState = useCallback(() => {
    setState(todoManager.getState());
  }, []);

  // 处理面板可见性变化
  const handleVisibleToggle = useCallback(
    (visible: boolean) => {
      todoManager.setPanelVisible(visible);
      updateState();
      onVisibleChange?.(visible);
    },
    [updateState, onVisibleChange],
  );

  // 处理添加待办
  const handleAddTodo = useCallback(
    (content: string, priority: any, category: any, dueDate?: string) => {
      todoManager.addTodo(content, priority, category, dueDate);
      updateState();
      message.success('已添加待办');
    },
    [updateState],
  );

  // 处理更新待办
  const handleUpdateTodo = useCallback(
    (id: number, data: any) => {
      todoManager.updateTodo(id, data);
      updateState();
    },
    [updateState],
  );

  // 处理删除待办
  const handleDeleteTodo = useCallback(
    (id: number) => {
      todoManager.deleteTodo(id);
      updateState();
      message.success('已删除待办');
    },
    [updateState],
  );

  // 处理切换完成状态
  const handleToggleComplete = useCallback(
    (id: number) => {
      todoManager.toggleComplete(id);
      updateState();
    },
    [updateState],
  );

  // 处理分类变化
  const handleCategoryChange = useCallback(
    (category: any) => {
      todoManager.setCurrentCategory(category);
      updateState();
    },
    [updateState],
  );

  // 处理清空已完成
  const handleClearCompleted = useCallback(() => {
    const count = todoManager.clearCompleted();
    updateState();
  }, [updateState]);

  // 处理全部标记完成/取消
  const handleToggleAllComplete = useCallback(
    (complete: boolean) => {
      const count = todoManager.toggleAllComplete(complete);
      updateState();
      message.success(
        complete
          ? `已标记 ${count} 个任务为完成`
          : `已取消 ${count} 个任务的完成状态`,
      );
    },
    [updateState],
  );

  // 处理导出
  const handleExport = useCallback(() => {
    const text = todoManager.exportToText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `待办清单_${new Date().toLocaleDateString()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    message.success('已导出待办清单');
  }, []);

  // 处理面板位置变化
  const handlePositionChange = useCallback((x: number, y: number) => {
    todoManager.setPanelPosition(x, y);
  }, []);

  // 处理停靠
  const handleDock = useCallback(
    (position: any) => {
      todoManager.setPanelDocked(position);
      updateState();
    },
    [updateState],
  );

  // 处理取消停靠
  const handleUndock = useCallback(() => {
    todoManager.setPanelUndocked();
    updateState();
  }, [updateState]);

  // 处理折叠/展开
  const handleCollapseToggle = useCallback(
    (collapsed: boolean) => {
      todoManager.setPanelCollapsed(collapsed);
      updateState();
    },
    [updateState],
  );

  // 处理键盘快捷键
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Enter 键快速添加待办（在输入框聚焦时）
      if (e.key === 'Enter' && !e.shiftKey) {
        // 这里可以通过 ref 来判断输入框是否聚焦
        // 暂时简单处理，后续可以优化
      }

      // Ctrl/Command + D 快速标记完成
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        // 标记第一个未完成的待办
        const firstUncompleted = state.todos.find(todo => !todo.completed);
        if (firstUncompleted) {
          handleToggleComplete(firstUncompleted.id);
        }
      }

      // Esc 取消编辑/收起面板
      if (e.key === 'Escape') {
        // 收起面板
        handleCollapseToggle(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [state.todos, handleToggleComplete, handleCollapseToggle]);

  if (!initialized) {
    return null;
  }

  // 计算未完成任务数量
  const hasUncompletedTasks = state.todos.some(todo => !todo.completed);

  return (
    <DraggablePanel
      initialPosition={state.panelPosition}
      onPositionChange={handlePositionChange}
      onDock={handleDock}
      onUndock={handleUndock}
      docked={state.panelDocked}
      dockPosition={state.panelDockPosition}
      collapsed={state.panelCollapsed}
      onCollapseToggle={handleCollapseToggle}
      visible={state.panelVisible}
      onVisibleToggle={handleVisibleToggle}
      title="待办清单"
      hasUncompletedTasks={hasUncompletedTasks}
    >
      <TodoList
        todos={state.todos}
        currentCategory={state.currentCategory}
        onAddTodo={handleAddTodo}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
        onCategoryChange={handleCategoryChange}
        onClearCompleted={handleClearCompleted}
        onToggleAllComplete={handleToggleAllComplete}
        onExport={handleExport}
      />
    </DraggablePanel>
  );
};

export default TodoListWidget;
