export interface ConfigValidationRule<T = any> {
  type: 'required' | 'type' | 'range' | 'pattern' | 'custom';
  value?: any;
  message?: string;
  validator?: (value: T) => boolean;
}

export interface ConfigItemDefinition<T = any> {
  key: string;
  defaultValue: T;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  category: string;
  description?: string;
  validation?: ConfigValidationRule<T>[];
  version?: string;
}

export interface ConfigExportData {
  version: string;
  exportedAt: string;
  config: Record<string, any>;
  metadata?: {
    appName?: string;
    appVersion?: string;
  };
}
