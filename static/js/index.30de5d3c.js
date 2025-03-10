(()=>{"use strict";var e={429:function(e,t,r){var i=r(773),a=r(699),o=r(511),n=r(333);let d=[{id:0,name:"影音视频",links:[{id:1,name:"",url:"https://www.iqiyi.com/",icon:"爱奇艺"},{id:2,name:"",url:"https://www.youku.com/",icon:"优酷"},{id:3,name:"",url:"https://v.qq.com/",icon:"\uD83D\uDC27视频"},{id:4,name:"",url:"https://www.bilibili.com/",icon:"B站"},{id:5,name:"",url:"https://www.douyin.com/",icon:"抖音"}]},{id:1,name:"Turnip",links:[{id:1,name:"Turnip博客",url:"https://turnip1202.github.io/my-blog-astro/",icon:"\uD83E\uDD55"},{id:2,name:"GitHub",url:"https://github.com/Turnip1202",icon:"⭐"},{id:3,name:"稀土掘金",url:"https://juejin.cn/user/1684912023022440",icon:"\uD83D\uDD28"},{id:4,name:"哔哩哔哩",url:"https://b23.tv/zpySzz9",icon:"\uD83C\uDFAE"},{id:5,name:"抖音",url:"https://v.douyin.com/if78aSq9/",icon:"\uD83C\uDFAC"}]},{id:2,name:"开发工具",links:[{id:1,name:"GitHub",url:"https://github.com",icon:"\uD83D\uDC19"},{id:2,name:"VS Code",url:"https://code.visualstudio.com",icon:"\uD83D\uDCDD"},{id:3,name:"Stack Overflow",url:"https://stackoverflow.com",icon:"\uD83D\uDCA1"}]},{id:3,name:"学习资源",links:[{id:4,name:"TypeScript",url:"https://www.typescriptlang.org",icon:"\uD83D\uDCD8"},{id:5,name:"React Docs",url:"https://reactjs.org",icon:"⚛️"},{id:6,name:"掘金",url:"https://juejin.cn",icon:"\uD83C\uDFAF"}]}],s=[{id:"bing",name:"Bing",url:"https://www.bing.com/search?q=",icon:"\uD83D\uDD0E"},{id:"google",name:"Google",url:"https://www.google.com/search?q=",icon:"\uD83D\uDD0D"},{id:"baidu",name:"百度",url:"https://www.baidu.com/s?wd=",icon:"\uD83D\uDD0D"}],m=n.Z.div`
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
  padding: 0 15px;

  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`,c=n.Z.form`
  display: flex;
  gap: 12px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 8px;
    flex-wrap: wrap;
  }
`,l=n.Z.input`
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
`,p=n.Z.select`
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
`,u=n.Z.button`
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
`,h=()=>{let[e,t]=(0,a.useState)(""),[r,o]=(0,a.useState)(s["0"].id);return(0,i.jsx)(m,{children:(0,i.jsxs)(c,{onSubmit:t=>{if(t.preventDefault(),!e.trim())return;let i=s.find(e=>e.id===r);i&&window.open(i.url+encodeURIComponent(e),"_blank")},children:[(0,i.jsx)(l,{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"输入搜索内容..."}),(0,i.jsx)(p,{value:r,onChange:e=>o(e.target.value),children:s.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.icon," ",e.name]},e.id))}),(0,i.jsx)(u,{type:"submit",children:"搜索"})]})})},g=n.Z.section`
  margin: 2rem 0;
  padding: 1rem;
  background: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(0, 0, 0, 0.2)":"rgba(255, 255, 255, 0.8)"};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,f=n.Z.h2`
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#333333"};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.1)":"#f0f0f0"};
`,x=n.Z.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,b=n.Z.a`
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
`,w=n.Z.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,v=n.Z.span`
  font-size: 0.9rem;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#cccccc":"#666666"};
