!(function(){if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,c)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(e[u])return;let l={};const r=s=>n(s,u),_={module:{uri:u},exports:l,require:r};e[u]=Promise.all(i.map((s=>_[s]||r(s)))).then((s=>(c(...s),l)))}}define(["./workbox-34e3d179"],(function(s){"use strict";importScripts("https://g.yppstatic.com/workbox/4.3.1/workbox-sw.js"),s.setCacheNameDetails({prefix:"amelia:static"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/246.abec90e8.chunk.css",revision:null},{url:"/246.d30d7be6.async.js",revision:null},{url:"/263.db806739.async.js",revision:null},{url:"/docs__guide__about.md.ed4a4ba9.async.js",revision:null},{url:"/docs__guide__about.md.ffc024b8.chunk.css",revision:null},{url:"/docs__guide__base-es6.md.ec029450.async.js",revision:null},{url:"/docs__guide__base-es6.md.ffc024b8.chunk.css",revision:null},{url:"/docs__guide__base-js.md.a0948b11.async.js",revision:null},{url:"/docs__guide__base-js.md.ffc024b8.chunk.css",revision:null},{url:"/docs__guide__base-net.md.316b4c98.async.js",revision:null},{url:"/docs__guide__base-net.md.ffc024b8.chunk.css",revision:null},{url:"/docs__guide__base-ts.md.d4c478d0.async.js",revision:null},{url:"/docs__guide__base-ts.md.ffc024b8.chunk.css",revision:null},{url:"/docs__guide__engineer-build.md.7123fbf0.async.js",revision:null},{url:"/docs__guide__engineer-build.md.ffc024b8.chunk.css",revision:null},{url:"/docs__guide__engineer.md.1f7be7aa.async.js",revision:null},{url:"/docs__guide__engineer.md.ffc024b8.chunk.css",revision:null},{url:"/docs__guide__frame-node.md.fcd31fc3.async.js",revision:null},{url:"/docs__guide__frame-node.md.ffc024b8.chunk.css",revision:null},{url:"/docs__guide__frame-react.md.642a38a7.async.js",revision:null},{url:"/docs__guide__frame-react.md.ffc024b8.chunk.css",revision:null},{url:"/docs__guide__frame-vue.md.4f463efb.async.js",revision:null},{url:"/docs__guide__frame-vue.md.ffc024b8.chunk.css",revision:null},{url:"/docs__guide__other-load-page.md.91c054f0.async.js",revision:null},{url:"/docs__guide__other-load-page.md.ffc024b8.chunk.css",revision:null},{url:"/docs__index.md.161584c8.async.js",revision:null},{url:"/docs__index.md.ffc024b8.chunk.css",revision:null},{url:"/docs__interview__algorithm.md.872f625f.async.js",revision:null},{url:"/docs__interview__algorithm.md.ffc024b8.chunk.css",revision:null},{url:"/docs__interview__index.md.c096dd00.async.js",revision:null},{url:"/docs__interview__index.md.ffc024b8.chunk.css",revision:null},{url:"/docs__interview__leetcode.md.5ac9b2a7.async.js",revision:null},{url:"/docs__interview__leetcode.md.ffc024b8.chunk.css",revision:null},{url:"/dumi__pages__404.45b6f1bc.async.js",revision:null},{url:"/dumi__pages__404.8b85f2d9.chunk.css",revision:null},{url:"/dumi__pages__Demo.578aa5c0.chunk.css",revision:null},{url:"/dumi__pages__Demo.c970dc21.async.js",revision:null},{url:"/dumi__theme__ContextWrapper.13f75020.async.js",revision:null},{url:"/dumi__theme__layouts__DocLayout.68c9f84b.async.js",revision:null},{url:"/register.js",revision:"b4a0193a4cd4be8f723e25330fa2df1f"},{url:"/static/logo.784f3b53.jpg",revision:null},{url:"/sw.js",revision:"02c517116239d2d987e1b50d6b77a63e"},{url:"/umi.5a19b5a0.css",revision:null},{url:"/umi.c850ca2f.js",revision:null}],{}),s.cleanupOutdatedCaches(),s.registerRoute(/\.js$/,new s.CacheFirst({cacheName:"amelia:static:js",plugins:[new s.ExpirationPlugin({maxEntries:20,maxAgeSeconds:2592e3})]}),"GET"),s.registerRoute(/\.css$/,new s.CacheFirst({cacheName:"amelia:static:css",plugins:[new s.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3})]}),"GET"),s.registerRoute(/.*(png|svga).*/,new s.CacheFirst({cacheName:"seed-image",plugins:[new s.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3})]}),"GET")}));
}());