(()=>{"use strict";var e={946:function(e,t,r){var i=r(773),o=r(699),a=r(511),n=r(598),s=r(333);let d=s.Z.div`
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
  padding: 0 15px;

  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`,c=s.Z.form`
  display: flex;
  gap: 12px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 8px;
    flex-wrap: wrap;
  }
`,l=s.Z.input`
  flex: 1;
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#4a4a4a":"#e1e1e1"};
  border-radius: 25px;
  outline: none;
  transition: all 0.3s;
  -webkit-appearance: none;
  appearance: none;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#2d3436":"white"};
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#333333"};

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }

  &::placeholder {
    color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#888888":"#999999"};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 16px;
    order: 1;
  }
`,g=s.Z.select`
  padding: 0 0.5rem;
  border: 1px solid ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#4a4a4a":"#e1e1e1"};
  border-radius: 25px;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#2d3436":"white"};
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.3s;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cpath fill='${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"%23ffffff":"%23444444"}' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 30px;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#333333"};

  &:hover {
    border-color: #4a90e2;
  }

  @media (max-width: 768px) {
    order: 2;
    flex: 1;
    min-width: 120px;
    padding: 10px 30px 10px 16px;
  }
`,h=s.Z.button`
  padding: 0 24px;
  border: none;
  border-radius: 25px;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#2c3e50":"#3498db"};
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;

  &:hover {
    background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#1a252f":"#2980b9"};
  }

  @media (max-width: 768px) {
    order: 3;
    padding: 10px 20px;
    flex: 0 0 auto;
  }
`,m=e=>{let{searchEngines:t}=e,[r,a]=(0,o.useState)(""),[n,s]=(0,o.useState)(t[0].id);return(0,i.jsx)(d,{children:(0,i.jsxs)(c,{onSubmit:e=>{if(e.preventDefault(),!r.trim())return;let i=t.find(e=>e.id===n);i&&window.open(i.url+encodeURIComponent(r),"_blank")},children:[(0,i.jsx)(l,{type:"text",value:r,onChange:e=>a(e.target.value),placeholder:"输入搜索内容..."}),(0,i.jsx)(g,{value:n,onChange:e=>s(e.target.value),children:t.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.icon," ",e.name]},e.id))}),(0,i.jsx)(h,{type:"submit",children:"搜索"})]})})},p=s.Z.section`
  margin: 2rem 0;
  padding: 1rem;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(0, 0, 0, 0.2)":"rgba(255, 255, 255, 0.8)"};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,u=s.Z.h2`
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#333333"};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.1)":"#f0f0f0"};
`,f=s.Z.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,x=s.Z.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(0, 0, 0, 0.3)":"#f8f9fa"};
  border-radius: 12px;
  text-decoration: none;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#333333"};
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"0 4px 12px rgba(255, 255, 255, 0.1)":"0 4px 12px rgba(0, 0, 0, 0.1)"};
    background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.1)":"white"};
    color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#000000"};
  }
`,b=s.Z.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,S=s.Z.span`
  font-size: 0.9rem;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#cccccc":"#666666"};
`,v=e=>{let{categories:t}=e;return(0,i.jsx)(i.Fragment,{children:t.map(e=>(0,i.jsxs)(p,{children:[(0,i.jsx)(u,{children:e.name}),(0,i.jsx)(f,{children:e.links.map(e=>(0,i.jsxs)(x,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(b,{children:e.icon}),(0,i.jsx)(S,{children:e.name})]},e.id))})]},e.id))})},w=s.Z.div`
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
`;var E=r(438);class y{getConfig(){return this.config}getDefaultTheme(){return this.config.default}getPresets(){return this.config.presets}setDefaultTheme(e){this.config.default=e,this.saveToStorage()}addPreset(e){if(this.config.presets.some(t=>t.id===e.id))throw Error(`Theme with id ${e.id} already exists`);this.config.presets.push(e),this.saveToStorage()}updatePreset(e){let t=this.config.presets.findIndex(t=>t.id===e.id);if(-1===t)throw Error(`Theme with id ${e.id} not found`);this.config.presets[t]=e,this.saveToStorage()}deletePreset(e){let t=this.config.presets.findIndex(t=>t.id===e);if(-1===t)throw Error(`Theme with id ${e} not found`);this.config.presets.splice(t,1),this.saveToStorage()}findThemeById(e){return this.config.default.id===e?this.config.default:this.config.presets.find(t=>t.id===e)}loadFromStorage(){try{let e=localStorage.getItem(y.STORAGE_KEY);return e?JSON.parse(e):null}catch(e){return console.error("Failed to load theme config from storage:",e),null}}saveToStorage(){try{localStorage.setItem(y.STORAGE_KEY,JSON.stringify(this.config))}catch(e){console.error("Failed to save theme config to storage:",e)}}constructor(e){(0,E._)(this,"config",void 0),this.config=this.loadFromStorage()||e||{default:{id:"default",name:"默认主题",backgroundImage:"linear-gradient(120deg, #f6d365 0%, #fda085 100%)",blur:"10px",opacity:.95},presets:[]},this.saveToStorage()}}(0,E._)(y,"STORAGE_KEY","turnip-theme-config");let k=new y({default:{id:"default",name:"默认主题",backgroundImage:"linear-gradient(120deg, #f6d365 0%, #fda085 100%)",blur:"10px",opacity:.95},presets:[{id:"purple",name:"渐变紫",backgroundImage:"linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",blur:"10px",opacity:.95},{id:"morning",name:"晨光蓝",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",blur:"10px",opacity:.95},{id:"night",name:"夜空",backgroundImage:"linear-gradient(to right, #243949 0%, #517fa4 100%)",blur:"10px",opacity:.92}]}),I=new class{getFromStorage(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(e){return console.error(`Error reading from localStorage: ${e}`),null}}saveToStorage(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(`Error saving to localStorage: ${e}`)}}getCategoryById(e){return this.categories.find(t=>t.id===e)}addCategory(e){let t={id:this.categories.length?Math.max(...this.categories.map(e=>e.id))+1:0,name:e,links:[]};return this.categories.push(t),this.saveToStorage(this.CATEGORIES_KEY,this.categories),t}updateCategory(e,t){let r=this.getCategoryById(e);return!!r&&(r.name=t,this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0)}deleteCategory(e){let t=this.categories.findIndex(t=>t.id===e);return -1!==t&&(this.categories.splice(t,1),this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0)}addLink(e,t,r,i){let o=this.getCategoryById(e);if(!o)return!1;let a=o.links.length?Math.max(...o.links.map(e=>e.id))+1:1;return o.links.push({id:a,name:t,url:r,icon:i}),this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0}updateLink(e,t,r){let i=this.getCategoryById(e);if(!i)return!1;let o=i.links.find(e=>e.id===t);return!!o&&(Object.assign(o,r),this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0)}deleteLink(e,t){let r=this.getCategoryById(e);if(!r)return!1;let i=r.links.findIndex(e=>e.id===t);return -1!==i&&(r.links.splice(i,1),this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0)}getSearchEngineById(e){return this.engines.find(t=>t.id===e)}addSearchEngine(e,t,r,i){return!this.getSearchEngineById(e)&&(this.engines.push({id:e,name:t,url:r,icon:i}),this.saveToStorage(this.ENGINES_KEY,this.engines),!0)}updateSearchEngine(e,t){let r=this.getSearchEngineById(e);return!!r&&(Object.assign(r,t),this.saveToStorage(this.ENGINES_KEY,this.engines),!0)}deleteSearchEngine(e){let t=this.engines.findIndex(t=>t.id===e);return -1!==t&&(this.engines.splice(t,1),this.saveToStorage(this.ENGINES_KEY,this.engines),!0)}getAllCategories(){return[...this.categories]}getAllSearchEngines(){return[...this.engines]}clearStorage(){localStorage.removeItem(this.CATEGORIES_KEY),localStorage.removeItem(this.ENGINES_KEY)}resetToDefault(e,t){this.categories=[...e],this.engines=[...t],this.saveToStorage(this.CATEGORIES_KEY,this.categories),this.saveToStorage(this.ENGINES_KEY,this.engines)}constructor(e,t){(0,E._)(this,"categories",void 0),(0,E._)(this,"engines",void 0),(0,E._)(this,"CATEGORIES_KEY","turnip_link_categories"),(0,E._)(this,"ENGINES_KEY","turnip_search_engines");let r=this.getFromStorage(this.CATEGORIES_KEY),i=this.getFromStorage(this.ENGINES_KEY);this.categories=r||[...e],this.engines=i||[...t],r||this.saveToStorage(this.CATEGORIES_KEY,this.categories),i||this.saveToStorage(this.ENGINES_KEY,this.engines)}}([{id:0,name:"影音视频",links:[{id:1,name:"",url:"https://www.iqiyi.com/",icon:"爱奇艺"},{id:2,name:"",url:"https://www.youku.com/",icon:"优酷"},{id:3,name:"",url:"https://v.qq.com/",icon:"\uD83D\uDC27视频"},{id:4,name:"",url:"https://www.bilibili.com/",icon:"B站"},{id:5,name:"",url:"https://www.douyin.com/",icon:"抖音"}]},{id:1,name:"Turnip",links:[{id:1,name:"Turnip博客",url:"https://turnip1202.github.io/my-blog-astro/",icon:"\uD83E\uDD55"},{id:2,name:"GitHub",url:"https://github.com/Turnip1202",icon:"⭐"},{id:3,name:"稀土掘金",url:"https://juejin.cn/user/1684912023022440",icon:"\uD83D\uDD28"},{id:4,name:"哔哩哔哩",url:"https://b23.tv/zpySzz9",icon:"\uD83C\uDFAE"},{id:5,name:"抖音",url:"https://v.douyin.com/if78aSq9/",icon:"\uD83C\uDFAC"}]},{id:2,name:"开发工具",links:[{id:1,name:"GitHub",url:"https://github.com",icon:"\uD83D\uDC19"},{id:2,name:"VS Code",url:"https://code.visualstudio.com",icon:"\uD83D\uDCDD"},{id:3,name:"Stack Overflow",url:"https://stackoverflow.com",icon:"\uD83D\uDCA1"}]},{id:3,name:"学习资源",links:[{id:4,name:"TypeScript",url:"https://www.typescriptlang.org",icon:"\uD83D\uDCD8"},{id:5,name:"React Docs",url:"https://reactjs.org",icon:"⚛️"},{id:6,name:"掘金",url:"https://juejin.cn",icon:"\uD83C\uDFAF"}]}],[{id:"bing",name:"Bing",url:"https://www.bing.com/search?q=",icon:"\uD83D\uDD0E"},{id:"google",name:"Google",url:"https://www.google.com/search?q=",icon:"\uD83D\uDD0D"},{id:"baidu",name:"百度",url:"https://www.baidu.com/s?wd=",icon:"\uD83D\uDD0D"}]),T={title:"Turnip起始页",copyright:{text:`\xa9 ${new Date().getFullYear()} Turnip1202. All rights reserved.`}},j=new class{getFromStorage(){try{let e=localStorage.getItem(this.STORAGE_KEY);return e?JSON.parse(e):null}catch(e){return console.error(`读取本地存储出错: ${e}`),null}}saveToStorage(){try{localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.config))}catch(e){console.error(`保存到本地存储出错: ${e}`)}}getConfig(){return{...this.config}}updateTitle(e){this.config.title=e,this.saveToStorage()}updateCopyright(e){this.config.copyright.text=e,this.saveToStorage()}addConfigItem(e,t){this.config[e]=t,this.saveToStorage()}deleteConfigItem(e){return"title"!==e&&"copyright"!==e&&e in this.config&&(delete this.config[e],this.saveToStorage(),!0)}resetToDefault(e){this.config={...e},this.saveToStorage()}clearStorage(){localStorage.removeItem(this.STORAGE_KEY)}constructor(e){(0,E._)(this,"config",void 0),(0,E._)(this,"STORAGE_KEY","turnip_site_config");let t=this.getFromStorage();this.config=t||{...e},t||this.saveToStorage()}}(T),_=s.Z.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(0, 0, 0, 0.6)":"rgba(255, 255, 255, 0.5)"};
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: auto;
  z-index: 1000;
`,O=s.Z.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
`,$=s.Z.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`,C=s.Z.button`
  padding: 6px;
  width: 40px;
  height: 40px;
  border: 2px solid ${e=>e.isSelected?"#4a90e2":"transparent"};
  border-radius: 4px;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#333":e.theme.backgroundImage};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`,Y=s.Z.button`
  padding: 8px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 4px;
  background: ${e=>e.active?"#4a90e2":"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#333":"#f0f0f0"};
  color: ${e=>e.active?"white":"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#fff":"#666"};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  &:hover {
    background: ${e=>e.active?"#357abd":"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#444":"#e0e0e0"};
  }
  & > span {
    display: inline-block;
    transform: translateY(-1px);
  }
`,G=(0,s.Z)(Y)`
  display: flex;
  align-items: center;
  justify-content: center;
`,K=e=>{let{themeConfig:t,onSelect:r}=e;t=k.getConfig();let[a,n]=(0,o.useState)(()=>{try{let e=localStorage.getItem("turnip-theme-mode");return!!e&&"dark"===e}catch(e){return console.warn("Failed to load theme mode:",e),!1}}),[s,d]=(0,o.useState)(()=>{try{return localStorage.getItem("turnip-theme-preset")||"morning"}catch(e){return console.warn("Failed to load theme preset:",e),"morning"}}),[c,l]=(0,o.useState)(()=>{try{let e=localStorage.getItem("turnip-theme-auto");return!!e&&"true"===e}catch(e){return console.warn("Failed to load auto mode:",e),!1}});(0,o.useEffect)(()=>{try{localStorage.setItem("turnip-theme-mode",a?"dark":"light"),localStorage.setItem("turnip-theme-auto",String(c)),localStorage.setItem("turnip-theme-preset",s)}catch(e){console.warn("Failed to save theme settings:",e)}},[a,c,s]),(0,o.useEffect)(()=>{let e=()=>{if(!c)return;let e=new Date().getHours(),t=e>=18||e<6;t!==a&&n(t)};e();let t=setInterval(e,6e4);return()=>clearInterval(t)},[c,a]);let g=(0,o.useCallback)(()=>{let e=t.presets.find(e=>e.id===s)||t.presets[0];r({id:"custom",name:a?"暗黑主题":"明亮主题",backgroundImage:a?"linear-gradient(120deg, #2d3436 0%, #2d3436 100%)":e.backgroundImage,blur:e.blur,opacity:a?.85:e.opacity})},[a,s,r]);return(0,o.useEffect)(()=>{g()},[a,g]),(0,i.jsxs)(_,{children:[!a&&(0,i.jsx)($,{children:t.presets.map(e=>(0,i.jsx)(C,{isSelected:s===e.id,onClick:()=>d(e.id),title:e.name,style:{background:e.backgroundImage}},e.id))}),(0,i.jsxs)(O,{children:[(0,i.jsx)(Y,{active:a,onClick:()=>{l(!1),n(!a)},title:a?"切换到明亮模式":"切换到暗黑模式",children:a?(0,i.jsx)("span",{children:"\uD83C\uDF19"}):(0,i.jsx)("span",{children:"☀️"})}),(0,i.jsx)(G,{active:c,onClick:()=>l(!c),title:c?"关闭自动切换":"开启自动切换",children:"\uD83D\uDD52"})]})]})},N=s.Z.div`
  position: absolute;
  top: 0.1rem;
  right: 1rem;
  font-size: 1.2rem;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
  font-weight: 500;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(0, 0, 0, 0.4)":"rgba(255, 255, 255, 0.8)"};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 1000;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
  }
`,A=()=>{let[e,t]=(0,o.useState)(new Date);return(0,o.useEffect)(()=>{let e=setInterval(()=>{t(new Date)},1e3);return()=>clearInterval(e)},[]),(0,i.jsx)(N,{children:`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")} ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}:${String(e.getSeconds()).padStart(2,"0")}`})},Z=s.Z.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
`,z=s.Z.h1`
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,R=s.Z.main`
  max-width: 1200px;
  margin: 0 auto;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(0, 0, 0, 0.4)":"rgba(255, 255, 255, 0.6)"};
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 12px;
  }
`,F=s.Z.footer`
  text-align: center;
  padding: 20px;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
  font-size: 14px;
  opacity: 0.8;
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 12px;
  }
`,D=e=>{let{cb:t}=e,r=k.getConfig(),o=I.getAllCategories(),a=I.getAllSearchEngines(),n=j.getConfig();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(A,{}),(0,i.jsx)(Z,{children:(0,i.jsx)(z,{children:n.title})}),(0,i.jsxs)(R,{children:[(0,i.jsx)(m,{searchEngines:a}),(0,i.jsx)(v,{categories:o})]}),(0,i.jsx)(K,{themeConfig:r,onSelect:t}),(0,i.jsx)(F,{children:`${n.copyright.text}`})]})},B="turnip-theme-active",P=e=>{let[t,r]=(0,o.useState)(()=>{try{let t=localStorage.getItem(B);return t?JSON.parse(t):e.default}catch(t){return console.warn("Failed to parse saved theme:",t),e.default}});return(0,o.useEffect)(()=>{try{localStorage.setItem(B,JSON.stringify(t))}catch(e){console.warn("Failed to save theme:",e)}},[t]),[t,r]},M=document.getElementById("root");M&&a.createRoot(M).render((0,i.jsx)(o.StrictMode,{children:(0,i.jsx)(()=>{let[e,t]=P(k.getConfig());return(0,i.jsx)(n.a,{theme:e,children:(0,i.jsx)(w,{theme:e,children:(0,i.jsx)(D,{cb:t})})})},{})}))}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,r),a.exports}r.m=e,(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(i,o){if(1&o&&(i=this(i)),8&o||"object"==typeof i&&i&&(4&o&&i.__esModule||16&o&&"function"==typeof i.then))return i;var a=Object.create(null);r.r(a);var n={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&i;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>{n[e]=()=>i[e]});return n.default=()=>i,r.d(a,n),a}})(),r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];r.O=function(t,i,o,a){if(i){a=a||0;for(var n=e.length;n>0&&e[n-1][2]>a;n--)e[n]=e[n-1];e[n]=[i,o,a];return}for(var s=1/0,n=0;n<e.length;n++){for(var i=e[n][0],o=e[n][1],a=e[n][2],d=!0,c=0;c<i.length;c++)(!1&a||s>=a)&&Object.keys(r.O).every(function(e){return r.O[e](i[c])})?i.splice(c--,1):(d=!1,a<s&&(s=a));if(d){e.splice(n--,1);var l=o();void 0!==l&&(t=l)}}return t}})(),r.rv=()=>"1.2.7",(()=>{var e={980:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var o,a,[n,s,d]=i,c=0;if(n.some(t=>0!==e[t])){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(d)var l=d(r)}for(t&&t(i);c<n.length;c++)a=n[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},i=self.webpackChunkrs_react_app=self.webpackChunkrs_react_app||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),r.ruid="bundler=rspack@1.2.7";var i=r.O(void 0,["361","132"],function(){return r(946)});i=r.O(i)})();