`,k=e=>{let{categories:t}=e;return(0,i.jsx)(i.Fragment,{children:t.map(e=>(0,i.jsxs)(g,{children:[(0,i.jsx)(f,{children:e.name}),(0,i.jsx)(x,{children:e.links.map(e=>(0,i.jsxs)(b,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(w,{children:e.icon}),(0,i.jsx)(v,{children:e.name})]},e.id))})]},e.id))})},y=n.Z.div`
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
`;var S=r(438);class j{getConfig(){return this.config}getDefaultTheme(){return this.config.default}getPresets(){return this.config.presets}setDefaultTheme(e){this.config.default=e,this.saveToStorage()}addPreset(e){if(this.config.presets.some(t=>t.id===e.id))throw Error(`Theme with id ${e.id} already exists`);this.config.presets.push(e),this.saveToStorage()}updatePreset(e){let t=this.config.presets.findIndex(t=>t.id===e.id);if(-1===t)throw Error(`Theme with id ${e.id} not found`);this.config.presets[t]=e,this.saveToStorage()}deletePreset(e){let t=this.config.presets.findIndex(t=>t.id===e);if(-1===t)throw Error(`Theme with id ${e} not found`);this.config.presets.splice(t,1),this.saveToStorage()}findThemeById(e){return this.config.default.id===e?this.config.default:this.config.presets.find(t=>t.id===e)}loadFromStorage(){try{let e=localStorage.getItem(j.STORAGE_KEY);return e?JSON.parse(e):null}catch(e){return console.error("Failed to load theme config from storage:",e),null}}saveToStorage(){try{localStorage.setItem(j.STORAGE_KEY,JSON.stringify(this.config))}catch(e){console.error("Failed to save theme config to storage:",e)}}constructor(e){(0,S._)(this,"config",void 0),this.config=this.loadFromStorage()||e||{default:{id:"default",name:"默认主题",backgroundImage:"linear-gradient(120deg, #f6d365 0%, #fda085 100%)",blur:"10px",opacity:.95},presets:[]},this.saveToStorage()}}(0,S._)(j,"STORAGE_KEY","turnip-theme-config");let $=new j({default:{id:"default",name:"默认主题",backgroundImage:"linear-gradient(120deg, #f6d365 0%, #fda085 100%)",blur:"10px",opacity:.95},presets:[{id:"purple",name:"渐变紫",backgroundImage:"linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",blur:"10px",opacity:.95},{id:"morning",name:"晨光蓝",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",blur:"10px",opacity:.95},{id:"night",name:"夜空",backgroundImage:"linear-gradient(to right, #243949 0%, #517fa4 100%)",blur:"10px",opacity:.92}]}),I=n.Z.div`
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
`,O=n.Z.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
`,T=n.Z.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`,Z=n.Z.button`
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
`,z=n.Z.button`
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
`,E=(0,n.Z)(z)`
  display: flex;
  align-items: center;
  justify-content: center;
