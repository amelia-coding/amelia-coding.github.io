!(function(){if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const r=e=>s(e,t),m={module:{uri:t},exports:c,require:r};i[t]=Promise.all(n.map((e=>m[e]||r(e)))).then((e=>(o(...e),c)))}}define(["./workbox-5b4caa9d"],(function(e){"use strict";importScripts("https://g.yppstatic.com/workbox/4.3.1/workbox-sw.js"),e.setCacheNameDetails({prefix:"amelia-coding.github.io"}),self.skipWaiting(),e.clientsClaim(),e.registerRoute(/.*\.js.*/i,new e.CacheFirst({cacheName:"amelia-coding.github.io-js",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/.*css.*/,new e.CacheFirst({cacheName:"amelia-coding.github.io-css",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/.*(png|svga).*/,new e.CacheFirst({cacheName:"seed-image",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3})]}),"GET")}));
}());