(()=>{"use strict";var e,t,r,i,s,a,n={4037(e,t,r){var i=r(4934),s=r(2086),a=r(4528),n=r(5746);let o=n.A.button`
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
`,l=n.A.header`
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
`,c=n.A.h1`
  color: var(--text-color, #2c3e50);
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  font-weight: 800;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--text-color, #2c3e50) 0%, var(--primary-color, #4a90e2) 50%, var(--text-color, #2c3e50) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
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
`,d=n.A.main`
  max-width: 1200px;
  margin: 0 auto;
  background: var(--bg-color, rgba(255, 255, 255, 0.65));
  color: var(--text-color, #2c3e50);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 
    0 12px 40px 0 rgba(31, 38, 135, 0.2),
    0 2px 16px 0 rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
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
`,h=n.A.footer`
  text-align: center;
  padding: 24px 20px;
  color: var(--text-color, #2c3e50);
  font-size: 14px;
  opacity: 0.8;
  margin-top: 2.5rem;
  
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
`;var g=r(113);n.A.div`
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
`,n.A.form`
  display: flex;
  gap: 12px;
  width: 100%;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`,n.A.input`
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
`,n.A.div`
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
`,n.A.select`
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
`,n.A.button`
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
`,n.A.section`
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
`,n.A.h2`
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
`,n.A.div`
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
`,n.A.a`
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
`,n.A.span`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  display: block;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
`,n.A.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>"custom"===e.theme.id&&"暗黑主题"===e.theme.name?"rgba(255, 255, 255, 0.9)":"#555555"};
  text-align: center;
  line-height: 1.4;
  transition: all 0.3s ease;
`;let x="#4a90e2",p="#357abd",u="#52c41a",m="#fa8c16",y="#ff4d4f",f="#1890ff",b={background:"rgba(255, 255, 255, 0.9)",backgroundHover:"rgba(255, 255, 255, 0.95)",backgroundContainer:"rgba(255, 255, 255, 0.65)",text:"#2c3e50",textSecondary:"#666666",textTertiary:"#999999",border:"rgba(0, 0, 0, 0.1)",borderHover:"rgba(74, 144, 226, 0.2)",shadow:"rgba(0, 0, 0, 0.05)"},j={background:"rgba(0, 0, 0, 0.6)",backgroundHover:"rgba(255, 255, 255, 0.12)",backgroundContainer:"rgba(0, 0, 0, 0.4)",text:"#ffffff",textSecondary:"rgba(255, 255, 255, 0.9)",textTertiary:"rgba(255, 255, 255, 0.6)",border:"rgba(255, 255, 255, 0.1)",borderHover:"rgba(255, 255, 255, 0.2)",shadow:"rgba(255, 255, 255, 0.1)"},A="6px",v="12px",S="16px",k="20px",w="50%",C="14px",I="0 4px 12px rgba(0, 0, 0, 0.1)",T="0 8px 24px rgba(0, 0, 0, 0.15)",E="0 4px 16px rgba(74, 144, 226, 0.3)",z=n.A.div`
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
    background: ${e=>e.backgroundImage||"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
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
    background: ${e=>e.$isDark?"rgba(0, 0, 0, 0.3)":"rgba(255, 255, 255, 0.3)"};
    backdrop-filter: blur(${e=>e.$isDark?"5px":"8px"});
    -webkit-backdrop-filter: blur(${e=>e.$isDark?"5px":"8px"});
    z-index: -1;
    transition: background ${"0.3s ease"};
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,D={default:{id:"morning",name:"晨光蓝",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",blur:"10px",opacity:.95},presets:[{id:"purple",name:"渐变紫",backgroundImage:"linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",blur:"10px",opacity:.95},{id:"morning",name:"晨光蓝",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",blur:"10px",opacity:.95},{id:"night",name:"夜空",backgroundImage:"linear-gradient(to right, #243949 0%, #517fa4 100%)",blur:"10px",opacity:.92}]};var B=r(2286);let $="configStore";class _{get isAvailable(){return"u">typeof indexedDB}getFullKey(e){return`${this.prefix}${e}`}async getDB(){return this.db?this.db:(this.dbPromise||(this.dbPromise=new Promise((e,t)=>{let r=indexedDB.open("AppStorageDB",1);r.onerror=()=>{console.error("[IndexedDBAdapter] Failed to open database:",r.error),t(r.error)},r.onsuccess=()=>{this.db=r.result,e(this.db)},r.onupgradeneeded=e=>{let t=e.target.result;t.objectStoreNames.contains($)||t.createObjectStore($,{keyPath:"key"})}})),this.dbPromise)}async get(e){try{let t=await this.getDB(),r=this.getFullKey(e);return new Promise((i,s)=>{let a=t.transaction($,"readonly").objectStore($).get(r);a.onsuccess=()=>{let e=a.result;i(e?e.value:null)},a.onerror=()=>{console.error(`[IndexedDBAdapter] Failed to get key "${e}":`,a.error),s(a.error)}})}catch(t){return console.error(`[IndexedDBAdapter] Failed to get key "${e}":`,t),null}}async set(e,t){try{let r=await this.getDB(),i=this.getFullKey(e);return new Promise((s,a)=>{let n=r.transaction($,"readwrite").objectStore($).put({key:i,value:t});n.onsuccess=()=>s(),n.onerror=()=>{console.error(`[IndexedDBAdapter] Failed to set key "${e}":`,n.error),a(n.error)}})}catch(t){throw console.error(`[IndexedDBAdapter] Failed to set key "${e}":`,t),t}}async remove(e){try{let t=await this.getDB(),r=this.getFullKey(e);return new Promise((i,s)=>{let a=t.transaction($,"readwrite").objectStore($).delete(r);a.onsuccess=()=>i(),a.onerror=()=>{console.error(`[IndexedDBAdapter] Failed to remove key "${e}":`,a.error),s(a.error)}})}catch(t){throw console.error(`[IndexedDBAdapter] Failed to remove key "${e}":`,t),t}}async clear(){try{let e=await this.getDB();return new Promise((t,r)=>{let i=e.transaction($,"readwrite").objectStore($).clear();i.onsuccess=()=>t(),i.onerror=()=>{console.error("[IndexedDBAdapter] Failed to clear:",i.error),r(i.error)}})}catch(e){throw console.error("[IndexedDBAdapter] Failed to clear:",e),e}}async keys(){try{let e=await this.getDB();return new Promise((t,r)=>{let i=e.transaction($,"readonly").objectStore($).getAllKeys();i.onsuccess=()=>{let e=i.result.filter(e=>e.startsWith(this.prefix)).map(e=>e.slice(this.prefix.length));t(e)},i.onerror=()=>{console.error("[IndexedDBAdapter] Failed to get keys:",i.error),r(i.error)}})}catch(e){return console.error("[IndexedDBAdapter] Failed to get keys:",e),[]}}async has(e){return null!==await this.get(e)}async getSize(e){try{let t=await this.getDB(),r=this.getFullKey(e);return new Promise((i,s)=>{let a=t.transaction($,"readonly").objectStore($).get(r);a.onsuccess=()=>{let e=a.result;if(e){let t=new Blob([JSON.stringify(e.value)]).size;i(t)}else i(0)},a.onerror=()=>{console.error(`[IndexedDBAdapter] Failed to get size for key "${e}":`,a.error),s(a.error)}})}catch(t){return console.error(`[IndexedDBAdapter] Failed to get size for key "${e}":`,t),0}}constructor(e={}){(0,B._)(this,"name","indexedDB"),(0,B._)(this,"prefix",void 0),(0,B._)(this,"db",null),(0,B._)(this,"dbPromise",null),this.prefix=e.prefix||"app_"}}class O{get isAvailable(){try{let e="__storage_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}}getFullKey(e){return`${this.prefix}${e}`}async get(e){try{let t=this.getFullKey(e),r=localStorage.getItem(t);if(null===r)return null;return JSON.parse(r)}catch(t){return console.error(`[LocalStorageAdapter] Failed to get key "${e}":`,t),null}}async set(e,t){try{let r=this.getFullKey(e);localStorage.setItem(r,JSON.stringify(t))}catch(t){throw console.error(`[LocalStorageAdapter] Failed to set key "${e}":`,t),t}}async remove(e){try{let t=this.getFullKey(e);localStorage.removeItem(t)}catch(t){throw console.error(`[LocalStorageAdapter] Failed to remove key "${e}":`,t),t}}async clear(){try{let e=[];for(let t=0;t<localStorage.length;t++){let r=localStorage.key(t);r&&r.startsWith(this.prefix)&&e.push(r)}e.forEach(e=>localStorage.removeItem(e))}catch(e){throw console.error("[LocalStorageAdapter] Failed to clear:",e),e}}async keys(){let e=[];for(let t=0;t<localStorage.length;t++){let r=localStorage.key(t);r&&r.startsWith(this.prefix)&&e.push(r.slice(this.prefix.length))}return e}async has(e){let t=this.getFullKey(e);return null!==localStorage.getItem(t)}async getSize(e){let t=this.getFullKey(e),r=localStorage.getItem(t);return r?new Blob([r]).size:0}constructor(e={}){(0,B._)(this,"name","localStorage"),(0,B._)(this,"prefix",void 0),this.prefix=e.prefix||"app_"}}class P{get isAvailable(){return this.localStorage.isAvailable||this.indexedDB.isAvailable}selectAdapter(e){return"localStorage"===this.preferredStorage?this.localStorage:"indexedDB"===this.preferredStorage||this.indexedDB.isAvailable&&(!this.localStorage.isAvailable||void 0!==e&&e>102400)?this.indexedDB:this.localStorage}estimateSize(e){try{return new Blob([JSON.stringify(e)]).size}catch{return 0}}async get(e){let t=await this.localStorage.get(e);return null!==t?t:await this.indexedDB.get(e)}async set(e,t){let r=this.estimateSize(t),i=this.selectAdapter(r);i===this.indexedDB?await this.localStorage.remove(e):await this.indexedDB.remove(e),await i.set(e,t)}async remove(e){await Promise.all([this.localStorage.remove(e),this.indexedDB.remove(e)])}async clear(){await Promise.all([this.localStorage.clear(),this.indexedDB.clear()])}async clearLocalStorage(){await this.localStorage.clear()}async clearIndexedDB(){await this.indexedDB.clear()}async keys(){let[e,t]=await Promise.all([this.localStorage.keys(),this.indexedDB.keys()]);return[...new Set([...e,...t])]}async has(e){let[t,r]=await Promise.all([this.localStorage.has(e),this.indexedDB.has(e)]);return t||r}async getSize(e){let[t,r]=await Promise.all([this.localStorage.getSize(e),this.indexedDB.getSize(e)]);return Math.max(t||0,r||0)}async migrateToIndexedDB(e){let t=await this.localStorage.get(e);return null!==t&&(await this.indexedDB.set(e,t),await this.localStorage.remove(e),!0)}async migrateToLocalStorage(e){let t=await this.indexedDB.get(e);if(null===t)return!1;let r=this.estimateSize(t);return r>5242880?(console.warn(`[SmartStorageManager] Data too large for localStorage: ${r} bytes`),!1):(await this.localStorage.set(e,t),await this.indexedDB.remove(e),!0)}async getStats(){let[e,t]=await Promise.all([this.localStorage.keys(),this.indexedDB.keys()]),r=0,i=0;for(let t of e)r+=await this.localStorage.getSize(t)||0;for(let e of t)i+=await this.indexedDB.getSize(e)||0;return{localStorageKeys:e.length,indexedDBKeys:t.length,totalKeys:e.length+t.length,localStorageSize:r,indexedDBSize:i}}constructor(e="auto"){(0,B._)(this,"name","smartStorage"),(0,B._)(this,"localStorage",void 0),(0,B._)(this,"indexedDB",void 0),(0,B._)(this,"preferredStorage",void 0),this.localStorage=new O,this.indexedDB=new _,this.preferredStorage=e}}let F="turnip-theme-config",R={default:{id:"default",name:"默认主题",backgroundImage:"linear-gradient(120deg, #f6d365 0%, #fda085 100%)",blur:"10px",opacity:.95},presets:[]},L=new class{getPreferredStorageType(){try{let e=localStorage.getItem("app_storage_type");if("localStorage"===e||"indexedDB"===e||"auto"===e)return e}catch{}return"auto"}loadFromLocalStorage(){try{let e=localStorage.getItem(F);return e?JSON.parse(e):null}catch(e){return console.error("Failed to load theme config from localStorage:",e),null}}async initialize(){if(!this.initialized)try{let e=await this.storage.get(F);e?this.config=e:await this.saveToStorage(),this.initialized=!0}catch(e){console.error("Failed to initialize ThemeManager:",e),await this.saveToStorage(),this.initialized=!0}}async waitForInit(){this.initPromise&&await this.initPromise}getConfig(){return this.config}getDefaultTheme(){return this.config.default}getPresets(){return this.config.presets}async setDefaultTheme(e){this.config.default=e,await this.saveToStorage()}setDefaultThemeSync(e){this.config.default=e,this.saveToLocalStorage(),this.saveToStorage().catch(console.error)}async addPreset(e){if(this.config.presets.some(t=>t.id===e.id))throw Error(`Theme with id ${e.id} already exists`);this.config.presets.push(e),await this.saveToStorage()}addPresetSync(e){if(this.config.presets.some(t=>t.id===e.id))throw Error(`Theme with id ${e.id} already exists`);this.config.presets.push(e),this.saveToLocalStorage(),this.saveToStorage().catch(console.error)}async updatePreset(e){let t=this.config.presets.findIndex(t=>t.id===e.id);if(-1===t)throw Error(`Theme with id ${e.id} not found`);this.config.presets[t]=e,await this.saveToStorage()}async deletePreset(e){let t=this.config.presets.findIndex(t=>t.id===e);if(-1===t)throw Error(`Theme with id ${e} not found`);this.config.presets.splice(t,1),await this.saveToStorage()}deletePresetSync(e){let t=this.config.presets.findIndex(t=>t.id===e);if(-1===t)throw Error(`Theme with id ${e} not found`);this.config.presets.splice(t,1),this.saveToLocalStorage(),this.saveToStorage().catch(console.error)}findThemeById(e){return this.config.default.id===e?this.config.default:this.config.presets.find(t=>t.id===e)}saveToLocalStorage(){try{localStorage.setItem(F,JSON.stringify(this.config))}catch(e){console.error("Failed to save theme config to localStorage:",e)}}async saveToStorage(){this.saveToLocalStorage();try{await this.storage.set(F,this.config)}catch(e){console.error("Failed to save theme config to storage:",e)}}async clearStorage(){localStorage.removeItem(F),await this.storage.remove(F)}clearStorageSync(){localStorage.removeItem(F),this.storage.remove(F).catch(console.error)}async resetToDefault(e){this.config={...e},await this.saveToStorage()}resetToDefaultSync(e){this.config={...e},this.saveToLocalStorage(),this.saveToStorage().catch(console.error)}constructor(e){(0,B._)(this,"config",void 0),(0,B._)(this,"storage",void 0),(0,B._)(this,"initialized",!1),(0,B._)(this,"initPromise",null);const t=this.getPreferredStorageType();this.storage=new P(t),this.config=this.loadFromLocalStorage()||e||{...R},this.initPromise=this.initialize()}}(D),N=[{id:0,name:"影音视频",links:[{id:1,name:"爱奇艺",url:"https://www.iqiyi.com/",icon:"\uD83C\uDFAC"},{id:2,name:"优酷",url:"https://www.youku.com/",icon:"\uD83C\uDFAC"},{id:3,name:"腾讯视频",url:"https://v.qq.com/",icon:"\uD83D\uDC27"},{id:4,name:"哔哩哔哩",url:"https://www.bilibili.com/",icon:"bilibili"},{id:5,name:"抖音",url:"https://www.douyin.com/",icon:"\uD83C\uDFB5"}]},{id:-1,name:"Turnip",links:[{id:1,name:"Turnip博客",url:"https://turnip1202.github.io/my-blog-astro/",icon:"\uD83E\uDD55"},{id:2,name:"GitHub",url:"https://github.com/Turnip1202",icon:"⭐"},{id:3,name:"稀土掘金",url:"https://juejin.cn/user/1684912023022440",icon:"\uD83D\uDD28"},{id:4,name:"哔哩哔哩",url:"https://b23.tv/zpySzz9",icon:"\uD83C\uDFAE"},{id:5,name:"抖音",url:"https://v.douyin.com/if78aSq9/",icon:"\uD83C\uDFAC"},{id:6,name:"react-study",url:"https://turnip1202.github.io/react-study",icon:"\uD83D\uDCCB"},{id:7,name:"ToDo-List",url:"https://turnip1202.github.io/react18-todo",icon:"\uD83D\uDCDD"}]},{id:2,name:"开发工具",links:[{id:1,name:"GitHub",url:"https://github.com",icon:"\uD83D\uDC19"},{id:2,name:"VS Code",url:"https://code.visualstudio.com",icon:"\uD83D\uDCDD"},{id:3,name:"Stack Overflow",url:"https://stackoverflow.com",icon:"\uD83D\uDCA1"}]},{id:3,name:"学习资源",links:[{id:4,name:"TypeScript",url:"https://www.typescriptlang.org",icon:"\uD83D\uDCD8"},{id:5,name:"React Docs",url:"https://reactjs.org",icon:"⚛️"},{id:6,name:"掘金",url:"https://juejin.cn",icon:"\uD83C\uDFAF"}]}],Y=[{id:"bing",name:"Bing",url:"https://www.bing.com/search?q=",icon:"\uD83D\uDD0E"},{id:"google",name:"Google",url:"https://www.google.com/search?q=",icon:"\uD83D\uDD0D"},{id:"baidu",name:"百度",url:"https://www.baidu.com/s?wd=",icon:"\uD83D\uDD0D"}],V=new class{getPreferredStorageType(){try{let e=localStorage.getItem("app_storage_type");if("localStorage"===e||"indexedDB"===e||"auto"===e)return e}catch{}return"auto"}getFromLocalStorage(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(e){return console.error(`Error reading from localStorage: ${e}`),null}}saveToLocalStorage(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(`Error saving to localStorage: ${e}`)}}async saveToStorage(e,t){this.saveToLocalStorage(e,t);try{await this.storage.set(e,t)}catch(t){console.error(`Failed to save ${e} to storage:`,t)}}saveSync(e,t){this.saveToLocalStorage(e,t),this.saveToStorage(e,t).catch(console.error)}async initialize(){if(!this.initialized)try{let[e,t]=await Promise.all([this.storage.get(this.CATEGORIES_KEY),this.storage.get(this.ENGINES_KEY)]);if(e){this.categories=e,this.categories.sort((e,t)=>e.id-t.id);let t=!1;this.categories.forEach(e=>{e.links.forEach(r=>{void 0===r.originalCategoryId&&(r.originalCategoryId=e.id,t=!0)}),e.links.sort((e,t)=>e.id-t.id)}),t&&this.saveSync(this.CATEGORIES_KEY,this.categories)}t&&(this.engines=t),this.initialized=!0}catch(e){console.error("Failed to initialize LinksManager:",e),this.initialized=!0}}async waitForInit(){this.initPromise&&await this.initPromise}getCategoryById(e){return this.categories.find(t=>t.id===e)}addCategory(e){let t={id:this.categories.length?Math.max(...this.categories.map(e=>e.id))+1:0,name:e,links:[]};return this.categories.push(t),this.saveSync(this.CATEGORIES_KEY,this.categories),t}updateCategory(e,t){let r=this.getCategoryById(e);return!!r&&(r.name=t,this.saveSync(this.CATEGORIES_KEY,this.categories),!0)}deleteCategory(e){let t=this.categories.findIndex(t=>t.id===e);return -1!==t&&(this.categories.splice(t,1),this.saveSync(this.CATEGORIES_KEY,this.categories),!0)}addLink(e,t,r,i){let s=this.getCategoryById(e);if(!s)return!1;let a=s.links.length?Math.max(...s.links.map(e=>e.id))+1:1;return s.links.push({id:a,name:t,url:r,icon:i,originalCategoryId:e}),this.saveSync(this.CATEGORIES_KEY,this.categories),!0}updateLink(e,t,r){let i=this.getCategoryById(e);if(!i)return!1;let s=i.links.find(e=>e.id===t);return!!s&&(Object.assign(s,r),this.saveSync(this.CATEGORIES_KEY,this.categories),!0)}deleteLink(e,t){let r=this.getCategoryById(e);if(!r)return!1;let i=r.links.findIndex(e=>e.id===t);return -1!==i&&(r.links.splice(i,1),this.saveSync(this.CATEGORIES_KEY,this.categories),!0)}toggleFavorite(e,t){let r=this.getCategoryById(e);if(!r)return!1;let i=r.links.find(e=>e.id===t);return!!i&&(i.favorite=!i.favorite,this.saveSync(this.CATEGORIES_KEY,this.categories),!0)}getFavoriteLinks(){let e=[];return this.categories.forEach(t=>{t.links.forEach(r=>{r.favorite&&e.push({categoryId:t.id,link:r})})}),e}getSearchEngineById(e){return this.engines.find(t=>t.id===e)}addSearchEngine(e,t,r,i){return!this.getSearchEngineById(e)&&(this.engines.push({id:e,name:t,url:r,icon:i}),this.saveSync(this.ENGINES_KEY,this.engines),!0)}updateSearchEngine(e,t){let r=this.getSearchEngineById(e);return!!r&&(Object.assign(r,t),this.saveSync(this.ENGINES_KEY,this.engines),!0)}deleteSearchEngine(e){let t=this.engines.findIndex(t=>t.id===e);return -1!==t&&(this.engines.splice(t,1),this.saveSync(this.ENGINES_KEY,this.engines),!0)}getAllCategories(){return[...this.categories]}getAllSearchEngines(){return[...this.engines]}async clearStorage(){localStorage.removeItem(this.CATEGORIES_KEY),localStorage.removeItem(this.ENGINES_KEY),await Promise.all([this.storage.remove(this.CATEGORIES_KEY),this.storage.remove(this.ENGINES_KEY)])}resetToDefault(e,t){this.categories=[...e],this.engines=[...t],this.saveSync(this.CATEGORIES_KEY,this.categories),this.saveSync(this.ENGINES_KEY,this.engines)}constructor(e,t){(0,B._)(this,"categories",void 0),(0,B._)(this,"engines",void 0),(0,B._)(this,"CATEGORIES_KEY","turnip_link_categories"),(0,B._)(this,"ENGINES_KEY","turnip_search_engines"),(0,B._)(this,"storage",void 0),(0,B._)(this,"initialized",!1),(0,B._)(this,"initPromise",null);const r=this.getPreferredStorageType();this.storage=new P(r);const i=this.getFromLocalStorage(this.CATEGORIES_KEY),s=this.getFromLocalStorage(this.ENGINES_KEY);this.categories=i||[...e],this.categories.sort((e,t)=>e.id-t.id),this.categories.forEach(e=>{e.links.sort((e,t)=>e.id-t.id)}),this.engines=s||[...t],i||this.saveToLocalStorage(this.CATEGORIES_KEY,this.categories),s||this.saveToLocalStorage(this.ENGINES_KEY,this.engines),this.initPromise=this.initialize()}}(N,Y),K={title:"Turnip起始页",copyright:{text:`\xa9 ${new Date().getFullYear()} Turnip1202. All rights reserved.`}},M=new class{getPreferredStorageType(){try{let e=localStorage.getItem("app_storage_type");if("localStorage"===e||"indexedDB"===e||"auto"===e)return e}catch{}return"auto"}getFromLocalStorage(){try{let e=localStorage.getItem(this.STORAGE_KEY);return e?JSON.parse(e):null}catch(e){return console.error(`读取本地存储出错: ${e}`),null}}applyConfigToDOM(){this.config.title&&(document.title=this.config.title),this.config.favicon&&this.updateFavicon(this.config.favicon)}async initialize(){if(!this.initialized)try{let e=await this.storage.get(this.STORAGE_KEY);e?(this.config=e,this.initialized=!0,this.applyConfigToDOM()):(await this.saveToStorage(),this.initialized=!0)}catch(e){console.error("Failed to initialize SiteManager:",e),await this.saveToStorage(),this.initialized=!0}}async waitForInit(){this.initPromise&&await this.initPromise}saveToLocalStorage(){try{localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.config))}catch(e){console.error(`保存到本地存储出错: ${e}`)}}async saveToStorage(){this.saveToLocalStorage();try{await this.storage.set(this.STORAGE_KEY,this.config)}catch(e){console.error("Failed to save site config to storage:",e)}}saveSync(){this.saveToLocalStorage(),this.saveToStorage().catch(console.error)}getConfig(){return{...this.config}}updateTitle(e){this.config.title=e,this.saveSync(),document.title=e}updateCopyright(e){this.config.copyright.text=e,this.saveSync()}addConfigItem(e,t){this.config[e]=t,this.saveSync(),"favicon"===e&&t&&this.updateFavicon(t)}updateFavicon(e){if(!e)return;document.querySelectorAll('link[rel*="icon"]').forEach(e=>e.remove());let t=document.createElement("link");t.rel="shortcut icon",t.type="image/x-icon",t.href=e,document.head.appendChild(t);let r=document.createElement("link");r.rel="icon",r.type="image/x-icon",r.href=e,document.head.appendChild(r)}deleteConfigItem(e){return"title"!==e&&"copyright"!==e&&e in this.config&&(delete this.config[e],this.saveSync(),!0)}resetToDefault(e){this.config={...e},this.saveSync()}async clearStorage(){localStorage.removeItem(this.STORAGE_KEY),await this.storage.remove(this.STORAGE_KEY)}constructor(e){(0,B._)(this,"config",void 0),(0,B._)(this,"STORAGE_KEY","turnip_site_config"),(0,B._)(this,"storage",void 0),(0,B._)(this,"initialized",!1),(0,B._)(this,"initPromise",null);const t=this.getPreferredStorageType();this.storage=new P(t);const r=this.getFromLocalStorage();this.config=r||{...e},r||this.saveToLocalStorage(),this.applyConfigToDOM(),this.initPromise=this.initialize()}}(K),G=new class{getPreferredStorageType(){try{let e=localStorage.getItem("app_storage_type");if("localStorage"===e||"indexedDB"===e||"auto"===e)return e}catch{}return"auto"}loadFromLocalStorage(){try{let e=localStorage.getItem(this.STORAGE_KEY);if(e){let t=JSON.parse(e);return{versions:t.versions||[],currentVersionId:t.currentVersionId,maxVersions:t.maxVersions||this.MAX_VERSIONS}}}catch(e){console.warn("Failed to load version data:",e)}return{versions:[],maxVersions:this.MAX_VERSIONS}}saveToLocalStorage(){try{localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.versionData))}catch(e){console.error("Failed to save version data:",e)}}async saveToStorage(){this.saveToLocalStorage();try{await this.storage.set(this.STORAGE_KEY,this.versionData)}catch(e){console.error("Failed to save version data to storage:",e)}}saveSync(){this.saveToLocalStorage(),this.saveToStorage().catch(console.error)}async initialize(){if(!this.initialized)try{let e=await this.storage.get(this.STORAGE_KEY);e?this.versionData=e:await this.saveToStorage(),this.initialized=!0}catch(e){console.error("Failed to initialize ConfigVersionManager:",e),await this.saveToStorage(),this.initialized=!0}}async waitForInit(){this.initPromise&&await this.initPromise}generateId(){return`v_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}getCurrentConfigData(){return{site:M.getConfig(),theme:{default:L.getDefaultTheme(),presets:L.getPresets()},links:{categories:V.getAllCategories(),searchEngines:V.getAllSearchEngines()}}}createVersion(e){let t={id:this.generateId(),name:e.name,description:e.description,timestamp:Date.now(),data:this.getCurrentConfigData(),tags:e.tags||[],isAutoSaved:e.isAutoSaved||!1};return this.versionData.versions.unshift(t),this.versionData.versions.length>this.versionData.maxVersions&&(this.versionData.versions=this.versionData.versions.slice(0,this.versionData.maxVersions)),this.versionData.currentVersionId=t.id,this.saveSync(),t}getAllVersions(){return[...this.versionData.versions]}getVersion(e){return this.versionData.versions.find(t=>t.id===e)||null}deleteVersion(e){let t=this.versionData.versions.findIndex(t=>t.id===e);return -1!==t&&(this.versionData.versions.splice(t,1),this.versionData.currentVersionId===e&&(this.versionData.currentVersionId=void 0),this.saveSync(),!0)}restoreVersion(e){let t=this.getVersion(e);if(!t)return!1;try{if(t.data.site){var r;t.data.site.title&&M.updateTitle(t.data.site.title),(null==(r=t.data.site.copyright)?void 0:r.text)&&M.updateCopyright(t.data.site.copyright.text),Object.keys(t.data.site).forEach(e=>{"title"!==e&&"copyright"!==e&&M.addConfigItem(e,t.data.site[e])})}return t.data.theme&&console.log("主题配置恢复功能待实现"),t.data.links&&t.data.links.categories&&(V.getAllCategories().forEach(e=>V.deleteCategory(e.id)),t.data.links.categories.forEach(e=>{let t=V.addCategory(e.name);e.links&&e.links.forEach(e=>{V.addLink(t.id,e.name,e.url,e.icon)})})),this.versionData.currentVersionId=e,this.saveSync(),!0}catch(e){return console.error("Failed to restore version:",e),!1}}compareVersions(e,t){let r=this.getVersion(e),i=this.getVersion(t);if(!r||!i)return null;let s={},a=0,n=this.compareObjects(r.data.site,i.data.site);n.length>0&&(s.site=n,a+=n.length);let o=this.compareObjects(r.data.theme,i.data.theme);o.length>0&&(s.theme=o,a+=o.length);let l=this.compareObjects(r.data.links,i.data.links);return l.length>0&&(s.links=l,a+=l.length),{changes:s,summary:`共发现 ${a} 处变更`}}compareObjects(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=[];return new Set([...Object.keys(e||{}),...Object.keys(t||{})]).forEach(s=>{let a=r?`${r}.${s}`:s,n=null==e?void 0:e[s],o=null==t?void 0:t[s];"object"==typeof n&&"object"==typeof o&&n&&o?i.push(...this.compareObjects(n,o,a)):JSON.stringify(n)!==JSON.stringify(o)&&i.push(`${a}: ${JSON.stringify(n)} → ${JSON.stringify(o)}`)}),i}autoSave(){return this.createVersion({name:`自动保存_${new Date().toLocaleString("zh-CN")}`,description:"系统自动保存的版本",isAutoSaved:!0})}cleanupAutoSaves(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=this.versionData.versions.filter(e=>e.isAutoSaved).slice(e),r=0;return t.forEach(e=>{this.deleteVersion(e.id)&&r++}),r}getCurrentVersionId(){return this.versionData.currentVersionId}exportVersions(){return JSON.stringify(this.versionData,null,2)}importVersions(e){try{let t=JSON.parse(e);if(t.versions&&Array.isArray(t.versions))return this.versionData={versions:t.versions,currentVersionId:t.currentVersionId,maxVersions:t.maxVersions||this.MAX_VERSIONS},this.saveSync(),!0}catch(e){console.error("Failed to import versions:",e)}return!1}async clearStorage(){localStorage.removeItem(this.STORAGE_KEY),await this.storage.remove(this.STORAGE_KEY)}constructor(){(0,B._)(this,"STORAGE_KEY","turnip_config_versions"),(0,B._)(this,"MAX_VERSIONS",20),(0,B._)(this,"versionData",void 0),(0,B._)(this,"storage",void 0),(0,B._)(this,"initialized",!1),(0,B._)(this,"initPromise",null);const e=this.getPreferredStorageType();this.storage=new P(e),this.versionData=this.loadFromLocalStorage(),this.initPromise=this.initialize()}},J=class{static getProjectVersion(){return"1.0.0"}static getConfigVersionInfo(){try{let e=G.getAllVersions(),t=G.getCurrentVersionId(),r="默认配置";if(t&&e.length>0){let i=e.find(e=>e.id===t);r=i?i.name:"未知版本"}return{total:e.length,current:t||null,currentName:r}}catch(e){return{total:0,current:null,currentName:"获取失败"}}}static getVersionStatusText(){let e=this.getConfigVersionInfo();return 0===e.total?"无版本记录":`${e.currentName} (共${e.total}个版本)`}static getSystemSummary(){let e=this.getConfigVersionInfo();return{projectVersion:this.getProjectVersion(),configVersions:e.total,currentConfigVersion:e.currentName,lastModified:new Date().toISOString()}}};n.A.div`
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
`,n.A.button`
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
`,n.A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
`,n.A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 4px;
`,n.A.button`
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
`;let U=n.A.button`
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
`;(0,n.A)(U)`
  display: flex;
  align-items: center;
  justify-content: center;
`,n.A.div`
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
`;var W=r(8529),H=r(8157),q=r(8479),X=r(8709),Q=r(5222),Z=r(984),ee=r(9229),et=r(6790),er=r(7211),ei=r(4574),es=r(4642),ea=r(494),en=r(1416),eo=r(7293),el=r(4957),ec=r(5844),ed=r(5171),eh=r(9995),eg=r(9469),ex=r(7048),ep=r(1786),eu=r(2889),em=r(1481),ey=r(3065),ef=r(8900),eb=r(2314),ej=r(157),eA=r(7077),ev=r(9348),eS=r(3248),ek=r(159),ew=r(6420),eC=r(2089),eI=r(9865),eT=r(713),eE=r(6559),ez=r(8406),eD=r(9994),eB=r(9152),e$=r(5786),e_=r(3176);let{Title:eO,Paragraph:eP,Text:eF}=et.A,{Option:eR}=er.A,eL=()=>{let[e,t]=(0,s.useState)(!1),[r,a]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),[l,c]=(0,s.useState)(!1),[d,h]=(0,s.useState)(50),[g,x]=(0,s.useState)(4),[p,u]=(0,s.useState)(1),[m]=ei.A.useForm(),y=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"地址",dataIndex:"address",key:"address"},{title:"状态",dataIndex:"status",key:"status",render:e=>(0,i.jsx)(es.A,{status:"active"===e?"success":"default",text:"active"===e?"活跃":"非活跃"})}],f=(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"这是一个 Popover 组件的内容"}),(0,i.jsx)("p",{children:"可以包含任意的 React 元素"})]}),b=[{href:"",icon:(0,i.jsx)(W.A,{})},{href:"",icon:(0,i.jsx)(H.A,{}),title:"用户管理"},{title:"用户列表"},{title:"用户详情"}],j=[{key:"1",label:"面板1 - 基础信息",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"这是第一个面板的内容。可以包含任意的React组件。"}),(0,i.jsx)(eo.Ay,{type:"primary",size:"small",children:"操作按钮"})]})},{key:"2",label:"面板2 - 高级设置",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"这是第二个面板的内容。支持嵌套组件和交互功能。"}),(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eo.Ay,{size:"small",children:"确定"}),(0,i.jsx)(eo.Ay,{size:"small",children:"取消"})]})]})},{key:"3",label:"面板3 - 帮助信息",children:(0,i.jsx)("p",{children:"这是第三个面板的内容。可以用来展示帮助文档或说明。"})}],A=[{key:"1",label:"基础组件",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ec.A,{titlePlacement:"start",children:[(0,i.jsx)(q.A,{})," 按钮组件"]}),(0,i.jsxs)(el.A,{wrap:!0,style:{marginBottom:16},children:[(0,i.jsx)(eo.Ay,{type:"primary",children:"主要按钮"}),(0,i.jsx)(eo.Ay,{children:"默认按钮"}),(0,i.jsx)(eo.Ay,{type:"dashed",children:"虚线按钮"}),(0,i.jsx)(eo.Ay,{type:"text",children:"文本按钮"}),(0,i.jsx)(eo.Ay,{type:"link",children:"链接按钮"}),(0,i.jsx)(eo.Ay,{type:"primary",danger:!0,children:"危险按钮"}),(0,i.jsx)(eo.Ay,{type:"primary",loading:e,onClick:()=>t(!e),children:e?"加载中":"切换加载"}),(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(X.A,{}),children:"图标按钮"})]}),(0,i.jsx)(ec.A,{titlePlacement:"start",children:"反馈组件"}),(0,i.jsxs)(el.A,{direction:"vertical",style:{width:"100%",marginBottom:16},children:[(0,i.jsx)(ed.A,{message:"信息提示",type:"info",showIcon:!0}),(0,i.jsx)(ed.A,{message:"成功提示",type:"success",showIcon:!0,closable:!0}),(0,i.jsx)(ed.A,{message:"警告提示",type:"warning",showIcon:!0}),(0,i.jsx)(ed.A,{message:"错误提示",type:"error",showIcon:!0}),(0,i.jsxs)(el.A,{wrap:!0,children:[(0,i.jsx)(eo.Ay,{onClick:()=>{ea.Ay.success({message:"操作成功",description:"这是一个成功的通知消息示例，展示了 Ant Design 的 notification 组件功能。",placement:"topRight",duration:4})},children:"显示通知"}),(0,i.jsx)(eo.Ay,{onClick:()=>{en.Ay.success("这是一个成功的消息提示")},children:"成功消息"}),(0,i.jsx)(eo.Ay,{onClick:()=>{en.Ay.warning("这是一个警告消息")},children:"警告消息"}),(0,i.jsx)(eo.Ay,{onClick:()=>{en.Ay.error("这是一个错误消息")},children:"错误消息"}),(0,i.jsx)(eo.Ay,{onClick:()=>a(!0),children:"打开模态框"}),(0,i.jsx)(eo.Ay,{onClick:()=>o(!0),children:"打开抽屉"})]})]}),(0,i.jsx)(ec.A,{titlePlacement:"start",children:"数据展示"}),(0,i.jsxs)(eh.A,{gutter:[16,16],style:{marginBottom:16},children:[(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(ex.A,{title:"进度和评分",size:"small",children:(0,i.jsxs)(el.A,{direction:"vertical",style:{width:"100%"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(eF,{children:"进度条:"}),(0,i.jsx)(ep.A,{percent:75,status:"active"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(eF,{children:"环形进度:"}),(0,i.jsx)(ep.A,{type:"circle",percent:60,width:60})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(eF,{children:"评分:"}),(0,i.jsx)(eu.A,{value:g,onChange:x}),(0,i.jsxs)(eF,{style:{marginLeft:8},children:[g," 星"]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(eF,{children:"标签:"}),(0,i.jsxs)(el.A,{children:[(0,i.jsx)(em.A,{color:"blue",children:"React"}),(0,i.jsx)(em.A,{color:"green",children:"TypeScript"}),(0,i.jsx)(em.A,{color:"orange",children:"Ant Design"}),(0,i.jsx)(em.A,{color:"purple",children:"Emotion"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(eF,{children:"徽章:"}),(0,i.jsxs)(el.A,{children:[(0,i.jsx)(es.A,{count:5,children:(0,i.jsx)(ey.A,{shape:"square",icon:(0,i.jsx)(H.A,{})})}),(0,i.jsx)(es.A,{dot:!0,children:(0,i.jsx)(ey.A,{shape:"square",icon:(0,i.jsx)(H.A,{})})}),(0,i.jsx)(es.A,{count:99,overflowCount:10,children:(0,i.jsx)(ey.A,{shape:"square",icon:(0,i.jsx)(H.A,{})})})]})]})]})})}),(0,i.jsx)(eg.A,{span:12,children:(0,i.jsxs)(ex.A,{title:"步骤条",size:"small",children:[(0,i.jsx)(ef.A,{current:p,size:"small",style:{marginBottom:16},items:[{title:"已完成",description:"第一步完成"},{title:"进行中",description:"当前步骤"},{title:"等待中",description:"待执行"}]}),(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eo.Ay,{size:"small",onClick:()=>u(Math.max(0,p-1)),children:"上一步"}),(0,i.jsx)(eo.Ay,{type:"primary",size:"small",onClick:()=>u(Math.min(2,p+1)),children:"下一步"})]})]})})]})]})},{key:"2",label:"表单组件",children:(0,i.jsxs)(eh.A,{gutter:[16,16],children:[(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(ex.A,{title:"表单控件",size:"small",children:(0,i.jsxs)(ei.A,{form:m,onFinish:e=>{console.log("表单提交:",e),en.Ay.success("表单提交成功！数据已记录到控制台")},layout:"vertical",children:[(0,i.jsx)(ei.A.Item,{name:"username",label:"用户名",rules:[{required:!0,message:"请输入用户名"}],children:(0,i.jsx)(eb.A,{prefix:(0,i.jsx)(H.A,{}),placeholder:"请输入用户名"})}),(0,i.jsx)(ei.A.Item,{name:"email",label:"邮箱",children:(0,i.jsx)(eb.A,{type:"email",placeholder:"请输入邮箱"})}),(0,i.jsx)(ei.A.Item,{name:"city",label:"城市",children:(0,i.jsxs)(er.A,{placeholder:"请选择城市",children:[(0,i.jsx)(eR,{value:"beijing",children:"北京"}),(0,i.jsx)(eR,{value:"shanghai",children:"上海"}),(0,i.jsx)(eR,{value:"guangzhou",children:"广州"}),(0,i.jsx)(eR,{value:"shenzhen",children:"深圳"})]})}),(0,i.jsx)(ei.A.Item,{name:"date",label:"日期",children:(0,i.jsx)(ej.A,{style:{width:"100%"}})}),(0,i.jsx)(ei.A.Item,{name:"time",label:"时间",children:(0,i.jsx)(eA.A,{style:{width:"100%"}})}),(0,i.jsx)(ei.A.Item,{children:(0,i.jsx)(eo.Ay,{type:"primary",htmlType:"submit",children:"提交表单"})})]})})}),(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(ex.A,{title:"其他控件",size:"small",children:(0,i.jsxs)(el.A,{direction:"vertical",style:{width:"100%"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(eF,{children:"开关:"}),(0,i.jsx)(ev.A,{checked:l,onChange:c,style:{marginLeft:8}}),(0,i.jsx)(eF,{style:{marginLeft:8},children:l?"开启":"关闭"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(eF,{children:"滑动条:"}),(0,i.jsx)(eS.A,{value:d,onChange:h,style:{margin:"0 8px"}}),(0,i.jsxs)(eF,{children:["值: ",d]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(eF,{children:"复选框:"}),(0,i.jsxs)(ek.A.Group,{style:{marginLeft:8},children:[(0,i.jsx)(ek.A,{value:"option1",children:"选项1"}),(0,i.jsx)(ek.A,{value:"option2",children:"选项2"}),(0,i.jsx)(ek.A,{value:"option3",children:"选项3"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(eF,{children:"单选框:"}),(0,i.jsxs)(ew.A.Group,{style:{marginLeft:8},children:[(0,i.jsx)(ew.A,{value:"a",children:"选项A"}),(0,i.jsx)(ew.A,{value:"b",children:"选项B"}),(0,i.jsx)(ew.A,{value:"c",children:"选项C"})]})]})]})})})]})},{key:"3",label:"数据展示",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(eh.A,{gutter:[16,16],children:[(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(ex.A,{title:"表格组件",size:"small",children:(0,i.jsx)(eC.A,{dataSource:[{key:"1",name:"张三",age:32,address:"北京市朝阳区",status:"active"},{key:"2",name:"李四",age:28,address:"上海市浦东区",status:"inactive"},{key:"3",name:"王五",age:35,address:"广州市天河区",status:"active"}],columns:y,pagination:{pageSize:5},size:"small"})})}),(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(ex.A,{title:"列表组件",size:"small",children:(0,i.jsx)(eI.A,{itemLayout:"horizontal",dataSource:[{title:"Ant Design 组件库",description:"企业级 UI 设计语言和 React 组件库",avatar:"\uD83C\uDFA8"},{title:"React 19",description:"用于构建用户界面的 JavaScript 库",avatar:"⚛️"},{title:"TypeScript",description:"JavaScript 的强类型超集",avatar:"\uD83D\uDCD8"},{title:"Emotion.js",description:"高性能的 CSS-in-JS 库",avatar:"\uD83D\uDC85"}],size:"small",renderItem:e=>(0,i.jsx)(eI.A.Item,{actions:[(0,i.jsx)(eo.Ay,{type:"link",children:"编辑"},"edit"),(0,i.jsx)(eo.Ay,{type:"link",children:"更多"},"more")],children:(0,i.jsx)(eI.A.Item.Meta,{avatar:(0,i.jsx)(ey.A,{style:{backgroundColor:"#1890ff"},children:e.avatar}),title:e.title,description:e.description})})})})})]}),(0,i.jsx)(ec.A,{}),(0,i.jsx)(ex.A,{title:"折叠面板",size:"small",children:(0,i.jsx)(eT.A,{items:j})})]})},{key:"4",label:"导航组件",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ex.A,{title:"面包屑导航",size:"small",style:{marginBottom:16},children:(0,i.jsx)(eE.A,{items:b})}),(0,i.jsx)(ex.A,{title:"交互组件",size:"small",children:(0,i.jsxs)(el.A,{wrap:!0,children:[(0,i.jsx)(ez.A,{title:"这是一个提示信息",children:(0,i.jsx)(eo.Ay,{children:"悬停提示"})}),(0,i.jsx)(eD.A,{content:f,title:"弹出框标题",children:(0,i.jsx)(eo.Ay,{children:"点击弹出"})}),(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(Q.A,{}),children:"点赞"}),(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(Z.A,{}),type:"primary",danger:!0,children:"收藏"})]})})]})}];return(0,i.jsxs)("div",{style:{padding:24},children:[(0,i.jsxs)(eO,{level:2,children:[(0,i.jsx)(ee.A,{})," Ant Design 组件展示面板"]}),(0,i.jsx)(eP,{children:"这个面板展示了 Ant Design 在本项目中的集成效果，包含了常用组件的使用示例。 所有组件都支持主题切换，并与项目的整体设计保持一致。"}),(0,i.jsx)(eB.A,{defaultActiveKey:"1",items:A}),(0,i.jsxs)(e$.A,{title:"模态框示例",open:r,onOk:()=>a(!1),onCancel:()=>a(!1),width:500,children:[(0,i.jsx)("p",{children:"这是一个模态框的内容示例。"}),(0,i.jsx)("p",{children:"模态框支持各种配置选项："}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"自定义宽度和高度"}),(0,i.jsx)("li",{children:"确定和取消按钮"}),(0,i.jsx)("li",{children:"遮罩层点击关闭"}),(0,i.jsx)("li",{children:"键盘ESC关闭"})]}),(0,i.jsx)(ed.A,{message:"提示",description:"模态框内可以嵌套任意组件",type:"info",showIcon:!0})]}),(0,i.jsx)(e_.A,{title:"抽屉组件示例",placement:"right",onClose:()=>o(!1),open:n,width:400,children:(0,i.jsxs)("div",{children:[(0,i.jsx)(eO,{level:4,children:"抽屉内容"}),(0,i.jsx)(eP,{children:"抽屉组件可以从四个方向滑出，常用于展示详细信息或者侧边栏导航。"}),(0,i.jsx)(ec.A,{}),(0,i.jsxs)(el.A,{direction:"vertical",style:{width:"100%"},children:[(0,i.jsx)(eo.Ay,{type:"primary",block:!0,children:"主要操作"}),(0,i.jsx)(eo.Ay,{block:!0,children:"次要操作"}),(0,i.jsx)(eo.Ay,{danger:!0,block:!0,onClick:()=>o(!1),children:"关闭抽屉"})]}),(0,i.jsx)(ec.A,{}),(0,i.jsx)(ed.A,{message:"功能说明",description:"抽屉组件适用于需要临时显示大量信息的场景",type:"success",showIcon:!0})]})})]})};var eN=r(665),eY=r(8464),eV=r(4529),eK=r(9662),eM=r(6261),eG=r(8269),eJ=r(1254),eU=r(2440),eW=r(9947),eH=r(6279),eq=r(5384);let eX=["\uD83D\uDD17","\uD83C\uDF10","\uD83D\uDCDA","\uD83C\uDFB5","\uD83C\uDFAC","\uD83C\uDFAE","\uD83D\uDCBB","\uD83D\uDCF1","\uD83D\uDED2","\uD83D\uDCE7","\uD83D\uDCF0","\uD83D\uDD0D","⭐","❤️","\uD83C\uDFE0","\uD83C\uDFA8","\uD83D\uDCCA","\uD83D\uDCBC","\uD83D\uDD27","⚙️","\uD83D\uDCDD","\uD83D\uDCCB","\uD83D\uDCCC","\uD83C\uDFF7️"],{Title:eQ,Paragraph:eZ,Text:e0}=et.A,e1=e=>{let{value:t,onChange:r}=e,[a,n]=(0,s.useState)(""),[o,l]=(0,s.useState)(!1),c=()=>{a.trim()&&(null==r||r(a.trim()),n(""),l(!1))};return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{marginBottom:12},children:(0,i.jsx)(e0,{strong:!0,children:"常用图标："})}),(0,i.jsx)("div",{style:{marginBottom:12},children:eX.map(e=>(0,i.jsx)(eo.Ay,{type:t===e?"primary":"default",size:"small",style:{margin:"2px",minWidth:"36px"},onClick:()=>{null==r||r(e),l(!1)},children:e},e))}),(0,i.jsx)("div",{children:o?(0,i.jsxs)(el.A.Compact,{style:{width:"100%"},children:[(0,i.jsx)(eb.A,{size:"small",placeholder:"输入自定义图标",value:a,onChange:e=>n(e.target.value),onPressEnter:c}),(0,i.jsx)(eo.Ay,{size:"small",type:"primary",onClick:c,children:"确定"}),(0,i.jsx)(eo.Ay,{size:"small",onClick:()=>l(!1),children:"取消"})]}):(0,i.jsx)(eo.Ay,{type:"dashed",size:"small",icon:(0,i.jsx)(eN.A,{}),onClick:()=>l(!0),children:"自定义图标"})}),t&&(0,i.jsxs)("div",{style:{marginTop:8},children:[(0,i.jsx)(e0,{type:"secondary",children:"当前选中："}),(0,i.jsx)("span",{style:{fontSize:"18px",marginLeft:"8px"},children:t})]})]})},e2=()=>{let e,[t,r]=(0,s.useState)([]),[a,n]=(0,s.useState)(!1),[o,l]=(0,s.useState)(!1),[c,d]=(0,s.useState)(!1),[h,g]=(0,s.useState)(!1),[x,p]=(0,s.useState)(null),[u,m]=(0,s.useState)(null),[y,f]=(0,s.useState)(null),[b,j]=(0,s.useState)(null),[A,v]=(0,s.useState)(!1),[S]=ei.A.useForm(),[k]=ei.A.useForm();(0,s.useEffect)(()=>{w()},[]);let w=async()=>{try{n(!0);let e=V.getAllCategories();r(e)}catch(e){en.Ay.error("加载分类数据失败")}finally{n(!1)}},C=e=>{p(e||null),S.resetFields(),e&&S.setFieldsValue(e),l(!0)},I=async()=>{try{let e=await S.validateFields();x?(V.updateCategory(x.id,e.name),en.Ay.success("分类更新成功！")):(V.addCategory(e.name),en.Ay.success("分类添加成功！")),await w(),l(!1)}catch(e){en.Ay.error("操作失败，请重试")}},T=async e=>{try{V.deleteCategory(e),await w(),en.Ay.success("分类删除成功！")}catch(e){en.Ay.error("删除失败，请重试")}},E=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];m(e||null),j(t||null),k.resetFields(),e&&t?k.setFieldsValue({...e,categoryId:t}):t&&k.setFieldsValue({categoryId:t}),v(r),d(!0)},z=async()=>{try{let e=await k.validateFields();u&&b?(V.updateLink(b,u.id,{name:e.name,url:e.url,icon:e.icon}),en.Ay.success("链接更新成功！")):(V.addLink(e.categoryId,e.name,e.url,e.icon),en.Ay.success("链接添加成功！")),await w(),d(!1)}catch(e){en.Ay.error("操作失败，请重试")}},D=async(e,t)=>{try{V.deleteLink(e,t),await w(),en.Ay.success("链接删除成功！")}catch(e){en.Ay.error("删除失败，请重试")}},B=async()=>{try{await V.clearStorage(),await w(),en.Ay.success("所有数据清空成功！")}catch(e){en.Ay.error("清空失败，请重试")}},$=[{title:"ID",dataIndex:"id",key:"id",width:80,sorter:(e,t)=>e.id-t.id},{title:"分类名称",dataIndex:"name",key:"name",width:80,render:e=>(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eY.A,{}),(0,i.jsx)("strong",{children:e})]})},{title:"链接数量",dataIndex:"links",key:"linkCount",width:100,render:e=>(0,i.jsxs)("span",{style:{color:"#1890ff",fontWeight:"bold"},children:[(null==e?void 0:e.length)||0," 个"]})},{title:"链接列表",dataIndex:"links",key:"links",width:300,render:(e,t)=>(0,i.jsx)("div",{style:{maxHeight:120,overflow:"auto"},children:e&&e.length>0?(0,i.jsx)(eI.A,{size:"small",dataSource:e,renderItem:e=>(0,i.jsx)(eI.A.Item,{style:{padding:"4px 0",borderBottom:"1px solid #f0f0f0"},actions:[(0,i.jsx)(eo.Ay,{type:"text",size:"small",icon:(0,i.jsx)(eV.A,{}),onClick:()=>{f(e),g(!0)},title:"查看详情"},"view"),(0,i.jsx)(eo.Ay,{type:"text",size:"small",icon:(0,i.jsx)(eK.A,{}),onClick:()=>E(e,t.id,!0),title:"编辑链接"},"edit"),(0,i.jsx)(eH.A,{title:"确定删除这个链接吗？",onConfirm:()=>D(t.id,e.id),okText:"确定",cancelText:"取消",children:(0,i.jsx)(eo.Ay,{type:"text",size:"small",danger:!0,icon:(0,i.jsx)(eM.A,{}),title:"删除链接"})},"delete")],children:(0,i.jsx)(eI.A.Item.Meta,{title:(0,i.jsxs)(el.A,{size:"small",children:[(0,i.jsx)("span",{children:e.icon}),(0,i.jsx)("span",{children:e.name||"未命名"})]}),description:(0,i.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"12px",color:"#666"},children:e.url.length>30?`${e.url.substring(0,30)}...`:e.url})})})}):(0,i.jsx)("div",{style:{textAlign:"center",color:"#999",padding:"20px 0"},children:"暂无链接"})})},{title:"操作",key:"action",width:200,render:(e,t)=>(0,i.jsxs)(el.A,{size:"small",children:[(0,i.jsx)(eo.Ay,{type:"text",icon:(0,i.jsx)(eN.A,{}),onClick:()=>E(void 0,t.id,!0),title:"添加链接",children:"添加"}),(0,i.jsx)(eo.Ay,{type:"text",icon:(0,i.jsx)(eK.A,{}),onClick:()=>C(t),title:"编辑分类",children:"编辑"}),(0,i.jsx)(eH.A,{title:"确定删除这个分类及其所有链接吗？",onConfirm:()=>T(t.id),okText:"确定",cancelText:"取消",children:(0,i.jsx)(eo.Ay,{type:"text",danger:!0,icon:(0,i.jsx)(eM.A,{}),title:"删除分类",children:"删除"})})]})}];return(0,i.jsxs)("div",{style:{padding:24},children:[(0,i.jsxs)(eQ,{level:2,children:[(0,i.jsx)(eG.A,{})," 链接管理面板"]}),(0,i.jsx)(eZ,{children:"管理您的链接分类和链接内容，支持添加、编辑、删除等操作。"}),(0,i.jsxs)(eh.A,{gutter:16,style:{marginBottom:24},children:[(0,i.jsx)(eg.A,{span:8,children:(0,i.jsx)(ex.A,{children:(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)(eQ,{level:3,style:{margin:0,color:"#1890ff"},children:t.length}),(0,i.jsx)(eZ,{style:{margin:0,color:"#666"},children:"分类总数"})]})})}),(0,i.jsx)(eg.A,{span:8,children:(0,i.jsx)(ex.A,{children:(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)(eQ,{level:3,style:{margin:0,color:"#52c41a"},children:t.reduce((e,t)=>{var r;return e+((null==(r=t.links)?void 0:r.length)||0)},0)}),(0,i.jsx)(eZ,{style:{margin:0,color:"#666"},children:"链接总数"})]})})}),(0,i.jsx)(eg.A,{span:8,children:(0,i.jsx)(ex.A,{children:(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)(eQ,{level:3,style:{margin:0,color:"#fa8c16"},children:t.filter(e=>e.links&&e.links.length>0).length}),(0,i.jsx)(eZ,{style:{margin:0,color:"#666"},children:"活跃分类"})]})})})]}),(0,i.jsx)("div",{style:{marginBottom:16},children:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eo.Ay,{type:"primary",icon:(0,i.jsx)(eN.A,{}),onClick:()=>C(),children:"添加分类"}),(0,i.jsx)(eo.Ay,{type:"default",icon:(0,i.jsx)(eG.A,{}),onClick:()=>E(void 0,void 0,!1),disabled:0===t.length,children:"添加链接"}),(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(eJ.A,{}),onClick:w,loading:a,children:"刷新数据"}),(0,i.jsx)(eH.A,{title:"确定清空所有数据吗？此操作不可恢复！",onConfirm:B,okText:"确定",cancelText:"取消",children:(0,i.jsx)(eo.Ay,{danger:!0,icon:(0,i.jsx)(eU.A,{}),children:"清空数据"})})]})}),0===t.length?(0,i.jsxs)(ex.A,{style:{textAlign:"center",padding:"40px 20px"},children:[(0,i.jsx)("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"\uD83D\uDCC1"}),(0,i.jsx)(eQ,{level:4,children:"暂无分类数据"}),(0,i.jsx)(eZ,{style:{color:"#666",marginBottom:"24px"},children:"您还没有创建任何链接分类，点击上方按钮开始添加吧！"}),(0,i.jsx)(eo.Ay,{type:"primary",icon:(0,i.jsx)(eN.A,{}),onClick:()=>C(),children:"创建第一个分类"})]}):(0,i.jsx)(eC.A,{dataSource:t,columns:$,rowKey:"id",loading:a,pagination:{pageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:(e,t)=>`第 ${t[0]}-${t[1]} 条，共 ${e} 条`},scroll:{x:800}}),(0,i.jsx)(e$.A,{title:`${x?"编辑":"添加"}分类`,open:o,onOk:I,onCancel:()=>l(!1),destroyOnClose:!0,children:(0,i.jsx)(ei.A,{form:S,layout:"vertical",children:(0,i.jsx)(ei.A.Item,{name:"name",label:"分类名称",rules:[{required:!0,message:"请输入分类名称！"},{min:1,max:20,message:"分类名称长度应在1-20个字符之间！"}],children:(0,i.jsx)(eb.A,{placeholder:"请输入分类名称"})})})}),(0,i.jsxs)(e$.A,{title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eG.A,{style:{color:"#1890ff"}}),(0,i.jsx)("span",{style:{fontSize:"16px",fontWeight:"600"},children:u?"编辑链接":"添加链接"})]}),open:c,onOk:z,onCancel:()=>d(!1),destroyOnClose:!0,width:800,okText:u?"更新链接":"添加链接",cancelText:"取消",styles:{body:{padding:"24px"}},children:[A&&(0,i.jsx)("div",{style:{background:"linear-gradient(90deg, #f6ffed 0%, #f0f9f0 100%)",border:"1px solid #b7eb8f",borderRadius:"8px",padding:"16px",marginBottom:"24px"},children:(0,i.jsxs)(el.A,{children:[(0,i.jsx)("span",{style:{color:"#52c41a",fontSize:"16px",fontWeight:"bold"},children:"✓"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(e0,{style:{color:"#389e0d",fontWeight:"600"},children:"已自动选中分类"}),(0,i.jsx)("br",{}),(0,i.jsx)(e0,{style:{color:"#52c41a",fontSize:"12px"},children:"若需更改分类，请从上方“添加链接”按钮进入"})]})]})}),(0,i.jsxs)(ei.A,{form:k,layout:"vertical",children:[(0,i.jsx)(ex.A,{size:"small",title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eY.A,{style:{color:"#1890ff"}}),(0,i.jsx)("span",{children:"所属分类"})]}),style:{marginBottom:20},styles:{header:{background:"#fafafa"}},children:(0,i.jsx)(ei.A.Item,{name:"categoryId",rules:[{required:!0,message:"请选择分类！"}],children:(0,i.jsx)(er.A,{placeholder:"请选择一个分类",disabled:A,size:"large",options:t.map(e=>{var t;return{value:e.id,label:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 0"},children:[(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eY.A,{style:{color:"#1890ff"}}),(0,i.jsx)("span",{style:{fontWeight:"500"},children:e.name})]}),(0,i.jsxs)("span",{style:{color:"#999",fontSize:"12px",fontStyle:"italic"},children:[(null==(t=e.links)?void 0:t.length)||0," 个链接"]})]})}})})})}),(0,i.jsxs)(ex.A,{size:"small",title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eG.A,{style:{color:"#52c41a"}}),(0,i.jsx)("span",{children:"基本信息"})]}),style:{marginBottom:20},styles:{header:{background:"#fafafa"}},children:[(0,i.jsxs)(eh.A,{gutter:16,children:[(0,i.jsx)(eg.A,{span:16,children:(0,i.jsx)(ei.A.Item,{name:"name",label:"链接名称",rules:[{max:30,message:"链接名称不能超过30个字符！"}],children:(0,i.jsx)(eb.A,{placeholder:"请输入链接名称（可选）",size:"large",prefix:(0,i.jsx)("span",{style:{color:"#666",fontSize:"14px"},children:"\uD83D\uDCDD"})})})}),(0,i.jsx)(eg.A,{span:8,children:(0,i.jsx)(ei.A.Item,{name:"icon",label:"链接图标",rules:[{required:!0,message:"请选择图标！"},{max:10,message:"图标不能超过10个字符！"}],children:(0,i.jsx)(e1,{})})})]}),(0,i.jsx)(ei.A.Item,{name:"url",label:"链接地址",rules:[{required:!0,message:"请输入链接地址！"},{type:"url",message:"请输入有效的URL地址！"}],children:(0,i.jsx)(eb.A,{placeholder:"https://example.com",size:"large",prefix:(0,i.jsx)(eW.A,{style:{color:"#1890ff"}}),suffix:(0,i.jsx)(ez.A,{title:"测试链接",children:(0,i.jsx)(eo.Ay,{type:"text",size:"small",icon:(0,i.jsx)(eV.A,{}),onClick:()=>{let e=k.getFieldValue("url");if(e)try{window.open(e,"_blank"),en.Ay.success("链接已在新窗口中打开")}catch(e){en.Ay.error("无法打开链接，请检查URL格式")}else en.Ay.warning("请先输入链接地址")},style:{color:"#52c41a"}})})})})]}),(0,i.jsxs)(ex.A,{size:"small",title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eV.A,{style:{color:"#fa8c16"}}),(0,i.jsx)("span",{children:"预览效果"})]}),style:{background:"#fafafa"},styles:{header:{background:"#f0f0f0"}},children:[(0,i.jsx)("div",{style:{padding:"20px",border:"2px dashed #d9d9d9",borderRadius:"12px",textAlign:"center",background:"white",transition:"all 0.3s ease"},children:(0,i.jsx)(ei.A.Item,{dependencies:["icon","name","url"],noStyle:!0,children:e=>{let{getFieldValue:t}=e,r=t("icon"),s=t("name"),a=t("url");return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"48px",marginBottom:"12px",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.1))"},children:r||"\uD83D\uDD17"}),(0,i.jsx)("div",{style:{fontSize:"16px",fontWeight:"600",color:"#333",marginBottom:"8px",minHeight:"20px"},children:s||"未命名链接"}),(0,i.jsx)("div",{style:{fontSize:"12px",color:"#999",wordBreak:"break-all",lineHeight:"1.5",maxHeight:"40px",overflow:"hidden"},children:a?a.length>50?`${a.substring(0,50)}...`:a:"https://example.com"})]})}})}),(0,i.jsx)("div",{style:{textAlign:"center",marginTop:"12px"},children:(0,i.jsx)(e0,{type:"secondary",style:{fontSize:"12px"},children:"✨ 这是链接在主页面中的显示效果预览"})})]})]})]}),(0,i.jsx)(e$.A,{title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eV.A,{}),"链接详情"]}),open:h,onCancel:()=>g(!1),footer:[(0,i.jsx)(eo.Ay,{type:"primary",onClick:()=>{if(y){let e=t.find(e=>{var t;return null==(t=e.links)?void 0:t.some(e=>e.id===y.id)});g(!1),E(y,null==e?void 0:e.id,!0)}},children:"编辑链接"},"edit"),(0,i.jsx)(eo.Ay,{onClick:()=>g(!1),children:"关闭"},"close")],width:600,children:y&&(0,i.jsx)("div",{children:(0,i.jsxs)(eq.A,{column:1,bordered:!0,children:[(0,i.jsx)(eq.A.Item,{label:"链接ID",children:y.id}),(0,i.jsx)(eq.A.Item,{label:"图标",children:(0,i.jsx)(ey.A,{shape:"square",size:40,style:{backgroundColor:"#f0f0f0"},children:(0,i.jsx)("span",{style:{fontSize:"20px"},children:y.icon})})}),(0,i.jsx)(eq.A.Item,{label:"名称",children:y.name||(0,i.jsx)("span",{style:{color:"#999"},children:"未命名"})}),(0,i.jsx)(eq.A.Item,{label:"链接地址",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{marginBottom:8},children:(0,i.jsx)("a",{href:y.url,target:"_blank",rel:"noopener noreferrer",style:{wordBreak:"break-all"},children:y.url})}),(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eo.Ay,{size:"small",icon:(0,i.jsx)(eW.A,{}),onClick:()=>window.open(y.url,"_blank"),children:"打开链接"}),(0,i.jsx)(eo.Ay,{size:"small",onClick:()=>{navigator.clipboard.writeText(y.url),en.Ay.success("链接地址已复制到剪贴板")},children:"复制链接"})]})]})}),(0,i.jsx)(eq.A.Item,{label:"所属分类",children:(e=t.find(e=>{var t;return null==(t=e.links)?void 0:t.some(e=>e.id===y.id)}))?(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eY.A,{}),e.name]}):"未知分类"})]})})})]})};var e5=r(8581);let e4=e=>{let t=e?j:b;return{algorithm:e?e5.A.darkAlgorithm:e5.A.defaultAlgorithm,token:{colorPrimary:x,colorSuccess:u,colorWarning:m,colorError:y,colorInfo:f,borderRadius:Number.parseInt(A),fontSize:Number.parseInt(C),fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',colorBgContainer:t.background,colorText:t.text,colorTextSecondary:t.textSecondary,colorBorder:t.border},components:{Card:{borderRadiusLG:Number.parseInt(S),colorBgContainer:t.background},Button:{borderRadius:Number.parseInt(A),controlHeight:40,primaryShadow:E},Input:{borderRadius:Number.parseInt(A),controlHeight:40,colorBgContainer:t.background},Select:{borderRadius:Number.parseInt(A),controlHeight:40,colorBgContainer:t.background},Modal:{borderRadiusLG:Number.parseInt(S),contentBg:e?"rgba(0, 0, 0, 0.8)":"rgba(255, 255, 255, 0.95)"},Table:{borderRadiusLG:Number.parseInt(S),headerBg:e?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.02)"},Menu:{borderRadiusLG:Number.parseInt(v)},Dropdown:{borderRadiusLG:Number.parseInt(v)},FloatButton:{borderRadius:Number.parseInt(w)}}}};e4(!1),e4(!0);let e6=(0,s.createContext)(null),e8="turnip-theme-mode",e3="turnip-saved-light-theme",e9={"--primary-color":"#4a90e2","--bg-color":"rgba(255, 255, 255, 0.65)","--text-color":"#2c3e50","--color-primary":"#4a90e2","--color-bg-container":"rgba(255, 255, 255, 0.9)","--color-text":"#2c3e50"},e7={"--primary-color":"#667eea","--bg-color":"rgba(0, 0, 0, 0.6)","--text-color":"#ffffff","--color-primary":"#667eea","--color-bg-container":"rgba(0, 0, 0, 0.8)","--color-text":"#ffffff"},te={id:"dark",name:"深色模式",backgroundImage:"linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",blur:"10px",opacity:.95},tt=(e,t)=>{let r=document.documentElement;e?Object.entries(e7).forEach(e=>{let[t,i]=e;r.style.setProperty(t,i)}):Object.entries((null==t?void 0:t.colors)?{"--primary-color":`rgba(${t.colors.primary.r}, ${t.colors.primary.g}, ${t.colors.primary.b}, ${t.colors.primary.a})`,"--bg-color":`rgba(${t.colors.background.r}, ${t.colors.background.g}, ${t.colors.background.b}, ${t.colors.background.a})`,"--text-color":`rgba(${t.colors.text.r}, ${t.colors.text.g}, ${t.colors.text.b}, ${t.colors.text.a})`,"--color-primary":`rgba(${t.colors.primary.r}, ${t.colors.primary.g}, ${t.colors.primary.b}, ${t.colors.primary.a})`,"--color-bg-container":`rgba(${t.colors.background.r}, ${t.colors.background.g}, ${t.colors.background.b}, ${Math.min(t.colors.background.a+.25,1)})`,"--color-text":`rgba(${t.colors.text.r}, ${t.colors.text.g}, ${t.colors.text.b}, ${t.colors.text.a})`}:e9).forEach(e=>{let[t,i]=e;r.style.setProperty(t,i)})},tr=e=>{let{children:t}=e,[r]=(0,s.useState)(()=>L.getConfig()),[a,n]=(0,s.useState)(()=>{try{let e=localStorage.getItem(e8);return!!e&&"dark"===e}catch{return!1}}),[o,l]=(0,s.useState)(()=>{try{let e=localStorage.getItem(e3);return e?JSON.parse(e):null}catch{return null}}),[c,d]=(0,s.useState)(()=>{try{let e=localStorage.getItem(e8);if("dark"===e)return tt(!0),te;let t=localStorage.getItem(e3);if(t){let e=JSON.parse(t);return tt(!1,e),e}}catch{}return tt(!1),r.default});(0,s.useEffect)(()=>{if(a)tt(!0),d(te),L.setDefaultThemeSync(te);else{let e=o||r.default;tt(!1,e),d(e),L.setDefaultThemeSync(e)}},[a]),(0,s.useEffect)(()=>{try{localStorage.setItem(e8,a?"dark":"light")}catch(e){console.warn("Failed to save theme mode:",e)}},[a]),(0,s.useEffect)(()=>{try{localStorage.setItem("turnip-theme-active",JSON.stringify(c))}catch(e){console.warn("Failed to save app theme:",e)}},[c]),(0,s.useEffect)(()=>{if(o)try{localStorage.setItem(e3,JSON.stringify(o))}catch(e){console.warn("Failed to save light theme:",e)}},[o]);let h=(0,s.useMemo)(()=>e4(a),[a]),g=(0,s.useCallback)(e=>{a||(l(e),d(e),L.setDefaultThemeSync(e),tt(!1,e))},[a]),x=(0,s.useCallback)(()=>{n(e=>!e)},[]),p=(0,s.useCallback)(e=>{n(e)},[]),u=(0,s.useMemo)(()=>({appTheme:c,antdTheme:h,themeConfig:r,isDark:a,setAppTheme:g,toggleDarkMode:x,setDarkMode:p}),[c,h,r,a,g,x,p]);return(0,i.jsx)(e6.Provider,{value:u,children:t})},ti=()=>{let e=(0,s.useContext)(e6);if(!e)throw Error("useThemeContext must be used within a ThemeProvider");return e};class ts{on(e,t){let r=Symbol(),i=this.listeners.get(e)||[];return i.push({id:r,handler:t,once:!1}),this.listeners.set(e,i),()=>this.off(e,r)}once(e,t){let r=Symbol(),i=this.listeners.get(e)||[];i.push({id:r,handler:t,once:!0}),this.listeners.set(e,i)}off(e,t){let r=this.listeners.get(e);if(r)if("symbol"==typeof t){let i=r.filter(e=>e.id!==t);this.listeners.set(e,i)}else{let i=r.filter(e=>e.handler!==t);this.listeners.set(e,i)}}emit(e,t){let r=this.listeners.get(e);if(!r)return;let i=[];if(r.forEach(r=>{try{r.handler(t),r.once&&i.push(r.id)}catch(t){console.error(`[EventEmitter] Error in handler for event "${String(e)}":`,t)}}),i.length>0){let t=r.filter(e=>!i.includes(e.id));this.listeners.set(e,t)}}removeAllListeners(e){e?this.listeners.delete(e):this.listeners.clear()}listenerCount(e){var t;return(null==(t=this.listeners.get(e))?void 0:t.length)||0}constructor(){(0,B._)(this,"listeners",new Map)}}let ta=[{id:"light",name:"浅色模式",description:"清新明亮的浅色主题",isBuiltIn:!0,tags:["light","default"],config:{id:"light",name:"浅色模式",backgroundImage:"linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",blur:"12px",opacity:.92,isDark:!1,colors:{primary:{r:64,g:169,b:169,a:1},background:{r:255,g:255,b:255,a:.88},text:{r:45,g:55,b:72,a:1},textSecondary:{r:113,g:128,b:150,a:1},border:{r:64,g:169,b:169,a:.15},accent:{r:64,g:169,b:169,a:.12}}}},{id:"dark",name:"深色模式",description:"护眼舒适的深色主题",isBuiltIn:!0,tags:["dark","eye-comfort"],config:{id:"dark",name:"深色模式",backgroundImage:"linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",blur:"10px",opacity:.95,isDark:!0,colors:{primary:{r:129,g:140,b:248,a:1},background:{r:26,g:26,b:46,a:.85},text:{r:237,g:242,b:247,a:1},textSecondary:{r:160,g:174,b:192,a:1},border:{r:129,g:140,b:248,a:.2},accent:{r:129,g:140,b:248,a:.15}}}},{id:"high-contrast",name:"高对比度",description:"适合视力不佳用户的高对比度主题",isBuiltIn:!0,tags:["accessibility","high-contrast"],config:{id:"high-contrast",name:"高对比度",backgroundImage:"linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)",blur:"5px",opacity:1,isDark:!0,colors:{primary:{r:0,g:255,b:200,a:1},background:{r:15,g:15,b:35,a:1},text:{r:255,g:255,b:255,a:1},textSecondary:{r:200,g:200,b:200,a:1},border:{r:0,g:255,b:200,a:.6},accent:{r:0,g:255,b:200,a:.3}}}},{id:"ocean",name:"海洋蓝",description:"清新自然的海洋风格",isBuiltIn:!0,tags:["nature","blue"],config:{id:"ocean",name:"海洋蓝",backgroundImage:"linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)",blur:"10px",opacity:.93,isDark:!1,colors:{primary:{r:33,g:147,b:176,a:1},background:{r:240,g:250,b:255,a:.9},text:{r:20,g:60,b:90,a:1},textSecondary:{r:60,g:100,b:130,a:1},border:{r:33,g:147,b:176,a:.2},accent:{r:109,g:213,b:237,a:.25}}}},{id:"sunset",name:"日落橙",description:"温暖浪漫的日落风格",isBuiltIn:!0,tags:["warm","orange"],config:{id:"sunset",name:"日落橙",backgroundImage:"linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",blur:"10px",opacity:.93,isDark:!1,colors:{primary:{r:255,g:126,b:95,a:1},background:{r:255,g:250,b:245,a:.9},text:{r:80,g:50,b:40,a:1},textSecondary:{r:140,g:100,b:80,a:1},border:{r:255,g:126,b:95,a:.2},accent:{r:254,g:180,b:123,a:.25}}}},{id:"forest",name:"森林绿",description:"清新自然的森林风格",isBuiltIn:!0,tags:["nature","green"],config:{id:"forest",name:"森林绿",backgroundImage:"linear-gradient(135deg, #134e5e 0%, #71b280 100%)",blur:"10px",opacity:.93,isDark:!1,colors:{primary:{r:113,g:178,b:128,a:1},background:{r:245,g:252,b:247,a:.9},text:{r:30,g:60,b:45,a:1},textSecondary:{r:70,g:110,b:85,a:1},border:{r:113,g:178,b:128,a:.2},accent:{r:113,g:178,b:128,a:.2}}}},{id:"lavender",name:"薰衣草",description:"优雅浪漫的紫色风格",isBuiltIn:!0,tags:["elegant","purple"],config:{id:"lavender",name:"薰衣草",backgroundImage:"linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",blur:"10px",opacity:.93,isDark:!1,colors:{primary:{r:161,g:140,b:209,a:1},background:{r:252,g:248,b:255,a:.9},text:{r:60,g:50,b:80,a:1},textSecondary:{r:100,g:90,b:120,a:1},border:{r:161,g:140,b:209,a:.2},accent:{r:251,g:194,b:235,a:.25}}}}],tn="turnip-theme-config-v2";class to extends ts{getPreferredStorageType(){try{let e=localStorage.getItem("app_storage_type");if("localStorage"===e||"indexedDB"===e||"auto"===e)return e}catch{}return"auto"}initializePresets(){ta.forEach(e=>{this.presets.set(e.id,e)})}async initialize(){if(await this.loadFromStorage(),!this.currentTheme){let e=ta[0];this.currentTheme={...e.config}}}async loadFromStorage(){try{let e=await this.storage.get(tn);e&&(e.currentTheme&&(this.currentTheme=e.currentTheme),e.customThemes&&e.customThemes.forEach(e=>{this.customThemes.set(e.id,e)}))}catch(e){console.error("[ThemeManagerV2] Failed to load from storage:",e)}}async saveToStorage(){try{await this.storage.set(tn,{currentTheme:this.currentTheme,customThemes:Array.from(this.customThemes.values())})}catch(e){console.error("[ThemeManagerV2] Failed to save to storage:",e)}}getCurrentTheme(){return this.previewTheme||this.currentTheme}getAllPresets(){return[...Array.from(this.presets.values()),...Array.from(this.customThemes.values())]}getBuiltInPresets(){return Array.from(this.presets.values())}getCustomPresets(){return Array.from(this.customThemes.values())}async setTheme(e){let t=this.currentTheme;this.currentTheme={...e},this.previewTheme=null,await this.saveToStorage(),this.emit("theme:change",{theme:this.currentTheme,previousTheme:t})}async setThemeById(e){let t=this.presets.get(e)||this.customThemes.get(e);return!!t&&(await this.setTheme(t.config),!0)}setPreviewTheme(e){this.previewTheme={...e},this.emit("theme:preview",{theme:this.previewTheme})}cancelPreview(){this.previewTheme=null,this.currentTheme&&this.emit("theme:change",{theme:this.currentTheme,previousTheme:null})}async applyPreview(){this.previewTheme&&await this.setTheme(this.previewTheme)}async addCustomPreset(e){if(this.presets.has(e.id))throw Error(`Cannot override built-in preset: ${e.id}`);let t={...e,isBuiltIn:!1};this.customThemes.set(e.id,t),await this.saveToStorage(),this.emit("theme:preset:add",{preset:t})}async updateCustomPreset(e){if(this.presets.has(e.id))throw Error(`Cannot modify built-in preset: ${e.id}`);this.customThemes.set(e.id,e),await this.saveToStorage(),this.emit("theme:preset:update",{preset:e})}async deleteCustomPreset(e){if(this.presets.has(e))throw Error(`Cannot delete built-in preset: ${e}`);this.customThemes.delete(e),await this.saveToStorage(),this.emit("theme:preset:delete",{presetId:e})}static rgbaToString(e){return`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`}static stringToRgba(e){let t=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);return t?{r:Number.parseInt(t[1],10),g:Number.parseInt(t[2],10),b:Number.parseInt(t[3],10),a:t[4]?Number.parseFloat(t[4]):1}:null}static hexToRgba(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?{r:Number.parseInt(r[1],16),g:Number.parseInt(r[2],16),b:Number.parseInt(r[3],16),a:t}:{r:0,g:0,b:0,a:t}}static rgbaToHex(e){let t=e=>e.toString(16).padStart(2,"0");return`#${t(e.r)}${t(e.g)}${t(e.b)}`}async updateColor(e,t){this.currentTheme&&(this.currentTheme.colors||(this.currentTheme.colors=this.getDefaultColors()),this.currentTheme.colors[e]=t,await this.saveToStorage(),this.emit("theme:change",{theme:this.currentTheme,previousTheme:null}))}getDefaultColors(){return{primary:{r:74,g:144,b:226,a:1},background:{r:255,g:255,b:255,a:.9},text:{r:44,g:62,b:80,a:1},textSecondary:{r:102,g:102,b:102,a:1},border:{r:0,g:0,b:0,a:.1},accent:{r:74,g:144,b:226,a:.2}}}exportTheme(e){return JSON.stringify(e||this.currentTheme,null,2)}async importTheme(e){try{let t=JSON.parse(e);if(!t.id||!t.name||!t.backgroundImage)throw Error("Invalid theme format");return t}catch(e){return console.error("[ThemeManagerV2] Import failed:",e),null}}async reset(){this.currentTheme={...ta[0].config},this.customThemes.clear(),await this.saveToStorage(),this.emit("theme:change",{theme:this.currentTheme,previousTheme:null})}constructor(e){if(super(),(0,B._)(this,"storage",void 0),(0,B._)(this,"currentTheme",null),(0,B._)(this,"presets",new Map),(0,B._)(this,"customThemes",new Map),(0,B._)(this,"previewTheme",null),e)this.storage=e;else{const e=this.getPreferredStorageType();this.storage=new P(e)}this.initializePresets()}}let tl=null;function tc(){return tl||(tl=new to),tl}var td=r(4010),th=r(2767);let{Text:tg}=et.A,tx={r:74,g:144,b:226,a:1},tp=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#98D8C8","#F7DC6F","#BB8FCE","#85C1E9","#F8B500","#FF8C00","#00CED1","#9370DB","#20B2AA"],tu=e=>{let{value:t=tx,onChange:r,label:a,showHex:n=!0,showPresets:o=!0,presetColors:l=tp}=e,{isDark:c}=ti(),d=(0,s.useCallback)((e,i)=>{let s={...t,[e]:i};null==r||r(s)},[t,r]);(0,s.useCallback)(e=>{let i=to.hexToRgba(e,t.a);null==r||r(i)},[t.a,r]);let h=(0,s.useCallback)(e=>{let i=to.hexToRgba(e,t.a);null==r||r(i)},[t.a,r]),g=(0,s.useCallback)(()=>{null==r||r(tx)},[r]),x={width:"100%",height:60,borderRadius:12,background:to.rgbaToString(t),boxShadow:`0 4px 12px ${to.rgbaToString({...t,a:.3})}`,transition:"all 0.3s ease",marginBottom:16},p={width:"100%"},u=(0,s.useMemo)(()=>to.rgbaToHex(t),[t]),m=(0,i.jsxs)("div",{style:{width:220},children:[(0,i.jsx)("div",{style:{marginBottom:8},children:(0,i.jsx)(tg,{type:"secondary",style:{fontSize:12},children:"预设颜色"})}),(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:8},children:l.map((e,t)=>(0,i.jsx)("div",{onClick:()=>h(e),style:{width:32,height:32,borderRadius:6,background:e,cursor:"pointer",transition:"transform 0.2s ease",border:u.toUpperCase()===e.toUpperCase()?"2px solid #1890ff":"1px solid rgba(0,0,0,0.1)"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.1)"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)"}},t))})]});return(0,i.jsxs)(ex.A,{size:"small",title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(td.A,{}),(0,i.jsx)("span",{children:a||"颜色选择器"})]}),extra:(0,i.jsxs)(el.A,{children:[o&&(0,i.jsx)(eD.A,{content:m,trigger:"click",placement:"bottomRight",children:(0,i.jsx)(eo.Ay,{size:"small",icon:(0,i.jsx)(td.A,{}),children:"预设"})}),(0,i.jsx)(eo.Ay,{size:"small",icon:(0,i.jsx)(eJ.A,{}),onClick:g,children:"重置"})]}),style:{background:c?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.9)",borderRadius:12},children:[(0,i.jsx)("div",{style:x}),(0,i.jsxs)(eh.A,{gutter:[16,12],children:[(0,i.jsx)(eg.A,{span:24,children:(0,i.jsxs)(el.A,{align:"center",style:{width:"100%"},children:[(0,i.jsx)(tg,{style:{width:20,color:"#ff4d4f"},children:"R"}),(0,i.jsx)(eS.A,{min:0,max:255,value:t.r,onChange:e=>d("r",e),style:{flex:1,...p},trackStyle:{background:"#ff4d4f"},handleStyle:{borderColor:"#ff4d4f"}}),(0,i.jsx)(th.A,{min:0,max:255,value:t.r,onChange:e=>d("r",e||0),style:{width:60},size:"small"})]})}),(0,i.jsx)(eg.A,{span:24,children:(0,i.jsxs)(el.A,{align:"center",style:{width:"100%"},children:[(0,i.jsx)(tg,{style:{width:20,color:"#52c41a"},children:"G"}),(0,i.jsx)(eS.A,{min:0,max:255,value:t.g,onChange:e=>d("g",e),style:{flex:1,...p},trackStyle:{background:"#52c41a"},handleStyle:{borderColor:"#52c41a"}}),(0,i.jsx)(th.A,{min:0,max:255,value:t.g,onChange:e=>d("g",e||0),style:{width:60},size:"small"})]})}),(0,i.jsx)(eg.A,{span:24,children:(0,i.jsxs)(el.A,{align:"center",style:{width:"100%"},children:[(0,i.jsx)(tg,{style:{width:20,color:"#1890ff"},children:"B"}),(0,i.jsx)(eS.A,{min:0,max:255,value:t.b,onChange:e=>d("b",e),style:{flex:1,...p},trackStyle:{background:"#1890ff"},handleStyle:{borderColor:"#1890ff"}}),(0,i.jsx)(th.A,{min:0,max:255,value:t.b,onChange:e=>d("b",e||0),style:{width:60},size:"small"})]})}),(0,i.jsx)(eg.A,{span:24,children:(0,i.jsxs)(el.A,{align:"center",style:{width:"100%"},children:[(0,i.jsx)(tg,{style:{width:20},children:"A"}),(0,i.jsx)(eS.A,{min:0,max:1,step:.01,value:t.a,onChange:e=>d("a",e),style:{flex:1,...p}}),(0,i.jsx)(th.A,{min:0,max:1,step:.01,value:t.a,onChange:e=>d("a",e||0),style:{width:60},size:"small"})]})})]}),n&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ec.A,{style:{margin:"12px 0"}}),(0,i.jsxs)(el.A,{children:[(0,i.jsx)(tg,{type:"secondary",children:"HEX:"}),(0,i.jsx)(tg,{code:!0,style:{fontSize:14},children:u}),(0,i.jsxs)(tg,{type:"secondary",style:{fontSize:12},children:["(",to.rgbaToString(t),")"]})]})]})]})};var tm=r(4130),ty=r(8405);let tf={primary:{r:74,g:144,b:226,a:1},background:{r:255,g:255,b:255,a:.9},text:{r:44,g:62,b:80,a:1},textSecondary:{r:102,g:102,b:102,a:1},border:{r:0,g:0,b:0,a:.1},accent:{r:74,g:144,b:226,a:.2}},tb=e=>{var t,r,a,n,o,l,c;let{theme:d,onSave:h,onPreview:g,onCancel:x,mode:p="create"}=e,{isDark:u,setDarkMode:m}=ti(),[y,f]=(0,s.useState)(d||{id:`custom_${Date.now()}`,name:"自定义主题",backgroundImage:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",blur:"10px",opacity:.95,isDark:!1,colors:{...tf}}),[b,j]=(0,s.useState)(!1),[A,v]=(0,s.useState)(null);(0,s.useEffect)(()=>{d&&(f(d),v(d))},[d]);let S=(0,s.useCallback)(e=>{f(t=>({...t,...e})),j(!0)},[]),k=(0,s.useCallback)((e,t)=>{f(r=>({...r,colors:{...r.colors||tf,[e]:t}})),j(!0)},[]),w=(0,s.useCallback)(()=>{null==g||g(y),en.Ay.info("预览已更新")},[y,g]),C=(0,s.useCallback)(()=>{null==h||h(y),j(!1),v(y),en.Ay.success("主题已保存")},[y,h]),I=(0,s.useCallback)(()=>{A&&(f(A),j(!1),en.Ay.info("已恢复原始设置"))},[A]),T=(0,s.useCallback)(e=>{S({isDark:e}),m(e)},[S,m]),E={width:"100%",height:120,borderRadius:12,background:y.backgroundImage,backgroundSize:"200% 200%",animation:"gradient 8s ease infinite",backdropFilter:`blur(${y.blur})`,WebkitBackdropFilter:`blur(${y.blur})`,opacity:y.opacity,marginBottom:16,display:"flex",alignItems:"center",justifyContent:"center",color:(null==(t=y.colors)?void 0:t.text)?to.rgbaToString(y.colors.text):y.isDark?"#ffffff":"#2c3e50",fontSize:18,fontWeight:600,textShadow:y.isDark?"0 2px 4px rgba(0,0,0,0.3)":"0 2px 4px rgba(255,255,255,0.3)",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"};return(0,i.jsxs)("div",{className:"theme-editor",children:[(0,i.jsx)("style",{children:`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}),(0,i.jsx)(ex.A,{title:(0,i.jsx)(el.A,{children:(0,i.jsx)("span",{children:"create"===p?"创建新主题":"编辑主题"})}),extra:(0,i.jsxs)(el.A,{children:[b&&(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(tm.A,{}),onClick:I,children:"重置"}),(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(eV.A,{}),onClick:w,children:"预览"}),(0,i.jsx)(eo.Ay,{type:"primary",icon:(0,i.jsx)(ty.A,{}),onClick:C,disabled:!b&&"create"===p,children:"保存"})]}),children:(0,i.jsxs)(el.A,{direction:"vertical",style:{width:"100%"},size:"large",children:[(0,i.jsx)("div",{style:E,children:y.name}),(0,i.jsx)(ex.A,{size:"small",title:"基本信息",children:(0,i.jsxs)(ei.A,{layout:"vertical",children:[(0,i.jsxs)(eh.A,{gutter:16,children:[(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(ei.A.Item,{label:"主题名称",children:(0,i.jsx)(eb.A,{value:y.name,onChange:e=>S({name:e.target.value}),placeholder:"输入主题名称"})})}),(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(ei.A.Item,{label:"主题ID",children:(0,i.jsx)(eb.A,{value:y.id,disabled:"edit"===p,placeholder:"自动生成"})})})]}),(0,i.jsx)(ei.A.Item,{label:"背景渐变",children:(0,i.jsx)(eb.A,{value:y.backgroundImage,onChange:e=>S({backgroundImage:e.target.value}),placeholder:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"})}),(0,i.jsxs)(eh.A,{gutter:16,children:[(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(ei.A.Item,{label:"模糊程度",children:(0,i.jsx)(eS.A,{min:0,max:30,value:Number.parseInt(y.blur)||0,onChange:e=>S({blur:`${e}px`}),marks:{0:"0px",10:"10px",20:"20px",30:"30px"}})})}),(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(ei.A.Item,{label:"透明度",children:(0,i.jsx)(eS.A,{min:.5,max:1,step:.01,value:y.opacity,onChange:e=>S({opacity:e}),marks:{.5:"50%",.75:"75%",1:"100%"}})})})]}),(0,i.jsx)(ei.A.Item,{label:"暗黑模式",children:(0,i.jsx)(ev.A,{checked:y.isDark||!1,onChange:T,checkedChildren:"暗黑",unCheckedChildren:"明亮"})})]})}),(0,i.jsx)(ex.A,{size:"small",title:"颜色设置",children:(0,i.jsxs)(eh.A,{gutter:[16,16],children:[(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(tu,{label:"主色调",value:(null==(r=y.colors)?void 0:r.primary)||tf.primary,onChange:e=>k("primary",e)})}),(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(tu,{label:"背景色",value:(null==(a=y.colors)?void 0:a.background)||tf.background,onChange:e=>k("background",e)})}),(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(tu,{label:"文本颜色",value:(null==(n=y.colors)?void 0:n.text)||tf.text,onChange:e=>k("text",e)})}),(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(tu,{label:"次要文本",value:(null==(o=y.colors)?void 0:o.textSecondary)||tf.textSecondary,onChange:e=>k("textSecondary",e)})}),(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(tu,{label:"边框颜色",value:(null==(l=y.colors)?void 0:l.border)||tf.border,onChange:e=>k("border",e)})}),(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(tu,{label:"强调色",value:(null==(c=y.colors)?void 0:c.accent)||tf.accent,onChange:e=>k("accent",e)})})]})})]})})]})};var tj=r(1131),tA=r(6426),tv=r(5708),tS=r(1983),tk=r(2830),tw=r(1889),tC=r(3832);let{Title:tI,Text:tT,Paragraph:tE}=et.A,tz=e=>e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(2)} KB`:`${(e/1048576).toFixed(2)} MB`,tD=e=>{let{value:t="auto",onChange:r,showStats:a=!0}=e,{isDark:n}=ti(),[o,l]=(0,s.useState)(()=>localStorage.getItem("app_storage_type")||t||"auto"),[c,d]=(0,s.useState)(null),[h,g]=(0,s.useState)(!1),[x,p]=(0,s.useState)(!1),[u,m]=(0,s.useState)(!0),[y,f]=(0,s.useState)({localStorage:!0,indexedDB:!0}),b=(0,s.useMemo)(()=>new P,[]),j=(0,s.useCallback)(async()=>{g(!0);try{let e=await b.getStats();d(e)}catch(e){console.error("Failed to load storage stats:",e)}finally{g(!1)}},[b]);(0,s.useEffect)(()=>{a&&j()},[a,j]);let A=(0,s.useCallback)(e=>{l(e),localStorage.setItem("app_storage_type",e),null==r||r(e),en.Ay.success(`存储方式已切换为: ${(e=>{switch(e){case"localStorage":return"localStorage (同步存储)";case"indexedDB":return"IndexedDB (大容量存储)";default:return"智能选择"}})(e)}`)},[r]),v=(0,s.useCallback)(()=>{let e=new Blob([G.exportVersions()],{type:"application/json"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=`turnip_backup_${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t),en.Ay.success("备份已导出")},[]),S=(0,s.useCallback)(async()=>{if(!y.localStorage&&!y.indexedDB)return void en.Ay.warning("请至少选择一个存储类型进行清空");u&&(v(),await new Promise(e=>setTimeout(e,500)));try{let e=localStorage.getItem("app_storage_type"),t=[];y.localStorage&&t.push(b.clearLocalStorage()),y.indexedDB&&t.push(b.clearIndexedDB()),await Promise.all(t),e&&y.localStorage&&localStorage.setItem("app_storage_type",e),p(!1);let r=[];y.localStorage&&r.push("localStorage"),y.indexedDB&&r.push("IndexedDB"),en.Ay.success(`${r.join(" 和 ")}已清空，页面即将刷新`),setTimeout(()=>{window.location.reload()},1500)}catch(e){en.Ay.error("清空存储失败")}},[y,u,v,b]),k=(0,s.useCallback)(()=>{f({localStorage:!0,indexedDB:!0}),p(!0)},[]),w=(0,s.useCallback)((e,t)=>{f(r=>({...r,[e]:t}))},[]),C=e=>({padding:"16px 20px",borderRadius:12,border:`2px solid ${e?"#1890ff":n?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,background:e?n?"rgba(24, 144, 255, 0.2)":"rgba(24, 144, 255, 0.1)":n?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.5)",cursor:"pointer",transition:"all 0.3s ease"});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ex.A,{title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(tj.A,{}),(0,i.jsx)("span",{children:"数据存储设置"})]}),extra:a&&(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(tA.A,{}),onClick:j,loading:h,children:"刷新"}),style:{background:n?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.9)",borderRadius:12},children:(0,i.jsxs)(el.A,{direction:"vertical",style:{width:"100%"},size:"large",children:[(0,i.jsx)(tE,{type:"secondary",children:"选择数据持久化存储方式。不同存储方式有不同的容量限制和性能特点。"}),(0,i.jsx)(ew.A.Group,{value:o,onChange:e=>A(e.target.value),style:{width:"100%"},children:(0,i.jsxs)(el.A,{direction:"vertical",style:{width:"100%"},size:"middle",children:[(0,i.jsx)("div",{style:C("auto"===o),onClick:()=>A("auto"),children:(0,i.jsx)(ew.A,{value:"auto",children:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(tv.A,{style:{fontSize:20,color:"#1890ff"}}),(0,i.jsxs)("div",{children:[(0,i.jsx)(tT,{strong:!0,children:"智能选择"}),(0,i.jsx)("br",{}),(0,i.jsx)(tT,{type:"secondary",style:{fontSize:12},children:"根据数据大小自动选择最佳存储方式（推荐）"})]})]})})}),(0,i.jsx)("div",{style:C("localStorage"===o),onClick:()=>A("localStorage"),children:(0,i.jsx)(ew.A,{value:"localStorage",children:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(tS.A,{style:{fontSize:20,color:"#52c41a"}}),(0,i.jsxs)("div",{children:[(0,i.jsx)(tT,{strong:!0,children:"localStorage"}),(0,i.jsx)("br",{}),(0,i.jsx)(tT,{type:"secondary",style:{fontSize:12},children:"同步存储，读取速度快，容量约5MB"})]})]})})}),(0,i.jsx)("div",{style:C("indexedDB"===o),onClick:()=>A("indexedDB"),children:(0,i.jsx)(ew.A,{value:"indexedDB",children:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(tj.A,{style:{fontSize:20,color:"#fa8c16"}}),(0,i.jsxs)("div",{children:[(0,i.jsx)(tT,{strong:!0,children:"IndexedDB"}),(0,i.jsx)("br",{}),(0,i.jsx)(tT,{type:"secondary",style:{fontSize:12},children:"异步存储，大容量，适合存储大量数据"})]})]})})})]})}),a&&c&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ec.A,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)(tT,{strong:!0,children:"存储统计"}),(0,i.jsxs)(eh.A,{gutter:16,style:{marginTop:12},children:[(0,i.jsx)(eg.A,{span:8,children:(0,i.jsx)(tC.A,{title:"localStorage 键数",value:c.localStorageKeys,suffix:"项"})}),(0,i.jsx)(eg.A,{span:8,children:(0,i.jsx)(tC.A,{title:"IndexedDB 键数",value:c.indexedDBKeys,suffix:"项"})}),(0,i.jsx)(eg.A,{span:8,children:(0,i.jsx)(tC.A,{title:"总数据量",value:tz(c.localStorageSize+c.indexedDBSize)})})]}),(0,i.jsxs)(eh.A,{gutter:16,style:{marginTop:16},children:[(0,i.jsxs)(eg.A,{span:12,children:[(0,i.jsx)(tT,{type:"secondary",children:"localStorage 使用量"}),(0,i.jsx)(ep.A,{percent:Math.min(c.localStorageSize/5242880*100,100),format:()=>tz(c.localStorageSize),size:"small"})]}),(0,i.jsxs)(eg.A,{span:12,children:[(0,i.jsx)(tT,{type:"secondary",children:"IndexedDB 使用量"}),(0,i.jsx)(ep.A,{percent:Math.min(c.indexedDBSize/0x3200000*100,100),format:()=>tz(c.indexedDBSize),size:"small",strokeColor:"#fa8c16"})]})]})]}),(0,i.jsx)(ec.A,{}),(0,i.jsxs)(el.A,{wrap:!0,children:[(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(tk.A,{}),onClick:v,children:"导出备份"}),(0,i.jsx)(eo.Ay,{danger:!0,icon:(0,i.jsx)(eM.A,{}),onClick:k,children:"清空存储"})]})]})]})}),(0,i.jsxs)(e$.A,{title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(tw.A,{style:{color:"#ff4d4f"}}),(0,i.jsx)("span",{children:"确认清空存储"})]}),open:x,onOk:S,onCancel:()=>p(!1),okText:"确认清空",cancelText:"取消",okButtonProps:{danger:!0,disabled:!y.localStorage&&!y.indexedDB},width:520,children:[(0,i.jsx)(ed.A,{message:"警告：此操作不可逆转！",description:"清空存储将删除选中的存储中的所有数据。网站将恢复到初始状态。",type:"error",showIcon:!0,style:{marginBottom:16}}),(0,i.jsxs)("div",{style:{marginBottom:16},children:[(0,i.jsx)(tT,{strong:!0,children:"选择要清空的存储："}),(0,i.jsxs)("div",{style:{marginTop:12,display:"flex",flexDirection:"column",gap:12},children:[(0,i.jsx)("div",{style:{background:y.localStorage?"rgba(82, 196, 26, 0.1)":"transparent",border:`1px solid ${y.localStorage?"#52c41a":"#d9d9d9"}`,borderRadius:"6px",padding:"12px"},children:(0,i.jsx)(ek.A,{checked:y.localStorage,onChange:e=>w("localStorage",e.target.checked),children:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(tS.A,{style:{color:"#52c41a"}}),(0,i.jsxs)("div",{children:[(0,i.jsx)(tT,{strong:!0,children:"localStorage"}),(0,i.jsx)("br",{}),(0,i.jsx)(tT,{type:"secondary",style:{fontSize:12},children:c?`${c.localStorageKeys} 项数据，${tz(c.localStorageSize)}`:"加载中..."})]})]})})}),(0,i.jsx)("div",{style:{background:y.indexedDB?"rgba(250, 140, 22, 0.1)":"transparent",border:`1px solid ${y.indexedDB?"#fa8c16":"#d9d9d9"}`,borderRadius:"6px",padding:"12px"},children:(0,i.jsx)(ek.A,{checked:y.indexedDB,onChange:e=>w("indexedDB",e.target.checked),children:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(tj.A,{style:{color:"#fa8c16"}}),(0,i.jsxs)("div",{children:[(0,i.jsx)(tT,{strong:!0,children:"IndexedDB"}),(0,i.jsx)("br",{}),(0,i.jsx)(tT,{type:"secondary",style:{fontSize:12},children:c?`${c.indexedDBKeys} 项数据，${tz(c.indexedDBSize)}`:"加载中..."})]})]})})})]})]}),(0,i.jsx)("div",{style:{background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"6px",padding:"12px"},children:(0,i.jsx)(ek.A,{checked:u,onChange:e=>m(e.target.checked),children:(0,i.jsx)(tT,{style:{color:"#52c41a"},children:"清空前自动导出备份（强烈建议勾选）"})})})]})]})};var tB=r(9301),t$=r(9109),t_=r(8934),tO=r(383),tP=r(3471),tF=r(8220),tR=r(7234);let{Text:tL,Title:tN}=et.A,tY=e=>`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`,tV=e=>{let{themeConfig:t,onSelect:r}=e,{isDark:a,toggleDarkMode:n,setDarkMode:o,appTheme:l}=ti(),c=(0,s.useMemo)(()=>tc(),[]),[d,h]=(0,s.useState)(!0),[g,u]=(0,s.useState)(!1),[m,y]=(0,s.useState)(l.id),[f,b]=(0,s.useState)({primary:{r:74,g:144,b:226,a:1},background:{r:255,g:255,b:255,a:.9},text:{r:44,g:62,b:80,a:1}});(0,s.useEffect)(()=>{let e=()=>{if(!g)return;let e=new Date().getHours(),t=e>=18||e<6;t!==a&&o(t)};e();let t=setInterval(e,6e4);return()=>clearInterval(t)},[g,a,o]);let j=(0,s.useCallback)(async e=>{let i=[...c.getBuiltInPresets(),...c.getCustomPresets()].find(t=>t.id===e);if(i)y(e),await c.setTheme(i.config),r(i.config);else{let i=t.presets.find(t=>t.id===e)||t.default;y(e),r(i)}},[t,r,c]),A=(0,s.useCallback)(()=>{u(!1),n()},[n]),v=(0,s.useCallback)(e=>{if(u(e),e){let e=new Date().getHours();o(e>=18||e<6)}},[o]),S=(0,s.useMemo)(()=>{let e=c.getBuiltInPresets(),t=c.getCustomPresets(),r=[{type:"group",label:"预设主题",children:e.map(e=>({key:e.id,label:(0,i.jsxs)(el.A,{children:[(0,i.jsx)("div",{style:{width:24,height:24,background:e.config.backgroundImage,borderRadius:4,border:m===e.id?`2px solid ${x}`:"1px solid #d9d9d9"}}),(0,i.jsx)("span",{children:e.name}),m===e.id&&(0,i.jsx)(tB.A,{style:{color:x}})]}),onClick:()=>j(e.id)}))}];return t.length>0&&(r.push({type:"divider"}),r.push({type:"group",label:"自定义主题",children:t.map(e=>({key:e.id,label:(0,i.jsxs)(el.A,{children:[(0,i.jsx)("div",{style:{width:24,height:24,background:e.config.backgroundImage,borderRadius:4}}),(0,i.jsx)("span",{children:e.name})]}),onClick:()=>j(e.id)}))})),r},[c,m,j]),k=(0,s.useCallback)(()=>{let e=document.documentElement;e.style.setProperty("--primary-color",tY(f.primary)),e.style.setProperty("--bg-color",tY(f.background)),e.style.setProperty("--text-color",tY(f.text)),e.style.setProperty("--color-primary",tY(f.primary)),e.style.setProperty("--color-bg-container",tY(f.background)),e.style.setProperty("--color-text",tY(f.text));let t=tY(f.primary),i=tY(f.background),s=`linear-gradient(135deg, ${t} 0%, ${i} 100%)`;r({...l,id:`custom_color_${Date.now()}`,name:"自定义颜色主题",backgroundImage:s}),en.Ay.success("自定义颜色已应用")},[f,l,r]),w=(0,i.jsxs)("div",{style:{width:320,padding:8},children:[(0,i.jsx)(tN,{level:5,style:{marginBottom:12},children:"自定义颜色"}),(0,i.jsx)(eh.A,{gutter:[8,8],children:(0,i.jsx)(eg.A,{span:24,children:(0,i.jsx)(tu,{label:"主色调",value:f.primary,onChange:e=>{b(t=>({...t,primary:e}))},showPresets:!1})})}),(0,i.jsx)(ec.A,{style:{margin:"12px 0"}}),(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eo.Ay,{size:"small",onClick:()=>b({primary:{r:74,g:144,b:226,a:1},background:{r:255,g:255,b:255,a:.9},text:{r:44,g:62,b:80,a:1}}),children:"重置"}),(0,i.jsx)(eo.Ay,{type:"primary",size:"small",onClick:k,children:"应用"})]})]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
          .theme-float-button .ant-float-btn-body {
            background: ${a?"rgba(255, 255, 255, 0.1)":"rgba(255, 255, 255, 0.9)"};
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid ${a?"rgba(255, 255, 255, 0.2)":"rgba(255, 255, 255, 0.3)"};
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          }
          .theme-float-button .ant-float-btn-body:hover {
            background: ${a?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.95)"};
          }
        `}),(0,i.jsxs)(tF.A.Group,{shape:"circle",style:{right:24,bottom:24,display:d?"flex":"none"},className:"theme-float-button",icon:(0,i.jsx)(td.A,{}),tooltip:"主题设置",children:[!a&&(0,i.jsx)(tR.A,{menu:{items:S},placement:"topRight",trigger:["click"],children:(0,i.jsx)(tF.A,{icon:(0,i.jsx)(td.A,{}),tooltip:"选择主题"})}),(0,i.jsx)(eD.A,{content:w,trigger:"click",placement:"topRight",children:(0,i.jsx)(tF.A,{icon:(0,i.jsx)(eK.A,{}),tooltip:"自定义颜色"})}),(0,i.jsx)(tF.A,{icon:a?(0,i.jsx)(t$.A,{}):(0,i.jsx)(t_.A,{}),tooltip:a?"切换到明亮模式":"切换到暗黑模式",onClick:A,style:{background:a?`linear-gradient(135deg, ${x} 0%, ${p} 100%)`:void 0}}),(0,i.jsx)(tF.A,{icon:(0,i.jsx)(tO.A,{}),tooltip:g?"关闭自动切换":"开启自动切换",onClick:()=>v(!g),style:{background:g?`linear-gradient(135deg, ${x} 0%, ${p} 100%)`:void 0}})]}),(0,i.jsx)(ez.A,{title:d?"隐藏主题选择器":"显示主题选择器",children:(0,i.jsx)(tF.A,{icon:d?(0,i.jsx)(tP.A,{}):(0,i.jsx)(eV.A,{}),onClick:()=>h(!d),style:{right:80,bottom:24}})})]})};var tK=r(4851),tM=r(6629),tG=r(7167),tJ=r(6148);let{Title:tU,Paragraph:tW,Text:tH}=et.A,{TextArea:tq}=eb.A,tX=()=>{let e,[t]=ei.A.useForm(),[r,a]=(0,s.useState)(null),[n,o]=(0,s.useState)(!1),[l,c]=(0,s.useState)(!1),[d,h]=(0,s.useState)(!1),[g,x]=(0,s.useState)(!1),[p,u]=(0,s.useState)(!0),{isDark:m,appTheme:y}=ti();(0,s.useEffect)(()=>{f()},[]);let f=()=>{let e=M.getConfig();console.log("loadSiteConfig - 获取到的配置:",e),a(e);let r={title:e.title,copyright:e.copyright.text,description:e.description||"",keywords:e.keywords||"",author:e.author||"",favicon:e.favicon||""};console.log("loadSiteConfig - 设置表单值:",r),t.setFieldsValue(r),setTimeout(()=>{console.log("loadSiteConfig - 设置后实际的favicon值:",t.getFieldValue("favicon"))},50),setTimeout(()=>{let t=e.favicon;if(t){let e=document.getElementById("favicon-preview");if(e){let r=document.createElement("img");r.onload=()=>{e.style.backgroundImage=`url(${t})`,e.style.backgroundColor="transparent"},r.onerror=()=>{e.style.backgroundImage="none",e.style.backgroundColor="#ff4d4f"},r.src=t}}},100)},b=async()=>{try{o(!0);let e=await t.validateFields();console.log("handleSave - 获取到的表单值:",e);let r=t.getFieldValue("favicon");console.log("handleSave - 单独获取favicon字段:",r),console.log("handleSave - favicon类型:",typeof r),console.log("handleSave - favicon长度:",r?r.length:"undefined"),M.updateTitle(e.title),M.updateCopyright(e.copyright),e.description&&M.addConfigItem("description",e.description),e.keywords&&M.addConfigItem("keywords",e.keywords),e.author&&M.addConfigItem("author",e.author),e.favicon&&e.favicon.trim()?(console.log("handleSave - 保存favicon:",e.favicon),M.addConfigItem("favicon",e.favicon),M.updateFavicon(e.favicon)):(console.log("handleSave - favicon为空，删除配置"),M.deleteConfigItem("favicon")),en.Ay.success("网站配置保存成功！"),c(!1),f()}catch(e){en.Ay.error("保存失败，请检查输入")}finally{o(!1)}},j=()=>{c(!0)},A=async()=>{await M.clearStorage(),en.Ay.success("本地存储已清除"),setTimeout(()=>{window.location.reload()},1e3)},v=async()=>{try{o(!0),p&&(G.createVersion({name:`重置前备份_${new Date().toLocaleString("zh-CN")}`,description:"系统重置前的自动备份",tags:["系统重置","自动备份"]}),en.Ay.success("当前配置已保存为版本"),await new Promise(e=>setTimeout(e,1e3))),M.resetToDefault(K),L.resetToDefaultSync(D),V.resetToDefault(N,Y),en.Ay.success("网站重置成功！页面将2秒后刷新"),setTimeout(()=>{window.location.reload()},2e3)}catch(e){en.Ay.error("重置失败，请重试")}finally{o(!1),h(!1)}},S=()=>{let e=tc().getAllPresets();return{site:{title:M.getConfig().title,copyright:M.getConfig().copyright.text,description:M.getConfig().description||"未设置",keywords:M.getConfig().keywords||"未设置",author:M.getConfig().author||"未设置",favicon:M.getConfig().favicon||"未设置"},theme:{default:L.getDefaultTheme(),presets:L.getPresets(),allPresets:e.map(e=>({id:e.id,name:e.name,isBuiltIn:e.isBuiltIn,backgroundImage:e.config.backgroundImage})),totalPresets:e.length,builtInPresets:e.filter(e=>e.isBuiltIn).length,customPresets:e.filter(e=>!e.isBuiltIn).length},links:{categories:V.getAllCategories(),totalCategories:V.getAllCategories().length,totalLinks:V.getAllCategories().reduce((e,t)=>{var r;return e+((null==(r=t.links)?void 0:r.length)||0)},0),searchEngines:V.getAllSearchEngines(),totalSearchEngines:V.getAllSearchEngines().length},system:{storageSize:k(),...J.getSystemSummary()}}},k=()=>{let e=0;for(let t in localStorage)localStorage.hasOwnProperty(t)&&t.startsWith("turnip")&&(e+=localStorage[t].length);return(e/1024).toFixed(2)};return(0,i.jsxs)("div",{style:{padding:24},children:[(0,i.jsxs)(tU,{level:2,children:[(0,i.jsx)(tK.A,{})," 网站配置面板"]}),(0,i.jsx)(tW,{children:"管理网站的基本信息、SEO配置和系统设置。"}),(0,i.jsx)(ex.A,{title:"系统状态",style:{marginBottom:16},children:(0,i.jsxs)(eh.A,{gutter:16,children:[(0,i.jsx)(eg.A,{span:6,children:(0,i.jsx)(tC.A,{title:"本地存储使用",value:k(),suffix:"KB",valueStyle:{color:"#1890ff"}})}),(0,i.jsx)(eg.A,{span:6,children:(0,i.jsx)(tC.A,{title:"主题数量",value:JSON.parse(localStorage.getItem("turnip-theme-config")||'{"presets":[]}').presets.length,valueStyle:{color:"#52c41a"}})}),(0,i.jsx)(eg.A,{span:6,children:(0,i.jsx)(tC.A,{title:"链接分类",value:JSON.parse(localStorage.getItem("turnip_link_categories")||"[]").length,valueStyle:{color:"#722ed1"}})}),(0,i.jsx)(eg.A,{span:6,children:(0,i.jsx)(tC.A,{title:"配置版本",value:J.getVersionStatusText(),valueStyle:{color:"#eb2f96",fontSize:"14px"}})})]})}),(0,i.jsxs)(ex.A,{title:"基本信息",style:{marginBottom:16},children:[(0,i.jsxs)(ei.A,{form:t,layout:"vertical",onValuesChange:j,children:[(0,i.jsxs)(eh.A,{gutter:16,children:[(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(ei.A.Item,{name:"title",label:"网站标题",rules:[{required:!0,message:"请输入网站标题"}],children:(0,i.jsx)(eb.A,{placeholder:"例如: Turnip起始页",prefix:(0,i.jsx)(eW.A,{})})})}),(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(ei.A.Item,{name:"author",label:"作者",children:(0,i.jsx)(eb.A,{placeholder:"例如: Turnip1202"})})})]}),(0,i.jsx)(ei.A.Item,{name:"description",label:"网站描述",children:(0,i.jsx)(tq,{rows:3,placeholder:"网站的简短描述，用于SEO优化"})}),(0,i.jsx)(ei.A.Item,{name:"keywords",label:"关键词",children:(0,i.jsx)(eb.A,{placeholder:"多个关键词用逗号分隔，例如: 起始页,导航,工具"})}),(0,i.jsx)(ei.A.Item,{name:"copyright",label:"版权信息",rules:[{required:!0,message:"请输入版权信息"}],children:(0,i.jsx)(eb.A,{placeholder:"例如: \xa9 2024 Turnip1202. All rights reserved."})}),(0,i.jsxs)(el.A.Compact,{block:!0,style:{display:"flex",width:"100%",flexDirection:"column"},children:[(0,i.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center"},children:[(0,i.jsx)(ei.A.Item,{name:"favicon",label:"网站图标URL",style:{flex:1,marginBottom:0},children:(0,i.jsx)(eb.A,{placeholder:"例如: /favicon.ico",onChange:e=>{let t=e.target.value;if(j(),t&&t.trim())setTimeout(()=>{let e=document.createElement("img");e.onload=()=>{let e=document.getElementById("favicon-preview");e&&(e.style.backgroundImage=`url(${t})`,e.style.backgroundColor="transparent")},e.onerror=()=>{let e=document.getElementById("favicon-preview");e&&(e.style.backgroundImage="none",e.style.backgroundColor="#ff4d4f")},e.src=t},500);else{let e=document.getElementById("favicon-preview");e&&(e.style.backgroundImage="none",e.style.backgroundColor="#f0f0f0")}}})}),(0,i.jsx)("div",{id:"favicon-preview",style:{width:"32px",height:"32px",border:"1px solid #d9d9d9",borderLeft:"none",borderRadius:"0 6px 6px 0",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundColor:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",marginTop:"30px",color:"#666",marginLeft:"-1px"},title:"图标预览",children:"\uD83C\uDF10"})]}),(0,i.jsx)("div",{style:{fontSize:"12px",color:"#666",marginTop:"4px",paddingLeft:"12px"},children:"支持 .ico、.png、.svg 等格式，建议尺寸 16\xd716 或 32\xd732 像素"})]})]}),l&&(0,i.jsx)(ed.A,{message:"您有未保存的更改",description:"请记得保存您的配置更改",type:"warning",showIcon:!0,style:{marginBottom:16}}),(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eo.Ay,{type:"primary",icon:(0,i.jsx)(ty.A,{}),loading:n,onClick:b,disabled:!l,children:"保存配置"}),(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(eJ.A,{}),onClick:()=>{f(),c(!1),en.Ay.info("配置已重置")},disabled:!l,children:"重置"})]})]}),(0,i.jsx)(ex.A,{title:"高级设置",style:{marginBottom:16},children:(0,i.jsxs)(el.A,{direction:"vertical",style:{width:"100%"},children:[(0,i.jsx)(ed.A,{message:"危险操作",description:"以下操作可能会影响应用的正常使用，请谨慎操作",type:"error",showIcon:!0}),(0,i.jsxs)("div",{children:[(0,i.jsx)(tU,{level:5,style:{marginBottom:8},children:"\uD83D\uDCCB 版本管理与数据备份"}),(0,i.jsxs)(el.A,{wrap:!0,children:[(0,i.jsx)(eo.Ay,{type:"primary",icon:(0,i.jsx)(ty.A,{}),onClick:()=>{let e={name:`网站配置快照_${new Date().toLocaleDateString("zh-CN")}`,description:"从网站配置面板创建的配置快照",tags:["手动保存","网站配置"]};G.createVersion(e),en.Ay.success("配置版本已保存！")},children:"保存当前版本"}),(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(tM.A,{}),onClick:()=>{en.Ay.info('请通过管理面板中的"配置版本管理"查看所有版本')},children:"查看版本历史"}),(0,i.jsx)(eo.Ay,{type:"dashed",icon:(0,i.jsx)(tk.A,{}),onClick:()=>{let e=new Blob([G.exportVersions()],{type:"application/json"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=`turnip-version-history-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t),en.Ay.success("版本历史数据已导出")},children:"导出版本历史"}),(0,i.jsx)(eo.Ay,{type:"default",icon:(0,i.jsx)(eV.A,{}),onClick:()=>x(!0),children:"配置预览"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(tU,{level:5,style:{marginBottom:8},children:"\uD83D\uDCBE 数据存储设置"}),(0,i.jsx)(tD,{showStats:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(tU,{level:5,style:{marginBottom:8},children:"\uD83D\uDDD1️ 数据清理"}),(0,i.jsxs)(el.A,{wrap:!0,children:[(0,i.jsx)(eo.Ay,{danger:!0,icon:(0,i.jsx)(eU.A,{}),onClick:A,children:"清除所有数据"}),(0,i.jsx)(eo.Ay,{danger:!0,type:"primary",icon:(0,i.jsx)(tG.A,{}),onClick:()=>h(!0),children:"重置网站"})]})]})]})}),(0,i.jsx)(ex.A,{title:"当前配置预览",extra:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eo.Ay,{size:"small",icon:(0,i.jsx)(tJ.A,{}),onClick:()=>{let e=new Blob([JSON.stringify(S(),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=`turnip-full-config-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t),en.Ay.success("完整配置已导出")},children:"导出完整配置"}),(0,i.jsx)(eo.Ay,{size:"small",icon:(0,i.jsx)(eV.A,{}),onClick:()=>x(!0),children:"详细预览"})]}),children:(0,i.jsx)("div",{style:{background:m?"#1a1a1a":"#f5f5f5",color:m?"#e0e0e0":"#333",padding:16,borderRadius:6},children:(0,i.jsx)("pre",{style:{margin:0,fontSize:12,maxHeight:400,overflow:"auto",color:"inherit"},children:JSON.stringify(S(),null,2)})})}),(0,i.jsx)(e$.A,{title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(tw.A,{style:{color:"#ff4d4f"}}),(0,i.jsx)("span",{children:"重置网站"})]}),open:d,onOk:v,onCancel:()=>h(!1),okText:"确认重置",cancelText:"取消",okButtonProps:{danger:!0,loading:n},width:600,centered:!0,children:(0,i.jsxs)("div",{style:{padding:"20px 0"},children:[(0,i.jsx)(ed.A,{message:"警告：此操作不可逆转！",description:"这将会清除所有当前数据并重置为默认配置",type:"error",showIcon:!0,style:{marginBottom:20}}),(0,i.jsxs)("div",{style:{marginBottom:16},children:[(0,i.jsx)(tH,{strong:!0,children:"重置将影响的数据："}),(0,i.jsxs)("ul",{style:{marginTop:8,paddingLeft:20},children:[(0,i.jsx)("li",{children:"\uD83C\uDF10 网站配置（标题、版权、SEO信息等）"}),(0,i.jsx)("li",{children:"\uD83C\uDFA8 主题设置（自定义主题将被清除）"}),(0,i.jsx)("li",{children:"\uD83D\uDD17 链接数据（所有分类和链接）"}),(0,i.jsx)("li",{children:"\uD83D\uDD0D 搜索引擎配置"})]})]}),(0,i.jsxs)("div",{style:{marginBottom:16},children:[(0,i.jsx)(tH,{strong:!0,children:"重置后将恢复为："}),(0,i.jsxs)("ul",{style:{marginTop:8,paddingLeft:20},children:[(0,i.jsx)("li",{children:"✅ 默认网站标题和信息"}),(0,i.jsx)("li",{children:"✅ 默认主题集合（渐变紫、晨光蓝、夜空）"}),(0,i.jsx)("li",{children:"✅ 默认链接分类和示例链接"}),(0,i.jsx)("li",{children:"✅ 默认搜索引擎（百度、谷歌、必应）"})]})]}),(0,i.jsx)("div",{style:{background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"6px",padding:"12px"},children:(0,i.jsxs)(el.A,{children:[(0,i.jsx)("input",{type:"checkbox",checked:p,onChange:e=>u(e.target.checked),id:"backup-checkbox"}),(0,i.jsx)("label",{htmlFor:"backup-checkbox",style:{cursor:"pointer"},children:(0,i.jsx)(tH,{style:{color:"#52c41a"},children:"在重置前自动导出完整备份（建议勾选）"})})]})})]})}),(0,i.jsx)(e$.A,{title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eV.A,{style:{color:"#52c41a"}}),(0,i.jsx)("span",{children:"当前网站配置预览"})]}),open:g,onCancel:()=>x(!1),footer:[(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(tJ.A,{}),onClick:()=>{let e=new Blob([JSON.stringify(S(),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=`turnip-full-config-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t),en.Ay.success("完整配置已导出")},children:"导出完整配置"},"export"),(0,i.jsx)(eo.Ay,{type:"primary",onClick:()=>x(!1),children:"关闭"},"close")],width:900,centered:!0,style:{top:20},className:m?"dark-modal":"",children:(e=S(),(0,i.jsxs)("div",{style:{maxHeight:"70vh",overflow:"auto"},children:[(0,i.jsx)(ex.A,{size:"small",title:"\uD83C\uDF10 网站基本信息",style:{marginBottom:16},children:(0,i.jsxs)(eh.A,{gutter:[16,8],children:[(0,i.jsxs)(eg.A,{span:12,children:[(0,i.jsx)(tH,{strong:!0,children:"网站标题："}),(0,i.jsx)("div",{style:{marginTop:4,padding:"4px 8px",background:m?"#2a2a2a":"#f5f5f5",borderRadius:"4px",color:m?"#e0e0e0":"#333"},children:e.site.title})]}),(0,i.jsxs)(eg.A,{span:12,children:[(0,i.jsx)(tH,{strong:!0,children:"作者："}),(0,i.jsx)("div",{style:{marginTop:4,padding:"4px 8px",background:m?"#2a2a2a":"#f5f5f5",borderRadius:"4px",color:m?"#e0e0e0":"#333"},children:e.site.author})]}),(0,i.jsxs)(eg.A,{span:24,children:[(0,i.jsx)(tH,{strong:!0,children:"版权信息："}),(0,i.jsx)("div",{style:{marginTop:4,padding:"4px 8px",background:m?"#2a2a2a":"#f5f5f5",borderRadius:"4px",color:m?"#e0e0e0":"#333"},children:e.site.copyright})]}),(0,i.jsxs)(eg.A,{span:24,children:[(0,i.jsx)(tH,{strong:!0,children:"网站描述："}),(0,i.jsx)("div",{style:{marginTop:4,padding:"4px 8px",background:m?"#2a2a2a":"#f5f5f5",borderRadius:"4px",color:m?"#e0e0e0":"#333"},children:e.site.description})]}),(0,i.jsxs)(eg.A,{span:12,children:[(0,i.jsx)(tH,{strong:!0,children:"关键词："}),(0,i.jsx)("div",{style:{marginTop:4,padding:"4px 8px",background:m?"#2a2a2a":"#f5f5f5",borderRadius:"4px",color:m?"#e0e0e0":"#333"},children:e.site.keywords})]}),(0,i.jsxs)(eg.A,{span:12,children:[(0,i.jsx)(tH,{strong:!0,children:"网站图标："}),(0,i.jsx)("div",{style:{marginTop:4,padding:"4px 8px",background:m?"#2a2a2a":"#f5f5f5",borderRadius:"4px",color:m?"#e0e0e0":"#333"},children:e.site.favicon})]})]})}),(0,i.jsx)(ex.A,{size:"small",title:"\uD83C\uDFA8 主题配置",style:{marginBottom:16},children:(0,i.jsxs)(eh.A,{gutter:[16,8],children:[(0,i.jsx)(eg.A,{span:24,children:(0,i.jsxs)("div",{style:{marginBottom:12},children:[(0,i.jsx)(tH,{strong:!0,children:"当前默认主题："}),(0,i.jsx)("div",{style:{marginTop:8,padding:"12px",border:`1px solid ${m?"#3a3a3a":"#d9d9d9"}`,borderRadius:"8px",background:m?"#2a2a2a":"#fafafa",color:m?"#e0e0e0":"#333"},children:(0,i.jsxs)(eh.A,{align:"middle",gutter:16,children:[(0,i.jsx)(eg.A,{span:4,children:(0,i.jsx)("div",{style:{width:60,height:30,background:e.theme.default.backgroundImage,borderRadius:"4px",border:`1px solid ${m?"#3a3a3a":"#d9d9d9"}`}})}),(0,i.jsx)(eg.A,{span:20,children:(0,i.jsxs)("div",{children:[(0,i.jsx)(tH,{strong:!0,children:e.theme.default.name}),(0,i.jsx)("br",{}),(0,i.jsxs)(tH,{type:"secondary",style:{fontSize:"12px"},children:["模糊度: ",e.theme.default.blur," | 透明度:"," ",Math.round(100*e.theme.default.opacity),"%"]})]})})]})})]})}),(0,i.jsxs)(eg.A,{span:24,children:[(0,i.jsxs)(tH,{strong:!0,children:["预设主题 (",e.theme.presets.length," 个)："]}),(0,i.jsx)("div",{style:{marginTop:8},children:e.theme.presets.length>0?(0,i.jsx)(eh.A,{gutter:[8,8],children:e.theme.presets.map((e,t)=>(0,i.jsx)(eg.A,{span:8,children:(0,i.jsxs)("div",{style:{padding:"8px",border:`1px solid ${m?"#3a3a3a":"#d9d9d9"}`,borderRadius:"6px",background:m?"#2a2a2a":"#fafafa",color:m?"#e0e0e0":"#333"},children:[(0,i.jsx)("div",{style:{width:"100%",height:20,background:e.backgroundImage,borderRadius:"3px",marginBottom:"4px"}}),(0,i.jsx)(tH,{style:{fontSize:"12px"},children:e.name})]})},e.id))}):(0,i.jsx)("div",{style:{padding:"20px",textAlign:"center",color:"#999",background:m?"#2a2a2a":"transparent",borderRadius:"4px"},children:"暂无预设主题"})})]})]})}),(0,i.jsxs)(ex.A,{size:"small",title:"\uD83D\uDD17 链接数据",style:{marginBottom:16},children:[(0,i.jsxs)(eh.A,{gutter:[16,8],style:{marginBottom:16},children:[(0,i.jsx)(eg.A,{span:8,children:(0,i.jsx)(tC.A,{title:"分类数量",value:e.links.totalCategories,valueStyle:{color:"#1890ff",fontSize:"18px"}})}),(0,i.jsx)(eg.A,{span:8,children:(0,i.jsx)(tC.A,{title:"链接数量",value:e.links.totalLinks,valueStyle:{color:"#52c41a",fontSize:"18px"}})}),(0,i.jsx)(eg.A,{span:8,children:(0,i.jsx)(tC.A,{title:"搜索引擎",value:e.links.totalSearchEngines,valueStyle:{color:"#fa8c16",fontSize:"18px"}})})]}),e.links.categories.length>0&&(0,i.jsxs)("div",{children:[(0,i.jsx)(tH,{strong:!0,children:"分类详情："}),(0,i.jsx)("div",{style:{marginTop:8,maxHeight:200,overflow:"auto"},children:e.links.categories.map(e=>{var t;return(0,i.jsxs)("div",{style:{marginBottom:"8px",padding:"8px",border:`1px solid ${m?"#3a3a3a":"#f0f0f0"}`,borderRadius:"4px",background:m?"#2a2a2a":"#fafafa",color:m?"#e0e0e0":"#333"},children:[(0,i.jsxs)(eh.A,{justify:"space-between",align:"middle",children:[(0,i.jsx)(eg.A,{children:(0,i.jsx)(tH,{strong:!0,children:e.name})}),(0,i.jsx)(eg.A,{children:(0,i.jsxs)(tH,{type:"secondary",children:[(null==(t=e.links)?void 0:t.length)||0," 个链接"]})})]}),e.links&&e.links.length>0&&(0,i.jsxs)("div",{style:{marginTop:4,fontSize:"12px",color:m?"#aaa":"#666"},children:[e.links.slice(0,3).map(e=>e.icon+" "+(e.name||"未命名")).join(", "),e.links.length>3&&"..."]})]},e.id)})})]})]}),(0,i.jsx)(ex.A,{size:"small",title:"⚙️ 系统信息",children:(0,i.jsxs)(eh.A,{gutter:[16,8],children:[(0,i.jsxs)(eg.A,{span:8,children:[(0,i.jsx)(tH,{strong:!0,children:"存储大小："}),(0,i.jsx)("div",{style:{marginTop:4},children:(0,i.jsxs)(tH,{children:[e.system.storageSize," KB"]})})]}),(0,i.jsxs)(eg.A,{span:8,children:[(0,i.jsx)(tH,{strong:!0,children:"项目版本："}),(0,i.jsx)("div",{style:{marginTop:4},children:(0,i.jsx)(tH,{children:e.system.projectVersion})})]}),(0,i.jsxs)(eg.A,{span:8,children:[(0,i.jsx)(tH,{strong:!0,children:"生成时间："}),(0,i.jsx)("div",{style:{marginTop:4},children:(0,i.jsx)(tH,{style:{fontSize:"12px"},children:new Date(e.system.lastModified).toLocaleString("zh-CN")})})]}),(0,i.jsxs)(eg.A,{span:8,children:[(0,i.jsx)(tH,{strong:!0,children:"配置版本数："}),(0,i.jsx)("div",{style:{marginTop:4},children:(0,i.jsxs)(tH,{children:[e.system.configVersions," 个"]})})]}),(0,i.jsxs)(eg.A,{span:16,children:[(0,i.jsx)(tH,{strong:!0,children:"当前配置版本："}),(0,i.jsx)("div",{style:{marginTop:4},children:(0,i.jsx)(tH,{style:{color:"#1890ff"},children:e.system.currentConfigVersion})})]})]})})]}))})]})},{Title:tQ,Paragraph:tZ}=et.A,t0=()=>{let[e,t]=(0,s.useState)([]),[r,a]=(0,s.useState)(null),[n,o]=(0,s.useState)(!1),[l,c]=(0,s.useState)(),[d,h]=(0,s.useState)("create"),g=(0,s.useMemo)(()=>tc(),[]);(0,s.useEffect)(()=>{x()},[]);let x=(0,s.useCallback)(()=>{t(g.getAllPresets()),a(L.getConfig().default)},[g]),p=(0,s.useCallback)(e=>{c(e),h(e?"edit":"create"),o(!0)},[]),u=(0,s.useCallback)(e=>{g.setPreviewTheme(e),en.Ay.info("主题预览已应用，刷新页面可恢复")},[g]),m=(0,s.useCallback)(async e=>{try{"edit"===d?(await g.updateCustomPreset({id:e.id,name:e.name,description:`自定义主题 - ${e.name}`,config:e}),en.Ay.success("主题更新成功！")):(await g.addCustomPreset({id:e.id,name:e.name,description:`自定义主题 - ${e.name}`,config:e}),en.Ay.success("主题创建成功！")),x(),o(!1)}catch(e){en.Ay.error("保存主题失败")}},[g,d,x]),y=(0,s.useCallback)(async e=>{try{await g.deleteCustomPreset(e),en.Ay.success("主题删除成功！"),x()}catch(e){e instanceof Error?en.Ay.error(e.message):en.Ay.error("删除失败")}},[g,x]),f=(0,s.useCallback)(e=>{L.setDefaultThemeSync(e),en.Ay.success("默认主题设置成功！"),x()},[x]),b=(0,s.useCallback)(async()=>{try{for(let e of[{id:"purple",name:"渐变紫",description:"优雅的紫色渐变主题",config:{id:"purple",name:"渐变紫",backgroundImage:"linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",blur:"10px",opacity:.95,isDark:!1}},{id:"morning",name:"晨光蓝",description:"清新的晨光蓝色主题",config:{id:"morning",name:"晨光蓝",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",blur:"10px",opacity:.95,isDark:!1}},{id:"night",name:"夜空",description:"深邃的夜空主题",config:{id:"night",name:"夜空",backgroundImage:"linear-gradient(to right, #243949 0%, #517fa4 100%)",blur:"10px",opacity:.92,isDark:!0}}])g.getAllPresets().find(t=>t.id===e.id)||await g.addCustomPreset(e);x(),en.Ay.success("默认主题恢复成功！")}catch(e){en.Ay.error("默认主题恢复失败")}},[g,x]),j=[{title:"ID",dataIndex:["config","id"],key:"id",width:100},{title:"主题名称",key:"name",render:(e,t)=>(0,i.jsxs)(el.A,{children:[(0,i.jsx)("span",{children:t.name}),t.isBuiltIn&&(0,i.jsx)("span",{style:{color:"#999",fontSize:12},children:"(内置)"})]})},{title:"背景预览",key:"backgroundImage",width:120,render:(e,t)=>(0,i.jsx)("div",{style:{width:60,height:30,background:t.config.backgroundImage,borderRadius:4,border:"1px solid #d9d9d9"}})},{title:"模糊度",key:"blur",width:80,render:(e,t)=>t.config.blur},{title:"透明度",key:"opacity",width:80,render:(e,t)=>`${Math.round(100*t.config.opacity)}%`},{title:"操作",key:"action",width:200,render:(e,t)=>(0,i.jsxs)(el.A,{size:"small",children:[(0,i.jsx)(eo.Ay,{type:"text",icon:(0,i.jsx)(eV.A,{}),onClick:()=>u(t.config),title:"预览"}),(0,i.jsx)(eo.Ay,{type:"text",icon:(0,i.jsx)(eK.A,{}),onClick:()=>{var e;let r;return p({...r=t.config,colors:r.colors||{primary:{r:74,g:144,b:226,a:1},background:{r:255,g:255,b:255,a:.9},text:{r:44,g:62,b:80,a:1},textSecondary:{r:102,g:102,b:102,a:1},border:{r:0,g:0,b:0,a:.1},accent:{r:74,g:144,b:226,a:.2}},isDark:r.isDark??("night"===r.id||(null==(e=r.name)?void 0:e.includes("暗黑")))})},title:"编辑"}),(0,i.jsx)(eo.Ay,{type:"text",onClick:()=>f(t.config),title:"设为默认",children:"默认"}),!t.isBuiltIn&&(0,i.jsx)(eH.A,{title:"确定删除这个主题吗？",onConfirm:()=>y(t.id),okText:"确定",cancelText:"取消",children:(0,i.jsx)(eo.Ay,{type:"text",danger:!0,icon:(0,i.jsx)(eM.A,{}),title:"删除"})})]})}];return(0,i.jsxs)("div",{style:{padding:24},children:[(0,i.jsxs)(tQ,{level:2,children:[(0,i.jsx)(td.A,{})," 主题管理面板"]}),(0,i.jsx)(tZ,{children:"管理应用的主题配置，包括背景渐变、模糊效果和透明度设置。"}),r&&(0,i.jsx)(ex.A,{title:"当前默认主题",style:{marginBottom:16},children:(0,i.jsxs)(eh.A,{gutter:16,align:"middle",children:[(0,i.jsx)(eg.A,{span:4,children:(0,i.jsx)("div",{style:{width:80,height:40,background:r.backgroundImage,borderRadius:6,border:"1px solid #d9d9d9"}})}),(0,i.jsxs)(eg.A,{span:20,children:[(0,i.jsx)(tQ,{level:4,style:{margin:0},children:r.name}),(0,i.jsxs)(tZ,{style:{margin:0,color:"#666"},children:["模糊度: ",r.blur," | 透明度:"," ",Math.round(100*r.opacity),"%"]})]})]})}),(0,i.jsx)("div",{style:{marginBottom:16},children:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eo.Ay,{type:"primary",icon:(0,i.jsx)(eN.A,{}),onClick:()=>p(),children:"创建主题"}),0===e.length&&(0,i.jsx)(eo.Ay,{type:"dashed",onClick:b,children:"恢复默认主题"})]})}),0===e.length?(0,i.jsxs)(ex.A,{style:{textAlign:"center",padding:"40px 20px"},children:[(0,i.jsx)("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"\uD83C\uDFA8"}),(0,i.jsx)(tQ,{level:4,children:"暂无自定义主题"}),(0,i.jsx)(tZ,{style:{color:"#666",marginBottom:"24px"},children:"您还没有创建任何自定义主题，可以点击上方按钮添加新主题或恢复默认主题。"}),(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eo.Ay,{type:"primary",icon:(0,i.jsx)(eN.A,{}),onClick:()=>p(),children:"创建第一个主题"}),(0,i.jsx)(eo.Ay,{onClick:b,children:"恢复默认主题"})]})]}):(0,i.jsx)(eC.A,{dataSource:e,columns:j,rowKey:"id",pagination:{pageSize:10},scroll:{x:800}}),(0,i.jsxs)(e$.A,{title:"edit"===d?"编辑主题":"创建主题",open:n,onCancel:()=>o(!1),footer:null,width:900,destroyOnHidden:!0,children:[(0,i.jsx)(ed.A,{message:"主题编辑器",description:"使用编辑器可以设置主题属性，包括背景渐变、RGBA 颜色、暗黑模式等。编辑完成后点击保存即可。",type:"info",showIcon:!0,style:{marginBottom:16}}),(0,i.jsx)(tb,{theme:l,mode:d,onSave:m,onPreview:u,onCancel:()=>o(!1)})]})]})};var t1=r(4361),t2=r(9138),t5=r(5427),t4=r(3889),t6=r(9246);let{Title:t8,Text:t3,Paragraph:t9}=et.A,{TextArea:t7}=eb.A,{Option:re}=er.A,rt=()=>{var e;let[t,r]=(0,s.useState)([]),[a,n]=(0,s.useState)(!1),[o,l]=(0,s.useState)(!1),[c,d]=(0,s.useState)(!1),[h,g]=(0,s.useState)(!1),[x,p]=(0,s.useState)(!1),[u,m]=(0,s.useState)(null),[y,f]=(0,s.useState)(null),[b]=ei.A.useForm(),[j,A]=(0,s.useState)(""),{isDark:v}=ti(),S=()=>{n(!0);try{let e=G.getAllVersions();r(e)}catch(e){en.Ay.error("加载版本列表失败")}finally{n(!1)}};(0,s.useEffect)(()=>{S()},[]);let k=async()=>{try{let e=await b.validateFields(),t={name:e.name,description:e.description,tags:e.tags?e.tags.split(",").map(e=>e.trim()):[]};G.createVersion(t),en.Ay.success("版本创建成功！"),l(!1),b.resetFields(),S()}catch(e){console.error("创建版本失败:",e)}},w=[{title:"版本名称",dataIndex:"name",key:"name",render:(e,t)=>(0,i.jsxs)(el.A,{children:[(0,i.jsx)(t3,{strong:t.id===G.getCurrentVersionId(),children:e}),t.id===G.getCurrentVersionId()&&(0,i.jsx)(em.A,{color:"green",children:"当前"}),t.isAutoSaved&&(0,i.jsx)(em.A,{color:"blue",children:"自动"})]})},{title:"描述",dataIndex:"description",key:"description",ellipsis:!0,render:e=>e||"-"},{title:"标签",dataIndex:"tags",key:"tags",render:e=>(0,i.jsx)(i.Fragment,{children:null==e?void 0:e.map(e=>(0,i.jsx)(em.A,{icon:(0,i.jsx)(t1.A,{}),children:e},e))})},{title:"创建时间",dataIndex:"timestamp",key:"timestamp",render:e=>new Date(e).toLocaleString("zh-CN"),sorter:(e,t)=>e.timestamp-t.timestamp},{title:"操作",key:"action",render:(e,t)=>(0,i.jsxs)(el.A,{size:"small",children:[(0,i.jsx)(ez.A,{title:"查看详情",children:(0,i.jsx)(eo.Ay,{type:"text",icon:(0,i.jsx)(eV.A,{}),onClick:()=>{m(t),d(!0)}})}),(0,i.jsx)(ez.A,{title:"恢复此版本",children:(0,i.jsx)(eH.A,{title:"确定恢复到此版本吗？",description:"当前配置将被覆盖，建议先创建当前版本的备份。",onConfirm:()=>(e=>{n(!0);try{G.restoreVersion(e)?(en.Ay.success("版本恢复成功！页面将刷新以应用更改。"),setTimeout(()=>window.location.reload(),1500)):en.Ay.error("版本恢复失败")}catch(e){en.Ay.error("恢复版本时发生错误")}finally{n(!1)}})(t.id),okText:"确定",cancelText:"取消",children:(0,i.jsx)(eo.Ay,{type:"text",icon:(0,i.jsx)(t2.A,{}),disabled:t.id===G.getCurrentVersionId()})})}),(0,i.jsx)(ez.A,{title:"删除版本",children:(0,i.jsx)(eH.A,{title:"确定删除此版本吗？",onConfirm:()=>{var e;return e=t.id,void(G.deleteVersion(e)?(en.Ay.success("版本删除成功"),S()):en.Ay.error("版本删除失败"))},okText:"确定",cancelText:"取消",children:(0,i.jsx)(eo.Ay,{type:"text",danger:!0,icon:(0,i.jsx)(eM.A,{}),disabled:t.id===G.getCurrentVersionId()})})})]})}];return(0,i.jsxs)("div",{style:{padding:24},children:[(0,i.jsxs)(t8,{level:2,children:[(0,i.jsx)(t5.A,{})," 配置版本管理"]}),(0,i.jsx)(t9,{children:"管理网站配置的不同版本，支持创建、恢复、比较和导入导出版本。"}),(0,i.jsxs)(eh.A,{gutter:[16,16],style:{marginBottom:24},children:[(0,i.jsx)(eg.A,{span:6,children:(0,i.jsx)(ex.A,{children:(0,i.jsx)(tC.A,{title:"总版本数",value:t.length,prefix:(0,i.jsx)(tM.A,{})})})}),(0,i.jsx)(eg.A,{span:6,children:(0,i.jsx)(ex.A,{children:(0,i.jsx)(tC.A,{title:"自动保存版本",value:t.filter(e=>e.isAutoSaved).length,prefix:(0,i.jsx)(tA.A,{})})})}),(0,i.jsx)(eg.A,{span:6,children:(0,i.jsx)(ex.A,{children:(0,i.jsx)(tC.A,{title:"手动创建版本",value:t.filter(e=>!e.isAutoSaved).length,prefix:(0,i.jsx)(ty.A,{})})})}),(0,i.jsx)(eg.A,{span:6,children:(0,i.jsx)(ex.A,{children:(0,i.jsx)(tC.A,{title:"当前版本",value:G.getCurrentVersionId()?"已设置":"未设置",prefix:(0,i.jsx)(tO.A,{})})})})]}),(0,i.jsx)("div",{style:{marginBottom:16},children:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eo.Ay,{type:"primary",icon:(0,i.jsx)(ty.A,{}),onClick:()=>l(!0),children:"创建版本"}),(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(tA.A,{}),onClick:()=>{G.autoSave(),en.Ay.success("自动保存完成"),S()},children:"立即自动保存"}),(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(tk.A,{}),onClick:()=>{let e=new Blob([G.exportVersions()],{type:"application/json"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=`config_versions_${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t),en.Ay.success("版本数据导出成功")},children:"导出版本"}),(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(t4.A,{}),onClick:()=>p(!0),children:"导入版本"}),(0,i.jsx)(eo.Ay,{icon:(0,i.jsx)(eM.A,{}),onClick:()=>{let e=G.cleanupAutoSaves(5);en.Ay.success(`清理了 ${e} 个旧的自动保存版本`),S()},children:"清理自动保存"})]})}),(0,i.jsx)(ex.A,{children:(0,i.jsx)(eC.A,{columns:w,dataSource:t,rowKey:"id",loading:a,pagination:{pageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:e=>`共 ${e} 个版本`}})}),(0,i.jsx)(e$.A,{title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(ty.A,{}),"创建新版本"]}),open:o,onOk:k,onCancel:()=>{l(!1),b.resetFields()},width:600,children:(0,i.jsxs)(ei.A,{form:b,layout:"vertical",children:[(0,i.jsx)(ei.A.Item,{name:"name",label:"版本名称",rules:[{required:!0,message:"请输入版本名称"}],children:(0,i.jsx)(eb.A,{placeholder:"例如: 主页改版 v1.0"})}),(0,i.jsx)(ei.A.Item,{name:"description",label:"版本描述",children:(0,i.jsx)(t7,{rows:3,placeholder:"描述此版本的主要变更内容..."})}),(0,i.jsx)(ei.A.Item,{name:"tags",label:"标签",help:"多个标签用逗号分隔",children:(0,i.jsx)(eb.A,{placeholder:"例如: 主页,样式,功能"})})]})}),(0,i.jsx)(e$.A,{title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(eV.A,{}),"版本详情"]}),open:c,onCancel:()=>d(!1),footer:[(0,i.jsx)(eo.Ay,{onClick:()=>d(!1),children:"关闭"},"close")],width:800,children:u&&(0,i.jsxs)("div",{children:[(0,i.jsxs)(eq.A,{column:2,bordered:!0,children:[(0,i.jsx)(eq.A.Item,{label:"版本ID",children:u.id}),(0,i.jsx)(eq.A.Item,{label:"版本名称",children:u.name}),(0,i.jsx)(eq.A.Item,{label:"创建时间",children:new Date(u.timestamp).toLocaleString("zh-CN")}),(0,i.jsx)(eq.A.Item,{label:"版本类型",children:u.isAutoSaved?"自动保存":"手动创建"}),(0,i.jsx)(eq.A.Item,{label:"描述",span:2,children:u.description||"无描述"}),(0,i.jsx)(eq.A.Item,{label:"标签",span:2,children:(null==(e=u.tags)?void 0:e.map(e=>(0,i.jsx)(em.A,{children:e},e)))||"无标签"})]}),(0,i.jsx)(ec.A,{children:"配置数据预览"}),(0,i.jsx)("pre",{style:{background:v?"#1a1a1a":"#f5f5f5",color:v?"#e0e0e0":"#333",padding:"12px",borderRadius:"4px",fontSize:"12px",maxHeight:"300px",overflow:"auto"},children:JSON.stringify(u.data,null,2)})]})}),(0,i.jsxs)(e$.A,{title:(0,i.jsxs)(el.A,{children:[(0,i.jsx)(t4.A,{}),"导入版本数据"]}),open:x,onOk:()=>{j.trim()?G.importVersions(j)?(en.Ay.success("版本数据导入成功"),p(!1),A(""),S()):en.Ay.error("导入失败，请检查数据格式"):en.Ay.error("请输入导入数据")},onCancel:()=>{p(!1),A("")},width:800,children:[(0,i.jsx)(ed.A,{message:"导入说明",description:"支持选择JSON文件或直接粘贴从导出功能生成的数据。导入将覆盖现有的版本数据，请谨慎操作。",type:"warning",style:{marginBottom:16}}),(0,i.jsxs)("div",{style:{marginBottom:16},children:[(0,i.jsx)(t3,{strong:!0,children:"选择文件："}),(0,i.jsxs)("div",{style:{marginTop:8,padding:"16px",border:`2px dashed ${v?"#3a3a3a":"#d9d9d9"}`,borderRadius:"6px",textAlign:"center",background:v?"#2a2a2a":"#fafafa"},children:[(0,i.jsx)("input",{type:"file",accept:".json",onChange:e=>{var t;let r=null==(t=e.target.files)?void 0:t[0];if(!r)return;if(!r.name.endsWith(".json"))return void en.Ay.error("请选择 JSON 格式的文件");let i=new FileReader;i.onload=e=>{var t;let r=null==(t=e.target)?void 0:t.result;r&&(A(r),en.Ay.success("文件读取成功，请检查数据后点击导入"))},i.onerror=()=>{en.Ay.error("文件读取失败")},i.readAsText(r),e.target.value=""},style:{display:"none"},id:"version-file-input"}),(0,i.jsx)("label",{htmlFor:"version-file-input",style:{cursor:"pointer"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)(t6.A,{style:{fontSize:"24px",color:"#1890ff",marginBottom:"8px"}}),(0,i.jsx)("div",{style:{color:v?"#e0e0e0":"#666"},children:"点击选择 JSON 文件"}),(0,i.jsx)("div",{style:{fontSize:"12px",color:v?"#aaa":"#999",marginTop:"4px"},children:"支持从版本管理导出的 .json 文件"})]})})]})]}),(0,i.jsx)(ec.A,{children:"或"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(t3,{strong:!0,children:"直接粘贴 JSON 数据："}),(0,i.jsx)(t7,{rows:12,value:j,onChange:e=>A(e.target.value),placeholder:"请粘贴版本数据的 JSON 格式...",style:{fontFamily:"monospace",fontSize:"12px",marginTop:8}})]}),j&&(0,i.jsxs)("div",{style:{marginTop:16},children:[(0,i.jsx)(t3,{strong:!0,children:"数据预览："}),(0,i.jsx)("div",{style:{marginTop:8,background:v?"#1a1a1a":"#f5f5f5",padding:"12px",borderRadius:"6px",maxHeight:"150px",overflow:"auto"},children:(0,i.jsx)("pre",{style:{margin:0,fontSize:"11px",color:v?"#aaa":"#666"},children:(()=>{try{var e,t;let r=JSON.parse(j),i={版本数量:(null==(e=r.versions)?void 0:e.length)||0,最大版本数:r.maxVersions||"N/A",当前版本:r.currentVersionId||"无",示例版本:(null==(t=r.versions)?void 0:t[0])?{名称:r.versions[0].name,创建时间:new Date(r.versions[0].timestamp).toLocaleString("zh-CN"),是否自动保存:r.versions[0].isAutoSaved||!1}:"无"};return JSON.stringify(i,null,2)}catch{return"无效的JSON格式"}})()})})]})]})]})},rr=e=>{switch(console.log("AdminPanel",e.config),e.config){case 0:return(0,i.jsx)(t0,{});case 1:return(0,i.jsx)(tX,{});case 2:return(0,i.jsx)(e2,{});case 3:return(0,i.jsx)(rt,{});case 4:return(0,i.jsx)(eL,{});default:return(0,i.jsx)("div",{children:"未知面板"})}},ri=[{name:"链接配置面板",type:"default",value:2},{name:"主题配置面板",type:"primary",value:0},{name:"网站配置面板",type:"dashed",value:1},{name:"配置版本管理",type:"dashed",value:3},{name:"Ant Design 展示",type:"link",value:4}],rs=e=>{let{visibleAdmin:t,setIsShowAdmin:r,setVisibleAdmin:s,setToConfig:a,isShowAdmin:n}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e$.A,{title:"选择管理面板",footer:[(0,i.jsx)(eo.Ay,{style:{display:t?"":"none"},onClick:()=>{r(!1),s(!1)},children:"退出面板"},"back")],open:n,onCancel:()=>r(!1),width:800,children:(0,i.jsx)(eh.A,{gutter:[16,16],children:ri.map((e,t)=>(0,i.jsx)(eg.A,{span:12,children:(0,i.jsx)(ex.A,{hoverable:!0,onClick:()=>{switch(console.log("toAdmin",e),e.value){case 2:a(2);break;case 0:a(0);break;case 1:a(1);break;case 4:a(4);break;case 3:a(3);break;default:s(!0)}s(!0),r(!1)},style:{height:"120px",cursor:"pointer"},children:(0,i.jsxs)(el.A,{orientation:"vertical",align:"center",style:{width:"100%"},children:[(0,i.jsx)("div",{style:{fontSize:"24px",color:"#1890ff"},children:(e=>{switch(e){case 2:return(0,i.jsx)(eG.A,{});case 0:return(0,i.jsx)(td.A,{});case 1:return(0,i.jsx)(tK.A,{});case 4:return(0,i.jsx)(ee.A,{});case 3:return(0,i.jsx)(t5.A,{});default:return null}})(e.value)}),(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:e.name}),(0,i.jsx)("div",{style:{fontSize:"12px",color:"#666"},children:(e=>{switch(e){case 2:return"管理链接分类和搜索引擎配置";case 0:return"自定义主题风格和外观设置";case 1:return"网站基本信息和SEO配置";case 4:return"查看Ant Design组件展示";case 3:return"管理配置版本，支持创建、恢复和比较";default:return""}})(e.value)})]})]})})},t))})})})};var ra=r(5499);let rn=(0,ra.i7)`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,ro=(0,ra.i7)`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;n.A.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${e=>{var t,r;return(null==(t=e.theme)?void 0:t.id)==="custom"&&(null==(r=e.theme)?void 0:r.name)==="暗黑主题"?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)"}};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${rn} 0.5s ease-out;
`,n.A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,n.A.div`
  width: 60px;
  height: 60px;
  border: 4px solid ${e=>{var t,r;return(null==(t=e.theme)?void 0:t.id)==="custom"&&(null==(r=e.theme)?void 0:r.name)==="暗黑主题"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}};
  border-top: 4px solid #4a90e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,n.A.div`
  color: ${e=>{var t,r;return(null==(t=e.theme)?void 0:t.id)==="custom"&&(null==(r=e.theme)?void 0:r.name)==="暗黑主题"?"#ffffff":"#2c3e50"}};
  font-size: 1.1rem;
  font-weight: 500;
  animation: ${ro} 2s ease-in-out infinite;
  text-align: center;
  max-width: 300px;
`,n.A.div`
  font-size: 3rem;
  animation: ${ro} 1.5s ease-in-out infinite;
  margin-bottom: 1rem;
`;let rl=e=>{let{initialPosition:t,onPositionChange:r,onDock:a,onUndock:n,docked:o=!1,dockPosition:l=null,collapsed:c=!1,onCollapseToggle:d,visible:h=!0,onVisibleToggle:g,children:x,title:p="待办清单",hasUncompletedTasks:u=!1}=e,{isDark:m}=ti(),[y,f]=(0,s.useState)(t),[A,v]=(0,s.useState)(!1),k=(0,s.useRef)(null),[w,C]=(0,s.useState)(null),I=(0,s.useRef)({x:0,y:0}),E=(0,s.useRef)(t),z=(0,s.useRef)(!1);(0,s.useEffect)(()=>{E.current=y},[y]),(0,s.useEffect)(()=>{z.current||(f(t),E.current=t,z.current=!0)},[t]);let D=(0,s.useCallback)(e=>{var t;if(c)return;e.preventDefault(),o&&(null==n||n());let r=null==(t=k.current)?void 0:t.getBoundingClientRect();if(!r)return;I.current={x:e.clientX-r.left,y:e.clientY-r.top};let i=r.left,s=r.top;f({x:i,y:s}),E.current={x:i,y:s},v(!0)},[c,o,n]),B=(0,s.useCallback)(e=>{if(!k.current)return;let t=I.current,r=e.clientX-t.x,i=e.clientY-t.y,s=window.innerWidth-300,a=window.innerHeight-40,n={x:r=Math.max(0,Math.min(r,s)),y:i=Math.max(0,Math.min(i,a))};f(n),E.current=n},[]),$=(0,s.useCallback)(()=>{v(!1);let e=E.current;e.x<=50?null==a||a("left"):e.x>=window.innerWidth-300-50?null==a||a("right"):e.y<=50?null==a||a("top"):null==n||n(),null==r||r(e.x,e.y)},[a,n,r]);if((0,s.useEffect)(()=>{if(A)return window.addEventListener("mousemove",B),window.addEventListener("mouseup",$),()=>{window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",$)}},[A,B,$]),(0,s.useEffect)(()=>()=>{w&&clearTimeout(w)},[w]),!h)return null;let _={position:"fixed",...(()=>{if(A||!o||!l)return{left:y.x,top:y.y,width:300,right:"auto",transform:"none"};switch(l){case"left":return{left:0,top:y.y,width:300,right:"auto",transform:"none"};case"right":return{right:0,top:y.y,width:300,left:"auto",transform:"none"};case"top":return{left:y.x,top:0,width:300,right:"auto",transform:"none"};default:return{left:y.x,top:y.y,width:300,right:"auto",transform:"none"}}})(),minHeight:c?40:400,maxHeight:"80vh",background:m?j.background:b.background,borderRadius:c?"right"===l?"8px 0 0 8px":"left"===l?"0 8px 8px 0":"8px 8px 0 0":S,boxShadow:T,zIndex:9999,display:"flex",flexDirection:"column",overflow:"visible",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",opacity:A?.8:1,transition:A?"opacity 0.1s ease":"all 0.3s ease",cursor:A?"grabbing":"default",willChange:A?"left, top":"auto"},O={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",background:m?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.03)",cursor:c?"pointer":"grab",userSelect:"none",borderBottom:c?"none":`1px solid ${m?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)"}`},P={fontSize:"14px",fontWeight:600,color:m?j.text.primary:b.text.primary};return(0,i.jsxs)("div",{ref:k,style:_,onMouseLeave:()=>{o&&!c&&C(setTimeout(()=>{null==d||d(!0)},3e3))},onMouseEnter:()=>{w&&(clearTimeout(w),C(null))},children:[(0,i.jsxs)("div",{style:O,onMouseDown:D,onClick:()=>{c&&(null==d||d(!1))},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,i.jsx)("span",{style:P,children:p}),u&&(0,i.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#ff4d4f",boxShadow:"0 0 0 2px rgba(255, 77, 79, 0.2)"}})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,i.jsx)("button",{onClick:e=>{e.stopPropagation(),null==d||d(!c)},style:{background:"none",border:"none",cursor:"pointer",padding:"4px",fontSize:"16px",color:m?j.text.secondary:b.text.secondary},children:c?"▶":"▼"}),(0,i.jsx)("button",{onClick:e=>{e.stopPropagation(),null==g||g(!1)},style:{background:"none",border:"none",cursor:"pointer",padding:"4px",fontSize:"16px",color:m?j.text.secondary:b.text.secondary},children:"\xd7"})]})]}),(0,i.jsx)("div",{style:{flex:1,overflow:"visible",display:c?"none":"block"},children:x})]})};var rc=r(790),rd=r(3505),rh=r(4999);let{TextArea:rg}=eb.A,{Option:rx}=er.A,rp={high:"#ff4d4f",medium:"#faad14",low:"#52c41a"},ru={high:"高",medium:"中",low:"低"},rm={work:"工作",life:"生活",study:"学习"},ry=(0,ra.i7)`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,rf=(0,ra.i7)`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`,rb=e=>{let{todo:t,onToggleComplete:r,onUpdate:a,onDelete:n}=e,{isDark:o}=ti(),[l,c]=(0,s.useState)(!1),[d,h]=(0,s.useState)(t.content),[g,x]=(0,s.useState)(!1),p=t.dueDate&&new Date(t.dueDate)<new Date&&!t.completed;(0,s.useEffect)(()=>{x(!0)},[]);let u={padding:"12px 16px",borderBottom:`1px solid ${o?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"}`,display:"flex",flexDirection:"column",gap:"8px",background:p?o?"rgba(255, 77, 79, 0.1)":"rgba(255, 77, 79, 0.05)":"transparent",transition:"background 0.2s ease",opacity:+!!g,animation:g?`${ry} 0.3s ease-out`:`${rf} 0.3s ease-in`},m={display:"flex",alignItems:"center",gap:"12px"},y={flex:1,fontSize:"14px",color:t.completed?o?"rgba(255,255,255,0.4)":"rgba(0,0,0,0.4)":o?j.text.primary:b.text.primary,textDecoration:t.completed?"line-through":"none",wordBreak:"break-word"},f={fontSize:"11px",padding:"2px 8px",borderRadius:"10px",background:rp[t.priority],color:"#fff",fontWeight:500},A={fontSize:"11px",padding:"2px 8px",borderRadius:"10px",background:o?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)",color:o?j.text.secondary:b.text.secondary},v={fontSize:"12px",color:p?"#ff4d4f":o?j.text.secondary:b.text.secondary},S=()=>{d.trim()&&(a(t.id,{content:d.trim()}),c(!1))},k=()=>{h(t.content),c(!1)};return(0,i.jsxs)("div",{style:u,onDoubleClick:()=>c(!0),children:[(0,i.jsxs)("div",{style:m,children:[(0,i.jsx)(ek.A,{checked:t.completed,onChange:()=>r(t.id)}),l?(0,i.jsxs)("div",{style:{flex:1,display:"flex",gap:"8px",alignItems:"center"},children:[(0,i.jsx)(rg,{value:d,onChange:e=>h(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||S(),"Escape"===e.key&&k()},autoSize:{minRows:1,maxRows:4},autoFocus:!0,variant:"borderless",style:{flex:1}}),(0,i.jsx)(ez.A,{title:"保存",children:(0,i.jsx)(eo.Ay,{type:"text",icon:(0,i.jsx)(tB.A,{}),size:"small",onClick:S})}),(0,i.jsx)(ez.A,{title:"取消",children:(0,i.jsx)(eo.Ay,{type:"text",icon:(0,i.jsx)(rh.A,{}),size:"small",onClick:k})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{style:y,children:t.content}),(0,i.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[(0,i.jsx)(ez.A,{title:"编辑",children:(0,i.jsx)(eo.Ay,{type:"text",icon:(0,i.jsx)(eK.A,{}),size:"small",onClick:()=>c(!0),style:{color:o?j.text.secondary:b.text.secondary}})}),(0,i.jsx)(ez.A,{title:"删除",children:(0,i.jsx)(eo.Ay,{type:"text",icon:(0,i.jsx)(eM.A,{}),size:"small",onClick:()=>n(t.id),danger:!0})})]})]})]}),(0,i.jsxs)("div",{style:{...m,paddingLeft:"28px"},children:[(0,i.jsx)("span",{style:f,children:ru[t.priority]}),(0,i.jsx)("span",{style:A,children:rm[t.category]}),t.dueDate&&(0,i.jsxs)("span",{style:v,children:[p?"⚠️ ":"","截止: ",new Date(t.dueDate).toLocaleDateString()]})]})]})},{TextArea:rj}=eb.A,{Option:rA}=er.A,{TabPane:rv}=eB.A,rS=[{key:"all",label:"全部"},{key:"work",label:"工作"},{key:"life",label:"生活"},{key:"study",label:"学习"}],rk=e=>{let{todos:t,currentCategory:r,onAddTodo:a,onUpdateTodo:n,onDeleteTodo:o,onToggleComplete:l,onCategoryChange:c,onClearCompleted:d,onToggleAllComplete:h,onExport:g}=e,{isDark:x}=ti(),[p,u]=(0,s.useState)(""),[m,y]=(0,s.useState)("medium"),[f,A]=(0,s.useState)("work"),[v,S]=(0,s.useState)(),[k,w]=(0,s.useState)(!1);(0,s.useEffect)(()=>{console.log("=== TodoList 调试信息 ==="),console.log("Priority 值:",m),console.log("Category 值:",f),console.log("可用 Priority 选项:",["high","medium","low"]),console.log("可用 Category 选项:",["work","life","study"])},[m,f]);let C="all"===r?t:t.filter(e=>e.category===r),I=(0,s.useCallback)(()=>{p.trim()&&(a(p.trim(),m,f,v),u(""),S(void 0))},[p,m,f,v,a]),T=(0,s.useCallback)(e=>{"Enter"===e.key&&I()},[I]),E=(0,s.useCallback)(()=>{e$.A.confirm({title:"确认清空已完成任务",content:"确定要清空所有已完成的任务吗？此操作不可撤销。",okText:"确定",cancelText:"取消",onOk:()=>{d(),en.Ay.success("已清空已完成任务")}})},[d]),z={padding:"16px",borderBottom:`1px solid ${x?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"}`},D={padding:"12px 16px",display:"flex",justifyContent:"space-between",borderTop:`1px solid ${x?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"}`,background:x?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)"},B={padding:"40px 20px",textAlign:"center",color:x?j.text.secondary:b.text.secondary,fontSize:"14px"};return(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,i.jsxs)("div",{style:z,children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:[(0,i.jsx)(rj,{placeholder:"添加新待办...",value:p,onChange:e=>u(e.target.value),onKeyDown:T,autoSize:{minRows:1,maxRows:3},style:{flex:1}}),(0,i.jsx)(ez.A,{title:"添加",children:(0,i.jsx)(eo.Ay,{type:"primary",icon:(0,i.jsx)(eN.A,{}),onClick:I})})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",position:"relative",zIndex:1e4},children:[(0,i.jsxs)(er.A,{value:m,onChange:e=>{console.log("Priority Select 变化:",e),y(e)},style:{width:80},size:"small",popupMatchSelectWidth:!1,getPopupContainer:()=>document.body,onDropdownVisibleChange:e=>{console.log("Priority 下拉菜单可见:",e)},onClick:()=>{console.log("Priority Select 被点击")},children:[(0,i.jsx)(rA,{value:"high",children:"高"}),(0,i.jsx)(rA,{value:"medium",children:"中"}),(0,i.jsx)(rA,{value:"low",children:"低"})]}),(0,i.jsxs)(er.A,{value:f,onChange:e=>{console.log("Category Select 变化:",e),A(e)},style:{width:80},size:"small",popupMatchSelectWidth:!1,getPopupContainer:()=>document.body,onDropdownVisibleChange:e=>{console.log("Category 下拉菜单可见:",e)},onClick:()=>{console.log("Category Select 被点击")},children:[(0,i.jsx)(rA,{value:"work",children:"工作"}),(0,i.jsx)(rA,{value:"life",children:"生活"}),(0,i.jsx)(rA,{value:"study",children:"学习"})]}),(0,i.jsx)(ej.A,{placeholder:"截止日期",onChange:e=>{console.log("DatePicker 变化:",e),S(null==e?void 0:e.toISOString())},allowClear:!0,size:"small",style:{width:120},getPopupContainer:()=>document.body,onOpenChange:e=>{console.log("DatePicker 打开:",e)},onClick:()=>{console.log("DatePicker 被点击")}})]})]}),(0,i.jsx)(eB.A,{activeKey:r,onChange:e=>c(e),style:{padding:"0 16px"},size:"small",children:rS.map(e=>(0,i.jsx)(rv,{tab:e.label},e.key))}),(0,i.jsx)("div",{style:{flex:1,overflow:"auto"},children:0===C.length?(0,i.jsx)("div",{style:B,children:"暂无待办任务"}):C.map(e=>(0,i.jsx)(rb,{todo:e,onToggleComplete:l,onUpdate:n,onDelete:o},e.id))}),(0,i.jsxs)("div",{style:D,children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,i.jsx)(ez.A,{title:"全部标记完成",children:(0,i.jsx)(eo.Ay,{size:"small",icon:(0,i.jsx)(rc.A,{}),onClick:()=>h(!0)})}),(0,i.jsx)(ez.A,{title:"全部取消完成",children:(0,i.jsx)(eo.Ay,{size:"small",icon:(0,i.jsx)(rd.A,{}),onClick:()=>h(!1)})}),(0,i.jsx)(ez.A,{title:"清空已完成",children:(0,i.jsx)(eo.Ay,{size:"small",icon:(0,i.jsx)(eU.A,{}),onClick:E})})]}),(0,i.jsx)(ez.A,{title:"导出待办",children:(0,i.jsx)(eo.Ay,{size:"small",icon:(0,i.jsx)(tJ.A,{}),onClick:g})})]})]})},rw=new class{getPreferredStorageType(){try{let e=localStorage.getItem("app_storage_type");if("localStorage"===e||"indexedDB"===e||"auto"===e)return e}catch{}return"auto"}getFromLocalStorage(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(e){return console.error(`Error reading from localStorage: ${e}`),null}}saveToLocalStorage(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(`Error saving to localStorage: ${e}`)}}async saveToStorage(e,t){this.saveToLocalStorage(e,t);try{await this.storage.set(e,t)}catch(t){console.error(`Failed to save ${e} to storage:`,t)}}saveSync(e,t){this.saveToLocalStorage(e,t),this.saveToStorage(e,t).catch(console.error)}saveTodos(){this.saveSync(this.TODO_KEY,this.state.todos)}saveState(){this.saveSync(this.TODO_STATE_KEY,{panelPosition:this.state.panelPosition,panelDocked:this.state.panelDocked,panelDockPosition:this.state.panelDockPosition,panelCollapsed:this.state.panelCollapsed,panelVisible:this.state.panelVisible,currentCategory:this.state.currentCategory})}async initialize(){if(!this.initialized)try{let[e,t]=await Promise.all([this.storage.get(this.TODO_KEY),this.storage.get(this.TODO_STATE_KEY)]);e&&(this.state.todos=e),t&&Object.assign(this.state,t),this.initialized=!0}catch(e){console.error("Failed to initialize TodoManager:",e),this.initialized=!0}}async waitForInit(){this.initPromise&&await this.initPromise}addTodo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"medium",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"work",i=arguments.length>3?arguments[3]:void 0,s=this.state.todos.length?Math.max(...this.state.todos.map(e=>e.id))+1:1,a=this.state.todos.length?Math.max(...this.state.todos.map(e=>e.order))+1:0,n={id:s,content:e,priority:t,category:r,dueDate:i,createdAt:new Date().toISOString(),completed:!1,order:a};return this.state.todos.push(n),this.saveTodos(),n}updateTodo(e,t){let r=this.state.todos.find(t=>t.id===e);return!!r&&(Object.assign(r,t),this.saveTodos(),!0)}deleteTodo(e){let t=this.state.todos.findIndex(t=>t.id===e);return -1!==t&&(this.state.todos.splice(t,1),this.saveTodos(),!0)}toggleComplete(e){let t=this.state.todos.find(t=>t.id===e);return!!t&&(t.completed=!t.completed,this.saveTodos(),!0)}getAllTodos(){return[...this.state.todos].sort((e,t)=>e.order-t.order)}getTodosByCategory(e){return("all"===e?this.getAllTodos():this.getAllTodos().filter(t=>t.category===e)).sort((e,t)=>e.order-t.order)}getTodoById(e){return this.state.todos.find(t=>t.id===e)}reorderTodos(e){let t=new Map(this.state.todos.map(e=>[e.id,e]));for(let r=0;r<e.length;r++){let i=t.get(e[r]);i&&(i.order=r)}return this.saveTodos(),!0}clearCompleted(){let e=this.state.todos.length;return this.state.todos=this.state.todos.filter(e=>!e.completed),this.saveTodos(),e-this.state.todos.length}toggleAllComplete(e){let t=0;return this.state.todos.forEach(r=>{r.completed!==e&&(r.completed=e,t++)}),this.saveTodos(),t}exportToText(){let e=this.getAllTodos();if(0===e.length)return"# 待办清单\n\n暂无待办";let t={work:"工作",life:"生活",study:"学习"},r={high:"高",medium:"中",low:"低"},i="# 待办清单\n\n";i+=`**生成时间**: ${new Date().toLocaleString()}

---

`;let s=e.filter(e=>e.completed),a=e.filter(e=>!e.completed);return a.length>0&&(i+=`## 未完成 (${a.length})

`,a.forEach(e=>{i+=`- [ ] **${e.content}**  - 分类: ${t[e.category]}  - 优先级: ${r[e.priority]}`,e.dueDate&&(i+=`  - 截止: ${new Date(e.dueDate).toLocaleDateString()}`),i+="\n"}),i+="\n"),s.length>0&&(i+=`## 已完成 (${s.length})

`,s.forEach(e=>{i+=`- [x] ${e.content}  - 分类: ${t[e.category]}
`})),i}getState(){return{...this.state}}setPanelPosition(e,t){this.state.panelPosition={x:e,y:t},this.state.panelDocked=!1,this.state.panelDockPosition=null,this.saveState()}setPanelDocked(e){this.state.panelDocked=!0,this.state.panelDockPosition=e,this.saveState()}setPanelUndocked(){this.state.panelDocked=!1,this.state.panelDockPosition=null,this.saveState()}setPanelCollapsed(e){this.state.panelCollapsed=e,this.saveState()}setPanelVisible(e){this.state.panelVisible=e,this.saveState()}setCurrentCategory(e){this.state.currentCategory=e,this.saveState()}async clearAllData(){this.state.todos=[],this.state.currentCategory="all",this.saveTodos(),this.saveState(),localStorage.removeItem(this.TODO_KEY),localStorage.removeItem(this.TODO_STATE_KEY),await Promise.all([this.storage.remove(this.TODO_KEY),this.storage.remove(this.TODO_STATE_KEY)])}constructor(){(0,B._)(this,"state",void 0),(0,B._)(this,"TODO_KEY","turnip_todo_items"),(0,B._)(this,"TODO_STATE_KEY","turnip_todo_state"),(0,B._)(this,"storage",void 0),(0,B._)(this,"initialized",!1),(0,B._)(this,"initPromise",null);const e=this.getPreferredStorageType();this.storage=new P(e);const t={todos:[],currentCategory:"all",panelPosition:{x:window.innerWidth-320,y:100},panelDocked:!1,panelDockPosition:null,panelCollapsed:!0,panelVisible:!0},r=this.getFromLocalStorage(this.TODO_KEY),i=this.getFromLocalStorage(this.TODO_STATE_KEY);this.state={...t,...i||{},todos:r||[]},r||this.saveToLocalStorage(this.TODO_KEY,this.state.todos),i||this.saveToLocalStorage(this.TODO_STATE_KEY,{panelPosition:this.state.panelPosition,panelDocked:this.state.panelDocked,panelDockPosition:this.state.panelDockPosition,panelCollapsed:this.state.panelCollapsed,panelVisible:this.state.panelVisible,currentCategory:this.state.currentCategory}),this.initPromise=this.initialize()}},rC=e=>{let{visible:t,onVisibleChange:r}=e,[a,n]=(0,s.useState)(()=>rw.getState()),[o,l]=(0,s.useState)(!1);(0,s.useEffect)(()=>{(async()=>{await rw.waitForInit(),n(rw.getState()),l(!0)})()},[]),(0,s.useEffect)(()=>{void 0!==t&&t!==a.panelVisible&&(rw.setPanelVisible(t),n(rw.getState()))},[t,a.panelVisible]);let c=(0,s.useCallback)(()=>{n(rw.getState())},[]),d=(0,s.useCallback)(e=>{rw.setPanelVisible(e),c(),null==r||r(e)},[c,r]),h=(0,s.useCallback)((e,t,r,i)=>{rw.addTodo(e,t,r,i),c(),en.Ay.success("已添加待办")},[c]),g=(0,s.useCallback)((e,t)=>{rw.updateTodo(e,t),c()},[c]),x=(0,s.useCallback)(e=>{rw.deleteTodo(e),c(),en.Ay.success("已删除待办")},[c]),p=(0,s.useCallback)(e=>{rw.toggleComplete(e),c()},[c]),u=(0,s.useCallback)(e=>{rw.setCurrentCategory(e),c()},[c]),m=(0,s.useCallback)(()=>{rw.clearCompleted(),c()},[c]),y=(0,s.useCallback)(e=>{let t=rw.toggleAllComplete(e);c(),en.Ay.success(e?`已标记 ${t} 个任务为完成`:`已取消 ${t} 个任务的完成状态`)},[c]),f=(0,s.useCallback)(()=>{let e=new Blob([rw.exportToText()],{type:"text/markdown;charset=utf-8"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=`待办清单_${new Date().toLocaleDateString()}.md`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t),en.Ay.success("已导出待办清单")},[]),b=(0,s.useCallback)((e,t)=>{rw.setPanelPosition(e,t)},[]),j=(0,s.useCallback)(e=>{rw.setPanelDocked(e),c()},[c]),A=(0,s.useCallback)(()=>{rw.setPanelUndocked(),c()},[c]),v=(0,s.useCallback)(e=>{rw.setPanelCollapsed(e),c()},[c]);if((0,s.useEffect)(()=>{let e=e=>{if("Enter"===e.key&&!e.shiftKey,(e.ctrlKey||e.metaKey)&&"d"===e.key){e.preventDefault();let t=a.todos.find(e=>!e.completed);t&&p(t.id)}"Escape"===e.key&&v(!0)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[a.todos,p,v]),!o)return null;let S=a.todos.some(e=>!e.completed);return(0,i.jsx)(rl,{initialPosition:a.panelPosition,onPositionChange:b,onDock:j,onUndock:A,docked:a.panelDocked,dockPosition:a.panelDockPosition,collapsed:a.panelCollapsed,onCollapseToggle:v,visible:a.panelVisible,onVisibleToggle:d,title:"待办清单",hasUncompletedTasks:S,children:(0,i.jsx)(rk,{todos:a.todos,currentCategory:a.currentCategory,onAddTodo:h,onUpdateTodo:g,onDeleteTodo:x,onToggleComplete:p,onCategoryChange:u,onClearCompleted:m,onToggleAllComplete:y,onExport:f})})};var rI=r(6656);let{Search:rT}=eb.A,rE=e=>{var t;let{searchEngines:r}=e,{isDark:a}=ti(),[n,o]=(0,s.useState)(""),[l,c]=(0,s.useState)((null==(t=r[0])?void 0:t.id)||"google"),d=(0,s.useCallback)(()=>{if(!n.trim())return;let e=r.find(e=>e.id===l);e&&window.open(e.url+encodeURIComponent(n.trim()),"_blank")},[n,l,r]),h=(0,s.useCallback)(e=>{"Enter"===e.key&&d()},[d]),g=r.map(e=>({value:e.id,label:(0,i.jsxs)("span",{children:[e.icon," ",e.name]})})),x={display:"flex",gap:"12px",width:"100%",alignItems:"center",background:a?j.background:b.background,borderRadius:k,padding:"8px 12px",boxShadow:I,backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"};return(0,i.jsxs)("div",{style:{margin:"2rem auto 3rem",maxWidth:"700px",width:"100%",animation:"searchFadeIn 0.8s ease-out 0.3s both"},children:[(0,i.jsx)("style",{children:`
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
            .search-bar-container {
              flex-direction: column;
              gap: 12px;
            }
          }
        `}),(0,i.jsxs)("div",{style:x,className:"search-bar-container",children:[(0,i.jsx)(er.A,{value:l,onChange:c,options:g,style:{minWidth:140},size:"large",variant:"borderless"}),(0,i.jsx)(eb.A,{placeholder:"输入搜索内容...",value:n,onChange:e=>o(e.target.value),onKeyPress:h,size:"large",variant:"borderless",style:{flex:1}}),(0,i.jsx)(eo.Ay,{type:"primary",icon:(0,i.jsx)(rI.A,{}),size:"large",onClick:d,style:{borderRadius:S,minWidth:"100px"},children:"搜索"})]})]})};var rz=r(5231),rD=r(5181);let{Title:rB,Text:r$}=et.A,r_=s.memo(function(e){let{link:t,isDark:r,onToggleFavorite:s,originalCategoryId:a}=e,n={textAlign:"center",height:"100%",minHeight:"7.5rem",borderRadius:S,background:r?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.8)",border:`1px solid ${r?"rgba(255, 255, 255, 0.1)":"rgba(255, 255, 255, 0.3)"}`,backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",transition:"all 0.3s ease"};return(0,i.jsxs)(ex.A,{hoverable:!0,style:n,styles:{body:{padding:"1.5rem 1rem"}},onMouseEnter:e=>{let t=e.currentTarget;t.style.transform="translateY(-0.25rem) scale(1.02)",t.style.boxShadow=r?"0 0.75rem 2rem rgba(255, 255, 255, 0.1), 0 0.25rem 1rem rgba(0, 0, 0, 0.1)":"0 0.75rem 2rem rgba(74, 144, 226, 0.15), 0 0.25rem 1rem rgba(0, 0, 0, 0.1)",t.style.background=r?"rgba(255, 255, 255, 0.12)":"rgba(255, 255, 255, 0.95)"},onMouseLeave:e=>{let t=e.currentTarget;t.style.transform="translateY(0) scale(1)",t.style.boxShadow="none",t.style.background=r?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.8)"},onClick:e=>{window.open(t.url,"_blank","noopener noreferrer")},actions:[(0,i.jsx)(eH.A,{title:t.favorite?"取消收藏此链接？":"收藏此链接？",onConfirm:e=>{e.stopPropagation(),s(a,t.id)},okText:"确定",cancelText:"取消",children:(0,i.jsx)("span",{onClick:e=>{e.stopPropagation()},children:t.favorite?(0,i.jsx)(rz.A,{style:{color:"#ff4d4f",fontSize:"16px",cursor:"pointer"}}):(0,i.jsx)(Z.A,{style:{color:r?"rgba(255, 255, 255, 0.6)":"#999",fontSize:"16px",cursor:"pointer"}})})},"favorite")],children:[(0,i.jsx)("span",{style:{fontSize:"2.5rem",marginBottom:"0.75rem",display:"block",filter:"drop-shadow(0 0.125rem 0.25rem rgba(0, 0, 0, 0.1))"},children:t.icon}),(0,i.jsx)(r$,{style:{color:r?"rgba(255, 255, 255, 0.9)":"#555555",fontWeight:500},children:t.name})]})});r_.displayName="LinkCard";let rO=e=>{let{category:t,isDark:r,animationDelay:s,onToggleFavorite:a,originalCategoryId:n}=e,o={margin:"2.5rem 0",animation:`categoryFadeIn 0.8s ease-out ${s} both`},l={color:r?"#ffffff":"#2c3e50",fontSize:"1.4rem",fontWeight:700,marginBottom:"1.5rem",padding:"0.75rem 1rem",background:r?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.6)",borderRadius:v,borderLeft:`0.25rem solid ${x}`,backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"};return(0,i.jsxs)("section",{style:o,children:[(0,i.jsx)("style",{children:`
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
          `}),(0,i.jsxs)("div",{style:l,children:[(0,i.jsx)(eY.A,{style:{marginRight:"8px"}}),t.name]}),(0,i.jsx)(eh.A,{gutter:[16,16],children:t.links.map(e=>(0,i.jsx)(eg.A,{xs:12,sm:8,md:6,lg:4,xl:3,children:(0,i.jsx)(r_,{link:e,isDark:r,onToggleFavorite:a,originalCategoryId:n})},e.id))})]})},rP=e=>{let{categories:t,onToggleFavorite:r}=e,{isDark:a}=ti(),n=(0,s.useMemo)(()=>[...t].sort((e,t)=>e.id-t.id),[t]),o=(e,t)=>{r&&r(e,t)};if(!(t.length>0))return(0,i.jsx)(rD.A,{description:"暂无链接分类",style:{margin:"40px 0"}});let l=(0,s.useMemo)(()=>{let e=[];return t.forEach(t=>{t.links.forEach(r=>{if(r.favorite){let i={...r,originalCategoryId:void 0!==r.originalCategoryId?r.originalCategoryId:t.id};e.push(i)}})}),e},[t]);return(0,i.jsxs)(i.Fragment,{children:[l.length>0&&(0,i.jsxs)("section",{style:{margin:"2.5rem 0",animation:"categoryFadeIn 0.8s ease-out 0.5s both"},children:[(0,i.jsx)("style",{children:`
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
              `}),(0,i.jsxs)("div",{style:{color:a?"#ffffff":"#2c3e50",fontSize:"1.4rem",fontWeight:700,marginBottom:"1.5rem",padding:"0.75rem 1rem",background:a?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.6)",borderRadius:v,borderLeft:`0.25rem solid ${x}`,backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"},children:[(0,i.jsx)(X.A,{style:{marginRight:"8px"}}),"收藏"]}),(0,i.jsx)(eh.A,{gutter:[16,16],children:l.map(e=>(0,i.jsx)(eg.A,{xs:12,sm:8,md:6,lg:4,xl:3,children:(0,i.jsx)(r_,{link:e,isDark:a,onToggleFavorite:(t,r)=>{o(void 0!==e.originalCategoryId?e.originalCategoryId:t,r)},originalCategoryId:void 0!==e.originalCategoryId?e.originalCategoryId:-1})},e.id))})]}),n.map((e,t)=>(0,i.jsx)(rO,{category:e,isDark:a,animationDelay:`${.6+.1*t}s`,onToggleFavorite:o,originalCategoryId:e.id},e.id))]})},{Text:rF}=et.A;var rR=r(4425),rL=r(5654);let{Text:rN}=et.A,rY=e=>{let{text:t="正在加载精彩内容..."}=e,{isDark:r}=ti();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
          }
        `}),(0,i.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:r?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:9999,animation:"fadeIn 0.5s ease-out"},children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem"},children:[(0,i.jsx)("span",{style:{fontSize:"3rem",animation:"pulse 1.5s ease-in-out infinite"},children:"\uD83D\uDE80"}),(0,i.jsx)(rL.A,{indicator:(0,i.jsx)(rR.A,{style:{fontSize:48},spin:!0}),size:"large"}),(0,i.jsx)(rN,{style:{color:r?"#ffffff":"#2c3e50",fontSize:"1.1rem",fontWeight:500,textAlign:"center",maxWidth:"300px"},children:t})]})})]})},rV=e=>{let{initialPosition:t,onPositionChange:r,children:a,style:n,zIndex:o=1e3,storageKey:l}=e,c={x:"function"==typeof t.x?t.x():t.x,y:"function"==typeof t.y?t.y():t.y},[d,h]=(0,s.useState)(()=>l?function(e,t){try{let r=localStorage.getItem(e);if(!r)return t;let i=JSON.parse(r);if(i&&"number"==typeof i.x&&"number"==typeof i.y)return i}catch{}return t}(l,c):c),[g,x]=(0,s.useState)(!1),p=(0,s.useRef)(null),u=(0,s.useRef)({x:0,y:0}),m=(0,s.useRef)(d),y=(0,s.useRef)(null),f=(0,s.useRef)(!1);(0,s.useEffect)(()=>{m.current=d},[d]),(0,s.useEffect)(()=>{if(l)try{localStorage.setItem(l,JSON.stringify(d))}catch{}},[l,d]);let b=(0,s.useCallback)(e=>{var t;e.preventDefault(),e.stopPropagation(),y.current={x:e.clientX,y:e.clientY},f.current=!1;let r=null==(t=p.current)?void 0:t.getBoundingClientRect();r&&(u.current={x:e.clientX-r.left,y:e.clientY-r.top},h({x:r.left,y:r.top}),m.current={x:r.left,y:r.top},x(!0))},[]),j=(0,s.useCallback)(e=>{var t,r;if(!p.current||!y.current)return;let i=Math.abs(e.clientX-y.current.x),s=Math.abs(e.clientY-y.current.y);(i>5||s>5)&&(f.current=!0);let a=u.current,n=e.clientX-a.x,o=e.clientY-a.y,l={x:n=Math.max(0,Math.min(n,window.innerWidth-((null==(t=p.current)?void 0:t.offsetWidth)||200))),y:o=Math.max(0,Math.min(o,window.innerHeight-((null==(r=p.current)?void 0:r.offsetHeight)||50)))};h(l),m.current=l},[]),A=(0,s.useCallback)(()=>{x(!1),y.current=null,null==r||r(m.current.x,m.current.y)},[r]),v=(0,s.useCallback)(e=>{f.current&&(e.stopPropagation(),e.preventDefault(),f.current=!1)},[]);(0,s.useEffect)(()=>{if(g)return window.addEventListener("mousemove",j),window.addEventListener("mouseup",A),()=>{window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",A)}},[g,j,A]);let S={position:"fixed",left:d.x,top:d.y,zIndex:o,cursor:g?"grabbing":"grab",opacity:g?.85:1,transition:g?"opacity 0.1s ease":"all 0.3s ease",willChange:g?"left, top":"auto",userSelect:"none",...n};return(0,i.jsx)("div",{ref:p,style:S,onMouseDown:b,onClickCapture:v,children:a})},{Text:rK}=et.A,rM=e=>{let t,r,a,n,o,l,{initialPosition:c={x:()=>window.innerWidth-150,y:16},onPositionChange:d}=e,{isDark:h}=ti(),[g,x]=(0,s.useState)(new Date),[p,u]=(0,s.useState)(()=>({x:"function"==typeof c.x?c.x():c.x,y:"function"==typeof c.y?c.y():c.y}));(0,s.useEffect)(()=>{let e=setInterval(()=>x(new Date),1e3);return()=>clearInterval(e)},[]);let{date:m,time:y}=(t=g.getFullYear(),r=String(g.getMonth()+1).padStart(2,"0"),a=String(g.getDate()).padStart(2,"0"),n=String(g.getHours()).padStart(2,"0"),o=String(g.getMinutes()).padStart(2,"0"),l=String(g.getSeconds()).padStart(2,"0"),{date:`${t}-${r}-${a}`,time:`${n}:${o}:${l}`}),f={background:h?"rgba(0, 0, 0, 0.6)":"rgba(255, 255, 255, 0.9)",borderRadius:v,boxShadow:I,backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",border:`1px solid ${h?"rgba(255, 255, 255, 0.2)":"rgba(255, 255, 255, 0.3)"}`,animation:"clockFadeIn 0.8s ease-out 0.6s both",transition:"all 0.3s ease"};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
          @keyframes clockFadeIn {
            from { opacity: 0; transform: translateY(-10px) translateX(10px); }
            to { opacity: 1; transform: translateY(0) translateX(0); }
          }
        `}),(0,i.jsx)(rV,{initialPosition:p,onPositionChange:(e,t)=>{u({x:e,y:t}),null==d||d(e,t)},zIndex:1e3,storageKey:"turnip-widget-clock",children:(0,i.jsx)(ex.A,{size:"small",style:f,className:"clock-card",styles:{body:{padding:"0.75rem 1rem"}},hoverable:!0,children:(0,i.jsxs)(el.A,{orientation:"vertical",align:"center",size:2,children:[(0,i.jsxs)(el.A,{size:4,children:[(0,i.jsx)(tO.A,{style:{color:h?"#ffffff":"#2c3e50",opacity:.8}}),(0,i.jsx)(rK,{style:{color:h?"#ffffff":"#2c3e50",opacity:.8,fontSize:"0.85em"},children:m})]}),(0,i.jsx)(rK,{strong:!0,style:{color:h?"#ffffff":"#2c3e50",fontSize:"1em",fontWeight:600,fontFamily:'"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace'},children:y})]})})})]})},{Text:rG}=et.A,rJ=e=>{let{cb:t}=e,r=L.getConfig(),[a,n]=(0,s.useState)(V.getAllCategories()),o=V.getAllSearchEngines(),[g,x]=(0,s.useState)(""),[p,u]=(0,s.useState)(!0);(0,s.useMemo)(()=>{let e=JSON.parse(localStorage.getItem("turnip_link_categories")||"[]");console.log("localCategories",e),n(e),setTimeout(()=>u(!1),100)},[]),(0,s.useEffect)(()=>{let e=()=>{let e=new Date().getHours();e<6?x("\uD83C\uDF19 夜深了，注意休息"):e<11?x("\uD83C\uDF05 早上好，新的一天开始了"):e<14?x("☀️ 午安，享受美好时光"):e<18?x("\uD83C\uDF24️ 下午好，继续加油"):e<22?x("\uD83C\uDF06 晚上好，放松一下吧"):x("\uD83C\uDF03 夜晚时光，愿你安好")};e();let t=setInterval(e,6e4);return()=>clearInterval(t)},[]);let m=M.getConfig(),y=a.reduce((e,t)=>{var r;return e+((null==(r=t.links)?void 0:r.length)||0)},0);return p?(0,i.jsx)(rY,{text:"正在初始化精彩内容..."}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{children:(0,i.jsx)("div",{style:{position:"relative",width:"100%"},children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[(0,i.jsx)(c,{children:m.title}),(0,i.jsxs)(el.A,{orientation:"vertical",align:"center",style:{marginTop:"0.5rem",textAlign:"center"},children:[(0,i.jsx)(rG,{style:{fontSize:"1rem",opacity:.9,color:"var(--text-color, #2c3e50)"},children:g}),(0,i.jsxs)(el.A,{size:"large",children:[(0,i.jsx)(el.A,{children:(0,i.jsxs)(rG,{style:{fontSize:"0.875rem",opacity:.7,color:"var(--text-color, #2c3e50)"},children:["\uD83D\uDCC1 ",a.length," 个分类"]})}),(0,i.jsx)(el.A,{children:(0,i.jsxs)(rG,{style:{fontSize:"0.875rem",opacity:.7,color:"var(--text-color, #2c3e50)"},children:["\uD83D\uDD17 ",y," 个链接"]})})]})]})]})})}),(0,i.jsxs)(d,{children:[(0,i.jsx)(rE,{searchEngines:o}),(0,i.jsx)(rP,{categories:a,onToggleFavorite:(e,t)=>{V.toggleFavorite(e,t),n(V.getAllCategories())}})]}),(0,i.jsx)(tV,{themeConfig:r,onSelect:t}),(0,i.jsx)(h,{children:(0,i.jsxs)(el.A,{orientation:"vertical",align:"center",style:{width:"100%"},children:[(0,i.jsx)(rG,{style:{color:"var(--text-color, #2c3e50)",opacity:.8},children:m.copyright.text}),m.author&&(0,i.jsxs)(rG,{style:{fontSize:"12px",color:"var(--text-color, #2c3e50)",opacity:.6},children:["Made with ❤️ by ",m.author]})]})})]})};var rU=r(2918),rW=r(5437);let rH=new class{async fetchUpdateLogs(){if(!this.isLoading){this.isLoading=!0;try{let e=localStorage.getItem(this.CACHE_VERSION_KEY),t=localStorage.getItem(this.CACHE_TIMESTAMP_KEY),r=Date.now();if(e&&t&&r-Number.parseInt(t)<this.CACHE_DURATION){let e=localStorage.getItem(this.STORAGE_KEY);if(e){this.logs=JSON.parse(e),this.isLoading=!1;return}}let i=await fetch("/update-logs.json");if(!i.ok)throw Error(`HTTP error! status: ${i.status}`);let s=await i.json();this.logs=s.logs,localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.logs)),localStorage.setItem(this.CACHE_VERSION_KEY,s.version),localStorage.setItem(this.CACHE_TIMESTAMP_KEY,r.toString())}catch(t){console.warn("Failed to fetch update logs:",t);let e=localStorage.getItem(this.STORAGE_KEY);e&&(this.logs=JSON.parse(e))}finally{this.isLoading=!1}}}getAllLogs(){return[...this.logs]}getLatestLog(){return this.logs.length>0?this.logs[0]:null}markAsRead(e){try{localStorage.setItem("turnip-last-read-version",e)}catch(e){console.warn("Failed to mark log as read:",e)}}getLastReadVersion(){try{return localStorage.getItem("turnip-last-read-version")}catch(e){return console.warn("Failed to get last read version:",e),null}}hasUnreadLogs(){let e=this.getLatestLog(),t=this.getLastReadVersion();return e&&e.version!==t}constructor(){(0,B._)(this,"STORAGE_KEY","turnip-update-logs"),(0,B._)(this,"CACHE_VERSION_KEY","turnip-update-logs-version"),(0,B._)(this,"CACHE_TIMESTAMP_KEY","turnip-update-logs-timestamp"),(0,B._)(this,"CACHE_DURATION",864e5),(0,B._)(this,"logs",[]),(0,B._)(this,"isLoading",!1)}};var rq=r(801);let{Title:rX,Text:rQ,Paragraph:rZ}=et.A,r0=()=>{let[e,t]=(0,s.useState)(!1),[r,a]=(0,s.useState)(rH.getAllLogs()),[n,o]=(0,s.useState)(rH.hasUnreadLogs());return(0,s.useEffect)(()=>{(async()=>{await rH.fetchUpdateLogs(),a(rH.getAllLogs()),o(rH.hasUnreadLogs())})()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(rV,{initialPosition:{x:()=>window.innerWidth-50,y:120},zIndex:1e3,storageKey:"turnip-widget-updatelog-v2",style:{cursor:"pointer"},children:(0,i.jsx)(eD.A,{content:(0,i.jsxs)("div",{style:{padding:"8px"},children:[(0,i.jsx)(rQ,{strong:!0,children:"更新日志"}),(0,i.jsx)("div",{style:{marginTop:"8px"},children:n?(0,i.jsx)(rQ,{type:"danger",children:"有新的更新"}):(0,i.jsx)(rQ,{children:"当前已是最新版本"})})]}),title:"更新日志",trigger:"click",children:(0,i.jsx)(es.A,{dot:n,offset:[0,-5],children:(0,i.jsx)(rq.A,{style:{fontSize:"1.125rem",color:"#1890ff"},onClick:()=>{t(!0);let e=rH.getLatestLog();e&&(rH.markAsRead(e.version),o(!1))}})})})}),(0,i.jsx)(e$.A,{title:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsx)(rX,{level:4,style:{margin:0},children:"\uD83D\uDCE6 应用更新日志"}),n&&(0,i.jsx)(es.A,{status:"error",text:"有新更新"})]}),open:e,onCancel:()=>t(!1),footer:[(0,i.jsx)(eo.Ay,{type:"primary",onClick:()=>t(!1),children:"关闭"},"close")],width:600,centered:!0,styles:{body:{maxHeight:"60vh",overflowY:"auto",paddingRight:"8px"}},children:r.length>0?(0,i.jsx)(eI.A,{dataSource:r,renderItem:e=>(0,i.jsx)(eI.A.Item,{children:(0,i.jsx)(eI.A.Item.Meta,{title:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(rQ,{strong:!0,children:e.version}),(0,i.jsx)(rQ,{type:"secondary",style:{marginLeft:"16px"},children:e.date})]}),description:(0,i.jsxs)("div",{children:[e.description&&(0,i.jsx)(rZ,{style:{marginBottom:"8px"},children:e.description}),(0,i.jsx)("ul",{style:{margin:"0 0 0 16px",padding:0},children:e.changes.map((e,t)=>(0,i.jsxs)("li",{style:{marginBottom:"4px"},children:[(0,i.jsx)(tB.A,{style:{marginRight:"8px",color:"#52c41a"}}),e]},t))})]})})})}):(0,i.jsx)("div",{style:{textAlign:"center",padding:"40px"},children:(0,i.jsx)(rQ,{type:"secondary",children:"暂无更新日志"})})})]})},r1="turnip-todo-visible",r2=()=>{let[e,t]=(0,s.useState)(!1),[r,a]=(0,s.useState)(2),[n,l]=(0,s.useState)(!1),[c,d]=(0,s.useState)(()=>{try{let e=localStorage.getItem(r1);return null!==e&&"true"===e}catch{return!0}}),h=e=>{d(e);try{localStorage.setItem(r1,String(e))}catch{}},{appTheme:x,antdTheme:p,setAppTheme:u,isDark:m}=ti();return(0,i.jsx)(rU.Ay,{theme:p,children:(0,i.jsx)(rW.A,{children:(0,i.jsx)(g.a,{theme:x,children:(0,i.jsxs)(z,{$isDark:m,backgroundImage:x.backgroundImage,children:[(0,i.jsx)(rM,{}),(0,i.jsx)(rV,{initialPosition:{x:16,y:30},zIndex:9998,storageKey:"turnip-widget-todo-btn-v2",children:(0,i.jsx)("button",{onClick:()=>h(!c),style:{padding:"8px 16px",borderRadius:"8px",border:"none",cursor:"grab",background:m?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.8)",color:m?"#fff":"#333",backdropFilter:"blur(10px)",fontWeight:500},children:"\uD83D\uDCDD 待办清单"})}),(0,i.jsx)(o,{onClick:()=>l(!0),children:"管理面板"}),e?(0,i.jsx)(rr,{config:r}):(0,i.jsx)(rJ,{cb:u}),(0,i.jsx)(rs,{setVisibleAdmin:t,visibleAdmin:e,setToConfig:a,setIsShowAdmin:l,isShowAdmin:n}),(0,i.jsx)(rC,{visible:c,onVisibleChange:h}),(0,i.jsx)(r0,{})]})})})})},r5=document.getElementById("root");r5&&a.createRoot(r5).render((0,i.jsx)(s.StrictMode,{children:(0,i.jsx)(()=>(0,i.jsx)(tr,{children:(0,i.jsx)(r2,{})}),{})}))}},o={};function l(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e].call(r.exports,r,r.exports,l),r.exports}l.m=n,l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(r,i){if(1&i&&(r=this(r)),8&i||"object"==typeof r&&r&&(4&i&&r.__esModule||16&i&&"function"==typeof r.then))return r;var s=Object.create(null);l.r(s);var a={};e=e||[null,t({}),t([]),t(t)];for(var n=2&i&&r;("object"==typeof n||"function"==typeof n)&&!~e.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach(e=>{a[e]=()=>r[e]});return a.default=()=>r,l.d(s,a),s},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r=[],l.O=(e,t,i,s)=>{if(t){s=s||0;for(var a=r.length;a>0&&r[a-1][2]>s;a--)r[a]=r[a-1];r[a]=[t,i,s];return}for(var n=1/0,a=0;a<r.length;a++){for(var[t,i,s]=r[a],o=!0,c=0;c<t.length;c++)(!1&s||n>=s)&&Object.keys(l.O).every(e=>l.O[e](t[c]))?t.splice(c--,1):(o=!1,s<n&&(n=s));if(o){r.splice(a--,1);var d=i();void 0!==d&&(e=d)}}return e},i={410:0},l.O.j=e=>0===i[e],s=(e,t)=>{var r,s,[a,n,o]=t,c=0;if(a.some(e=>0!==i[e])){for(r in n)l.o(n,r)&&(l.m[r]=n[r]);if(o)var d=o(l)}for(e&&e(t);c<a.length;c++)s=a[c],l.o(i,s)&&i[s]&&i[s][0](),i[s]=0;return l.O(d)},(a=self.webpackChunkrs_react_app=self.webpackChunkrs_react_app||[]).forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a));var c=l.O(void 0,["783","727"],()=>l(4037));c=l.O(c)})();