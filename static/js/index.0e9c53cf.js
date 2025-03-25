(()=>{"use strict";var e={8644:function(e,t,i){var r,a=i(6773),n=i(1699),o=i(8511),s=i(8164),d=i(3262);let l=d.Z.div`
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
  padding: 0 15px;

  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`,c=d.Z.form`
  display: flex;
  gap: 12px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 8px;
    flex-wrap: wrap;
  }
`,g=d.Z.input`
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
`,m=d.Z.select`
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
`,h=d.Z.button`
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
`,u=e=>{let{searchEngines:t}=e,[i,r]=(0,n.useState)(""),[o,s]=(0,n.useState)(t[0].id);return(0,a.jsx)(l,{children:(0,a.jsxs)(c,{onSubmit:e=>{if(e.preventDefault(),!i.trim())return;let r=t.find(e=>e.id===o);r&&window.open(r.url+encodeURIComponent(i),"_blank")},children:[(0,a.jsx)(g,{type:"text",value:i,onChange:e=>r(e.target.value),placeholder:"输入搜索内容..."}),(0,a.jsx)(m,{value:o,onChange:e=>s(e.target.value),children:t.map(e=>(0,a.jsxs)("option",{value:e.id,children:[e.icon," ",e.name]},e.id))}),(0,a.jsx)(h,{type:"submit",children:"搜索"})]})})},p=d.Z.section`
  margin: 2rem 0;
  padding: 1rem;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(0, 0, 0, 0.2)":"rgba(255, 255, 255, 0.8)"};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,f=d.Z.h2`
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#333333"};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.1)":"#f0f0f0"};
`,x=d.Z.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,b=d.Z.a`
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
`,S=d.Z.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,y=d.Z.span`
  font-size: 0.9rem;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#cccccc":"#666666"};
`,E=e=>{let{categories:t}=e;return(0,a.jsx)(a.Fragment,{children:t.map(e=>(0,a.jsxs)(p,{children:[(0,a.jsx)(f,{children:e.name}),(0,a.jsx)(x,{children:e.links.map(e=>(0,a.jsxs)(b,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(S,{children:e.icon}),(0,a.jsx)(y,{children:e.name})]},e.id))})]},e.id))})},v=d.Z.div`
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
`;var I=i(3438);class k{getConfig(){return this.config}getDefaultTheme(){return this.config.default}getPresets(){return this.config.presets}setDefaultTheme(e){this.config.default=e,this.saveToStorage()}addPreset(e){if(this.config.presets.some(t=>t.id===e.id))throw Error(`Theme with id ${e.id} already exists`);this.config.presets.push(e),this.saveToStorage()}updatePreset(e){let t=this.config.presets.findIndex(t=>t.id===e.id);if(-1===t)throw Error(`Theme with id ${e.id} not found`);this.config.presets[t]=e,this.saveToStorage()}deletePreset(e){let t=this.config.presets.findIndex(t=>t.id===e);if(-1===t)throw Error(`Theme with id ${e} not found`);this.config.presets.splice(t,1),this.saveToStorage()}findThemeById(e){return this.config.default.id===e?this.config.default:this.config.presets.find(t=>t.id===e)}loadFromStorage(){try{let e=localStorage.getItem(k.STORAGE_KEY);return e?JSON.parse(e):null}catch(e){return console.error("Failed to load theme config from storage:",e),null}}saveToStorage(){try{localStorage.setItem(k.STORAGE_KEY,JSON.stringify(this.config))}catch(e){console.error("Failed to save theme config to storage:",e)}}constructor(e){(0,I._)(this,"config",void 0),this.config=this.loadFromStorage()||e||{default:{id:"default",name:"默认主题",backgroundImage:"linear-gradient(120deg, #f6d365 0%, #fda085 100%)",blur:"10px",opacity:.95},presets:[]},this.saveToStorage()}}(0,I._)(k,"STORAGE_KEY","turnip-theme-config");let w=new k({default:{id:"default",name:"默认主题",backgroundImage:"linear-gradient(120deg, #f6d365 0%, #fda085 100%)",blur:"10px",opacity:.95},presets:[{id:"purple",name:"渐变紫",backgroundImage:"linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",blur:"10px",opacity:.95},{id:"morning",name:"晨光蓝",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",blur:"10px",opacity:.95},{id:"night",name:"夜空",backgroundImage:"linear-gradient(to right, #243949 0%, #517fa4 100%)",blur:"10px",opacity:.92}]}),j=new class{getFromStorage(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(e){return console.error(`Error reading from localStorage: ${e}`),null}}saveToStorage(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(`Error saving to localStorage: ${e}`)}}getCategoryById(e){return this.categories.find(t=>t.id===e)}addCategory(e){let t={id:this.categories.length?Math.max(...this.categories.map(e=>e.id))+1:0,name:e,links:[]};return this.categories.push(t),this.saveToStorage(this.CATEGORIES_KEY,this.categories),t}updateCategory(e,t){let i=this.getCategoryById(e);return!!i&&(i.name=t,this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0)}deleteCategory(e){let t=this.categories.findIndex(t=>t.id===e);return -1!==t&&(this.categories.splice(t,1),this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0)}addLink(e,t,i,r){let a=this.getCategoryById(e);if(!a)return!1;let n=a.links.length?Math.max(...a.links.map(e=>e.id))+1:1;return a.links.push({id:n,name:t,url:i,icon:r}),this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0}updateLink(e,t,i){let r=this.getCategoryById(e);if(!r)return!1;let a=r.links.find(e=>e.id===t);return!!a&&(Object.assign(a,i),this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0)}deleteLink(e,t){let i=this.getCategoryById(e);if(!i)return!1;let r=i.links.findIndex(e=>e.id===t);return -1!==r&&(i.links.splice(r,1),this.saveToStorage(this.CATEGORIES_KEY,this.categories),!0)}getSearchEngineById(e){return this.engines.find(t=>t.id===e)}addSearchEngine(e,t,i,r){return!this.getSearchEngineById(e)&&(this.engines.push({id:e,name:t,url:i,icon:r}),this.saveToStorage(this.ENGINES_KEY,this.engines),!0)}updateSearchEngine(e,t){let i=this.getSearchEngineById(e);return!!i&&(Object.assign(i,t),this.saveToStorage(this.ENGINES_KEY,this.engines),!0)}deleteSearchEngine(e){let t=this.engines.findIndex(t=>t.id===e);return -1!==t&&(this.engines.splice(t,1),this.saveToStorage(this.ENGINES_KEY,this.engines),!0)}getAllCategories(){return[...this.categories]}getAllSearchEngines(){return[...this.engines]}clearStorage(){localStorage.removeItem(this.CATEGORIES_KEY),localStorage.removeItem(this.ENGINES_KEY)}resetToDefault(e,t){this.categories=[...e],this.engines=[...t],this.saveToStorage(this.CATEGORIES_KEY,this.categories),this.saveToStorage(this.ENGINES_KEY,this.engines)}constructor(e,t){(0,I._)(this,"categories",void 0),(0,I._)(this,"engines",void 0),(0,I._)(this,"CATEGORIES_KEY","turnip_link_categories"),(0,I._)(this,"ENGINES_KEY","turnip_search_engines");let i=this.getFromStorage(this.CATEGORIES_KEY),r=this.getFromStorage(this.ENGINES_KEY);this.categories=i||[...e],this.engines=r||[...t],i||this.saveToStorage(this.CATEGORIES_KEY,this.categories),r||this.saveToStorage(this.ENGINES_KEY,this.engines)}}([{id:0,name:"影音视频",links:[{id:1,name:"",url:"https://www.iqiyi.com/",icon:"爱奇艺"},{id:2,name:"",url:"https://www.youku.com/",icon:"优酷"},{id:3,name:"",url:"https://v.qq.com/",icon:"\uD83D\uDC27视频"},{id:4,name:"",url:"https://www.bilibili.com/",icon:"B站"},{id:5,name:"",url:"https://www.douyin.com/",icon:"抖音"}]},{id:1,name:"Turnip",links:[{id:1,name:"Turnip博客",url:"https://turnip1202.github.io/my-blog-astro/",icon:"\uD83E\uDD55"},{id:2,name:"GitHub",url:"https://github.com/Turnip1202",icon:"⭐"},{id:3,name:"稀土掘金",url:"https://juejin.cn/user/1684912023022440",icon:"\uD83D\uDD28"},{id:4,name:"哔哩哔哩",url:"https://b23.tv/zpySzz9",icon:"\uD83C\uDFAE"},{id:5,name:"抖音",url:"https://v.douyin.com/if78aSq9/",icon:"\uD83C\uDFAC"}]},{id:2,name:"开发工具",links:[{id:1,name:"GitHub",url:"https://github.com",icon:"\uD83D\uDC19"},{id:2,name:"VS Code",url:"https://code.visualstudio.com",icon:"\uD83D\uDCDD"},{id:3,name:"Stack Overflow",url:"https://stackoverflow.com",icon:"\uD83D\uDCA1"}]},{id:3,name:"学习资源",links:[{id:4,name:"TypeScript",url:"https://www.typescriptlang.org",icon:"\uD83D\uDCD8"},{id:5,name:"React Docs",url:"https://reactjs.org",icon:"⚛️"},{id:6,name:"掘金",url:"https://juejin.cn",icon:"\uD83C\uDFAF"}]}],[{id:"bing",name:"Bing",url:"https://www.bing.com/search?q=",icon:"\uD83D\uDD0E"},{id:"google",name:"Google",url:"https://www.google.com/search?q=",icon:"\uD83D\uDD0D"},{id:"baidu",name:"百度",url:"https://www.baidu.com/s?wd=",icon:"\uD83D\uDD0D"}]),_={title:"Turnip起始页",copyright:{text:`\xa9 ${new Date().getFullYear()} Turnip1202. All rights reserved.`}},N=new class{getFromStorage(){try{let e=localStorage.getItem(this.STORAGE_KEY);return e?JSON.parse(e):null}catch(e){return console.error(`读取本地存储出错: ${e}`),null}}saveToStorage(){try{localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.config))}catch(e){console.error(`保存到本地存储出错: ${e}`)}}getConfig(){return{...this.config}}updateTitle(e){this.config.title=e,this.saveToStorage()}updateCopyright(e){this.config.copyright.text=e,this.saveToStorage()}addConfigItem(e,t){this.config[e]=t,this.saveToStorage()}deleteConfigItem(e){return"title"!==e&&"copyright"!==e&&e in this.config&&(delete this.config[e],this.saveToStorage(),!0)}resetToDefault(e){this.config={...e},this.saveToStorage()}clearStorage(){localStorage.removeItem(this.STORAGE_KEY)}constructor(e){(0,I._)(this,"config",void 0),(0,I._)(this,"STORAGE_KEY","turnip_site_config");let t=this.getFromStorage();this.config=t||{...e},t||this.saveToStorage()}}(_),T=e=>JSON.parse(localStorage.getItem(e)||"[]"),A=d.Z.div`
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
`,C=d.Z.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
`,Z=d.Z.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`,O=d.Z.button`
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
`,$=d.Z.button`
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
`,P=(0,d.Z)($)`
  display: flex;
  align-items: center;
  justify-content: center;
`,D=e=>{let{themeConfig:t,onSelect:i}=e;t=w.getConfig();let[r,o]=(0,n.useState)(()=>{try{let e=localStorage.getItem("turnip-theme-mode");return!!e&&"dark"===e}catch(e){return console.warn("Failed to load theme mode:",e),!1}}),[s,d]=(0,n.useState)(()=>{try{return localStorage.getItem("turnip-theme-preset")||"morning"}catch(e){return console.warn("Failed to load theme preset:",e),"morning"}}),[l,c]=(0,n.useState)(()=>{try{let e=localStorage.getItem("turnip-theme-auto");return!!e&&"true"===e}catch(e){return console.warn("Failed to load auto mode:",e),!1}});(0,n.useEffect)(()=>{try{localStorage.setItem("turnip-theme-mode",r?"dark":"light"),localStorage.setItem("turnip-theme-auto",String(l)),localStorage.setItem("turnip-theme-preset",s)}catch(e){console.warn("Failed to save theme settings:",e)}},[r,l,s]),(0,n.useEffect)(()=>{let e=()=>{if(!l)return;let e=new Date().getHours(),t=e>=18||e<6;t!==r&&o(t)};e();let t=setInterval(e,6e4);return()=>clearInterval(t)},[l,r]);let g=(0,n.useCallback)(()=>{let e=t.presets.find(e=>e.id===s)||t.presets[0];i({id:"custom",name:r?"暗黑主题":"明亮主题",backgroundImage:r?"linear-gradient(120deg, #2d3436 0%, #2d3436 100%)":e.backgroundImage,blur:e.blur,opacity:r?.85:e.opacity})},[r,s,i]);return(0,n.useEffect)(()=>{g()},[r,g]),(0,a.jsxs)(A,{children:[!r&&(0,a.jsx)(Z,{children:t.presets.map(e=>(0,a.jsx)(O,{isSelected:s===e.id,onClick:()=>d(e.id),title:e.name,style:{background:e.backgroundImage}},e.id))}),(0,a.jsxs)(C,{children:[(0,a.jsx)($,{active:r,onClick:()=>{c(!1),o(!r)},title:r?"切换到明亮模式":"切换到暗黑模式",children:r?(0,a.jsx)("span",{children:"\uD83C\uDF19"}):(0,a.jsx)("span",{children:"☀️"})}),(0,a.jsx)(P,{active:l,onClick:()=>c(!l),title:l?"关闭自动切换":"开启自动切换",children:"\uD83D\uDD52"})]})]})},L=d.Z.div`
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
`,M=()=>{let[e,t]=(0,n.useState)(new Date);return(0,n.useEffect)(()=>{let e=setInterval(()=>{t(new Date)},1e3);return()=>clearInterval(e)},[]),(0,a.jsx)(L,{children:`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")} ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}:${String(e.getSeconds()).padStart(2,"0")}`})};var K=((r={})[r.THEME_ADMIN_PANEL=0]="THEME_ADMIN_PANEL",r[r.SITE_ADMIN_PANEL=1]="SITE_ADMIN_PANEL",r[r.LINKS_ADMIN_PANEL=2]="LINKS_ADMIN_PANEL",r),Y=i(9076),F=i(3195),G=i(9576),z=i(9247),R=i(9271),B=i(3363),q=i(3716),H=i(9586),J=i(5395),U=i(1582),V=i(4573),Q=i(7275),W=i(8589);let X=()=>{let[e,t]=(0,n.useState)([]),[i,r]=(0,n.useState)(!1),[o,s]=(0,n.useState)(!1),[d]=Y.Z.useForm(),[l]=Y.Z.useForm(),[c,g]=(0,n.useState)(),[m,h]=(0,n.useState)(null),[u,p]=(0,n.useState)(null);(0,n.useEffect)(()=>{t(j.getAllCategories())},[]);let f=e=>{console.log("Editing category: ",e),g(e),d.setFieldsValue(e),r(!0)},x=i=>{t(e.filter(e=>e.id!==i)),j.deleteCategory(i),F.ZP.success("Category deleted successfully!")},b=()=>{s(!0),l.resetFields(),h(null)},S=[{title:"ID",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Links",dataIndex:"links",key:"links",render:e=>(0,a.jsx)(G.Z,{size:"middle",children:(0,a.jsx)("div",{style:{height:100,overflow:"auto"},children:(0,a.jsx)(z.Z,{bordered:!0,dataSource:e,renderItem:e=>(0,a.jsxs)(z.Z.Item,{children:[e.icon,": ",e.name?`${e.name}-> `:"",e.url]})})})})},{title:"Action",key:"action",render:(e,t)=>(0,a.jsxs)(G.Z,{size:"middle",children:[(0,a.jsx)(R.ZP,{type:"primary",icon:(0,a.jsx)(U.Z,{}),onClick:()=>f(t),children:"Edit Category"}),(0,a.jsx)(R.ZP,{type:"dashed",icon:(0,a.jsx)(V.Z,{}),onClick:()=>x(t.id),children:"Delete Category"})]})}];return(0,a.jsxs)("div",{style:{padding:24},children:[(0,a.jsx)("h1",{children:"Data Management Panel"}),(0,a.jsx)(R.ZP,{type:"primary",icon:(0,a.jsx)(Q.Z,{}),onClick:()=>{d.resetFields(),g(void 0),r(!0)},style:{marginBottom:16},children:"Add New Category"}),(0,a.jsx)(R.ZP,{type:"primary",icon:(0,a.jsx)(W.Z,{}),onClick:()=>b(),children:"Add Links"}),(0,a.jsx)(R.ZP,{type:"dashed",icon:(0,a.jsx)(Q.Z,{}),onClick:()=>{j.clearStorage(),t([]),F.ZP.success("All categories deleted successfully")},style:{marginBottom:16},children:"清空数据"}),(0,a.jsx)(B.Z,{dataSource:e,columns:S,rowKey:"id",pagination:{pageSize:5}}),(0,a.jsx)(q.Z,{title:`${c?"Edit":"Add"} Category`,open:i,onOk:()=>{d.validateFields().then(i=>{console.log(i),c?(t(e.map(e=>e.id===c.id?{...e,...i}:e)),j.updateCategory(i.id,i.name),F.ZP.success("Category updated successfully!")):(t([...e,{id:Date.now(),...i,links:[]}]),j.addCategory(i.name),F.ZP.success("Category added successfully!")),r(!1)})},onCancel:()=>{r(!1)},children:(0,a.jsxs)(Y.Z,{form:d,layout:"vertical",children:[(0,a.jsx)(Y.Z.Item,{name:"id",label:"ID",rules:[{required:!0,message:"Please input ID!"}],children:(0,a.jsx)(H.Z,{disabled:!!c})}),(0,a.jsx)(Y.Z.Item,{name:"name",label:"Name",rules:[{required:!0,message:"Please input Name!"}],children:(0,a.jsx)(H.Z,{})})]})}),(0,a.jsx)(q.Z,{title:`${m??"Add"} Link`,open:o,onOk:()=>{l.validateFields().then(i=>{let r=e.findIndex(e=>e.id===u),a=[...e];if(m){console.log("updating link");let e=i.id,t={icon:i.icon,name:i.name,url:i.url};j.updateLink(r,e,t),F.ZP.success("Link updated successfully!")}else console.log("adding link"),j.addLink(i.id,i.name,i.url,i.icon),F.ZP.success("Link added successfully!");t(a),s(!1)})},onCancel:()=>{s(!1)},children:(0,a.jsxs)(Y.Z,{form:l,layout:"vertical",children:[(0,a.jsx)(Y.Z.Item,{name:"id",label:"ID",rules:[{required:!0,message:"Please input ID!"}],children:(0,a.jsx)(J.Z,{disabled:!!m,options:e.map(e=>({value:e.id,label:e.name}))})}),(0,a.jsx)(Y.Z.Item,{name:"name",label:"Name",rules:[{required:!1,message:"Please input Name!"}],children:(0,a.jsx)(H.Z,{})}),(0,a.jsx)(Y.Z.Item,{name:"url",label:"URL",rules:[{required:!0,message:"Please input URL!"}],children:(0,a.jsx)(H.Z,{})}),(0,a.jsx)(Y.Z.Item,{name:"icon",label:"Icon",rules:[{required:!0,message:"Please input Icon!"}],children:(0,a.jsx)(H.Z,{})})]})})]})},ee=e=>{switch(e.config){case K.THEME_ADMIN_PANEL:return(0,a.jsx)("div",{children:"主题管理面板(未完成)"});case K.SITE_ADMIN_PANEL:return(0,a.jsx)("div",{children:"网站管理面板(未完成)"});case K.LINKS_ADMIN_PANEL:return(0,a.jsx)(X,{});default:return(0,a.jsx)("div",{children:"未知面板"})}},et=[{name:"链接配置面板",type:"link",value:K.LINKS_ADMIN_PANEL},{name:"主题配置面板",type:"link",value:K.THEME_ADMIN_PANEL},{name:"网站配置面板",type:"link",value:K.SITE_ADMIN_PANEL}],ei=e=>{let{visibleAdmin:t,setIsShowAdmin:i,setVisibleAdmin:r,setToConfig:n,isShowAdmin:o}=e,s=e=>()=>{switch(console.log("toAdmin",e),e.value){case K.LINKS_ADMIN_PANEL:n(K.LINKS_ADMIN_PANEL);break;case K.THEME_ADMIN_PANEL:n(K.THEME_ADMIN_PANEL);break;case K.SITE_ADMIN_PANEL:n(K.SITE_ADMIN_PANEL);break;default:r(!0)}r(!0),i(!1)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(q.Z,{title:"请选择进入哪一个面板",footer:[(0,a.jsx)(R.ZP,{style:{display:t?"":"none"},onClick:()=>{i(!1),r(!1)},children:"退出面板"},"back")],open:o,onCancel:()=>i(!1),children:et.map((e,t)=>(0,a.jsx)(R.ZP,{onClick:s(e),type:e.type,children:e.name},t))})})},er=d.Z.button`
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
`,ea=d.Z.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
`,en=d.Z.h1`
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,eo=d.Z.main`
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
`,es=d.Z.footer`
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
`,ed=e=>{let{cb:t}=e,i=w.getConfig(),[r,o]=(0,n.useState)(j.getAllCategories()),s=j.getAllSearchEngines();(0,n.useMemo)(()=>{let e=T("turnip_link_categories");console.log("localCategories",e),o(e)},[]);let d=N.getConfig();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ea,{children:(0,a.jsx)(en,{children:d.title})}),(0,a.jsxs)(eo,{children:[(0,a.jsx)(u,{searchEngines:s}),(0,a.jsx)(E,{categories:r})]}),(0,a.jsx)(D,{themeConfig:i,onSelect:t}),(0,a.jsx)(es,{children:`${d.copyright.text}`})]})},el="turnip-theme-active",ec=e=>{let[t,i]=(0,n.useState)(()=>{try{let t=localStorage.getItem(el);return t?JSON.parse(t):e.default}catch(t){return console.warn("Failed to parse saved theme:",t),e.default}});return(0,n.useEffect)(()=>{try{localStorage.setItem(el,JSON.stringify(t))}catch(e){console.warn("Failed to save theme:",e)}},[t]),[t,i]};var eg=i(8430),em=i(5345);i(3454);let eh=document.getElementById("root");eh&&o.createRoot(eh).render((0,a.jsx)(n.StrictMode,{children:(0,a.jsx)(()=>{let[e,t]=(0,n.useState)(!1),[i,r]=(0,n.useState)(K.LINKS_ADMIN_PANEL),[o,d]=(0,n.useState)(!1),[l,c]=ec(w.getConfig());return(0,a.jsx)(s.a,{theme:l,children:(0,a.jsx)(v,{theme:l,children:(0,a.jsxs)(eg.ZP,{theme:{algorithm:em.Z.defaultAlgorithm},children:[(0,a.jsx)(M,{}),(0,a.jsx)(er,{onClick:()=>d(!0),children:"管理面板"}),e?(0,a.jsx)(ee,{config:i}):(0,a.jsx)(ed,{cb:c}),(0,a.jsx)(ei,{setVisibleAdmin:t,visibleAdmin:e,setToConfig:r,setIsShowAdmin:d,isShowAdmin:o})]})})})},{})}))}},t={};function i(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,i),n.exports}i.m=e,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;i.t=function(r,a){if(1&a&&(r=this(r)),8&a||"object"==typeof r&&r&&(4&a&&r.__esModule||16&a&&"function"==typeof r.then))return r;var n=Object.create(null);i.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>{o[e]=()=>r[e]});return o.default=()=>r,i.d(n,o),n}})(),i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},(()=>{i.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})()})(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];i.O=(t,r,a,n)=>{if(r){n=n||0;for(var o=e.length;o>0&&e[o-1][2]>n;o--)e[o]=e[o-1];e[o]=[r,a,n];return}for(var s=1/0,o=0;o<e.length;o++){for(var[r,a,n]=e[o],d=!0,l=0;l<r.length;l++)(!1&n||s>=n)&&Object.keys(i.O).every(e=>i.O[e](r[l]))?r.splice(l--,1):(d=!1,n<s&&(s=n));if(d){e.splice(o--,1);var c=a();void 0!==c&&(t=c)}}return t}})(),i.rv=()=>"1.2.8",(()=>{var e={980:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var a,n,[o,s,d]=r,l=0;if(o.some(t=>0!==e[t])){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(d)var c=d(i)}for(t&&t(r);l<o.length;l++)n=o[l],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(c)},r=self.webpackChunkrs_react_app=self.webpackChunkrs_react_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.ruid="bundler=rspack@1.2.8";var r=i.O(void 0,["361","4"],function(){return i(8644)});r=i.O(r)})();