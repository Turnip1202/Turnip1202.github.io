import type { LinkCategory, SearchEngine } from '../types';

export const linkCategories: LinkCategory[] = [
  {
    id: 0,
    name: "影音视频",
    links: [
                {
                  "id": 1,
                  "name": "爱奇艺",
                  "url": "https://www.iqiyi.com/",
                  "icon": "🎬"
                },
                {
                  "id": 2,
                  "name": "优酷",
                  "url": "https://www.youku.com/",
                  "icon": "🎬"
                },
                {
                  "id": 3,
                  "name": "腾讯视频",
                  "url": "https://v.qq.com/",
                  "icon": "🐧"
                },
                {
                  "id": 4,
                  "name": "哔哩哔哩",
                  "url": "https://www.bilibili.com/",
                  "icon": "bilibili"
                },
                {
                  "id": 5,
                  "name": "抖音",
                  "url": "https://www.douyin.com/",
                  "icon": "🎵"
                }
    ]
  },
  {
    id: -1,
    name: "Turnip",
    links: [
      { id: 1, name: "Turnip博客", url: "https://turnip1202.github.io/my-blog-astro/", icon: "🥕" },
      { id: 2, name: "GitHub", url: "https://github.com/Turnip1202", icon: "⭐" },      // 替代：使用星星图标
      { id: 3, name: "稀土掘金", url: "https://juejin.cn/user/1684912023022440", icon: "🔨" },         // 替代：使用工具图标
      { id: 4, name: "哔哩哔哩", url: "https://b23.tv/zpySzz9", icon: "🎮" },      // 替代：使用游戏图标
      { id: 5, name: "抖音", url: "https://v.douyin.com/if78aSq9/", icon: "🎬" } ,         // 替代：使用电影图标
      { id: 6, name: "react-study", url: "https://turnip1202.github.io/react-study", icon: "📋" },          // 替代：使用电影图标
      { id: 7, name: "ToDo-List", url: "https://turnip1202.github.io/react18-todo", icon: "📝" }          // 替代：使用电影图标
    ]
  },
  {
    id: 2,
    name: "开发工具",
    links: [
      { id: 1, name: "GitHub", url: "https://github.com", icon: "🐙" },
      { id: 2, name: "VS Code", url: "https://code.visualstudio.com", icon: "📝" },
      { id: 3, name: "Stack Overflow", url: "https://stackoverflow.com", icon: "💡" },
    ]
  },
  {
    id: 3,
    name: "学习资源",
    links: [
      { id: 4, name: "TypeScript", url: "https://www.typescriptlang.org", icon: "📘" },
      { id: 5, name: "React Docs", url: "https://reactjs.org", icon: "⚛️" },
      { id: 6, name: "掘金", url: "https://juejin.cn", icon: "🎯" },
    ]
  }
];

export const searchEngines: SearchEngine[] = [
  { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=', icon: '🔎' },
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=', icon: '🔍' },
  { id: 'baidu', name: '百度', url: 'https://www.baidu.com/s?wd=', icon: '🔍' },
];