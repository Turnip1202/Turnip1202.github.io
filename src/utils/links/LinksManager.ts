import { LinkCategory, SearchEngine } from '@/types';

export class LinksManager {
  private categories: LinkCategory[];
  private engines: SearchEngine[];
  private readonly CATEGORIES_KEY = 'turnip_link_categories';
  private readonly ENGINES_KEY = 'turnip_search_engines';

  constructor(defaultCategories: LinkCategory[], defaultEngines: SearchEngine[]) {
    // 初始化时优先从 localStorage 获取数据
    const storedCategories = this.getFromStorage<LinkCategory[]>(this.CATEGORIES_KEY);
    const storedEngines = this.getFromStorage<SearchEngine[]>(this.ENGINES_KEY);

    this.categories = storedCategories || [...defaultCategories];
    //对category进行排序
    this.categories.sort((a, b) => a.id - b.id);
    //对link进行排序
    this.categories.forEach((category) => {
      category.links.sort((a, b) => a.id - b.id);
    })
    this.engines = storedEngines || [...defaultEngines];

    // 如果没有存储的数据，保存默认值
    if (!storedCategories) {
      this.saveToStorage(this.CATEGORIES_KEY, this.categories);
    }
    if (!storedEngines) {
      this.saveToStorage(this.ENGINES_KEY, this.engines);
    }
  }

  // Storage 工具方法
  private getFromStorage<T>(key: string): T | null {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error(`Error reading from localStorage: ${error}`);
      return null;
    }
  }

  private saveToStorage<T>(key: string, data: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error saving to localStorage: ${error}`);
    }
  }

  // 分类相关方法
  getCategoryById(id: number): LinkCategory | undefined {
    return this.categories.find(category => category.id === id);
  }

  addCategory(name: string): LinkCategory {
    const newId = this.categories.length ? 
      Math.max(...this.categories.map(c => c.id)) + 1 : 0;
    
    const newCategory: LinkCategory = {
      id: newId,
      name,
      links: []
    };
    
    this.categories.push(newCategory);
    this.saveToStorage(this.CATEGORIES_KEY, this.categories);
    return newCategory;
  }

  updateCategory(id: number, name: string): boolean {
    const category = this.getCategoryById(id);
    if (!category) return false;
    
    category.name = name;
    this.saveToStorage(this.CATEGORIES_KEY, this.categories);
    return true;
  }

  deleteCategory(id: number): boolean {
    const index = this.categories.findIndex(c => c.id === id);
    if (index === -1) return false;
    
    this.categories.splice(index, 1);
    this.saveToStorage(this.CATEGORIES_KEY, this.categories);
    return true;
  }

  // 链接相关方法
  addLink(categoryId: number, name: string, url: string, icon: string): boolean {
    const category = this.getCategoryById(categoryId);
    if (!category) return false;

    const newId = category.links.length ? 
      Math.max(...category.links.map(l => l.id)) + 1 : 1;

    category.links.push({
      id: newId,
      name,
      url,
      icon
    });
    
    this.saveToStorage(this.CATEGORIES_KEY, this.categories);
    return true;
  }

  updateLink(
    categoryId: number, 
    linkId: number, 
    data: Partial<{ name: string; url: string; icon: string; }>
  ): boolean {
    const category = this.getCategoryById(categoryId);
    if (!category) return false;

    const link = category.links.find(l => l.id === linkId);
    if (!link) return false;

    Object.assign(link, data);
    this.saveToStorage(this.CATEGORIES_KEY, this.categories);
    return true;
  }

  deleteLink(categoryId: number, linkId: number): boolean {
    const category = this.getCategoryById(categoryId);
    if (!category) return false;

    const index = category.links.findIndex(l => l.id === linkId);
    if (index === -1) return false;

    category.links.splice(index, 1);
    this.saveToStorage(this.CATEGORIES_KEY, this.categories);
    return true;
  }

  // 搜索引擎相关方法
  getSearchEngineById(id: string): SearchEngine | undefined {
    return this.engines.find(engine => engine.id === id);
  }

  addSearchEngine(id: string, name: string, url: string, icon: string): boolean {
    if (this.getSearchEngineById(id)) return false;
    
    this.engines.push({ id, name, url, icon });
    this.saveToStorage(this.ENGINES_KEY, this.engines);
    return true;
  }

  updateSearchEngine(
    id: string, 
    data: Partial<{ name: string; url: string; icon: string; }>
  ): boolean {
    const engine = this.getSearchEngineById(id);
    if (!engine) return false;

    Object.assign(engine, data);
    this.saveToStorage(this.ENGINES_KEY, this.engines);
    return true;
  }

  deleteSearchEngine(id: string): boolean {
    const index = this.engines.findIndex(e => e.id === id);
    if (index === -1) return false;
    
    this.engines.splice(index, 1);
    this.saveToStorage(this.ENGINES_KEY, this.engines);
    return true;
  }

  // 数据获取方法
  getAllCategories(): LinkCategory[] {
    return [...this.categories];
  }

  getAllSearchEngines(): SearchEngine[] {
    return [...this.engines];
  }

  // 工具方法
  clearStorage(): void {
    localStorage.removeItem(this.CATEGORIES_KEY);
    localStorage.removeItem(this.ENGINES_KEY);
  }

  resetToDefault(defaultCategories: LinkCategory[], defaultEngines: SearchEngine[]): void {
    this.categories = [...defaultCategories];
    this.engines = [...defaultEngines];
    this.saveToStorage(this.CATEGORIES_KEY, this.categories);
    this.saveToStorage(this.ENGINES_KEY, this.engines);
  }
}