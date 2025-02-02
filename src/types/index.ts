// 定义所有需要用到的类型
export interface Link {
    id: number;
    name: string;
    url: string;
    icon: string;
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