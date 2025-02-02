(()=>{"use strict";var e={774:function(e,r,n){var t=n(773),i=n(699),o=n(511),a=n(880);let d=[{id:0,name:"Turnip",links:[{id:1,name:"Turnip's Blog",url:"https://turnip1202.github.io/my-blog-astro/",icon:"\uD83E\uDD55"},{id:2,name:"GitHub",url:"https://github.com/Turnip1202",icon:"⭐"},{id:3,name:"稀土掘金",url:"https://juejin.cn/user/1684912023022440",icon:"\uD83D\uDD28"},{id:4,name:"哔哩哔哩",url:"https://b23.tv/zpySzz9",icon:"\uD83C\uDFAE"},{id:5,name:"抖音",url:"https://v.douyin.com/if78aSq9/",icon:"\uD83C\uDFAC"}]},{id:1,name:"开发工具",links:[{id:1,name:"GitHub",url:"https://github.com",icon:"\uD83D\uDC19"},{id:2,name:"VS Code",url:"https://code.visualstudio.com",icon:"\uD83D\uDCDD"},{id:3,name:"Stack Overflow",url:"https://stackoverflow.com",icon:"\uD83D\uDCA1"}]},{id:2,name:"学习资源",links:[{id:4,name:"TypeScript",url:"https://www.typescriptlang.org",icon:"\uD83D\uDCD8"},{id:5,name:"React Docs",url:"https://reactjs.org",icon:"⚛️"},{id:6,name:"掘金",url:"https://juejin.cn",icon:"\uD83C\uDFAF"}]}],p=[{id:"google",name:"Google",url:"https://www.google.com/search?q=",icon:"\uD83D\uDD0D"},{id:"bing",name:"Bing",url:"https://www.bing.com/search?q=",icon:"\uD83D\uDD0E"},{id:"baidu",name:"百度",url:"https://www.baidu.com/s?wd=",icon:"\uD83D\uDD0D"}],c=a.Z.div`
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
  padding: 0 15px;

  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`,l=a.Z.form`
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
`,x=()=>{let[e,r]=(0,i.useState)(""),[n,o]=(0,i.useState)(p["0"].id);return(0,t.jsx)(c,{children:(0,t.jsxs)(l,{onSubmit:r=>{if(r.preventDefault(),!e.trim())return;let t=p.find(e=>e.id===n);t&&window.open(t.url+encodeURIComponent(e),"_blank")},children:[(0,t.jsx)(u,{type:"text",value:e,onChange:e=>r(e.target.value),placeholder:"输入搜索内容..."}),(0,t.jsx)(s,{value:n,onChange:e=>o(e.target.value),children:p.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.icon," ",e.name]},e.id))}),(0,t.jsx)(m,{type:"submit",children:"搜索"})]})})},h=a.Z.section`
  margin: 2rem 0;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,g=a.Z.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
`,f=a.Z.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,b=a.Z.a`
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
`,j=e=>{let{categories:r}=e;return(0,t.jsx)(t.Fragment,{children:r.map(e=>(0,t.jsxs)(h,{children:[(0,t.jsx)(g,{children:e.name}),(0,t.jsx)(f,{children:e.links.map(e=>(0,t.jsxs)(b,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(w,{children:e.icon}),(0,t.jsx)(v,{children:e.name})]},e.id))})]},e.id))})},y=a.Z.div`
  min-height: 100vh;
  background: #f5f6fa;
  padding: 2rem;
`,k=a.Z.header`
  text-align: center;
  margin-bottom: 2rem;
`,O=a.Z.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`,S=a.Z.main`
  max-width: 1200px;
  margin: 0 auto;
`,Z=document.getElementById("root");Z&&o.createRoot(Z).render((0,t.jsx)(i.StrictMode,{children:(0,t.jsx)(()=>(0,t.jsxs)(y,{children:[(0,t.jsx)(k,{children:(0,t.jsx)(O,{children:"Turnip起始页"})}),(0,t.jsxs)(S,{children:[(0,t.jsx)(x,{}),(0,t.jsx)(j,{categories:d})]})]}),{})}))}},r={};function n(t){var i=r[t];if(void 0!==i)return i.exports;var o=r[t]={exports:{}};return e[t](o,o.exports,n),o.exports}n.m=e,(()=>{var e,r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(t,i){if(1&i&&(t=this(t)),8&i||"object"==typeof t&&t&&(4&i&&t.__esModule||16&i&&"function"==typeof t.then))return t;var o=Object.create(null);n.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var d=2&i&&t;"object"==typeof d&&!~e.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach(function(e){a[e]=function(){return t[e]}});return a.default=function(){return t},n.d(o,a),o}})(),n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];n.O=function(r,t,i,o){if(t){o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[t,i,o];return}for(var d=1/0,a=0;a<e.length;a++){for(var t=e[a][0],i=e[a][1],o=e[a][2],p=!0,c=0;c<t.length;c++)(!1&o||d>=o)&&Object.keys(n.O).every(function(e){return n.O[e](t[c])})?t.splice(c--,1):(p=!1,o<d&&(d=o));if(p){e.splice(a--,1);var l=i();void 0!==l&&(r=l)}}return r}})(),n.rv=function(){return"1.2.2"},(()=>{var e={980:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var i,o,a=t[0],d=t[1],p=t[2],c=0;if(a.some(function(r){return 0!==e[r]})){for(i in d)n.o(d,i)&&(n.m[i]=d[i]);if(p)var l=p(n)}for(r&&r(t);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},t=self.webpackChunkrs_react_app=self.webpackChunkrs_react_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.ruid="bundler=rspack@1.2.2";var t=n.O(void 0,["361","41"],function(){return n(774)});t=n.O(t)})();