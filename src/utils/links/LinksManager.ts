import { LinkCategory, SearchEngine } from '@/types';
import { SmartStorageManager } from '../../core/storage/SmartStorageManager';
import type { StorageType } from '../../core/storage/types';

const STORAGE_TYPE_KEY = 'app_storage_type';

export class LinksManager {
  private categories: LinkCategory[];
  private engines: SearchEngine[];
  private readonly CATEGORIES_KEY = 'turnip_link_categories';
  private readonly ENGINES_KEY = 'turnip_search_engines';
  private storage: SmartStorageManager;
  private initialized: boolean = false;
  private initPromise: Promise<void> | null = null;

  constructor(defaultCategories: LinkCategory[], defaultEngines: SearchEngine[]) {
    const preferredStorage = this.getPreferredStorageType();
    this.storage = new SmartStorageManager(preferredStorage);
    
    const storedCategories = this.getFromLocalStorage<LinkCategory[]>(this.CATEGORIES_KEY);
    const storedEngines = this.getFromLocalStorage<SearchEngine[]>(this.ENGINES_KEY);

    this.categories = storedCategories || [...defaultCategories];
    this.categories.sort((a, b) => a.id - b.id);
    this.categories.forEach((category) => {
      category.links.sort((a, b) => a.id - b.id);
    });
    this.engines = storedEngines || [...defaultEngines];

    if (!storedCategories) {
      this.saveToLocalStorage(this.CATEGORIES_KEY, this.categories);
    }
    if (!storedEngines) {
      this.saveToLocalStorage(this.ENGINES_KEY, this.engines);
    }
    
    this.initPromise = this.initialize();
  }

  private getPreferredStorageType(): StorageType {
    try {
      const saved = localStorage.getItem(STORAGE_TYPE_KEY);
      if (saved === 'localStorage' || saved === 'indexedDB' || saved === 'auto') {
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

  async initialize(): Promise<void> {
    if (this.initialized) return;
    
    try {
      const [storedCategories, storedEngines] = await Promise.all([
        this.storage.get<LinkCategory[]>(this.CATEGORIES_KEY),
        this.storage.get<SearchEngine[]>(this.ENGINES_KEY)
      ]);
      
      if (storedCategories) {
        this.categories = storedCategories;
        this.categories.sort((a, b) => a.id - b.id);
        
        // 数据迁移：为现有链接添加 originalCategoryId 属性
        let needsMigration = false;
        this.categories.forEach((category) => {
          category.links.forEach((link) => {
            if (link.originalCategoryId === undefined) {
              link.originalCategoryId = category.id;
              needsMigration = true;
            }
          });
          category.links.sort((a, b) => a.id - b.id);
        });
        
        // 如果需要迁移，保存更新后的数据
        if (needsMigration) {
          this.saveSync(this.CATEGORIES_KEY, this.categories);
        }
      }
      
      if (storedEngines) {
        this.engines = storedEngines;
      }
      
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize LinksManager:', error);
      this.initialized = true;
    }
  }

  async waitForInit(): Promise<void> {
    if (this.initPromise) {
      await this.initPromise;
    }
  }

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
    this.saveSync(this.CATEGORIES_KEY, this.categories);
    return newCategory;
  }

  updateCategory(id: number, name: string): boolean {
    const category = this.getCategoryById(id);
    if (!category) return false;
    
    category.name = name;
    this.saveSync(this.CATEGORIES_KEY, this.categories);
    return true;
  }

  deleteCategory(id: number): boolean {
    const index = this.categories.findIndex(c => c.id === id);
    if (index === -1) return false;
    
    this.categories.splice(index, 1);
    this.saveSync(this.CATEGORIES_KEY, this.categories);
    return true;
  }

  addLink(categoryId: number, name: string, url: string, icon: string): boolean {
    const category = this.getCategoryById(categoryId);
    if (!category) return false;

    const newId = category.links.length ? 
      Math.max(...category.links.map(l => l.id)) + 1 : 1;

    category.links.push({
      id: newId,
      name,
      url,
      icon,
      originalCategoryId: categoryId
    });
    
    this.saveSync(this.CATEGORIES_KEY, this.categories);
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
    this.saveSync(this.CATEGORIES_KEY, this.categories);
    return true;
  }

  deleteLink(categoryId: number, linkId: number): boolean {
    const category = this.getCategoryById(categoryId);
    if (!category) return false;

    const index = category.links.findIndex(l => l.id === linkId);
    if (index === -1) return false;

    category.links.splice(index, 1);
    this.saveSync(this.CATEGORIES_KEY, this.categories);
    return true;
  }

  // 切换链接的收藏状态
  toggleFavorite(categoryId: number, linkId: number): boolean {
    const category = this.getCategoryById(categoryId);
    if (!category) return false;

    const link = category.links.find(l => l.id === linkId);
    if (!link) return false;

    link.favorite = !link.favorite;
    this.saveSync(this.CATEGORIES_KEY, this.categories);
    return true;
  }

  // 获取所有收藏的链接
  getFavoriteLinks(): { categoryId: number; link: Link }[] {
    const favorites: { categoryId: number; link: Link }[] = [];
    this.categories.forEach(category => {
      category.links.forEach(link => {
        if (link.favorite) {
          favorites.push({ categoryId: category.id, link });
        }
      });
    });
    return favorites;
  }

  getSearchEngineById(id: string): SearchEngine | undefined {
    return this.engines.find(engine => engine.id === id);
  }

  addSearchEngine(id: string, name: string, url: string, icon: string): boolean {
    if (this.getSearchEngineById(id)) return false;
    
    this.engines.push({ id, name, url, icon });
    this.saveSync(this.ENGINES_KEY, this.engines);
    return true;
  }

  updateSearchEngine(
    id: string, 
    data: Partial<{ name: string; url: string; icon: string; }>
  ): boolean {
    const engine = this.getSearchEngineById(id);
    if (!engine) return false;

    Object.assign(engine, data);
    this.saveSync(this.ENGINES_KEY, this.engines);
    return true;
  }

  deleteSearchEngine(id: string): boolean {
    const index = this.engines.findIndex(e => e.id === id);
    if (index === -1) return false;
    
    this.engines.splice(index, 1);
    this.saveSync(this.ENGINES_KEY, this.engines);
    return true;
  }

  getAllCategories(): LinkCategory[] {
    return [...this.categories];
  }

  getAllSearchEngines(): SearchEngine[] {
    return [...this.engines];
  }

  async clearStorage(): Promise<void> {
    localStorage.removeItem(this.CATEGORIES_KEY);
    localStorage.removeItem(this.ENGINES_KEY);
    await Promise.all([
      this.storage.remove(this.CATEGORIES_KEY),
      this.storage.remove(this.ENGINES_KEY)
    ]);
  }

  resetToDefault(defaultCategories: LinkCategory[], defaultEngines: SearchEngine[]): void {
    this.categories = [...defaultCategories];
    this.engines = [...defaultEngines];
    this.saveSync(this.CATEGORIES_KEY, this.categories);
    this.saveSync(this.ENGINES_KEY, this.engines);
  }
}
