!function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t=window.webpackJsonp;window.webpackJsonp=function(n,r,u){for(var a,i,c=0,f=[];c<n.length;c++)i=n[c],o[i]&&f.push(o[i][0]),o[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(t&&t(n,r,u);f.length;)f.shift()()};var r={},o={2:0};return n.e=function(e){function t(){u.onerror=u.onload=null,clearTimeout(a);var n=o[e];0!==n&&(n&&n[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}if(0===o[e])return Promise.resolve();if(o[e])return o[e][2];var r=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,u.src=n.p+""+({}[e]||e)+".js?"+{0:"76655120499850ae5eea",1:"46284f6b40e6aa400fa7"}[e];var a=setTimeout(t,12e4);u.onerror=u.onload=t,r.appendChild(u);var i=new Promise(function(n,t){o[e]=[n,t]});return o[e][2]=i},n.m=e,n.c=r,n.i=function(e){return e},n.d=function(e,n,t){Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/assets/",n.oe=function(e){throw console.error(e),e},n(n.s=2)}([function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(e,n,t){function r(e){var n=o[e];return n?t.e(n[1]).then(function(){return t(n[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./views/bar/index.js":[3,1],"./views/foo/index.js":[4,0]};r.keys=function(){return Object.keys(o)},e.exports=r,r.id=1},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=t(0),i=r(a),c=function(){function e(){o(this,e)}return u(e,[{key:"start",value:function(){var e=this;window.addEventListener("popstate",function(){e.load(location.pathname)}),this.load(location.pathname)}},{key:"go",value:function(e){history.pushState({},"",e),this.load(e)}},{key:"load",value:function(e){t(1)("./views"+e+"/index.js").then(function(e){var n=e.default,t=new n;t.mount(document.body)})}}]),e}();i.default.router=new c,i.default.router.start()}]);