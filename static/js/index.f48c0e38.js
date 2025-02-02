(()=>{"use strict";var e={165:function(e,r,t){var n=t(773),i=t(699),o=t(511),a=t(315);let d=[{id:0,name:"Turnip",links:[{id:1,name:"Turnip's Blog",url:"https://turnip1202.github.io/my-blog-astro/",icon:"\uD83E\uDD55"},{id:2,name:"GitHub",url:"https://github.com/Turnip1202",icon:"⭐"},{id:3,name:"稀土掘金",url:"https://juejin.cn/user/1684912023022440",icon:"\uD83D\uDD28"},{id:4,name:"哔哩哔哩",url:"https://b23.tv/zpySzz9",icon:"\uD83C\uDFAE"},{id:5,name:"抖音",url:"https://v.douyin.com/if78aSq9/",icon:"\uD83C\uDFAC"}]},{id:1,name:"开发工具",links:[{id:1,name:"GitHub",url:"https://github.com",icon:"\uD83D\uDC19"},{id:2,name:"VS Code",url:"https://code.visualstudio.com",icon:"\uD83D\uDCDD"},{id:3,name:"Stack Overflow",url:"https://stackoverflow.com",icon:"\uD83D\uDCA1"}]},{id:2,name:"学习资源",links:[{id:4,name:"TypeScript",url:"https://www.typescriptlang.org",icon:"\uD83D\uDCD8"},{id:5,name:"React Docs",url:"https://reactjs.org",icon:"⚛️"},{id:6,name:"掘金",url:"https://juejin.cn",icon:"\uD83C\uDFAF"}]}],p=[{id:"google",name:"Google",url:"https://www.google.com/search?q=",icon:"\uD83D\uDD0D"},{id:"bing",name:"Bing",url:"https://www.bing.com/search?q=",icon:"\uD83D\uDD0E"},{id:"baidu",name:"百度",url:"https://www.baidu.com/s?wd=",icon:"\uD83D\uDD0D"}],l=a.Z.div`
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
  padding: 0 15px;

  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`,c=a.Z.form`
  display: flex;
  gap: 12px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 8px;
    flex-wrap: wrap;
  }
`,u=a.Z.input`
  flex: 1;
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid #e1e1e1;
  border-radius: 25px;
  outline: none;
  transition: all 0.3s;
  -webkit-appearance: none; // 修复 iOS 默认样式
  appearance: none;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 16px;
    order: 1;
  }
`,s=a.Z.select`
  padding: 0 20px;
  border: 2px solid #e1e1e1;
  border-radius: 25px;
  background: white;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
  -webkit-appearance: none; // 修复 iOS 默认样式
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cpath fill='%23444' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 30px;

  &:hover {
    border-color: #4a90e2;
  }

  @media (max-width: 768px) {
    order: 2;
    flex: 1;
    min-width: 120px;
    padding: 10px 30px 10px 16px;
  }
`,m=a.Z.button`
  padding: 0 24px;
  border: none;
  border-radius: 25px;
  background: #4a90e2;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;

  &:hover {
    background: #357abd;
  }

  @media (max-width: 768px) {
    order: 3;
    padding: 10px 20px;
    flex: 0 0 auto;
  }
`,g=()=>{let[e,r]=(0,i.useState)(""),[t,o]=(0,i.useState)(p["0"].id);return(0,n.jsx)(l,{children:(0,n.jsxs)(c,{onSubmit:r=>{if(r.preventDefault(),!e.trim())return;let n=p.find(e=>e.id===t);n&&window.open(n.url+encodeURIComponent(e),"_blank")},children:[(0,n.jsx)(u,{type:"text",value:e,onChange:e=>r(e.target.value),placeholder:"输入搜索内容..."}),(0,n.jsx)(s,{value:t,onChange:e=>o(e.target.value),children:p.map(e=>(0,n.jsxs)("option",{value:e.id,children:[e.icon," ",e.name]},e.id))}),(0,n.jsx)(m,{type:"submit",children:"搜索"})]})})},x=a.Z.section`
  margin: 2rem 0;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,b=a.Z.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
`,h=a.Z.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,f=a.Z.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: white;
  }
`,w=a.Z.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,v=a.Z.span`
  font-size: 0.9rem;
  color: #666;
`,k=e=>{let{categories:r}=e;return(0,n.jsx)(n.Fragment,{children:r.map(e=>(0,n.jsxs)(x,{children:[(0,n.jsx)(b,{children:e.name}),(0,n.jsx)(h,{children:e.links.map(e=>(0,n.jsxs)(f,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(w,{children:e.icon}),(0,n.jsx)(v,{children:e.name})]},e.id))})]},e.id))})},j=a.Z.div`
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
    z-index: -2;
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, ${e=>e.theme.opacity});
    backdrop-filter: blur(${e=>e.theme.blur});
    -webkit-backdrop-filter: blur(${e=>e.theme.blur});
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,y={default:{id:"default",name:"默认主题",backgroundImage:"linear-gradient(120deg, #f6d365 0%, #fda085 100%)",blur:"10px",opacity:.95},presets:[{id:"purple",name:"渐变紫",backgroundImage:"linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",blur:"10px",opacity:.95},{id:"morning",name:"晨光蓝",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",blur:"10px",opacity:.95},{id:"night",name:"夜空",backgroundImage:"linear-gradient(to right, #243949 0%, #517fa4 100%)",blur:"10px",opacity:.92}]},O=a.Z.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`,S=a.Z.button`
  width: 30px;
  height: 30px;
  margin: 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${e=>e.bgImage};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`,Z=e=>{let{onSelect:r}=e;return(0,n.jsx)(O,{children:y.presets.map(e=>(0,n.jsx)(S,{bgImage:e.backgroundImage,onClick:()=>r(e),title:e.name},e.id))})},_="turnip-theme",z=()=>{let[e,r]=(0,i.useState)(()=>{try{let e=localStorage.getItem(_);return e?JSON.parse(e):y.default}catch(e){return console.warn("Failed to parse saved theme:",e),y.default}});return(0,i.useEffect)(()=>{try{localStorage.setItem(_,JSON.stringify(e))}catch(e){console.warn("Failed to save theme:",e)}},[e]),[e,r]};var I=t(545);let C=a.Z.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
`,E=a.Z.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,P=a.Z.main`
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 12px;
  }
`,T=document.getElementById("root");T&&o.createRoot(T).render((0,n.jsx)(i.StrictMode,{children:(0,n.jsx)(()=>{let[e,r]=z();return(0,n.jsx)(I.a,{theme:e,children:(0,n.jsxs)(j,{theme:e,children:[(0,n.jsx)(C,{children:(0,n.jsx)(E,{children:"Turnip起始页"})}),(0,n.jsxs)(P,{children:[(0,n.jsx)(g,{}),(0,n.jsx)(k,{categories:d})]}),(0,n.jsx)(Z,{onSelect:r})]})})},{})}))}},r={};function t(n){var i=r[n];if(void 0!==i)return i.exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.m=e,(()=>{var e,r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(n,i){if(1&i&&(n=this(n)),8&i||"object"==typeof n&&n&&(4&i&&n.__esModule||16&i&&"function"==typeof n.then))return n;var o=Object.create(null);t.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var d=2&i&&n;"object"==typeof d&&!~e.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach(function(e){a[e]=function(){return n[e]}});return a.default=function(){return n},t.d(o,a),o}})(),t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];t.O=function(r,n,i,o){if(n){o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[n,i,o];return}for(var d=1/0,a=0;a<e.length;a++){for(var n=e[a][0],i=e[a][1],o=e[a][2],p=!0,l=0;l<n.length;l++)(!1&o||d>=o)&&Object.keys(t.O).every(function(e){return t.O[e](n[l])})?n.splice(l--,1):(p=!1,o<d&&(d=o));if(p){e.splice(a--,1);var c=i();void 0!==c&&(r=c)}}return r}})(),t.rv=function(){return"1.2.2"},(()=>{var e={980:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var i,o,a=n[0],d=n[1],p=n[2],l=0;if(a.some(function(r){return 0!==e[r]})){for(i in d)t.o(d,i)&&(t.m[i]=d[i]);if(p)var c=p(t)}for(r&&r(n);l<a.length;l++)o=a[l],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},n=self.webpackChunkrs_react_app=self.webpackChunkrs_react_app||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),t.ruid="bundler=rspack@1.2.2";var n=t.O(void 0,["361","900"],function(){return t(165)});n=t.O(n)})();