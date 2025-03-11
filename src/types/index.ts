export * from "./theme"
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



export interface ISiteConfig {
  title: string;
  copyright: {
    text: string;
  };
  [key: string]: any; // 允许添加其他配置项
}