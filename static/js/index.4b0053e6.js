(()=>{"use strict";var e,t,i,r,n,s,a={699:function(e,t,i){var r=i(5813),n=i(9729),s=i(4066),a=i(322),l=i(5453);let o=l.A.div`
  margin: 2rem auto 3rem;
  max-width: 700px;
  width: 100%;
  
  /* 添加入场动画 */
  animation: searchFadeIn 0.8s ease-out 0.3s both;
  
  @keyframes searchFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    margin: 1.5rem auto 2.5rem;
  }
`,d=l.A.form`
  display: flex;
  gap: 12px;
  width: 100%;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`,c=l.A.input`
  flex: 1;
  padding: 15px 24px;
  font-size: 16px;
  border: 2px solid ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.1)"};
  border-radius: 30px;
  outline: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-appearance: none;
  appearance: none;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.1)":"rgba(255, 255, 255, 0.9)"};
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#333333"};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  min-width: 0; /* 防止flex子元素收缩问题 */

  &:focus {
    border-color: #4a90e2;
    background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.15)":"white"};
    box-shadow: 
      0 0 0 4px rgba(74, 144, 226, 0.15),
      0 8px 24px rgba(74, 144, 226, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.4)"};
  }

  @media (max-width: 768px) {
    padding: 14px 20px;
    font-size: 16px; /* 防止 iOS 缩放 */
    border-radius: 25px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 18px;
    border-radius: 20px;
  }
`,h=l.A.div`
  position: relative;
  display: inline-block;
  min-width: 140px;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#666666"};
  
  /* 箭头指示器 */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid currentColor;
    pointer-events: none;
    transition: all 0.2s ease;
    z-index: 1;
  }
  
  &:hover {
    color: #4a90e2;
  }
  
  @media (max-width: 768px) {
    min-width: 120px;
    
    &::after {
      right: 14px;
      border-left-width: 4px;
      border-right-width: 4px;
      border-top-width: 5px;
    }
  }
  
  @media (max-width: 480px) {
    min-width: 110px;
    
    &::after {
      right: 12px;
    }
  }
`,x=l.A.select`
  width: 100%;
  padding: 15px 45px 15px 20px;
  border: 2px solid ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.1)"};
  border-radius: 30px;
  background-color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.1)":"rgba(255, 255, 255, 0.9)"};
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#333333"};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  &:hover {
    border-color: #4a90e2;
    background-color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.15)":"white"};
    transform: translateY(-1px);
  }

  &:focus {
    border-color: #4a90e2;
    background-color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.15)":"white"};
    box-shadow: 
      0 0 0 4px rgba(74, 144, 226, 0.15),
      0 8px 24px rgba(74, 144, 226, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 14px 40px 14px 18px;
    font-size: 0.875rem;
    border-radius: 25px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 36px 12px 16px;
    font-size: 0.8rem;
    border-radius: 20px;
  }
`,p=l.A.button`
  padding: 15px 32px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  box-shadow: 
    0 4px 12px rgba(74, 144, 226, 0.3),
    0 2px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  min-width: 100px;
  
  /* 添加光泽效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    background: linear-gradient(135deg, #357abd 0%, #2868a3 100%);
    transform: translateY(-2px);
    box-shadow: 
      0 8px 24px rgba(74, 144, 226, 0.4),
      0 4px 12px rgba(0, 0, 0, 0.15);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 0.9rem;
    border-radius: 25px;
    min-width: 90px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 0.85rem;
    border-radius: 20px;
    min-width: 80px;
  }
`,g=e=>{let{searchEngines:t}=e,[i,s]=(0,n.useState)(""),[a,l]=(0,n.useState)(t[0].id);return(0,r.jsx)(o,{children:(0,r.jsxs)(d,{onSubmit:e=>{if(e.preventDefault(),!i.trim())return;let r=t.find(e=>e.id===a);r&&window.open(r.url+encodeURIComponent(i),"_blank")},children:[(0,r.jsx)(c,{type:"text",value:i,onChange:e=>s(e.target.value),placeholder:"输入搜索内容..."}),(0,r.jsx)(h,{children:(0,r.jsx)(x,{value:a,onChange:e=>l(e.target.value),children:t.map(e=>(0,r.jsxs)("option",{value:e.id,children:[e.icon," ",e.name]},e.id))})}),(0,r.jsx)(p,{type:"submit",children:"搜索"})]})})},m=l.A.section`
  margin: 2.5rem 0;
  padding: 0;
  background: transparent;
  border-radius: 16px;
  
  /* 添加入场动画 */
  animation: categoryFadeIn 0.8s ease-out both;
  
  @keyframes categoryFadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* 逐个延迟动画 */
  &:nth-of-type(1) { animation-delay: 0.5s; }
  &:nth-of-type(2) { animation-delay: 0.6s; }
  &:nth-of-type(3) { animation-delay: 0.7s; }
  &:nth-of-type(4) { animation-delay: 0.8s; }
  &:nth-of-type(n+5) { animation-delay: 0.9s; }
`,u=l.A.h2`
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1rem;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.6)"};
  border-radius: 12px;
  border-left: 4px solid #4a90e2;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  
  /* 添加微妙的反光效果 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1)
    );
    border-radius: 0 12px 12px 0;
  }
`,f=l.A.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.25rem;
  margin-top: 0.5rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1rem;
    padding: 0 0.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.75rem;
    padding: 0;
  }
`,j=l.A.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.8)"};
  border-radius: 16px;
  text-decoration: none;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#333333"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.1)":"rgba(255, 255, 255, 0.3)"};
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  min-height: 120px;
  
  /* 添加微妙的背景效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(74, 144, 226, 0.02) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"0 12px 32px rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)":"0 12px 32px rgba(74, 144, 226, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)"};
    background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.12)":"rgba(255, 255, 255, 0.95)"};
    border-color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.2)":"rgba(74, 144, 226, 0.2)"};
    color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
    
    &::before {
      opacity: 1;
    }
    
    /* 悬停时的图标和文字效果 */
    span:first-of-type {
      transform: scale(1.1);
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
    }
    
    span:last-of-type {
      color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
      font-weight: 600;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.01);
  }
`,y=l.A.span`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  display: block;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
`,b=l.A.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.9)":"#555555"};
  text-align: center;
  line-height: 1.4;
  transition: all 0.3s ease;
`,A=e=>{let{categories:t}=e;return(0,r.jsx)(r.Fragment,{children:t.map(e=>(0,r.jsxs)(m,{children:[(0,r.jsx)(u,{children:e.name}),(0,r.jsx)(f,{children:e.links.map(e=>(0,r.jsxs)(j,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)(y,{children:e.icon}),(0,r.jsx)(b,{children:e.name})]},e.id))})]},e.id))})},v=l.A.div`
  min-height: 100vh;
  position: relative;
  padding: 2rem;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.theme.backgroundImage};
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    z-index: -2;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"0.1":"0.3"});
    backdrop-filter: blur(${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"5px":"8px"});
    -webkit-backdrop-filter: blur(${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"5px":"8px"});
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;var k=i(7925);class w{getConfig(){return this.config}getDefaultTheme(){return this.config.default}getPresets(){return this.config.presets}setDefaultTheme(e){this.config.default=e,this.saveToStorage()}addPreset(e){if(this.config.presets.some(t=>t.id===e.id))throw Error(`Theme with id ${e.id} already exists`);this.config.presets.push(e),this.saveToStorage()}updatePreset(e){let t=this.config.presets.findIndex(t=>t.id===e.id);if(-1===t)throw Error(`Theme with id ${e.id} not found`);this.config.presets[t]=e,this.saveToStorage()}deletePreset(e){let t=this.config.presets.findIndex(t=>t.id===e);if(-1===t)throw Error(`Theme with id ${e} not found`);this.config.presets.splice(t,1),this.saveToStorage()}findThemeById(e){return this.config.default.id===e?this.config.default:this.config.presets.find(t=>t.id===e)}loadFromStorage(){try{let e=localStorage.getItem(w.STORAGE_KEY);return e?JSON.parse(e):null}catch(e){return console.error("Failed to load theme config from storage:",e),null}}saveToStorage(){try{localStorage.setItem(w.STORAGE_KEY,JSON.stringify(this.config))}catch(e){console.error("Failed to save theme config to storage:",e)}}clearStorage(){localStorage.removeItem(w.STORAGE_KEY)}resetToDefault(e){this.config={...e},this.saveToStorage()}constructor(e){(0,k._)(this,"config",void 0),this.config=this.loadFromStorage()||e||{default:{id:"default",name:"默认主题",backgroundImage:"linear-gradient(120deg, #f6d365 0%, #fda085 100%)",blur:"10px",opacity:.95},presets:[]},this.saveToStorage()}}(0,k._)(w,"STORAGE_KEY","turnip-theme-config");let S={default:{id:"morning",name:"晨光蓝",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",blur:"10px",opacity:.95},presets:[{id:"purple",name:"渐变紫",backgroundImage:"linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",blur:"10px",opacity:.95},{id:"morning",name:"晨光蓝",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",blur:"10px",opacity:.95},{id:"night",name:"夜空",backgroundImage:"linear-gradient(to right, #243949 0%, #517fa4 100%)",blur:"10px",opacity:.92}]},I=new w(S),C=[{id:0,name:"影音视频",links:[{id:1,name:"",url:"https://www.iqiyi.com/",icon:"爱奇艺"},{id:2,name:"",url:"https://www.youku.com/",icon:"优酷"},{id:3,name:"",url:"https://v.qq.com/",icon:"\uD83D\uDC27视频"},{id:4,name:"",url:"https://www.bilibili.com/",icon:"B站"},{id:5,name:"",url:"https://www.douyin.com/",icon:"抖音"}]},{id:-1,name:"Turnip",links:[{id:1,name:"Turnip博客",url:"https://turnip1202.github.io/my-blog-astro/",icon:"\uD83E\uDD55"},{id:2,name:"GitHub",url:"https://github.com/Turnip1202",icon:"⭐"},{id:3,name:"稀土掘金",url:"https://juejin.cn/user/1684912023022440",icon:"\uD83D\uDD28"},{id:4,name:"哔哩哔哩",url:"https://b23.tv/zpySzz9",icon:"\uD83C\uDFAE"},{id:5,name:"抖音",url:"https://v.douyin.com/if78aSq9/",icon:"\uD83C\uDFAC"}]},{id:2,name:"开发工具",links:[{id:1,name:"GitHub",url:"https://github.com",icon:"\uD83D\uDC19"},{id:2,name:"VS Code",url:"https://code.visualstudio.com",icon:"\uD83D\uDCDD"},{id:3,name:"Stack Overflow",url:"https://stackoverflow.com",icon:"\uD83D\uDCA1"}]},{id:3,name:"学习资源",links:[{id:4,name:"TypeScript",url:"https://www.typescriptlang.org",icon:"\uD83D\uDCD8"},{id:5,name:"React Docs",url:"https://reactjs.org",icon:"⚛️"},{id:6,name:"掘金",url:"https://juejin.cn",icon:"\uD83C\uDFAF"}]}],T=[{id:"bing",name:"Bing",url:"https://www.bing.com/search?q=",icon:"\uD83D\uDD0E"},{id:"google",name:"Google",url:"https://www.google.com/search?q=",icon:"\uD83D\uDD0D"},{id:"baidu",name:"百度",url:"https://www.baidu.com/s?wd=",icon:"\uD83D\uDD0D"}],z=new class{getFromStorage(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(e){return console.error(`Error reading from localStorage: ${e}`),null}}saveToStorage(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(`Error saving to localStorage: ${e}`)}}getCategoryById(e){return this.categories.find(t=>t.id===e)}addCategory(e){let t={id:this.categories.length?Math.max(...this.categories.map(e=>e.id))+1:0,name:e,links:[]};return this.categories.push(t),this.saveToStorage(this.CATEGORIES_KEY,this.categories),t}updateCategory(e,t){let i=this.getCategoryById(e);return!!i&&(i.name=t,this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0)}deleteCategory(e){let t=this.categories.findIndex(t=>t.id===e);return -1!==t&&(this.categories.splice(t,1),this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0)}addLink(e,t,i,r){let n=this.getCategoryById(e);if(!n)return!1;let s=n.links.length?Math.max(...n.links.map(e=>e.id))+1:1;return n.links.push({id:s,name:t,url:i,icon:r}),this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0}updateLink(e,t,i){let r=this.getCategoryById(e);if(!r)return!1;let n=r.links.find(e=>e.id===t);return!!n&&(Object.assign(n,i),this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0)}deleteLink(e,t){let i=this.getCategoryById(e);if(!i)return!1;let r=i.links.findIndex(e=>e.id===t);return -1!==r&&(i.links.splice(r,1),this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0)}getSearchEngineById(e){return this.engines.find(t=>t.id===e)}addSearchEngine(e,t,i,r){return!this.getSearchEngineById(e)&&(this.engines.push({id:e,name:t,url:i,icon:r}),this.saveToStorage(this.ENGINES_KEY,this.engines),!0)}updateSearchEngine(e,t){let i=this.getSearchEngineById(e);return!!i&&(Object.assign(i,t),this.saveToStorage(this.ENGINES_KEY,this.engines),!0)}deleteSearchEngine(e){let t=this.engines.findIndex(t=>t.id===e);return -1!==t&&(this.engines.splice(t,1),this.saveToStorage(this.ENGINES_KEY,this.engines),!0)}getAllCategories(){return[...this.categories]}getAllSearchEngines(){return[...this.engines]}clearStorage(){localStorage.removeItem(this.CATEGORIES_KEY),localStorage.removeItem(this.ENGINES_KEY)}resetToDefault(e,t){this.categories=[...e],this.engines=[...t],this.saveToStorage(this.CATEGORIES_KEY,this.categories),this.saveToStorage(this.ENGINES_KEY,this.engines)}constructor(e,t){(0,k._)(this,"categories",void 0),(0,k._)(this,"engines",void 0),(0,k._)(this,"CATEGORIES_KEY","turnip_link_categories"),(0,k._)(this,"ENGINES_KEY","turnip_search_engines");const i=this.getFromStorage(this.CATEGORIES_KEY),r=this.getFromStorage(this.ENGINES_KEY);this.categories=i||[...e],this.categories.sort((e,t)=>e.id-t.id),this.categories.forEach(e=>{e.links.sort((e,t)=>e.id-t.id)}),this.engines=r||[...t],i||this.saveToStorage(this.CATEGORIES_KEY,this.categories),r||this.saveToStorage(this.ENGINES_KEY,this.engines)}}(C,T),E={title:"Turnip起始页",copyright:{text:`\xa9 ${new Date().getFullYear()} Turnip1202. All rights reserved.`}},D=new class{getFromStorage(){try{let e=localStorage.getItem(this.STORAGE_KEY);return e?JSON.parse(e):null}catch(e){return console.error(`读取本地存储出错: ${e}`),null}}applyConfigToDOM(){this.config.title&&(document.title=this.config.title),this.config.favicon&&this.updateFavicon(this.config.favicon)}saveToStorage(){try{localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.config))}catch(e){console.error(`保存到本地存储出错: ${e}`)}}getConfig(){return{...this.config}}updateTitle(e){this.config.title=e,this.saveToStorage(),document.title=e}updateCopyright(e){this.config.copyright.text=e,this.saveToStorage()}addConfigItem(e,t){this.config[e]=t,this.saveToStorage(),"favicon"===e&&t&&this.updateFavicon(t)}updateFavicon(e){if(!e)return;document.querySelectorAll('link[rel*="icon"]').forEach(e=>e.remove());let t=document.createElement("link");t.rel="shortcut icon",t.type="image/x-icon",t.href=e,document.head.appendChild(t);let i=document.createElement("link");i.rel="icon",i.type="image/x-icon",i.href=e,document.head.appendChild(i)}deleteConfigItem(e){return"title"!==e&&"copyright"!==e&&e in this.config&&(delete this.config[e],this.saveToStorage(),!0)}resetToDefault(e){this.config={...e},this.saveToStorage()}clearStorage(){localStorage.removeItem(this.STORAGE_KEY)}constructor(e){(0,k._)(this,"config",void 0),(0,k._)(this,"STORAGE_KEY","turnip_site_config");const t=this.getFromStorage();this.config=t||{...e},t||this.saveToStorage(),this.applyConfigToDOM()}}(E),O=l.A.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.9);
  padding: 12px;
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.15),
    0 2px 16px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: ${e=>e.isVisible?"flex":"none"};
  flex-direction: column;
  gap: 8px;
  min-width: auto;
  z-index: 1000;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 14px;
  }
