!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"my-website","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.712d5728.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.0a2009f3.async.js",65],["docs__t2.md.92fa3c53.async.js",173],["docs__ceshi__c1__index.md.a34afee7.async.js",184],["docs__t1.md.db548f04.async.js",257],["docs__about__page-tab.md.24602109.async.js",270],["docs__guide__test.md.74b6f400.async.js",321],["docs__guide__ceshi.md.847de11b.async.js",352],["docs__ceshi__c2__index.md.ff7b990d.async.js",360],["413.e8c51481.chunk.css",413],["413.e60d336f.async.js",413],["nm__dumi__theme-default__layouts__DocLayout__index.6d8db7af.async.js",519],["docs__about__me.md.9f0e120f.async.js",626],["docs__about__index.md.1a7b4197.async.js",678],["docs__guide__index.md.36d79adb.async.js",825],["dumi__tmp-production__dumi__theme__ContextWrapper.e3cbd102.async.js",923],["docs__index.md.c18b3711.async.js",935],["docs__ceshi__index.md.694cc92e.async.js",976]],"r":{"/*":[2,3,11,12,13,17],"/":[18,11,12,13,17],"/about":[15,11,12,13,17],"/ceshi":[19,11,12,13,17],"/guide":[16,11,12,13,17],"/t1":[6,11,12,13,17],"/t2":[4,11,12,13,17],"/~demos/:id":[0,1,17],"/about/page-tab":[7,11,12,13,17],"/ceshi/c1":[5,11,12,13,17],"/ceshi/c2":[10,11,12,13,17],"/guide/ceshi":[9,11,12,13,17],"/guide/test":[8,11,12,13,17],"/about/me":[14,11,12,13,17]}},{publicPath:"/blog/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();