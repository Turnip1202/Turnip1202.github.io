import type { StorageAdapter, StorageType } from './types';
import { LocalStorageAdapter } from './LocalStorageAdapter';
import { IndexedDBAdapter } from './IndexedDBAdapter';

const SMALL_DATA_THRESHOLD = 1024 * 100; // 100KB
const LOCAL_STORAGE_QUOTA = 1024 * 1024 * 5; // 5MB (typical localStorage limit)

export class SmartStorageManager implements StorageAdapter {
  readonly name = 'smartStorage';
  
  private localStorage: LocalStorageAdapter;
  private indexedDB: IndexedDBAdapter;
  private preferredStorage: StorageType;

  constructor(preferredStorage: StorageType = 'auto') {
    this.localStorage = new LocalStorageAdapter();
    this.indexedDB = new IndexedDBAdapter();
    this.preferredStorage = preferredStorage;
  }

  get isAvailable(): boolean {
    return this.localStorage.isAvailable || this.indexedDB.isAvailable;
  }

  private selectAdapter(dataSize?: number): StorageAdapter {
    if (this.preferredStorage === 'localStorage') {
      return this.localStorage;
    }
    
    if (this.preferredStorage === 'indexedDB') {
      return this.indexedDB;
    }

    // Auto mode: select based on data size and availability
    if (!this.indexedDB.isAvailable) {
      return this.localStorage;
    }

    if (!this.localStorage.isAvailable) {
      return this.indexedDB;
    }

    if (dataSize !== undefined && dataSize > SMALL_DATA_THRESHOLD) {
      return this.indexedDB;
    }

    return this.localStorage;
  }

  private estimateSize<T>(value: T): number {
    try {
      return new Blob([JSON.stringify(value)]).size;
    } catch {
      return 0;
    }
  }

  async get<T>(key: string): Promise<T | null> {
    // Try localStorage first for small data
    let result = await this.localStorage.get<T>(key);
    if (result !== null) return result;

    // Fall back to IndexedDB
    return await this.indexedDB.get<T>(key);
  }

  async set<T>(key: string, value: T): Promise<void> {
    const size = this.estimateSize(value);
    const adapter = this.selectAdapter(size);
    
    // If using IndexedDB, remove from localStorage to avoid duplication
    if (adapter === this.indexedDB) {
      await this.localStorage.remove(key);
    } else {
      // If using localStorage, remove from IndexedDB
      await this.indexedDB.remove(key);
    }

    await adapter.set(key, value);
  }

  async remove(key: string): Promise<void> {
    await Promise.all([
      this.localStorage.remove(key),
      this.indexedDB.remove(key)
    ]);
  }

  async clear(): Promise<void> {
    await Promise.all([
      this.localStorage.clear(),
      this.indexedDB.clear()
    ]);
  }

  async clearLocalStorage(): Promise<void> {
    await this.localStorage.clear();
  }

  async clearIndexedDB(): Promise<void> {
    await this.indexedDB.clear();
  }

  async keys(): Promise<string[]> {
    const [localKeys, indexedDBKeys] = await Promise.all([
      this.localStorage.keys(),
      this.indexedDB.keys()
    ]);
    
    return [...new Set([...localKeys, ...indexedDBKeys])];
  }

  async has(key: string): Promise<boolean> {
    const [inLocal, inIndexedDB] = await Promise.all([
      this.localStorage.has(key),
      this.indexedDB.has(key)
    ]);
    
    return inLocal || inIndexedDB;
  }

  async getSize(key: string): Promise<number> {
    const [localSize, indexedDBSize] = await Promise.all([
      this.localStorage.getSize(key),
      this.indexedDB.getSize(key)
    ]);
    
    return Math.max(localSize || 0, indexedDBSize || 0);
  }

  // Migration helpers
  async migrateToIndexedDB(key: string): Promise<boolean> {
    const value = await this.localStorage.get(key);
    if (value === null) return false;

    await this.indexedDB.set(key, value);
    await this.localStorage.remove(key);
    return true;
  }

  async migrateToLocalStorage(key: string): Promise<boolean> {
    const value = await this.indexedDB.get(key);
    if (value === null) return false;

    const size = this.estimateSize(value);
    if (size > LOCAL_STORAGE_QUOTA) {
      console.warn(`[SmartStorageManager] Data too large for localStorage: ${size} bytes`);
      return false;
    }

    await this.localStorage.set(key, value);
    await this.indexedDB.remove(key);
    return true;
  }

  // Get storage statistics
  async getStats(): Promise<{
    localStorageKeys: number;
    indexedDBKeys: number;
    totalKeys: number;
    localStorageSize: number;
    indexedDBSize: number;
  }> {
    const [localKeys, indexedDBKeys] = await Promise.all([
      this.localStorage.keys(),
      this.indexedDB.keys()
    ]);

    let localStorageSize = 0;
    let indexedDBSize = 0;

    for (const key of localKeys) {
      localStorageSize += await this.localStorage.getSize(key) || 0;
    }

    for (const key of indexedDBKeys) {
      indexedDBSize += await this.indexedDB.getSize(key) || 0;
    }

    return {
      localStorageKeys: localKeys.length,
      indexedDBKeys: indexedDBKeys.length,
      totalKeys: localKeys.length + indexedDBKeys.length,
      localStorageSize,
      indexedDBSize,
    };
  }
}
