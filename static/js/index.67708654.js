(()=>{"use strict";var e={774:function(e,r,n){var t=n(773),o=n(699),i=n(511),a=n(880);let d=[{id:1,name:"开发工具",links:[{id:1,name:"GitHub",url:"https://github.com",icon:"\uD83D\uDC19"},{id:2,name:"VS Code",url:"https://code.visualstudio.com",icon:"\uD83D\uDCDD"},{id:3,name:"Stack Overflow",url:"https://stackoverflow.com",icon:"\uD83D\uDCA1"}]},{id:2,name:"学习资源",links:[{id:4,name:"TypeScript",url:"https://www.typescriptlang.org",icon:"\uD83D\uDCD8"},{id:5,name:"React Docs",url:"https://reactjs.org",icon:"⚛️"},{id:6,name:"掘金",url:"https://juejin.cn",icon:"\uD83C\uDFAF"}]}],c=[{id:"google",name:"Google",url:"https://www.google.com/search?q=",icon:"\uD83D\uDD0D"},{id:"bing",name:"Bing",url:"https://www.bing.com/search?q=",icon:"\uD83D\uDD0E"},{id:"baidu",name:"百度",url:"https://www.baidu.com/s?wd=",icon:"\uD83D\uDD0D"}],l=a.Z.div`
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
`,s=a.Z.form`
  display: flex;
  gap: 12px;
  width: 100%;
`,u=a.Z.input`
  flex: 1;
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid #e1e1e1;
  border-radius: 25px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
`,p=a.Z.select`
  padding: 0 20px;
  border: 2px solid #e1e1e1;
  border-radius: 25px;
  background: white;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    border-color: #4a90e2;
  }
`,f=a.Z.button`
  padding: 0 24px;
  border: none;
  border-radius: 25px;
  background: #4a90e2;
  color: white;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #357abd;
  }
`,m=()=>{let[e,r]=(0,o.useState)(""),[n,i]=(0,o.useState)(c["0"].id);return(0,t.jsx)(l,{children:(0,t.jsxs)(s,{onSubmit:r=>{if(r.preventDefault(),!e.trim())return;let t=c.find(e=>e.id===n);t&&window.open(t.url+encodeURIComponent(e),"_blank")},children:[(0,t.jsx)(u,{type:"text",value:e,onChange:e=>r(e.target.value),placeholder:"输入搜索内容..."}),(0,t.jsx)(p,{value:n,onChange:e=>i(e.target.value),children:c.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.icon," ",e.name]},e.id))}),(0,t.jsx)(f,{type:"submit",children:"搜索"})]})})},h=a.Z.section`
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
`,b=a.Z.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,x=a.Z.a`
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
`,v=a.Z.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,j=a.Z.span`
  font-size: 0.9rem;
  color: #666;
`,w=e=>{let{categories:r}=e;return(0,t.jsx)(t.Fragment,{children:r.map(e=>(0,t.jsxs)(h,{children:[(0,t.jsx)(g,{children:e.name}),(0,t.jsx)(b,{children:e.links.map(e=>(0,t.jsxs)(x,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(v,{children:e.icon}),(0,t.jsx)(j,{children:e.name})]},e.id))})]},e.id))})},y=a.Z.div`
  min-height: 100vh;
  background: #f5f6fa;
  padding: 2rem;
`,O=a.Z.header`
  text-align: center;
  margin-bottom: 2rem;
`,k=a.Z.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`,Z=a.Z.main`
  max-width: 1200px;
  margin: 0 auto;
`,_=document.getElementById("root");_&&i.createRoot(_).render((0,t.jsx)(o.StrictMode,{children:(0,t.jsx)(()=>(0,t.jsxs)(y,{children:[(0,t.jsx)(O,{children:(0,t.jsx)(k,{children:"My Start Page"})}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(m,{}),(0,t.jsx)(w,{categories:d})]})]}),{})}))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,(()=>{var e,r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(t,o){if(1&o&&(t=this(t)),8&o||"object"==typeof t&&t&&(4&o&&t.__esModule||16&o&&"function"==typeof t.then))return t;var i=Object.create(null);n.r(i);var a={};e=e||[null,r({}),r([]),r(r)];for(var d=2&o&&t;"object"==typeof d&&!~e.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach(function(e){a[e]=function(){return t[e]}});return a.default=function(){return t},n.d(i,a),i}})(),n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];n.O=function(r,t,o,i){if(t){i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[t,o,i];return}for(var d=1/0,a=0;a<e.length;a++){for(var t=e[a][0],o=e[a][1],i=e[a][2],c=!0,l=0;l<t.length;l++)(!1&i||d>=i)&&Object.keys(n.O).every(function(e){return n.O[e](t[l])})?t.splice(l--,1):(c=!1,i<d&&(d=i));if(c){e.splice(a--,1);var s=o();void 0!==s&&(r=s)}}return r}})(),n.rv=function(){return"1.2.2"},(()=>{var e={980:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,i,a=t[0],d=t[1],c=t[2],l=0;if(a.some(function(r){return 0!==e[r]})){for(o in d)n.o(d,o)&&(n.m[o]=d[o]);if(c)var s=c(n)}for(r&&r(t);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},t=self.webpackChunkrs_react_app=self.webpackChunkrs_react_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.ruid="bundler=rspack@1.2.2";var t=n.O(void 0,["361","41"],function(){return n(774)});t=n.O(t)})();