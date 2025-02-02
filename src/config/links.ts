import type { LinkCategory, SearchEngine } from '../types';

export const linkCategories: LinkCategory[] = [
  {
    id: 0,
    name: "Turnip",
    links: [
      { id: 1, name: "Turnip's Blog", url: "https://turnip1202.github.io/my-blog-astro/", icon: "🥕" },
    ]
  },
  {
    id: 1,
    name: "开发工具",
    links: [
      { id: 1, name: "GitHub", url: "https://github.com", icon: "🐙" },
      { id: 2, name: "VS Code", url: "https://code.visualstudio.com", icon: "📝" },
      { id: 3, name: "Stack Overflow", url: "https://stackoverflow.com", icon: "💡" },
    ]
  },
  {
    id: 2,
    name: "学习资源",
    links: [
      { id: 4, name: "TypeScript", url: "https://www.typescriptlang.org", icon: "📘" },
      { id: 5, name: "React Docs", url: "https://reactjs.org", icon: "⚛️" },
      { id: 6, name: "掘金", url: "https://juejin.cn", icon: "🎯" },
    ]
  }
];

export const searchEngines: SearchEngine[] = [
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=', icon: '🔍' },
  { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=', icon: '🔎' },
  { id: 'baidu', name: '百度', url: 'https://www.baidu.com/s?wd=', icon: '🔍' },
];