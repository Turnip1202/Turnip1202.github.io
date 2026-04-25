export interface StorageAdapter {
  readonly name: string;
  readonly isAvailable: boolean;

  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<void>;
  remove(key: string): Promise<void>;
  clear(): Promise<void>;
  keys(): Promise<string[]>;
  has(key: string): Promise<boolean>;
  getSize?(key: string): Promise<number>;
}

export interface StorageConfig {
  prefix?: string;
  maxSize?: number;
}

export type StorageType = 'localStorage' | 'indexedDB' | 'auto';

export interface MigrationRecord {
  version: string;
  timestamp: number;
  changes: string[];
}

export interface StorageMetadata {
  version: string;
  createdAt: number;
  updatedAt: number;
  size: number;
  migrations?: MigrationRecord[];
}