`,$=l.A.button`
  position: fixed;
  bottom: 24px;
  right: 80px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(74, 144, 226, 0.3);
  z-index: 1001;
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 24px rgba(74, 144, 226, 0.4);
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 80px;
    width: 44px;
    height: 44px;
    font-size: 18px;
  }
`,B=l.A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
`,F=l.A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 4px;
`,_=l.A.button`
  padding: 8px;
  width: 44px;
  height: 44px;
  border: 2px solid ${e=>e.isSelected?"#4a90e2":"transparent"};
  border-radius: 12px;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#333":e.theme.backgroundImage};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  /* 添加反光效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    border-color: ${e=>e.isSelected?"#357abd":"rgba(74, 144, 226, 0.5)"};
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: scale(1.02);
  }
`,R=l.A.button`
  padding: 10px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 12px;
  background: ${e=>e.active?"linear-gradient(135deg, #4a90e2 0%, #357abd 100%)":"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  color: ${e=>e.active?"white":"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#fff":"#666"};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  box-shadow: ${e=>e.active?"0 4px 12px rgba(74, 144, 226, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)":"0 2px 8px rgba(0, 0, 0, 0.05)"};
  position: relative;
  overflow: hidden;
  
  /* 添加波纹效果 */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
  }
  
  &:hover {
    background: ${e=>e.active?"linear-gradient(135deg, #357abd 0%, #2868a3 100())":"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.1)"};
    transform: scale(1.05);
    box-shadow: ${e=>e.active?"0 6px 16px rgba(74, 144, 226, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)":"0 4px 12px rgba(0, 0, 0, 0.1)"};
  }
  
  &:active::after {
    width: 40px;
    height: 40px;
  }
  
  & > span {
    display: inline-block;
    transform: translateY(-1px);
    z-index: 1;
  }
`,Y=(0,l.A)(R)`
  display: flex;
  align-items: center;
  justify-content: center;
