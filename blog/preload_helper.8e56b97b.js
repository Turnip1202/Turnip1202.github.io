!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"my-website","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.b5c65dae.async.js",9],["docs__doc__MySQL__index.md.1cbd1a5e.async.js",59],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.12640f7b.async.js",65],["docs__ceshi__c1__index.md.e2349bb9.async.js",184],["docs__about__page-tab.md.8ed5ec6f.async.js",270],["docs__doc__React__index.md.33943698.async.js",284],["310.e8c51481.chunk.css",310],["310.20a9182c.async.js",310],["docs__guide__test.md.6f025ab5.async.js",321],["docs__guide__ceshi.md.9f94fff8.async.js",352],["docs__ceshi__c2__index.md.9070f738.async.js",360],["docs__doc__index.md.1c4bab0d.async.js",454],["nm__dumi__theme-default__layouts__DocLayout__index.c30a2a0f.async.js",519],["docs__about__me.md.892c6553.async.js",626],["docs__about__index.md.83e66c04.async.js",678],["docs__guide__index.md.20376550.async.js",825],["dumi__tmp-production__dumi__theme__ContextWrapper.59022c59.async.js",923],["docs__index.md.d41c0167.async.js",935],["docs__ceshi__index.md.9e20eb3b.async.js",976]],"r":{"/*":[3,4,8,9,14,18],"/":[19,8,9,14,18],"/about":[16,8,9,14,18],"/ceshi":[20,8,9,14,18],"/guide":[17,8,9,14,18],"/doc":[13,8,9,14,18],"/~demos/:id":[0,1,18],"/doc/my-sql":[2,8,9,14,18],"/doc/react":[7,8,9,14,18],"/about/page-tab":[6,8,9,14,18],"/ceshi/c1":[5,8,9,14,18],"/ceshi/c2":[12,8,9,14,18],"/guide/ceshi":[11,8,9,14,18],"/guide/test":[10,8,9,14,18],"/about/me":[15,8,9,14,18]}},{publicPath:"/blog/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();