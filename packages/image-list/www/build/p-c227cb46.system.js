var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{f(n.next(e))}catch(e){i(e)}}function s(e){try{f(n["throw"](e))}catch(e){i(e)}}function f(e){e.done?r(e.value):a(e.value).then(o,s)}f((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return f([e,t])}}function f(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],o=0,s=i.length;o<s;o++,a++)n[a]=i[o];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="image-list";var a;var i;var o=false;var s=window;var f=document;var u=HTMLElement;var l={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var c=function(){return!!f.documentElement.attachShadow}();var $=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var v=new WeakMap;var d=function(e){return v.get(e)};var h=e("r",(function(e,t){return v.set(t.$lazyInstance$=e,t)}));var p=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));return v.set(e,t)}};var m=function(e,t){return t in e};var y=function(e){return console.error(e)};var g=new Map;var w=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var o=g.get(i);if(o){return o[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{g.set(i,e)}return e[a]}),y)};var b=new Map;var _=function(){return s.__stencil_cssshim}();var S=function(e){return Promise.resolve().then(e)};var x={};var R=function(e){return e!=null};var j=function(e){return e.toLowerCase()};var E=function(e){e=typeof e;return e==="object"||e==="function"};var L=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var k=e("a",(function(){if(!(s.CSS&&s.CSS.supports&&s.CSS.supports("color","var(--c)"))){return t.import("./p-a661dc8c.system.js")}return Promise.resolve()}));var A=e("p",(function(){return __awaiter(r,void 0,void 0,(function(){var e,r,a,i,o;return __generator(this,(function(u){switch(u.label){case 0:e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(f.querySelectorAll("script")).find((function(e){return r.test(e.src)||e.getAttribute("data-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:o=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,s.location.href));C(o.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-2ab1fdf1.system.js")];case 2:u.sent();u.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:o.href})]}}))}))}));var C=function(e){var t=L(n);try{s[t]=new Function("w","return import(w);//"+Math.random())}catch(n){var r=new Map;s[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var o=f.createElement("script");o.type="module";o.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){o.onload=function(){e(s[t].m);o.remove()}}));r.set(a,i);f.head.appendChild(o)}return i}}};var U="hydrated";var N=new WeakMap;var O=function(e,t,r){var n=b.get(e);if($&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}b.set(e,n)};var M=function(e,t,r,n){var a=T(t.$tagName$);var i=b.get(a);e=e.nodeType===11?e:f;if(i){if(typeof i==="string"){e=e.head||e;var o=N.get(e);var s=void 0;if(!o){N.set(e,o=new Set)}if(!o.has(a)){{if(_){s=_.createHostStyle(n,a,i,!!(t.$flags$&10));var u=s["s-sc"];if(u){a=u;o=null}}else{s=f.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var P=function(e,t,r){var n=M(c&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var T=function(e,t){return"sc-"+e};var H=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var o=false;var s;var f=[];var u=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!E(a)){a=String(a)}if(i&&o){f[f.length-1].$text$+=a}else{f.push(i?{$flags$:0,$text$:a}:a)}o=i}}};u(r);if(t){{s=t.key||undefined}{var l=t.className||t.class;if(l){t.class=typeof l!=="object"?l:Object.keys(l).filter((function(e){return l[e]})).join(" ")}}}if(typeof e==="function"){return e(t,f,z)}var c={$flags$:0,$tag$:e,$children$:f.length>0?f:null,$elm$:undefined,$attrs$:t};{c.$key$=s}return c}));var B=e("H",{});var I=function(e){return e&&e.$tag$===B};var z={forEach:function(e,t){return e.map(q).forEach(t)},map:function(e,t){return e.map(q).map(t).map(W)}};var q=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var W=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var F=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"){var o=e.classList;G(r).forEach((function(e){return o.remove(e)}));G(n).forEach((function(e){return o.add(e)}))}else if(t==="style"){for(var s in n){if(!r||n[s]!==r[s]){if(s.includes("-")){e.style.setProperty(s,n[s])}else{e.style[s]=n[s]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!m(e,t)){if(m(e,j(t))){t=j(t.substring(2))}else{t=j(t[2])+t.substring(3)}if(r){l.rel(e,t,r,false)}if(n){l.ael(e,t,n,false)}}else{var f=m(e,t);var u=E(n);if((f||u&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var c=n==null?"":n;if(e[t]!==c){e[t]=c}}else{e[t]=n}}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!f||i&4||a)&&!u){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var G=function(e){return!e?[]:e.split(/\s+/).filter((function(e){return e}))};var Q=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||x;var o=t.$attrs$||x;for(n in o){F(a,n,i[n],o[n],r,t.$flags$)}};var V=function(e,t,r,n){var i=t.$children$[r];var s=0;var u;var l;if(R(i.$text$)){i.$elm$=f.createTextNode(i.$text$)}else{u=i.$elm$=f.createElement(i.$tag$);{Q(null,i,o)}if(R(a)&&u["s-si"]!==a){u.classList.add(u["s-si"]=a)}if(i.$children$){for(s=0;s<i.$children$.length;++s){l=V(e,i,s);if(l){u.appendChild(l)}}}}return i.$elm$};var D=function(e,t,r,n,a,o){var s=e;var f;if(s.shadowRoot&&j(s.tagName)===i){s=s.shadowRoot}for(;a<=o;++a){if(n[a]){f=V(null,r,a);if(f){n[a].$elm$=f;s.insertBefore(f,t)}}}};var J=function(e,t){var r=t.$elm$=e.$elm$;var n=t.$children$;if(!R(t.$text$)){{{Q(e,t,o)}}if(R(n)){D(r,null,t,n,0,n.length-1)}}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var K=function(e,t,r,n){i=j(e.tagName);var o=t.$vnode$||{$flags$:0};var s=I(n)?n:H(null,null,n);s.$tag$=null;s.$flags$|=4;t.$vnode$=s;s.$elm$=o.$elm$=e.shadowRoot||e;{a=e["s-sc"]}J(o,s)};var X=function(e,t,r,n){var a=t.$lazyInstance$;var i=function(){return Y(e,t,r,a,n)};var o;return te(o,i)};var Y=function(e,t,r,n,a){if(a){P(e,r,t.$modeName$)}{{t.$flags$|=4;try{K(e,t,r,n.render())}catch(e){y(e)}t.$flags$&=~4}}if(_){_.updateHost(e)}{t.$flags$|=2}Z(e,t)};var Z=function(e,t,r){if(!e["s-al"]){var n=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(U)}{t.$onReadyResolve$(e)}if(!n){ee()}}}};var ee=function(){{f.documentElement.classList.add(U)}{l.$flags$|=2}};var te=function(e,t){return e&&e.then?e.then(t):t()};var re=function(e,t,r){return e};var ne=function(e,n,a,i,o){return __awaiter(r,void 0,void 0,(function(){var r,i,s;return __generator(this,(function(f){switch(f.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;o=w(a);if(!o.then)return[3,2];return[4,o];case 1:o=f.sent();f.label=2;case 2:try{new o(n)}catch(e){y(e)}r=T(a.$tagName$);if(!(!b.has(r)&&o.style))return[3,5];i=o.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(i,r,false)}))];case 3:i=f.sent();f.label=4;case 4:O(r,i,!!(a.$flags$&1));f.label=5;case 5:s=function(){return X(e,n,a,true)};{s()}return[2]}}))}))};var ae=function(e,t){if((l.$flags$&1)===0){var r=d(e);if(!(r.$flags$&1)){r.$flags$|=1;{S((function(){return ne(e,r,t)}))}}}};var ie=function(e){if((l.$flags$&1)===0){var t=d(e);if(_){_.removeHost(e)}}};var oe=e("b",(function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=f.head;var i=s.customElements;var o=a.querySelector("meta[charset]");var u=f.createElement("style");var $;Object.assign(l,t);l.$resourcesUrl$=new URL(t.resourcesUrl||"./",f.baseURI).href;if(t.syncQueue){l.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};if(!c&&a.$flags$&1){a.$flags$|=8}var o=a.$tagName$;var s=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;p(t);if(a.$flags$&1){if(c){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}l.jmp((function(){return ae(e,a)}))};t.prototype.disconnectedCallback=function(){var e=this;l.jmp((function(){return ie(e)}))};t.prototype["s-init"]=function(){var e=d(this);if(e.$lazyInstance$){Z(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){};t.prototype.componentOnReady=function(){return d(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(o)&&!i.get(o)){r.push(o);i.define(o,re(s))}}))}));u.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";u.setAttribute("data-styles","");a.insertBefore(u,o?o.nextSibling:a.firstChild);l.jmp((function(){return $=setTimeout(ee,30)}))}))}}}));