`,C=e=>{let{onSelect:t}=e,r=$.getConfig();console.log("localThemeConfig",r);let[o,n]=(0,a.useState)(()=>{try{let e=localStorage.getItem("turnip-theme-mode");return!!e&&"dark"===e}catch(e){return console.warn("Failed to load theme mode:",e),!1}}),[d,s]=(0,a.useState)(()=>{try{return localStorage.getItem("turnip-theme-preset")||"morning"}catch(e){return console.warn("Failed to load theme preset:",e),"morning"}}),[m,c]=(0,a.useState)(()=>{try{let e=localStorage.getItem("turnip-theme-auto");return!!e&&"true"===e}catch(e){return console.warn("Failed to load auto mode:",e),!1}});(0,a.useEffect)(()=>{try{localStorage.setItem("turnip-theme-mode",o?"dark":"light"),localStorage.setItem("turnip-theme-auto",String(m)),localStorage.setItem("turnip-theme-preset",d)}catch(e){console.warn("Failed to save theme settings:",e)}},[o,m,d]),(0,a.useEffect)(()=>{let e=()=>{if(!m)return;let e=new Date().getHours(),t=e>=18||e<6;t!==o&&n(t)};e();let t=setInterval(e,6e4);return()=>clearInterval(t)},[m,o]);let l=(0,a.useCallback)(()=>{let e=r.presets.find(e=>e.id===d)||r.presets[0];t({id:"custom",name:o?"暗黑主题":"明亮主题",backgroundImage:o?"linear-gradient(120deg, #2d3436 0%, #2d3436 100%)":e.backgroundImage,blur:e.blur,opacity:o?.85:e.opacity})},[o,d,t]);return(0,a.useEffect)(()=>{l()},[o,l]),(0,i.jsxs)(I,{children:[!o&&(0,i.jsx)(T,{children:r.presets.map(e=>(0,i.jsx)(Z,{isSelected:d===e.id,onClick:()=>s(e.id),title:e.name,style:{background:e.backgroundImage}},e.id))}),(0,i.jsxs)(O,{children:[(0,i.jsx)(z,{active:o,onClick:()=>{c(!1),n(!o)},title:o?"切换到明亮模式":"切换到暗黑模式",children:o?(0,i.jsx)("span",{children:"\uD83C\uDF19"}):(0,i.jsx)("span",{children:"☀️"})}),(0,i.jsx)(E,{active:m,onClick:()=>c(!m),title:m?"关闭自动切换":"开启自动切换",children:"\uD83D\uDD52"})]})]})},_="turnip-theme-active",D=e=>{let[t,r]=(0,a.useState)(()=>{try{let t=localStorage.getItem(_);return t?JSON.parse(t):e.default}catch(t){return console.warn("Failed to parse saved theme:",t),e.default}});return(0,a.useEffect)(()=>{try{localStorage.setItem(_,JSON.stringify(t))}catch(e){console.warn("Failed to save theme:",e)}},[t]),[t,r]};var F=r(598);let P=n.Z.div`
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
`,M=()=>{let[e,t]=(0,a.useState)(new Date);return(0,a.useEffect)(()=>{let e=setInterval(()=>{t(new Date)},1e3);return()=>clearInterval(e)},[]),(0,i.jsx)(P,{children:`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")} ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}:${String(e.getSeconds()).padStart(2,"0")}`})},Y={title:"Turnip起始页",copyright:{text:`\xa9 ${new Date().getFullYear()} Turnip1202. All rights reserved.`}},q=n.Z.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
`,G=n.Z.h1`
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"#ffffff":"#2c3e50"};
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,R=n.Z.main`
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
`,B=n.Z.footer`
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
`,N=document.getElementById("root");N&&o.createRoot(N).render((0,i.jsx)(a.StrictMode,{children:(0,i.jsx)(()=>{let e=$.getConfig();console.log("default Config:",e);let[t,r]=D(e);return(0,i.jsx)(F.a,{theme:t,children:(0,i.jsxs)(y,{theme:t,children:[(0,i.jsx)(M,{}),(0,i.jsx)(q,{children:(0,i.jsx)(G,{children:Y.title})}),(0,i.jsxs)(R,{children:[(0,i.jsx)(h,{}),(0,i.jsx)(k,{categories:d})]}),(0,i.jsx)(C,{onSelect:r}),(0,i.jsx)(B,{children:`${Y.copyright.text}`})]})})},{})}))}},t={};function r(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}r.m=e,(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(i,a){if(1&a&&(i=this(i)),8&a||"object"==typeof i&&i&&(4&a&&i.__esModule||16&a&&"function"==typeof i.then))return i;var o=Object.create(null);r.r(o);var n={};e=e||[null,t({}),t([]),t(t)];for(var d=2&a&&i;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach(e=>{n[e]=()=>i[e]});return n.default=()=>i,r.d(o,n),o}})(),r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];r.O=function(t,i,a,o){if(i){o=o||0;for(var n=e.length;n>0&&e[n-1][2]>o;n--)e[n]=e[n-1];e[n]=[i,a,o];return}for(var d=1/0,n=0;n<e.length;n++){for(var i=e[n][0],a=e[n][1],o=e[n][2],s=!0,m=0;m<i.length;m++)(!1&o||d>=o)&&Object.keys(r.O).every(function(e){return r.O[e](i[m])})?i.splice(m--,1):(s=!1,o<d&&(d=o));if(s){e.splice(n--,1);var c=a();void 0!==c&&(t=c)}}return t}})(),r.rv=()=>"1.2.7",(()=>{var e={980:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var a,o,[n,d,s]=i,m=0;if(n.some(t=>0!==e[t])){for(a in d)r.o(d,a)&&(r.m[a]=d[a]);if(s)var c=s(r)}for(t&&t(i);m<n.length;m++)o=n[m],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},i=self.webpackChunkrs_react_app=self.webpackChunkrs_react_app||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),r.ruid="bundler=rspack@1.2.7";var i=r.O(void 0,["361","132"],function(){return r(429)});i=r.O(i)})();