`,N=e=>{let{themeConfig:t,onSelect:i}=e;t=I.getConfig();let[s,a]=(0,n.useState)(()=>{try{let e=localStorage.getItem("turnip-theme-selector-visible");return!e||"true"===e}catch(e){return console.warn("Failed to load theme selector visibility:",e),!0}}),[l,o]=(0,n.useState)(()=>{try{let e=localStorage.getItem("turnip-theme-mode");return!!e&&"dark"===e}catch(e){return console.warn("Failed to load theme mode:",e),!1}}),[d,c]=(0,n.useState)(()=>{try{return localStorage.getItem("turnip-theme-preset")||t.default.id}catch(e){return console.warn("Failed to load theme preset:",e),t.default.id}}),[h,x]=(0,n.useState)(()=>{try{let e=localStorage.getItem("turnip-theme-auto");return!!e&&"true"===e}catch(e){return console.warn("Failed to load auto mode:",e),!1}});(0,n.useEffect)(()=>{try{localStorage.setItem("turnip-theme-mode",l?"dark":"light"),localStorage.setItem("turnip-theme-auto",String(h)),localStorage.setItem("turnip-theme-preset",d),localStorage.setItem("turnip-theme-selector-visible",String(s))}catch(e){console.warn("Failed to save theme settings:",e)}},[l,h,d,s]),(0,n.useEffect)(()=>{if(!(t.presets.some(e=>e.id===d)||d===t.default.id)){var e;c((null==(e=t.presets[0])?void 0:e.id)||t.default.id)}},[t,d]),(0,n.useEffect)(()=>{let e=()=>{if(!h)return;let e=new Date().getHours(),t=e>=18||e<6;t!==l&&o(t)};e();let t=setInterval(e,6e4);return()=>clearInterval(t)},[h,l]);let p=(0,n.useCallback)(()=>{let e=t.presets.find(e=>e.id===d)||t.presets[0]||t.default,r={id:"custom",name:l?"暗黑主题":"明亮主题",backgroundImage:l?"linear-gradient(120deg, #2d3436 0%, #2d3436 100%)":e.backgroundImage,blur:e.blur,opacity:l?.85:e.opacity};return i(r),r},[l,d,i,t]),g=(0,n.useMemo)(()=>{let e=t.presets.find(e=>e.id===d)||t.presets[0]||t.default;return{id:"custom",name:l?"暗黑主题":"明亮主题",backgroundImage:l?"linear-gradient(120deg, #2d3436 0%, #2d3436 100%)":e.backgroundImage,blur:e.blur,opacity:l?.85:e.opacity}},[l,d,t]);return(0,n.useEffect)(()=>{p()},[l,p]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)($,{onClick:()=>{console.log("点击切换按钮，当前状态:",s),a(!s)},title:s?"隐藏主题选择器":"显示主题选择器",children:s?"\uD83D\uDE48":"\uD83C\uDFA8"}),(0,r.jsxs)(O,{isVisible:s,children:[!l&&(0,r.jsx)(F,{children:t.presets.map(e=>(0,r.jsx)(_,{theme:g,isSelected:d===e.id,onClick:()=>c(e.id),title:e.name,style:{background:e.backgroundImage}},e.id))}),(0,r.jsxs)(B,{children:[(0,r.jsx)(R,{theme:g,active:l,onClick:()=>{x(!1),o(!l)},title:l?"切换到明亮模式":"切换到暗黑模式",children:l?(0,r.jsx)("span",{children:"\uD83C\uDF19"}):(0,r.jsx)("span",{children:"☀️"})}),(0,r.jsx)(Y,{theme:g,active:h,onClick:()=>x(!h),title:h?"关闭自动切换":"开启自动切换",children:"\uD83D\uDD52"})]})]})]})},G=l.A.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1rem;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
  font-weight: 500;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(0, 0, 0, 0.6)":"rgba(255, 255, 255, 0.9)"};
  padding: 0.75rem 1rem;
  border-radius: 12px;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
  transition: all 0.3s ease;
  
  /* 添加微妙的动画效果 */
  animation: clockFadeIn 0.8s ease-out 0.6s both;
  
  @keyframes clockFadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px) translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 8px 20px rgba(0, 0, 0, 0.15),
      0 2px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.6rem 0.8rem;
    top: 0.75rem;
    right: 0.75rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.7rem;
    top: 0.5rem;
    right: 0.5rem;
    border-radius: 8px;
  }
`,K=()=>{let e,t,i,s,a,l,[o,d]=(0,n.useState)(new Date);(0,n.useEffect)(()=>{let e=setInterval(()=>{d(new Date)},1e3);return()=>clearInterval(e)},[]);let{date:c,time:h}=(e=o.getFullYear(),t=String(o.getMonth()+1).padStart(2,"0"),i=String(o.getDate()).padStart(2,"0"),s=String(o.getHours()).padStart(2,"0"),a=String(o.getMinutes()).padStart(2,"0"),l=String(o.getSeconds()).padStart(2,"0"),{date:`${e}-${t}-${i}`,time:`${s}:${a}:${l}`});return(0,r.jsx)(G,{children:(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"},children:[(0,r.jsx)("div",{style:{fontSize:"0.85em",opacity:.8},children:c}),(0,r.jsx)("div",{style:{fontSize:"1em",fontWeight:600},children:h})]})})};var J=i(3611),M=i(1897),P=i(2366),L=i(306),q=i(1400),V=i(3319),H=i(2471),W=i(3264),U=i(1344),X=i(4722),Q=i(924),Z=i(7472),ee=i(4192),et=i(6159),ei=i(6804),er=i(7379),en=i(6343),es=i(8881),ea=i(9310),el=i(6598),eo=i(2556),ed=i(4559),ec=i(5065),eh=i(9531),ex=i(6723),ep=i(2918);let eg=["\uD83D\uDD17","\uD83C\uDF10","\uD83D\uDCDA","\uD83C\uDFB5","\uD83C\uDFAC","\uD83C\uDFAE","\uD83D\uDCBB","\uD83D\uDCF1","\uD83D\uDED2","\uD83D\uDCE7","\uD83D\uDCF0","\uD83D\uDD0D","⭐","❤️","\uD83C\uDFE0","\uD83C\uDFA8","\uD83D\uDCCA","\uD83D\uDCBC","\uD83D\uDD27","⚙️","\uD83D\uDCDD","\uD83D\uDCCB","\uD83D\uDCCC","\uD83C\uDFF7️"],{Title:em,Paragraph:eu,Text:ef}=J.A,ej=e=>{let{value:t,onChange:i}=e,[s,a]=(0,n.useState)(""),[l,o]=(0,n.useState)(!1),d=()=>{s.trim()&&(null==i||i(s.trim()),a(""),o(!1))};return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{marginBottom:12},children:(0,r.jsx)(ef,{strong:!0,children:"常用图标："})}),(0,r.jsx)("div",{style:{marginBottom:12},children:eg.map(e=>(0,r.jsx)(M.Ay,{type:t===e?"primary":"default",size:"small",style:{margin:"2px",minWidth:"36px"},onClick:()=>{null==i||i(e),o(!1)},children:e},e))}),(0,r.jsx)("div",{children:l?(0,r.jsxs)(P.A.Compact,{style:{width:"100%"},children:[(0,r.jsx)(L.A,{size:"small",placeholder:"输入自定义图标",value:s,onChange:e=>a(e.target.value),onPressEnter:d}),(0,r.jsx)(M.Ay,{size:"small",type:"primary",onClick:d,children:"确定"}),(0,r.jsx)(M.Ay,{size:"small",onClick:()=>o(!1),children:"取消"})]}):(0,r.jsx)(M.Ay,{type:"dashed",size:"small",icon:(0,r.jsx)(es.A,{}),onClick:()=>o(!0),children:"自定义图标"})}),t&&(0,r.jsxs)("div",{style:{marginTop:8},children:[(0,r.jsx)(ef,{type:"secondary",children:"当前选中："}),(0,r.jsx)("span",{style:{fontSize:"18px",marginLeft:"8px"},children:t})]})]})},ey=()=>{let e,[t,i]=(0,n.useState)([]),[s,a]=(0,n.useState)(!1),[l,o]=(0,n.useState)(!1),[d,c]=(0,n.useState)(!1),[h,x]=(0,n.useState)(!1),[p,g]=(0,n.useState)(null),[m,u]=(0,n.useState)(null),[f,j]=(0,n.useState)(null),[y,b]=(0,n.useState)(null),[A,v]=(0,n.useState)(!1),[k]=q.A.useForm(),[w]=q.A.useForm();(0,n.useEffect)(()=>{S()},[]);let S=async()=>{try{a(!0);let e=z.getAllCategories();i(e)}catch(e){V.Ay.error("加载分类数据失败")}finally{a(!1)}},I=e=>{g(e||null),k.resetFields(),e&&k.setFieldsValue(e),o(!0)},C=async()=>{try{let e=await k.validateFields();p?(z.updateCategory(p.id,e.name),V.Ay.success("分类更新成功！")):(z.addCategory(e.name),V.Ay.success("分类添加成功！")),await S(),o(!1)}catch(e){V.Ay.error("操作失败，请重试")}},T=async e=>{try{z.deleteCategory(e),await S(),V.Ay.success("分类删除成功！")}catch(e){V.Ay.error("删除失败，请重试")}},E=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];u(e||null),b(t||null),w.resetFields(),e&&t?w.setFieldsValue({...e,categoryId:t}):t&&w.setFieldsValue({categoryId:t}),v(i),c(!0)},D=async()=>{try{let e=await w.validateFields();m&&y?(z.updateLink(y,m.id,{name:e.name,url:e.url,icon:e.icon}),V.Ay.success("链接更新成功！")):(z.addLink(e.categoryId,e.name,e.url,e.icon),V.Ay.success("链接添加成功！")),await S(),c(!1)}catch(e){V.Ay.error("操作失败，请重试")}},O=async(e,t)=>{try{z.deleteLink(e,t),await S(),V.Ay.success("链接删除成功！")}catch(e){V.Ay.error("删除失败，请重试")}},$=async()=>{try{z.clearStorage(),await S(),V.Ay.success("所有数据清空成功！")}catch(e){V.Ay.error("清空失败，请重试")}},B=[{title:"ID",dataIndex:"id",key:"id",width:80,sorter:(e,t)=>e.id-t.id},{title:"分类名称",dataIndex:"name",key:"name",width:80,render:e=>(0,r.jsxs)(P.A,{children:[(0,r.jsx)(ea.A,{}),(0,r.jsx)("strong",{children:e})]})},{title:"链接数量",dataIndex:"links",key:"linkCount",width:100,render:e=>(0,r.jsxs)("span",{style:{color:"#1890ff",fontWeight:"bold"},children:[(null==e?void 0:e.length)||0," 个"]})},{title:"链接列表",dataIndex:"links",key:"links",width:300,render:(e,t)=>(0,r.jsx)("div",{style:{maxHeight:120,overflow:"auto"},children:e&&e.length>0?(0,r.jsx)(H.A,{size:"small",dataSource:e,renderItem:e=>(0,r.jsx)(H.A.Item,{style:{padding:"4px 0",borderBottom:"1px solid #f0f0f0"},actions:[(0,r.jsx)(M.Ay,{type:"text",size:"small",icon:(0,r.jsx)(el.A,{}),onClick:()=>{j(e),x(!0)},title:"查看详情"},"view"),(0,r.jsx)(M.Ay,{type:"text",size:"small",icon:(0,r.jsx)(eo.A,{}),onClick:()=>E(e,t.id,!0),title:"编辑链接"},"edit"),(0,r.jsx)(W.A,{title:"确定删除这个链接吗？",onConfirm:()=>O(t.id,e.id),okText:"确定",cancelText:"取消",children:(0,r.jsx)(M.Ay,{type:"text",size:"small",danger:!0,icon:(0,r.jsx)(ed.A,{}),title:"删除链接"})},"delete")],children:(0,r.jsx)(H.A.Item.Meta,{title:(0,r.jsxs)(P.A,{size:"small",children:[(0,r.jsx)("span",{children:e.icon}),(0,r.jsx)("span",{children:e.name||"未命名"})]}),description:(0,r.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"12px",color:"#666"},children:e.url.length>30?`${e.url.substring(0,30)}...`:e.url})})})}):(0,r.jsx)("div",{style:{textAlign:"center",color:"#999",padding:"20px 0"},children:"暂无链接"})})},{title:"操作",key:"action",width:200,render:(e,t)=>(0,r.jsxs)(P.A,{size:"small",children:[(0,r.jsx)(M.Ay,{type:"text",icon:(0,r.jsx)(es.A,{}),onClick:()=>E(void 0,t.id,!0),title:"添加链接",children:"添加"}),(0,r.jsx)(M.Ay,{type:"text",icon:(0,r.jsx)(eo.A,{}),onClick:()=>I(t),title:"编辑分类",children:"编辑"}),(0,r.jsx)(W.A,{title:"确定删除这个分类及其所有链接吗？",onConfirm:()=>T(t.id),okText:"确定",cancelText:"取消",children:(0,r.jsx)(M.Ay,{type:"text",danger:!0,icon:(0,r.jsx)(ed.A,{}),title:"删除分类",children:"删除"})})]})}];return(0,r.jsxs)("div",{style:{padding:24},children:[(0,r.jsxs)(em,{level:2,children:[(0,r.jsx)(ec.A,{})," 链接管理面板"]}),(0,r.jsx)(eu,{children:"管理您的链接分类和链接内容，支持添加、编辑、删除等操作。"}),(0,r.jsxs)(U.A,{gutter:16,style:{marginBottom:24},children:[(0,r.jsx)(X.A,{span:8,children:(0,r.jsx)(Q.A,{children:(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)(em,{level:3,style:{margin:0,color:"#1890ff"},children:t.length}),(0,r.jsx)(eu,{style:{margin:0,color:"#666"},children:"分类总数"})]})})}),(0,r.jsx)(X.A,{span:8,children:(0,r.jsx)(Q.A,{children:(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)(em,{level:3,style:{margin:0,color:"#52c41a"},children:t.reduce((e,t)=>{var i;return e+((null==(i=t.links)?void 0:i.length)||0)},0)}),(0,r.jsx)(eu,{style:{margin:0,color:"#666"},children:"链接总数"})]})})}),(0,r.jsx)(X.A,{span:8,children:(0,r.jsx)(Q.A,{children:(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)(em,{level:3,style:{margin:0,color:"#fa8c16"},children:t.filter(e=>e.links&&e.links.length>0).length}),(0,r.jsx)(eu,{style:{margin:0,color:"#666"},children:"活跃分类"})]})})})]}),(0,r.jsx)("div",{style:{marginBottom:16},children:(0,r.jsxs)(P.A,{children:[(0,r.jsx)(M.Ay,{type:"primary",icon:(0,r.jsx)(es.A,{}),onClick:()=>I(),children:"添加分类"}),(0,r.jsx)(M.Ay,{type:"default",icon:(0,r.jsx)(ec.A,{}),onClick:()=>E(void 0,void 0,!1),disabled:0===t.length,children:"添加链接"}),(0,r.jsx)(M.Ay,{icon:(0,r.jsx)(eh.A,{}),onClick:S,loading:s,children:"刷新数据"}),(0,r.jsx)(W.A,{title:"确定清空所有数据吗？此操作不可恢复！",onConfirm:$,okText:"确定",cancelText:"取消",children:(0,r.jsx)(M.Ay,{danger:!0,icon:(0,r.jsx)(ex.A,{}),children:"清空数据"})})]})}),0===t.length?(0,r.jsxs)(Q.A,{style:{textAlign:"center",padding:"40px 20px"},children:[(0,r.jsx)("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"\uD83D\uDCC1"}),(0,r.jsx)(em,{level:4,children:"暂无分类数据"}),(0,r.jsx)(eu,{style:{color:"#666",marginBottom:"24px"},children:"您还没有创建任何链接分类，点击上方按钮开始添加吧！"}),(0,r.jsx)(M.Ay,{type:"primary",icon:(0,r.jsx)(es.A,{}),onClick:()=>I(),children:"创建第一个分类"})]}):(0,r.jsx)(Z.A,{dataSource:t,columns:B,rowKey:"id",loading:s,pagination:{pageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:(e,t)=>`第 ${t[0]}-${t[1]} 条，共 ${e} 条`},scroll:{x:800}}),(0,r.jsx)(ee.A,{title:`${p?"编辑":"添加"}分类`,open:l,onOk:C,onCancel:()=>o(!1),destroyOnClose:!0,children:(0,r.jsx)(q.A,{form:k,layout:"vertical",children:(0,r.jsx)(q.A.Item,{name:"name",label:"分类名称",rules:[{required:!0,message:"请输入分类名称！"},{min:1,max:20,message:"分类名称长度应在1-20个字符之间！"}],children:(0,r.jsx)(L.A,{placeholder:"请输入分类名称"})})})}),(0,r.jsxs)(ee.A,{title:(0,r.jsxs)(P.A,{children:[(0,r.jsx)(ec.A,{style:{color:"#1890ff"}}),(0,r.jsx)("span",{style:{fontSize:"16px",fontWeight:"600"},children:m?"编辑链接":"添加链接"})]}),open:d,onOk:D,onCancel:()=>c(!1),destroyOnClose:!0,width:800,okText:m?"更新链接":"添加链接",cancelText:"取消",styles:{body:{padding:"24px"}},children:[A&&(0,r.jsx)("div",{style:{background:"linear-gradient(90deg, #f6ffed 0%, #f0f9f0 100%)",border:"1px solid #b7eb8f",borderRadius:"8px",padding:"16px",marginBottom:"24px"},children:(0,r.jsxs)(P.A,{children:[(0,r.jsx)("span",{style:{color:"#52c41a",fontSize:"16px",fontWeight:"bold"},children:"✓"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(ef,{style:{color:"#389e0d",fontWeight:"600"},children:"已自动选中分类"}),(0,r.jsx)("br",{}),(0,r.jsx)(ef,{style:{color:"#52c41a",fontSize:"12px"},children:"若需更改分类，请从上方“添加链接”按钮进入"})]})]})}),(0,r.jsxs)(q.A,{form:w,layout:"vertical",children:[(0,r.jsx)(Q.A,{size:"small",title:(0,r.jsxs)(P.A,{children:[(0,r.jsx)(ea.A,{style:{color:"#1890ff"}}),(0,r.jsx)("span",{children:"所属分类"})]}),style:{marginBottom:20},headStyle:{background:"#fafafa"},children:(0,r.jsx)(q.A.Item,{name:"categoryId",rules:[{required:!0,message:"请选择分类！"}],children:(0,r.jsx)(et.A,{placeholder:"请选择一个分类",disabled:A,size:"large",options:t.map(e=>{var t;return{value:e.id,label:(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 0"},children:[(0,r.jsxs)(P.A,{children:[(0,r.jsx)(ea.A,{style:{color:"#1890ff"}}),(0,r.jsx)("span",{style:{fontWeight:"500"},children:e.name})]}),(0,r.jsxs)("span",{style:{color:"#999",fontSize:"12px",fontStyle:"italic"},children:[(null==(t=e.links)?void 0:t.length)||0," 个链接"]})]})}})})})}),(0,r.jsxs)(Q.A,{size:"small",title:(0,r.jsxs)(P.A,{children:[(0,r.jsx)(ec.A,{style:{color:"#52c41a"}}),(0,r.jsx)("span",{children:"基本信息"})]}),style:{marginBottom:20},headStyle:{background:"#fafafa"},children:[(0,r.jsxs)(U.A,{gutter:16,children:[(0,r.jsx)(X.A,{span:16,children:(0,r.jsx)(q.A.Item,{name:"name",label:"链接名称",rules:[{max:30,message:"链接名称不能超过30个字符！"}],children:(0,r.jsx)(L.A,{placeholder:"请输入链接名称（可选）",size:"large",prefix:(0,r.jsx)("span",{style:{color:"#666",fontSize:"14px"},children:"\uD83D\uDCDD"})})})}),(0,r.jsx)(X.A,{span:8,children:(0,r.jsx)(q.A.Item,{name:"icon",label:"链接图标",rules:[{required:!0,message:"请选择图标！"},{max:10,message:"图标不能超过10个字符！"}],children:(0,r.jsx)(ej,{})})})]}),(0,r.jsx)(q.A.Item,{name:"url",label:"链接地址",rules:[{required:!0,message:"请输入链接地址！"},{type:"url",message:"请输入有效的URL地址！"}],children:(0,r.jsx)(L.A,{placeholder:"https://example.com",size:"large",prefix:(0,r.jsx)(ep.A,{style:{color:"#1890ff"}}),suffix:(0,r.jsx)(ei.A,{title:"测试链接",children:(0,r.jsx)(M.Ay,{type:"text",size:"small",icon:(0,r.jsx)(el.A,{}),onClick:()=>{let e=w.getFieldValue("url");if(e)try{window.open(e,"_blank"),V.Ay.success("链接已在新窗口中打开")}catch(e){V.Ay.error("无法打开链接，请检查URL格式")}else V.Ay.warning("请先输入链接地址")},style:{color:"#52c41a"}})})})})]}),(0,r.jsxs)(Q.A,{size:"small",title:(0,r.jsxs)(P.A,{children:[(0,r.jsx)(el.A,{style:{color:"#fa8c16"}}),(0,r.jsx)("span",{children:"预览效果"})]}),style:{background:"#fafafa"},headStyle:{background:"#f0f0f0"},children:[(0,r.jsx)("div",{style:{padding:"20px",border:"2px dashed #d9d9d9",borderRadius:"12px",textAlign:"center",background:"white",transition:"all 0.3s ease"},children:(0,r.jsx)(q.A.Item,{dependencies:["icon","name","url"],noStyle:!0,children:e=>{let{getFieldValue:t}=e,i=t("icon"),n=t("name"),s=t("url");return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{fontSize:"48px",marginBottom:"12px",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.1))"},children:i||"\uD83D\uDD17"}),(0,r.jsx)("div",{style:{fontSize:"16px",fontWeight:"600",color:"#333",marginBottom:"8px",minHeight:"20px"},children:n||"未命名链接"}),(0,r.jsx)("div",{style:{fontSize:"12px",color:"#999",wordBreak:"break-all",lineHeight:"1.5",maxHeight:"40px",overflow:"hidden"},children:s?s.length>50?`${s.substring(0,50)}...`:s:"https://example.com"})]})}})}),(0,r.jsx)("div",{style:{textAlign:"center",marginTop:"12px"},children:(0,r.jsx)(ef,{type:"secondary",style:{fontSize:"12px"},children:"✨ 这是链接在主页面中的显示效果预览"})})]})]})]}),(0,r.jsx)(ee.A,{title:(0,r.jsxs)(P.A,{children:[(0,r.jsx)(el.A,{}),"链接详情"]}),open:h,onCancel:()=>x(!1),footer:[(0,r.jsx)(M.Ay,{type:"primary",onClick:()=>{if(f){let e=t.find(e=>{var t;return null==(t=e.links)?void 0:t.some(e=>e.id===f.id)});x(!1),E(f,null==e?void 0:e.id,!0)}},children:"编辑链接"},"edit"),(0,r.jsx)(M.Ay,{onClick:()=>x(!1),children:"关闭"},"close")],width:600,children:f&&(0,r.jsx)("div",{children:(0,r.jsxs)(er.A,{column:1,bordered:!0,children:[(0,r.jsx)(er.A.Item,{label:"链接ID",children:f.id}),(0,r.jsx)(er.A.Item,{label:"图标",children:(0,r.jsx)(en.A,{shape:"square",size:40,style:{backgroundColor:"#f0f0f0"},children:(0,r.jsx)("span",{style:{fontSize:"20px"},children:f.icon})})}),(0,r.jsx)(er.A.Item,{label:"名称",children:f.name||(0,r.jsx)("span",{style:{color:"#999"},children:"未命名"})}),(0,r.jsx)(er.A.Item,{label:"链接地址",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{marginBottom:8},children:(0,r.jsx)("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",style:{wordBreak:"break-all"},children:f.url})}),(0,r.jsxs)(P.A,{children:[(0,r.jsx)(M.Ay,{size:"small",icon:(0,r.jsx)(ep.A,{}),onClick:()=>window.open(f.url,"_blank"),children:"打开链接"}),(0,r.jsx)(M.Ay,{size:"small",onClick:()=>{navigator.clipboard.writeText(f.url),V.Ay.success("链接地址已复制到剪贴板")},children:"复制链接"})]})]})}),(0,r.jsx)(er.A.Item,{label:"所属分类",children:(e=t.find(e=>{var t;return null==(t=e.links)?void 0:t.some(e=>e.id===f.id)}))?(0,r.jsxs)(P.A,{children:[(0,r.jsx)(ea.A,{}),e.name]}):"未知分类"})]})})})]})};var eb=i(1809),eA=i(5964);let{Title:ev,Paragraph:ek}=J.A,ew=()=>{let[e]=q.A.useForm(),[t,i]=(0,n.useState)([]),[s,a]=(0,n.useState)(null),[l,o]=(0,n.useState)(!1),[d,c]=(0,n.useState)(null),[h,x]=(0,n.useState)(null);(0,n.useEffect)(()=>{p()},[]);let p=()=>{let e=I.getConfig();i(e.presets),a(e.default)},g=t=>{c(t||null),t?e.setFieldsValue({id:t.id,name:t.name,backgroundImage:t.backgroundImage,blur:parseInt(t.blur),opacity:Math.round(100*t.opacity)}):e.resetFields(),o(!0)},m=async()=>{try{let t=await e.validateFields(),i={id:t.id,name:t.name,backgroundImage:t.backgroundImage,blur:`${t.blur}px`,opacity:t.opacity/100};d?(I.updatePreset(i),V.Ay.success("主题更新成功！")):(I.addPreset(i),V.Ay.success("主题添加成功！")),p(),o(!1),e.resetFields()}catch(e){V.Ay.error("操作失败，请检查输入")}},u=()=>{try{[{id:"purple",name:"渐变紫",backgroundImage:"linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",blur:"10px",opacity:.95},{id:"morning",name:"晨光蓝",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",blur:"10px",opacity:.95},{id:"night",name:"夜空",backgroundImage:"linear-gradient(to right, #243949 0%, #517fa4 100%)",blur:"10px",opacity:.92}].forEach(e=>{I.findThemeById(e.id)||I.addPreset(e)}),p(),V.Ay.success("默认主题恢复成功！")}catch(e){V.Ay.error("默认主题恢复失败")}},f=[{title:"ID",dataIndex:"id",key:"id",width:100},{title:"主题名称",dataIndex:"name",key:"name"},{title:"背景预览",dataIndex:"backgroundImage",key:"backgroundImage",width:120,render:e=>(0,r.jsx)("div",{style:{width:60,height:30,background:e,borderRadius:4,border:"1px solid #d9d9d9"}})},{title:"模糊度",dataIndex:"blur",key:"blur",width:80},{title:"透明度",dataIndex:"opacity",key:"opacity",width:80,render:e=>`${Math.round(100*e)}%`},{title:"操作",key:"action",width:200,render:(e,i)=>(0,r.jsxs)(P.A,{size:"small",children:[(0,r.jsx)(M.Ay,{type:"text",icon:(0,r.jsx)(el.A,{}),onClick:()=>{x(i),V.Ay.info("主题预览功能开发中...")},title:"预览"}),(0,r.jsx)(M.Ay,{type:"text",icon:(0,r.jsx)(eo.A,{}),onClick:()=>g(i),title:"编辑"}),(0,r.jsx)(M.Ay,{type:"text",onClick:()=>{I.setDefaultTheme(i),V.Ay.success("默认主题设置成功！"),p()},title:"设为默认",children:"默认"}),(0,r.jsx)(W.A,{title:"确定删除这个主题吗？",onConfirm:()=>(e=>{if(t.length<=1)return void V.Ay.warning("不能删除最后一个主题，请先添加其他主题");try{I.deletePreset(e),V.Ay.success("主题删除成功！"),p()}catch(e){V.Ay.error("删除失败")}})(i.id),okText:"确定",cancelText:"取消",children:(0,r.jsx)(M.Ay,{type:"text",danger:!0,icon:(0,r.jsx)(ed.A,{}),title:"删除"})})]})}];return(0,r.jsxs)("div",{style:{padding:24},children:[(0,r.jsxs)(ev,{level:2,children:[(0,r.jsx)(eA.A,{})," 主题管理面板"]}),(0,r.jsx)(ek,{children:"管理应用的主题配置，包括背景渐变、模糊效果和透明度设置。"}),s&&(0,r.jsx)(Q.A,{title:"当前默认主题",style:{marginBottom:16},children:(0,r.jsxs)(U.A,{gutter:16,align:"middle",children:[(0,r.jsx)(X.A,{span:4,children:(0,r.jsx)("div",{style:{width:80,height:40,background:s.backgroundImage,borderRadius:6,border:"1px solid #d9d9d9"}})}),(0,r.jsxs)(X.A,{span:20,children:[(0,r.jsx)(ev,{level:4,style:{margin:0},children:s.name}),(0,r.jsxs)(ek,{style:{margin:0,color:"#666"},children:["模糊度: ",s.blur," | 透明度: ",Math.round(100*s.opacity),"%"]})]})]})}),(0,r.jsx)("div",{style:{marginBottom:16},children:(0,r.jsxs)(P.A,{children:[(0,r.jsx)(M.Ay,{type:"primary",icon:(0,r.jsx)(es.A,{}),onClick:()=>g(),children:"添加新主题"}),0===t.length&&(0,r.jsx)(M.Ay,{type:"dashed",onClick:u,children:"恢复默认主题"})]})}),0===t.length?(0,r.jsxs)(Q.A,{style:{textAlign:"center",padding:"40px 20px"},children:[(0,r.jsx)("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"\uD83C\uDFA8"}),(0,r.jsx)(ev,{level:4,children:"暂无自定义主题"}),(0,r.jsx)(ek,{style:{color:"#666",marginBottom:"24px"},children:"您还没有创建任何自定义主题，可以点击上方按钮添加新主题或恢复默认主题。"}),(0,r.jsxs)(P.A,{children:[(0,r.jsx)(M.Ay,{type:"primary",icon:(0,r.jsx)(es.A,{}),onClick:()=>g(),children:"创建第一个主题"}),(0,r.jsx)(M.Ay,{onClick:u,children:"恢复默认主题"})]})]}):(0,r.jsx)(Z.A,{dataSource:t,columns:f,rowKey:"id",pagination:{pageSize:10},scroll:{x:800}}),(0,r.jsx)(ee.A,{title:d?"编辑主题":"添加新主题",open:l,onOk:m,onCancel:()=>{o(!1),e.resetFields()},width:600,okText:"保存",cancelText:"取消",children:(0,r.jsxs)(q.A,{form:e,layout:"vertical",children:[(0,r.jsx)(q.A.Item,{name:"id",label:"主题ID",rules:[{required:!0,message:"请输入主题ID"},{pattern:/^[a-zA-Z0-9_-]+$/,message:"ID只能包含字母、数字、下划线和连字符"}],children:(0,r.jsx)(L.A,{placeholder:"例如: my-theme",disabled:!!d})}),(0,r.jsx)(q.A.Item,{name:"name",label:"主题名称",rules:[{required:!0,message:"请输入主题名称"}],children:(0,r.jsx)(L.A,{placeholder:"例如: 我的主题"})}),(0,r.jsx)(q.A.Item,{name:"backgroundImage",label:"背景渐变",rules:[{required:!0,message:"请输入背景渐变CSS"}],children:(0,r.jsx)(L.A.TextArea,{placeholder:"例如: linear-gradient(120deg, #f6d365 0%, #fda085 100%)",rows:3})}),(0,r.jsx)("div",{style:{marginBottom:16},children:(0,r.jsx)(M.Ay,{onClick:()=>{let t=["linear-gradient(120deg, #a8edea 0%, #fed6e3 100%)","linear-gradient(120deg, #d299c2 0%, #fef9d7 100%)","linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)","linear-gradient(120deg, #fdbb2d 0%, #22c1c3 100%)","linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%)","linear-gradient(120deg, #667eea 0%, #764ba2 100%)","linear-gradient(120deg, #f093fb 0%, #f5576c 100%)","linear-gradient(120deg, #4facfe 0%, #00f2fe 100%)"],i=t[Math.floor(Math.random()*t.length)];e.setFieldValue("backgroundImage",i)},type:"dashed",block:!0,children:"\uD83C\uDFA8 随机生成渐变"})}),(0,r.jsx)(q.A.Item,{name:"blur",label:"模糊度 (px)",rules:[{required:!0,message:"请设置模糊度"}],children:(0,r.jsx)(eb.A,{min:0,max:20,marks:{0:"0px",10:"10px",20:"20px"}})}),(0,r.jsx)(q.A.Item,{name:"opacity",label:"透明度 (%)",rules:[{required:!0,message:"请设置透明度"}],children:(0,r.jsx)(eb.A,{min:10,max:100,marks:{10:"10%",50:"50%",100:"100%"}})})]})})]})};var eS=i(2375),eI=i(8772),eC=i(746),eT=i(4133),ez=i(5850),eE=i(9028),eD=i(3196),eO=i(6875);let{Title:e$,Paragraph:eB,Text:eF}=J.A,{TextArea:e_}=L.A,eR=()=>{let e,[t]=q.A.useForm(),[i,s]=(0,n.useState)(null),[a,l]=(0,n.useState)(!1),[o,d]=(0,n.useState)(!1),[c,h]=(0,n.useState)(!1),[x,p]=(0,n.useState)(!1),[g,m]=(0,n.useState)(!1),[u,f]=(0,n.useState)(!0),[j,y]=(0,n.useState)(""),[b,A]=(0,n.useState)("config");(0,n.useEffect)(()=>{v()},[]);let v=()=>{let e=D.getConfig();console.log("loadSiteConfig - 获取到的配置:",e),s(e);let i={title:e.title,copyright:e.copyright.text,description:e.description||"",keywords:e.keywords||"",author:e.author||"",favicon:e.favicon||""};console.log("loadSiteConfig - 设置表单值:",i),t.setFieldsValue(i),setTimeout(()=>{console.log("loadSiteConfig - 设置后实际的favicon值:",t.getFieldValue("favicon"))},50),setTimeout(()=>{let t=e.favicon;if(t){let e=document.getElementById("favicon-preview");if(e){let i=document.createElement("img");i.onload=()=>{e.style.backgroundImage=`url(${t})`,e.style.backgroundColor="transparent"},i.onerror=()=>{e.style.backgroundImage="none",e.style.backgroundColor="#ff4d4f"},i.src=t}}},100)},k=async()=>{try{l(!0);let e=await t.validateFields();console.log("handleSave - 获取到的表单值:",e);let i=t.getFieldValue("favicon");console.log("handleSave - 单独获取favicon字段:",i),console.log("handleSave - favicon类型:",typeof i),console.log("handleSave - favicon长度:",i?i.length:"undefined"),D.updateTitle(e.title),D.updateCopyright(e.copyright),e.description&&D.addConfigItem("description",e.description),e.keywords&&D.addConfigItem("keywords",e.keywords),e.author&&D.addConfigItem("author",e.author),e.favicon&&e.favicon.trim()?(console.log("handleSave - 保存favicon:",e.favicon),D.addConfigItem("favicon",e.favicon),D.updateFavicon(e.favicon)):(console.log("handleSave - favicon为空，删除配置"),D.deleteConfigItem("favicon")),V.Ay.success("网站配置保存成功！"),d(!1),v()}catch(e){V.Ay.error("保存失败，请检查输入")}finally{l(!1)}},w=()=>{d(!0)},O=()=>{let e="data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({site:D.getConfig(),theme:I.getConfig(),links:{categories:z.getAllCategories(),searchEngines:z.getAllSearchEngines()},timestamp:new Date().toISOString(),version:"1.0.0"},null,2)),t=`turnip-full-backup-${new Date().toISOString().split("T")[0]}.json`,i=document.createElement("a");i.setAttribute("href",e),i.setAttribute("download",t),i.click(),V.Ay.success("完整备份已导出")},$=async()=>{try{l(!0),u&&(O(),await new Promise(e=>setTimeout(e,1e3))),D.resetToDefault(E),I.resetToDefault(S),z.resetToDefault(C,T),V.Ay.success("网站重置成功！页面将2秒后刷新"),setTimeout(()=>{window.location.reload()},2e3)}catch(e){V.Ay.error("重置失败，请重试")}finally{l(!1),h(!1)}},B=async()=>{if(!j.trim())return void V.Ay.error("请先输入要导入的数据");try{l(!0);let e=JSON.parse(j);if("config"===b){if(!e.title||!e.copyright)return void V.Ay.error("无效的网站配置格式");D.resetToDefault(e),V.Ay.success("网站配置导入成功！")}else if("full"===b){if(!e.site||!e.theme||!e.links)return void V.Ay.error("无效的完整备份格式");D.resetToDefault(e.site),I.resetToDefault(e.theme),z.resetToDefault(e.links.categories||[],e.links.searchEngines||[]),V.Ay.success("完整备份导入成功！")}v(),p(!1),y(""),setTimeout(()=>{window.location.reload()},1500)}catch(e){console.error("导入失败:",e),V.Ay.error("数据格式错误，请检查导入的JSON格式是否正确")}finally{l(!1)}},F=()=>({site:{title:D.getConfig().title,copyright:D.getConfig().copyright.text,description:D.getConfig().description||"未设置",keywords:D.getConfig().keywords||"未设置",author:D.getConfig().author||"未设置",favicon:D.getConfig().favicon||"未设置"},theme:{default:I.getDefaultTheme(),presets:I.getPresets(),totalThemes:I.getPresets().length+1},links:{categories:z.getAllCategories(),totalCategories:z.getAllCategories().length,totalLinks:z.getAllCategories().reduce((e,t)=>{var i;return e+((null==(i=t.links)?void 0:i.length)||0)},0),searchEngines:z.getAllSearchEngines(),totalSearchEngines:z.getAllSearchEngines().length},system:{storageSize:_(),lastModified:new Date().toISOString(),version:"1.0.0"}}),_=()=>{let e=0;for(let t in localStorage)localStorage.hasOwnProperty(t)&&t.startsWith("turnip")&&(e+=localStorage[t].length);return(e/1024).toFixed(2)};return(0,r.jsxs)("div",{style:{padding:24},children:[(0,r.jsxs)(e$,{level:2,children:[(0,r.jsx)(eC.A,{})," 网站配置面板"]}),(0,r.jsx)(eB,{children:"管理网站的基本信息、SEO配置和系统设置。"}),(0,r.jsx)(Q.A,{title:"系统状态",style:{marginBottom:16},children:(0,r.jsxs)(U.A,{gutter:16,children:[(0,r.jsx)(X.A,{span:6,children:(0,r.jsx)(eS.A,{title:"本地存储使用",value:_(),suffix:"KB",valueStyle:{color:"#1890ff"}})}),(0,r.jsx)(X.A,{span:6,children:(0,r.jsx)(eS.A,{title:"主题数量",value:JSON.parse(localStorage.getItem("turnip-theme-config")||'{"presets":[]}').presets.length,valueStyle:{color:"#52c41a"}})}),(0,r.jsx)(X.A,{span:6,children:(0,r.jsx)(eS.A,{title:"链接分类",value:JSON.parse(localStorage.getItem("turnip_link_categories")||"[]").length,valueStyle:{color:"#722ed1"}})}),(0,r.jsx)(X.A,{span:6,children:(0,r.jsx)(eS.A,{title:"配置版本",value:"1.0.0",valueStyle:{color:"#eb2f96"}})})]})}),(0,r.jsxs)(Q.A,{title:"基本信息",style:{marginBottom:16},children:[(0,r.jsxs)(q.A,{form:t,layout:"vertical",onValuesChange:w,children:[(0,r.jsxs)(U.A,{gutter:16,children:[(0,r.jsx)(X.A,{span:12,children:(0,r.jsx)(q.A.Item,{name:"title",label:"网站标题",rules:[{required:!0,message:"请输入网站标题"}],children:(0,r.jsx)(L.A,{placeholder:"例如: Turnip起始页",prefix:(0,r.jsx)(ep.A,{})})})}),(0,r.jsx)(X.A,{span:12,children:(0,r.jsx)(q.A.Item,{name:"author",label:"作者",children:(0,r.jsx)(L.A,{placeholder:"例如: Turnip1202"})})})]}),(0,r.jsx)(q.A.Item,{name:"description",label:"网站描述",children:(0,r.jsx)(e_,{rows:3,placeholder:"网站的简短描述，用于SEO优化"})}),(0,r.jsx)(q.A.Item,{name:"keywords",label:"关键词",children:(0,r.jsx)(L.A,{placeholder:"多个关键词用逗号分隔，例如: 起始页,导航,工具"})}),(0,r.jsx)(q.A.Item,{name:"copyright",label:"版权信息",rules:[{required:!0,message:"请输入版权信息"}],children:(0,r.jsx)(L.A,{placeholder:"例如: \xa9 2024 Turnip1202. All rights reserved."})}),(0,r.jsxs)(P.A.Compact,{block:!0,style:{display:"flex",width:"100%",flexDirection:"column"},children:[(0,r.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center"},children:[(0,r.jsx)(q.A.Item,{name:"favicon",label:"网站图标URL",style:{flex:1,marginBottom:0},children:(0,r.jsx)(L.A,{placeholder:"例如: /favicon.ico",onChange:e=>{let t=e.target.value;if(w(),t&&t.trim())setTimeout(()=>{let e=document.createElement("img");e.onload=()=>{let e=document.getElementById("favicon-preview");e&&(e.style.backgroundImage=`url(${t})`,e.style.backgroundColor="transparent")},e.onerror=()=>{let e=document.getElementById("favicon-preview");e&&(e.style.backgroundImage="none",e.style.backgroundColor="#ff4d4f")},e.src=t},500);else{let e=document.getElementById("favicon-preview");e&&(e.style.backgroundImage="none",e.style.backgroundColor="#f0f0f0")}}})}),(0,r.jsx)("div",{id:"favicon-preview",style:{width:"32px",height:"32px",border:"1px solid #d9d9d9",borderLeft:"none",borderRadius:"0 6px 6px 0",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundColor:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",marginTop:"30px",color:"#666",marginLeft:"-1px"},title:"图标预览",children:"\uD83C\uDF10"})]}),(0,r.jsx)("div",{style:{fontSize:"12px",color:"#666",marginTop:"4px",paddingLeft:"12px"},children:"支持 .ico、.png、.svg 等格式，建议尺寸 16\xd716 或 32\xd732 像素"})]})]}),o&&(0,r.jsx)(eI.A,{message:"您有未保存的更改",description:"请记得保存您的配置更改",type:"warning",showIcon:!0,style:{marginBottom:16}}),(0,r.jsxs)(P.A,{children:[(0,r.jsx)(M.Ay,{type:"primary",icon:(0,r.jsx)(eT.A,{}),loading:a,onClick:k,disabled:!o,children:"保存配置"}),(0,r.jsx)(M.Ay,{icon:(0,r.jsx)(eh.A,{}),onClick:()=>{v(),d(!1),V.Ay.info("配置已重置")},disabled:!o,children:"重置"})]})]}),(0,r.jsx)(Q.A,{title:"高级设置",style:{marginBottom:16},children:(0,r.jsxs)(P.A,{direction:"vertical",style:{width:"100%"},children:[(0,r.jsx)(eI.A,{message:"危险操作",description:"以下操作可能会影响应用的正常使用，请谨慎操作",type:"error",showIcon:!0}),(0,r.jsxs)("div",{children:[(0,r.jsx)(e$,{level:5,style:{marginBottom:8},children:"\uD83D\uDCBE 数据管理"}),(0,r.jsxs)(P.A,{wrap:!0,children:[(0,r.jsx)(M.Ay,{icon:(0,r.jsx)(ez.A,{}),onClick:()=>{let e="data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(D.getConfig(),null,2)),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","turnip-site-config.json"),t.click(),V.Ay.success("配置已导出")},children:"导出网站配置"}),(0,r.jsx)(M.Ay,{type:"primary",icon:(0,r.jsx)(ez.A,{}),onClick:O,children:"导出完整备份"}),(0,r.jsx)(M.Ay,{type:"dashed",icon:(0,r.jsx)(eE.A,{}),onClick:()=>p(!0),children:"导入数据"}),(0,r.jsx)(M.Ay,{type:"default",icon:(0,r.jsx)(el.A,{}),onClick:()=>m(!0),children:"配置预览"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(e$,{level:5,style:{marginBottom:8},children:"\uD83D\uDDD1️ 数据清理"}),(0,r.jsxs)(P.A,{wrap:!0,children:[(0,r.jsx)(M.Ay,{danger:!0,icon:(0,r.jsx)(ex.A,{}),onClick:()=>{D.clearStorage(),V.Ay.success("本地存储已清除"),setTimeout(()=>{window.location.reload()},1e3)},children:"清除所有数据"}),(0,r.jsx)(M.Ay,{danger:!0,type:"primary",icon:(0,r.jsx)(eD.A,{}),onClick:()=>h(!0),children:"重置网站"})]})]})]})}),i&&(0,r.jsx)(Q.A,{title:"当前配置预览",children:(0,r.jsx)("div",{style:{background:"#f5f5f5",padding:16,borderRadius:6},children:(0,r.jsx)("pre",{style:{margin:0,fontSize:12},children:JSON.stringify(i,null,2)})})}),(0,r.jsx)(ee.A,{title:(0,r.jsxs)(P.A,{children:[(0,r.jsx)(eO.A,{style:{color:"#ff4d4f"}}),(0,r.jsx)("span",{children:"重置网站"})]}),open:c,onOk:$,onCancel:()=>h(!1),okText:"确认重置",cancelText:"取消",okButtonProps:{danger:!0,loading:a},width:600,centered:!0,children:(0,r.jsxs)("div",{style:{padding:"20px 0"},children:[(0,r.jsx)(eI.A,{message:"警告：此操作不可逆转！",description:"这将会清除所有当前数据并重置为默认配置",type:"error",showIcon:!0,style:{marginBottom:20}}),(0,r.jsxs)("div",{style:{marginBottom:16},children:[(0,r.jsx)(eF,{strong:!0,children:"重置将影响的数据："}),(0,r.jsxs)("ul",{style:{marginTop:8,paddingLeft:20},children:[(0,r.jsx)("li",{children:"\uD83C\uDF10 网站配置（标题、版权、SEO信息等）"}),(0,r.jsx)("li",{children:"\uD83C\uDFA8 主题设置（自定义主题将被清除）"}),(0,r.jsx)("li",{children:"\uD83D\uDD17 链接数据（所有分类和链接）"}),(0,r.jsx)("li",{children:"\uD83D\uDD0D 搜索引擎配置"})]})]}),(0,r.jsxs)("div",{style:{marginBottom:16},children:[(0,r.jsx)(eF,{strong:!0,children:"重置后将恢复为："}),(0,r.jsxs)("ul",{style:{marginTop:8,paddingLeft:20},children:[(0,r.jsx)("li",{children:"✅ 默认网站标题和信息"}),(0,r.jsx)("li",{children:"✅ 默认主题集合（渐变紫、晨光蓝、夜空）"}),(0,r.jsx)("li",{children:"✅ 默认链接分类和示例链接"}),(0,r.jsx)("li",{children:"✅ 默认搜索引擎（百度、谷歌、必应）"})]})]}),(0,r.jsx)("div",{style:{background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"6px",padding:"12px"},children:(0,r.jsxs)(P.A,{children:[(0,r.jsx)("input",{type:"checkbox",checked:u,onChange:e=>f(e.target.checked),id:"backup-checkbox"}),(0,r.jsx)("label",{htmlFor:"backup-checkbox",style:{cursor:"pointer"},children:(0,r.jsx)(eF,{style:{color:"#52c41a"},children:"在重置前自动导出完整备份（建议勾选）"})})]})})]})}),(0,r.jsx)(ee.A,{title:(0,r.jsxs)(P.A,{children:[(0,r.jsx)(eE.A,{style:{color:"#1890ff"}}),(0,r.jsx)("span",{children:"导入数据"})]}),open:x,onOk:B,onCancel:()=>{p(!1),y("")},okText:"开始导入",cancelText:"取消",okButtonProps:{loading:a},width:700,centered:!0,children:(0,r.jsxs)("div",{style:{padding:"20px 0"},children:[(0,r.jsx)(eI.A,{message:"数据导入说明",description:"支持导入之前导出的网站配置或完整备份文件，导入后将覆盖对应的配置项",type:"info",showIcon:!0,style:{marginBottom:20}}),(0,r.jsxs)("div",{style:{marginBottom:16},children:[(0,r.jsx)(eF,{strong:!0,children:"导入类型："}),(0,r.jsx)("div",{style:{marginTop:8},children:(0,r.jsxs)(P.A,{children:[(0,r.jsx)(M.Ay,{type:"config"===b?"primary":"default",onClick:()=>A("config"),size:"small",children:"\uD83C\uDF10 网站配置"}),(0,r.jsx)(M.Ay,{type:"full"===b?"primary":"default",onClick:()=>A("full"),size:"small",children:"\uD83D\uDCCB 完整备份"})]})})]}),(0,r.jsxs)("div",{style:{marginBottom:16},children:[(0,r.jsx)(eF,{strong:!0,children:"选择文件："}),(0,r.jsx)("div",{style:{marginTop:8},children:(0,r.jsx)("input",{type:"file",accept:".json",onChange:e=>{var t;let i=null==(t=e.target.files)?void 0:t[0];if(!i)return;if("application/json"!==i.type&&!i.name.endsWith(".json"))return void V.Ay.error("请选择JSON格式的文件");let r=new FileReader;r.onload=e=>{var t;let i=null==(t=e.target)?void 0:t.result;y(i);try{let e=JSON.parse(i);e.site&&e.theme&&e.links?(A("full"),V.Ay.info("检测到完整备份文件")):e.title&&e.copyright&&(A("config"),V.Ay.info("检测到网站配置文件"))}catch{}},r.readAsText(i)},style:{padding:"8px",border:"1px solid #d9d9d9",borderRadius:"6px",width:"100%"}})})]}),(0,r.jsxs)("div",{style:{marginBottom:16},children:[(0,r.jsx)(eF,{strong:!0,children:"或手动粘贴JSON数据："}),(0,r.jsx)("div",{style:{marginTop:8},children:(0,r.jsx)(L.A.TextArea,{value:j,onChange:e=>y(e.target.value),placeholder:"config"===b?"粘贴网站配置的JSON数据...":"粘贴完整备份的JSON数据...",rows:8,style:{fontFamily:"monospace",fontSize:"12px"}})})]}),j&&(0,r.jsxs)("div",{children:[(0,r.jsx)(eF,{strong:!0,children:"数据预览："}),(0,r.jsx)("div",{style:{marginTop:8,background:"#f5f5f5",padding:"12px",borderRadius:"6px",maxHeight:"150px",overflow:"auto"},children:(0,r.jsx)("pre",{style:{margin:0,fontSize:"11px",color:"#666"},children:(()=>{try{let e=JSON.parse(j);return JSON.stringify(e,null,2).substring(0,500)+(JSON.stringify(e).length>500?"...":"")}catch{return"无效的JSON格式"}})()})})]})]})}),(0,r.jsx)(ee.A,{title:(0,r.jsxs)(P.A,{children:[(0,r.jsx)(el.A,{style:{color:"#52c41a"}}),(0,r.jsx)("span",{children:"当前网站配置预览"})]}),open:g,onCancel:()=>m(!1),footer:[(0,r.jsx)(M.Ay,{onClick:()=>{let e="data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(F(),null,2)),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download",`turnip-config-preview-${new Date().toISOString().split("T")[0]}.json`),t.click(),V.Ay.success("配置预览已导出")},children:"导出预览"},"export"),(0,r.jsx)(M.Ay,{type:"primary",onClick:()=>m(!1),children:"关闭"},"close")],width:900,centered:!0,style:{top:20},children:(e=F(),(0,r.jsxs)("div",{style:{maxHeight:"70vh",overflow:"auto"},children:[(0,r.jsx)(Q.A,{size:"small",title:"\uD83C\uDF10 网站基本信息",style:{marginBottom:16},children:(0,r.jsxs)(U.A,{gutter:[16,8],children:[(0,r.jsxs)(X.A,{span:12,children:[(0,r.jsx)(eF,{strong:!0,children:"网站标题："}),(0,r.jsx)("div",{style:{marginTop:4,padding:"4px 8px",background:"#f5f5f5",borderRadius:"4px"},children:e.site.title})]}),(0,r.jsxs)(X.A,{span:12,children:[(0,r.jsx)(eF,{strong:!0,children:"作者："}),(0,r.jsx)("div",{style:{marginTop:4,padding:"4px 8px",background:"#f5f5f5",borderRadius:"4px"},children:e.site.author})]}),(0,r.jsxs)(X.A,{span:24,children:[(0,r.jsx)(eF,{strong:!0,children:"版权信息："}),(0,r.jsx)("div",{style:{marginTop:4,padding:"4px 8px",background:"#f5f5f5",borderRadius:"4px"},children:e.site.copyright})]}),(0,r.jsxs)(X.A,{span:24,children:[(0,r.jsx)(eF,{strong:!0,children:"网站描述："}),(0,r.jsx)("div",{style:{marginTop:4,padding:"4px 8px",background:"#f5f5f5",borderRadius:"4px"},children:e.site.description})]}),(0,r.jsxs)(X.A,{span:12,children:[(0,r.jsx)(eF,{strong:!0,children:"关键词："}),(0,r.jsx)("div",{style:{marginTop:4,padding:"4px 8px",background:"#f5f5f5",borderRadius:"4px"},children:e.site.keywords})]}),(0,r.jsxs)(X.A,{span:12,children:[(0,r.jsx)(eF,{strong:!0,children:"网站图标："}),(0,r.jsx)("div",{style:{marginTop:4,padding:"4px 8px",background:"#f5f5f5",borderRadius:"4px"},children:e.site.favicon})]})]})}),(0,r.jsx)(Q.A,{size:"small",title:"\uD83C\uDFA8 主题配置",style:{marginBottom:16},children:(0,r.jsxs)(U.A,{gutter:[16,8],children:[(0,r.jsx)(X.A,{span:24,children:(0,r.jsxs)("div",{style:{marginBottom:12},children:[(0,r.jsx)(eF,{strong:!0,children:"当前默认主题："}),(0,r.jsx)("div",{style:{marginTop:8,padding:"12px",border:"1px solid #d9d9d9",borderRadius:"8px",background:"#fafafa"},children:(0,r.jsxs)(U.A,{align:"middle",gutter:16,children:[(0,r.jsx)(X.A,{span:4,children:(0,r.jsx)("div",{style:{width:60,height:30,background:e.theme.default.backgroundImage,borderRadius:"4px",border:"1px solid #d9d9d9"}})}),(0,r.jsx)(X.A,{span:20,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(eF,{strong:!0,children:e.theme.default.name}),(0,r.jsx)("br",{}),(0,r.jsxs)(eF,{type:"secondary",style:{fontSize:"12px"},children:["模糊度: ",e.theme.default.blur," | 透明度: ",Math.round(100*e.theme.default.opacity),"%"]})]})})]})})]})}),(0,r.jsxs)(X.A,{span:24,children:[(0,r.jsxs)(eF,{strong:!0,children:["预设主题 (",e.theme.presets.length," 个)："]}),(0,r.jsx)("div",{style:{marginTop:8},children:e.theme.presets.length>0?(0,r.jsx)(U.A,{gutter:[8,8],children:e.theme.presets.map((e,t)=>(0,r.jsx)(X.A,{span:8,children:(0,r.jsxs)("div",{style:{padding:"8px",border:"1px solid #d9d9d9",borderRadius:"6px",background:"#fafafa"},children:[(0,r.jsx)("div",{style:{width:"100%",height:20,background:e.backgroundImage,borderRadius:"3px",marginBottom:"4px"}}),(0,r.jsx)(eF,{style:{fontSize:"12px"},children:e.name})]})},e.id))}):(0,r.jsx)("div",{style:{padding:"20px",textAlign:"center",color:"#999"},children:"暂无预设主题"})})]})]})}),(0,r.jsxs)(Q.A,{size:"small",title:"\uD83D\uDD17 链接数据",style:{marginBottom:16},children:[(0,r.jsxs)(U.A,{gutter:[16,8],style:{marginBottom:16},children:[(0,r.jsx)(X.A,{span:8,children:(0,r.jsx)(eS.A,{title:"分类数量",value:e.links.totalCategories,valueStyle:{color:"#1890ff",fontSize:"18px"}})}),(0,r.jsx)(X.A,{span:8,children:(0,r.jsx)(eS.A,{title:"链接数量",value:e.links.totalLinks,valueStyle:{color:"#52c41a",fontSize:"18px"}})}),(0,r.jsx)(X.A,{span:8,children:(0,r.jsx)(eS.A,{title:"搜索引擎",value:e.links.totalSearchEngines,valueStyle:{color:"#fa8c16",fontSize:"18px"}})})]}),e.links.categories.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsx)(eF,{strong:!0,children:"分类详情："}),(0,r.jsx)("div",{style:{marginTop:8,maxHeight:200,overflow:"auto"},children:e.links.categories.map(e=>{var t;return(0,r.jsxs)("div",{style:{marginBottom:"8px",padding:"8px",border:"1px solid #f0f0f0",borderRadius:"4px",background:"#fafafa"},children:[(0,r.jsxs)(U.A,{justify:"space-between",align:"middle",children:[(0,r.jsx)(X.A,{children:(0,r.jsx)(eF,{strong:!0,children:e.name})}),(0,r.jsx)(X.A,{children:(0,r.jsxs)(eF,{type:"secondary",children:[(null==(t=e.links)?void 0:t.length)||0," 个链接"]})})]}),e.links&&e.links.length>0&&(0,r.jsxs)("div",{style:{marginTop:4,fontSize:"12px",color:"#666"},children:[e.links.slice(0,3).map(e=>e.icon+" "+(e.name||"未命名")).join(", "),e.links.length>3&&"..."]})]},e.id)})})]})]}),(0,r.jsx)(Q.A,{size:"small",title:"⚙️ 系统信息",children:(0,r.jsxs)(U.A,{gutter:[16,8],children:[(0,r.jsxs)(X.A,{span:8,children:[(0,r.jsx)(eF,{strong:!0,children:"存储大小："}),(0,r.jsx)("div",{style:{marginTop:4},children:(0,r.jsxs)(eF,{children:[e.system.storageSize," KB"]})})]}),(0,r.jsxs)(X.A,{span:8,children:[(0,r.jsx)(eF,{strong:!0,children:"版本信息："}),(0,r.jsx)("div",{style:{marginTop:4},children:(0,r.jsx)(eF,{children:e.system.version})})]}),(0,r.jsxs)(X.A,{span:8,children:[(0,r.jsx)(eF,{strong:!0,children:"生成时间："}),(0,r.jsx)("div",{style:{marginTop:4},children:(0,r.jsx)(eF,{style:{fontSize:"12px"},children:new Date(e.system.lastModified).toLocaleString("zh-CN")})})]})]})})]}))})]})};var eY=i(3976),eN=i(69),eG=i(4824),eK=i(6702),eJ=i(7631),eM=i(3631),eP=i(5691),eL=i(1575),eq=i(5464),eV=i(4112),eH=i(4326),eW=i(1961),eU=i(9679),eX=i(2435),eQ=i(1074),eZ=i(57),e0=i(3424),e1=i(1819),e2=i(6273),e5=i(8578),e4=i(5611),e6=i(4668),e8=i(3164),e3=i(3547);let{Title:e9,Paragraph:e7,Text:te,Link:tt}=J.A,{Option:ti}=et.A,{Step:tr}=eY.A,{TabPane:tn}=eN.A,{Panel:ts}=eG.A,ta=()=>{let[e,t]=(0,n.useState)(!1),[i,s]=(0,n.useState)(!1),[a,l]=(0,n.useState)(!1),[o,d]=(0,n.useState)(!1),[c,h]=(0,n.useState)(50),[x,p]=(0,n.useState)(4),[g,m]=(0,n.useState)(1),[u]=q.A.useForm(),f=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"地址",dataIndex:"address",key:"address"},{title:"状态",dataIndex:"status",key:"status",render:e=>(0,r.jsx)(eK.A,{status:"active"===e?"success":"default",text:"active"===e?"活跃":"非活跃"})}],j=(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"这是一个 Popover 组件的内容"}),(0,r.jsx)("p",{children:"可以包含任意的 React 元素"})]});return(0,r.jsxs)("div",{style:{padding:24},children:[(0,r.jsxs)(e9,{level:2,children:[(0,r.jsx)(e1.A,{})," Ant Design 组件展示面板"]}),(0,r.jsx)(e7,{children:"这个面板展示了 Ant Design 在本项目中的集成效果，包含了常用组件的使用示例。 所有组件都支持主题切换，并与项目的整体设计保持一致。"}),(0,r.jsxs)(eN.A,{defaultActiveKey:"1",children:[(0,r.jsxs)(tn,{tab:"基础组件",children:[(0,r.jsxs)(eM.A,{orientation:"left",children:[(0,r.jsx)(e2.A,{})," 按钮组件"]}),(0,r.jsxs)(P.A,{wrap:!0,style:{marginBottom:16},children:[(0,r.jsx)(M.Ay,{type:"primary",children:"主要按钮"}),(0,r.jsx)(M.Ay,{children:"默认按钮"}),(0,r.jsx)(M.Ay,{type:"dashed",children:"虚线按钮"}),(0,r.jsx)(M.Ay,{type:"text",children:"文本按钮"}),(0,r.jsx)(M.Ay,{type:"link",children:"链接按钮"}),(0,r.jsx)(M.Ay,{type:"primary",danger:!0,children:"危险按钮"}),(0,r.jsx)(M.Ay,{type:"primary",loading:e,onClick:()=>t(!e),children:e?"加载中":"切换加载"}),(0,r.jsx)(M.Ay,{icon:(0,r.jsx)(e5.A,{}),children:"图标按钮"})]}),(0,r.jsx)(eM.A,{orientation:"left",children:"反馈组件"}),(0,r.jsxs)(P.A,{direction:"vertical",style:{width:"100%",marginBottom:16},children:[(0,r.jsx)(eI.A,{message:"信息提示",type:"info",showIcon:!0}),(0,r.jsx)(eI.A,{message:"成功提示",type:"success",showIcon:!0,closable:!0}),(0,r.jsx)(eI.A,{message:"警告提示",type:"warning",showIcon:!0}),(0,r.jsx)(eI.A,{message:"错误提示",type:"error",showIcon:!0}),(0,r.jsxs)(P.A,{wrap:!0,children:[(0,r.jsx)(M.Ay,{onClick:()=>{eJ.Ay.success({message:"操作成功",description:"这是一个成功的通知消息示例，展示了 Ant Design 的 notification 组件功能。",placement:"topRight",duration:4})},children:"显示通知"}),(0,r.jsx)(M.Ay,{onClick:()=>{V.Ay.success("这是一个成功的消息提示")},children:"成功消息"}),(0,r.jsx)(M.Ay,{onClick:()=>{V.Ay.warning("这是一个警告消息")},children:"警告消息"}),(0,r.jsx)(M.Ay,{onClick:()=>{V.Ay.error("这是一个错误消息")},children:"错误消息"}),(0,r.jsx)(M.Ay,{onClick:()=>s(!0),children:"打开模态框"}),(0,r.jsx)(M.Ay,{onClick:()=>l(!0),children:"打开抽屉"})]})]}),(0,r.jsx)(eM.A,{orientation:"left",children:"数据展示"}),(0,r.jsxs)(U.A,{gutter:[16,16],style:{marginBottom:16},children:[(0,r.jsx)(X.A,{span:12,children:(0,r.jsx)(Q.A,{title:"进度和评分",size:"small",children:(0,r.jsxs)(P.A,{direction:"vertical",style:{width:"100%"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(te,{children:"进度条:"}),(0,r.jsx)(eP.A,{percent:75,status:"active"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(te,{children:"环形进度:"}),(0,r.jsx)(eP.A,{type:"circle",percent:60,width:60})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(te,{children:"评分:"}),(0,r.jsx)(eL.A,{value:x,onChange:p}),(0,r.jsxs)(te,{style:{marginLeft:8},children:[x," 星"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(te,{children:"标签:"}),(0,r.jsxs)(P.A,{children:[(0,r.jsx)(eq.A,{color:"blue",children:"React"}),(0,r.jsx)(eq.A,{color:"green",children:"TypeScript"}),(0,r.jsx)(eq.A,{color:"orange",children:"Ant Design"}),(0,r.jsx)(eq.A,{color:"purple",children:"Emotion"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(te,{children:"徽章:"}),(0,r.jsxs)(P.A,{children:[(0,r.jsx)(eK.A,{count:5,children:(0,r.jsx)(en.A,{shape:"square",icon:(0,r.jsx)(e4.A,{})})}),(0,r.jsx)(eK.A,{dot:!0,children:(0,r.jsx)(en.A,{shape:"square",icon:(0,r.jsx)(e4.A,{})})}),(0,r.jsx)(eK.A,{count:99,overflowCount:10,children:(0,r.jsx)(en.A,{shape:"square",icon:(0,r.jsx)(e4.A,{})})})]})]})]})})}),(0,r.jsx)(X.A,{span:12,children:(0,r.jsxs)(Q.A,{title:"步骤条",size:"small",children:[(0,r.jsxs)(eY.A,{current:g,size:"small",style:{marginBottom:16},children:[(0,r.jsx)(tr,{title:"已完成",description:"第一步完成"}),(0,r.jsx)(tr,{title:"进行中",description:"当前步骤"}),(0,r.jsx)(tr,{title:"等待中",description:"待执行"})]}),(0,r.jsxs)(P.A,{children:[(0,r.jsx)(M.Ay,{size:"small",onClick:()=>m(Math.max(0,g-1)),children:"上一步"}),(0,r.jsx)(M.Ay,{type:"primary",size:"small",onClick:()=>m(Math.min(2,g+1)),children:"下一步"})]})]})})]})]},"1"),(0,r.jsx)(tn,{tab:"表单组件",children:(0,r.jsxs)(U.A,{gutter:[16,16],children:[(0,r.jsx)(X.A,{span:12,children:(0,r.jsx)(Q.A,{title:"表单控件",size:"small",children:(0,r.jsxs)(q.A,{form:u,onFinish:e=>{console.log("表单提交:",e),V.Ay.success("表单提交成功！数据已记录到控制台")},layout:"vertical",children:[(0,r.jsx)(q.A.Item,{name:"username",label:"用户名",rules:[{required:!0,message:"请输入用户名"}],children:(0,r.jsx)(L.A,{prefix:(0,r.jsx)(e4.A,{}),placeholder:"请输入用户名"})}),(0,r.jsx)(q.A.Item,{name:"email",label:"邮箱",children:(0,r.jsx)(L.A,{type:"email",placeholder:"请输入邮箱"})}),(0,r.jsx)(q.A.Item,{name:"city",label:"城市",children:(0,r.jsxs)(et.A,{placeholder:"请选择城市",children:[(0,r.jsx)(ti,{value:"beijing",children:"北京"}),(0,r.jsx)(ti,{value:"shanghai",children:"上海"}),(0,r.jsx)(ti,{value:"guangzhou",children:"广州"}),(0,r.jsx)(ti,{value:"shenzhen",children:"深圳"})]})}),(0,r.jsx)(q.A.Item,{name:"date",label:"日期",children:(0,r.jsx)(eV.A,{style:{width:"100%"}})}),(0,r.jsx)(q.A.Item,{name:"time",label:"时间",children:(0,r.jsx)(eH.A,{style:{width:"100%"}})}),(0,r.jsx)(q.A.Item,{children:(0,r.jsx)(M.Ay,{type:"primary",htmlType:"submit",children:"提交表单"})})]})})}),(0,r.jsx)(X.A,{span:12,children:(0,r.jsx)(Q.A,{title:"其他控件",size:"small",children:(0,r.jsxs)(P.A,{direction:"vertical",style:{width:"100%"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(te,{children:"开关:"}),(0,r.jsx)(eW.A,{checked:o,onChange:d,style:{marginLeft:8}}),(0,r.jsx)(te,{style:{marginLeft:8},children:o?"开启":"关闭"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(te,{children:"滑动条:"}),(0,r.jsx)(eb.A,{value:c,onChange:h,style:{margin:"0 8px"}}),(0,r.jsxs)(te,{children:["值: ",c]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(te,{children:"复选框:"}),(0,r.jsxs)(eU.A.Group,{style:{marginLeft:8},children:[(0,r.jsx)(eU.A,{value:"option1",children:"选项1"}),(0,r.jsx)(eU.A,{value:"option2",children:"选项2"}),(0,r.jsx)(eU.A,{value:"option3",children:"选项3"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(te,{children:"单选框:"}),(0,r.jsxs)(eX.A.Group,{style:{marginLeft:8},children:[(0,r.jsx)(eX.A,{value:"a",children:"选项A"}),(0,r.jsx)(eX.A,{value:"b",children:"选项B"}),(0,r.jsx)(eX.A,{value:"c",children:"选项C"})]})]})]})})})]})},"2"),(0,r.jsxs)(tn,{tab:"数据展示",children:[(0,r.jsxs)(U.A,{gutter:[16,16],children:[(0,r.jsx)(X.A,{span:12,children:(0,r.jsx)(Q.A,{title:"表格组件",size:"small",children:(0,r.jsx)(Z.A,{dataSource:[{key:"1",name:"张三",age:32,address:"北京市朝阳区",status:"active"},{key:"2",name:"李四",age:28,address:"上海市浦东区",status:"inactive"},{key:"3",name:"王五",age:35,address:"广州市天河区",status:"active"}],columns:f,pagination:{pageSize:5},size:"small"})})}),(0,r.jsx)(X.A,{span:12,children:(0,r.jsx)(Q.A,{title:"列表组件",size:"small",children:(0,r.jsx)(H.A,{itemLayout:"horizontal",dataSource:[{title:"Ant Design 组件库",description:"企业级 UI 设计语言和 React 组件库",avatar:"\uD83C\uDFA8"},{title:"React 19",description:"用于构建用户界面的 JavaScript 库",avatar:"⚛️"},{title:"TypeScript",description:"JavaScript 的强类型超集",avatar:"\uD83D\uDCD8"},{title:"Emotion.js",description:"高性能的 CSS-in-JS 库",avatar:"\uD83D\uDC85"}],size:"small",renderItem:e=>(0,r.jsx)(H.A.Item,{actions:[(0,r.jsx)(M.Ay,{type:"link",children:"编辑"},"edit"),(0,r.jsx)(M.Ay,{type:"link",children:"更多"},"more")],children:(0,r.jsx)(H.A.Item.Meta,{avatar:(0,r.jsx)(en.A,{style:{backgroundColor:"#1890ff"},children:e.avatar}),title:e.title,description:e.description})})})})})]}),(0,r.jsx)(eM.A,{}),(0,r.jsx)(Q.A,{title:"折叠面板",size:"small",children:(0,r.jsxs)(eG.A,{children:[(0,r.jsxs)(ts,{header:"面板1 - 基础信息",children:[(0,r.jsx)("p",{children:"这是第一个面板的内容。可以包含任意的React组件。"}),(0,r.jsx)(M.Ay,{type:"primary",size:"small",children:"操作按钮"})]},"1"),(0,r.jsxs)(ts,{header:"面板2 - 高级设置",children:[(0,r.jsx)("p",{children:"这是第二个面板的内容。支持嵌套组件和交互功能。"}),(0,r.jsxs)(P.A,{children:[(0,r.jsx)(M.Ay,{size:"small",children:"确定"}),(0,r.jsx)(M.Ay,{size:"small",children:"取消"})]})]},"2"),(0,r.jsx)(ts,{header:"面板3 - 帮助信息",children:(0,r.jsx)("p",{children:"这是第三个面板的内容。可以用来展示帮助文档或说明。"})},"3")]})})]},"3"),(0,r.jsxs)(tn,{tab:"导航组件",children:[(0,r.jsx)(Q.A,{title:"面包屑导航",size:"small",style:{marginBottom:16},children:(0,r.jsxs)(eQ.A,{children:[(0,r.jsx)(eQ.A.Item,{href:"",children:(0,r.jsx)(e6.A,{})}),(0,r.jsxs)(eQ.A.Item,{href:"",children:[(0,r.jsx)(e4.A,{}),(0,r.jsx)("span",{children:"用户管理"})]}),(0,r.jsx)(eQ.A.Item,{children:"用户列表"}),(0,r.jsx)(eQ.A.Item,{children:"用户详情"})]})}),(0,r.jsx)(Q.A,{title:"交互组件",size:"small",children:(0,r.jsxs)(P.A,{wrap:!0,children:[(0,r.jsx)(ei.A,{title:"这是一个提示信息",children:(0,r.jsx)(M.Ay,{children:"悬停提示"})}),(0,r.jsx)(eZ.A,{content:j,title:"弹出框标题",children:(0,r.jsx)(M.Ay,{children:"点击弹出"})}),(0,r.jsx)(M.Ay,{icon:(0,r.jsx)(e8.A,{}),children:"点赞"}),(0,r.jsx)(M.Ay,{icon:(0,r.jsx)(e3.A,{}),type:"primary",danger:!0,children:"收藏"})]})})]},"4")]}),(0,r.jsxs)(ee.A,{title:"模态框示例",open:i,onOk:()=>s(!1),onCancel:()=>s(!1),width:500,children:[(0,r.jsx)("p",{children:"这是一个模态框的内容示例。"}),(0,r.jsx)("p",{children:"模态框支持各种配置选项："}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"自定义宽度和高度"}),(0,r.jsx)("li",{children:"确定和取消按钮"}),(0,r.jsx)("li",{children:"遮罩层点击关闭"}),(0,r.jsx)("li",{children:"键盘ESC关闭"})]}),(0,r.jsx)(eI.A,{message:"提示",description:"模态框内可以嵌套任意组件",type:"info",showIcon:!0})]}),(0,r.jsx)(e0.A,{title:"抽屉组件示例",placement:"right",onClose:()=>l(!1),open:a,width:400,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(e9,{level:4,children:"抽屉内容"}),(0,r.jsx)(e7,{children:"抽屉组件可以从四个方向滑出，常用于展示详细信息或者侧边栏导航。"}),(0,r.jsx)(eM.A,{}),(0,r.jsxs)(P.A,{direction:"vertical",style:{width:"100%"},children:[(0,r.jsx)(M.Ay,{type:"primary",block:!0,children:"主要操作"}),(0,r.jsx)(M.Ay,{block:!0,children:"次要操作"}),(0,r.jsx)(M.Ay,{danger:!0,block:!0,onClick:()=>l(!1),children:"关闭抽屉"})]}),(0,r.jsx)(eM.A,{}),(0,r.jsx)(eI.A,{message:"功能说明",description:"抽屉组件适用于需要临时显示大量信息的场景",type:"success",showIcon:!0})]})})]})},tl=e=>{switch(console.log("AdminPanel",e.config),e.config){case 0:return(0,r.jsx)(ew,{});case 1:return(0,r.jsx)(eR,{});case 2:return(0,r.jsx)(ey,{});case 3:return(0,r.jsx)(ta,{});default:return(0,r.jsx)("div",{children:"未知面板"})}},to=[{name:"链接配置面板",type:"default",value:2},{name:"主题配置面板",type:"primary",value:0},{name:"网站配置面板",type:"dashed",value:1},{name:"Ant Design 展示",type:"link",value:3}],td=e=>{let{visibleAdmin:t,setIsShowAdmin:i,setVisibleAdmin:n,setToConfig:s,isShowAdmin:a}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(ee.A,{title:"选择管理面板",footer:[(0,r.jsx)(M.Ay,{style:{display:t?"":"none"},onClick:()=>{i(!1),n(!1)},children:"退出面板"},"back")],open:a,onCancel:()=>i(!1),width:800,children:(0,r.jsx)(U.A,{gutter:[16,16],children:to.map((e,t)=>(0,r.jsx)(X.A,{span:12,children:(0,r.jsx)(Q.A,{hoverable:!0,onClick:()=>{switch(console.log("toAdmin",e),e.value){case 2:s(2);break;case 0:s(0);break;case 1:s(1);break;case 3:s(3);break;default:n(!0)}n(!0),i(!1)},style:{height:"120px",cursor:"pointer"},children:(0,r.jsxs)(P.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,r.jsx)("div",{style:{fontSize:"24px",color:"#1890ff"},children:(e=>{switch(e){case 2:return(0,r.jsx)(ec.A,{});case 0:return(0,r.jsx)(eA.A,{});case 1:return(0,r.jsx)(eC.A,{});case 3:return(0,r.jsx)(e1.A,{});default:return null}})(e.value)}),(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:e.name}),(0,r.jsx)("div",{style:{fontSize:"12px",color:"#666"},children:(e=>{switch(e){case 2:return"管理链接分类和搜索引擎配置";case 0:return"自定义主题风格和外观设置";case 1:return"网站基本信息和SEO配置";case 3:return"查看Ant Design组件展示";default:return""}})(e.value)})]})]})})},t))})})})};var tc=i(6458);let th=(0,tc.i7)`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,tx=(0,tc.i7)`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
`,tp=l.A.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${e=>{var t,i;return(null==(t=e.theme)?void 0:t.id)==="custom"&&(null==(i=e.theme)?void 0:i.name)==="暗黑主题"?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)"}};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${th} 0.5s ease-out;
`,tg=l.A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,tm=l.A.div`
  width: 60px;
  height: 60px;
  border: 4px solid ${e=>{var t,i;return(null==(t=e.theme)?void 0:t.id)==="custom"&&(null==(i=e.theme)?void 0:i.name)==="暗黑主题"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}};
  border-top: 4px solid #4a90e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,tu=l.A.div`
  color: ${e=>{var t,i;return(null==(t=e.theme)?void 0:t.id)==="custom"&&(null==(i=e.theme)?void 0:i.name)==="暗黑主题"?"#ffffff":"#2c3e50"}};
  font-size: 1.1rem;
  font-weight: 500;
  animation: ${tx} 2s ease-in-out infinite;
  text-align: center;
  max-width: 300px;
`,tf=l.A.div`
  font-size: 3rem;
  animation: ${tx} 1.5s ease-in-out infinite;
  margin-bottom: 1rem;
`,tj=e=>{let{theme:t,text:i="正在加载精彩内容..."}=e;return(0,r.jsx)(tp,{theme:t,children:(0,r.jsxs)(tg,{children:[(0,r.jsx)(tf,{children:"\uD83D\uDE80"}),(0,r.jsx)(tm,{theme:t}),(0,r.jsx)(tu,{theme:t,children:i})]})})},ty=l.A.button`
  opacity: 0.5; /* 默认透明度 */
  background-color: transparent; /* 默认背景颜色设置为透明 */
  border: none; /* 去掉边框 */
  color: white; /* 默认字体颜色为蓝色 */
  transition: opacity 0.3s ease; /* 过渡效果 */
  cursor: pointer; /* 显示鼠标小手 */
  &:focus {
    outline: none; /* 去掉焦点时的边框 */
  }

  &:hover {
    opacity: 1; /* 鼠标悬停时的透明度 */
    background-color: transparent; /* 鼠标悬停时背景颜色仍为透明 */
  }
`,tb=l.A.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  padding: 2rem 0 1rem;
  
  /* 添加纻丽的动画效果 */
  animation: fadeInDown 0.8s ease-out;
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,tA=l.A.h1`
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  font-weight: 800;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  letter-spacing: -0.02em;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)":"linear-gradient(135deg, #2c3e50 0%, #4a90e2 50%, #2c3e50 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* 加入一些活力 */
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    filter: brightness(1.1);
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: -0.01em;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`,tv=l.A.main`
  max-width: 1200px;
  margin: 0 auto;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(0, 0, 0, 0.4)":"rgba(255, 255, 255, 0.65)"};
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 
    0 12px 40px 0 rgba(31, 38, 135, 0.2),
    0 2px 16px 0 rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  /* 动画效果 */
  animation: fadeInUp 0.8s ease-out 0.2s both;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* 响应式设计 */
  @media (max-width: 768px) {
    margin: 0 1rem;
    padding: 20px;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    margin: 0 0.5rem;
    padding: 16px;
    border-radius: 12px;
  }
`,tk=l.A.footer`
  text-align: center;
  padding: 24px 20px;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
  font-size: 14px;
  opacity: 0.8;
  margin-top: 2.5rem;
  
  /* 动画效果 */
  animation: fadeIn 1s ease-out 0.4s both;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
    font-size: 13px;
    margin-top: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 16px 12px;
    font-size: 12px;
    margin-top: 1.5rem;
  }
`,{Text:tw}=J.A,tS=e=>{let{cb:t}=e,i=I.getConfig(),[s,a]=(0,n.useState)(z.getAllCategories()),l=z.getAllSearchEngines(),[o,d]=(0,n.useState)(""),[c,h]=(0,n.useState)(!0);(0,n.useMemo)(()=>{let e=JSON.parse(localStorage.getItem("turnip_link_categories")||"[]");console.log("localCategories",e),a(e),setTimeout(()=>h(!1),100)},[]),(0,n.useEffect)(()=>{let e=()=>{let e=new Date().getHours();e<6?d("\uD83C\uDF19 夜深了，注意休息"):e<11?d("\uD83C\uDF05 早上好，新的一天开始了"):e<14?d("☀️ 午安，享受美好时光"):e<18?d("\uD83C\uDF24️ 下午好，继续加油"):e<22?d("\uD83C\uDF06 晚上好，放松一下吧"):d("\uD83C\uDF03 夜晚时光，愿你安好")};e();let t=setInterval(e,6e4);return()=>clearInterval(t)},[]);let x=D.getConfig(),p=s.reduce((e,t)=>{var i;return e+((null==(i=t.links)?void 0:i.length)||0)},0);return c?(0,r.jsx)(tj,{theme:i.default,text:"正在初始化精彩内容..."}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tb,{children:(0,r.jsx)("div",{style:{position:"relative",width:"100%"},children:(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[(0,r.jsx)(tA,{children:x.title}),(0,r.jsxs)(P.A,{direction:"vertical",align:"center",style:{marginTop:"0.5rem",textAlign:"center"},children:[(0,r.jsx)(tw,{style:{fontSize:"1rem",opacity:.9,color:"custom"===i.default.id&&"暗黑主题"===i.default.name?"#ffffff":"#2c3e50"},children:o}),(0,r.jsxs)(P.A,{size:"large",children:[(0,r.jsx)(P.A,{children:(0,r.jsxs)(tw,{style:{fontSize:"0.875rem",opacity:.7,color:"custom"===i.default.id&&"暗黑主题"===i.default.name?"#ffffff":"#666"},children:["\uD83D\uDCC1 ",s.length," 个分类"]})}),(0,r.jsx)(P.A,{children:(0,r.jsxs)(tw,{style:{fontSize:"0.875rem",opacity:.7,color:"custom"===i.default.id&&"暗黑主题"===i.default.name?"#ffffff":"#666"},children:["\uD83D\uDD17 ",p," 个链接"]})})]})]})]})})}),(0,r.jsxs)(tv,{children:[(0,r.jsx)(g,{searchEngines:l}),(0,r.jsx)(A,{categories:s})]}),(0,r.jsx)(N,{themeConfig:i,onSelect:t}),(0,r.jsx)(tk,{children:(0,r.jsxs)(P.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,r.jsx)(tw,{style:{color:"custom"===i.default.id&&"暗黑主题"===i.default.name?"#ffffff":"#2c3e50",opacity:.8},children:x.copyright.text}),x.author&&(0,r.jsxs)(tw,{style:{fontSize:"12px",color:"custom"===i.default.id&&"暗黑主题"===i.default.name?"#ffffff":"#666",opacity:.6},children:["Made with ❤️ by ",x.author]})]})})]})},tI="turnip-theme-active";var tC=i(7682),tT=i(9812),tz=i(4422);i(5961);let tE=document.getElementById("root");tE&&s.createRoot(tE).render((0,r.jsx)(n.StrictMode,{children:(0,r.jsx)(()=>{let[e,t]=(0,n.useState)(!1),[i,s]=(0,n.useState)(2),[l,o]=(0,n.useState)(!1),[d,c]=(e=>{let[t,i]=(0,n.useState)(()=>{try{let t=localStorage.getItem(tI);return t?JSON.parse(t):e.default}catch(t){return console.warn("Failed to parse saved theme:",t),e.default}});return(0,n.useEffect)(()=>{try{localStorage.setItem(tI,JSON.stringify(t))}catch(e){console.warn("Failed to save theme:",e)}},[t]),[t,i]})(I.getConfig()),h={algorithm:"custom"===d.id&&"暗黑主题"===d.name?tC.A.darkAlgorithm:tC.A.defaultAlgorithm,token:{colorPrimary:"#4a90e2",borderRadius:8,colorBgContainer:"custom"===d.id&&"暗黑主题"===d.name?"rgba(0, 0, 0, 0.6)":"rgba(255, 255, 255, 0.8)"},components:{Modal:{contentBg:"custom"===d.id&&"暗黑主题"===d.name?"rgba(0, 0, 0, 0.8)":"rgba(255, 255, 255, 0.95)"},Button:{borderRadius:6},Input:{borderRadius:6}}};return(0,r.jsx)(tT.Ay,{theme:h,children:(0,r.jsx)(tz.A,{children:(0,r.jsx)(a.a,{theme:d,children:(0,r.jsxs)(v,{theme:d,children:[(0,r.jsx)(K,{}),(0,r.jsx)(ty,{onClick:()=>o(!0),children:"管理面板"}),e?(0,r.jsx)(tl,{config:i}):(0,r.jsx)(tS,{cb:c}),(0,r.jsx)(td,{setVisibleAdmin:t,visibleAdmin:e,setToConfig:s,setIsShowAdmin:o,isShowAdmin:l})]})})})})},{})}))}},l={};function o(e){var t=l[e];if(void 0!==t)return t.exports;var i=l[e]={exports:{}};return a[e].call(i.exports,i,i.exports,o),i.exports}o.m=a,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(i,r){if(1&r&&(i=this(i)),8&r||"object"==typeof i&&i&&(4&r&&i.__esModule||16&r&&"function"==typeof i.then))return i;var n=Object.create(null);o.r(n);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&i;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach(e=>{s[e]=()=>i[e]});return s.default=()=>i,o.d(n,s),n},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i=[],o.O=(e,t,r,n)=>{if(t){n=n||0;for(var s=i.length;s>0&&i[s-1][2]>n;s--)i[s]=i[s-1];i[s]=[t,r,n];return}for(var a=1/0,s=0;s<i.length;s++){for(var[t,r,n]=i[s],l=!0,d=0;d<t.length;d++)(!1&n||a>=n)&&Object.keys(o.O).every(e=>o.O[e](t[d]))?t.splice(d--,1):(l=!1,n<a&&(a=n));if(l){i.splice(s--,1);var c=r();void 0!==c&&(e=c)}}return e},r={410:0},o.O.j=e=>0===r[e],n=(e,t)=>{var i,n,[s,a,l]=t,d=0;if(s.some(e=>0!==r[e])){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(l)var c=l(o)}for(e&&e(t);d<s.length;d++)n=s[d],o.o(r,n)&&r[n]&&r[n][0](),r[n]=0;return o.O(c)},(s=self.webpackChunkrs_react_app=self.webpackChunkrs_react_app||[]).forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s));var d=o.O(void 0,["783","540"],function(){return o(699)});d=o.O(d)})();