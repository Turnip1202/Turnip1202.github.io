import type { StorageAdapter, StorageConfig } from './types';

const DB_NAME = 'AppStorageDB';
const STORE_NAME = 'configStore';
const DB_VERSION = 1;

export class IndexedDBAdapter implements StorageAdapter {
  readonly name = 'indexedDB';
  private prefix: string;
  private db: IDBDatabase | null = null;
  private dbPromise: Promise<IDBDatabase> | null = null;

  constructor(config: StorageConfig = {}) {
    this.prefix = config.prefix || 'app_';
  }

  get isAvailable(): boolean {
    return typeof indexedDB !== 'undefined';
  }

  private getFullKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  private async getDB(): Promise<IDBDatabase> {
    if (this.db) return this.db;
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => {
        console.error('[IndexedDBAdapter] Failed to open database:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'key' });
        }
      };
    });

    return this.dbPromise;
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const db = await this.getDB();
      const fullKey = this.getFullKey(key);

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(fullKey);

        request.onsuccess = () => {
          const result = request.result;
          resolve(result ? result.value : null);
        };

        request.onerror = () => {
          console.error(`[IndexedDBAdapter] Failed to get key "${key}":`, request.error);
          reject(request.error);
        };
      });
    } catch (error) {
      console.error(`[IndexedDBAdapter] Failed to get key "${key}":`, error);
      return null;
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    try {
      const db = await this.getDB();
      const fullKey = this.getFullKey(key);

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put({ key: fullKey, value });

        request.onsuccess = () => resolve();
        request.onerror = () => {
          console.error(`[IndexedDBAdapter] Failed to set key "${key}":`, request.error);
          reject(request.error);
        };
      });
    } catch (error) {
      console.error(`[IndexedDBAdapter] Failed to set key "${key}":`, error);
      throw error;
    }
  }

  async remove(key: string): Promise<void> {
    try {
      const db = await this.getDB();
      const fullKey = this.getFullKey(key);

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.delete(fullKey);

        request.onsuccess = () => resolve();
        request.onerror = () => {
          console.error(`[IndexedDBAdapter] Failed to remove key "${key}":`, request.error);
          reject(request.error);
        };
      });
    } catch (error) {
      console.error(`[IndexedDBAdapter] Failed to remove key "${key}":`, error);
      throw error;
    }
  }

  async clear(): Promise<void> {
    try {
      const db = await this.getDB();

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.clear();

        request.onsuccess = () => resolve();
        request.onerror = () => {
          console.error('[IndexedDBAdapter] Failed to clear:', request.error);
          reject(request.error);
        };
      });
    } catch (error) {
      console.error('[IndexedDBAdapter] Failed to clear:', error);
      throw error;
    }
  }

  async keys(): Promise<string[]> {
    try {
      const db = await this.getDB();

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAllKeys();

        request.onsuccess = () => {
          const allKeys = request.result as string[];
          const keys = allKeys
            .filter(key => key.startsWith(this.prefix))
            .map(key => key.slice(this.prefix.length));
          resolve(keys);
        };

        request.onerror = () => {
          console.error('[IndexedDBAdapter] Failed to get keys:', request.error);
          reject(request.error);
        };
      });
    } catch (error) {
      console.error('[IndexedDBAdapter] Failed to get keys:', error);
      return [];
    }
  }

  async has(key: string): Promise<boolean> {
    const value = await this.get(key);
    return value !== null;
  }

  async getSize(key: string): Promise<number> {
    try {
      const db = await this.getDB();
      const fullKey = this.getFullKey(key);

      return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(fullKey);

        request.onsuccess = () => {
          const result = request.result;
          if (result) {
            const size = new Blob([JSON.stringify(result.value)]).size;
            resolve(size);
          } else {
            resolve(0);
          }
        };

        request.onerror = () => {
          console.error(`[IndexedDBAdapter] Failed to get size for key "${key}":`, request.error);
          reject(request.error);
        };
      });
    } catch (error) {
      console.error(`[IndexedDBAdapter] Failed to get size for key "${key}":`, error);
      return 0;
    }
  }
}
