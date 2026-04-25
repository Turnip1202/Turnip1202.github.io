export * from './theme';
export * from './admin';
export * from './version';
import type { ThemeConfigType } from './theme';
// 定义所有需要用到的类型
export interface Link {
  id: number;
  name: string;
  url: string;
  icon: string;
  favorite?: boolean;
  originalCategoryId?: number;
}

export interface LinkCategory {
  id: number;
  name: string;
  links: Link[];
}

export interface SearchEngine {
  id: string;
  name: string;
  url: string;
  icon?: string;
}

export interface BackgroundProps {
  theme?: ThemeConfigType;
}

export interface ISiteConfig {
  title: string;
  copyright: {
    text: string;
  };
  [key: string]: any; // 允许添加其他配置项
}

// 待办相关类型
export type TodoPriority = 'high' | 'medium' | 'low';
export type TodoCategory = 'work' | 'life' | 'study';

export interface TodoItem {
  id: number;
  content: string;
  priority: TodoPriority;
  category: TodoCategory;
  dueDate?: string; // ISO date string
  createdAt: string; // ISO date string
  completed: boolean;
  order: number; // 用于排序
}

export interface TodoState {
  todos: TodoItem[];
  currentCategory: TodoCategory | 'all';
  panelPosition: {
    x: number;
    y: number;
  };
  panelDocked: boolean;
  panelDockPosition: 'left' | 'right' | 'top' | null;
  panelCollapsed: boolean;
  panelVisible: boolean;
}
