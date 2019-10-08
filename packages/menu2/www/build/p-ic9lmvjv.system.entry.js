var __awaiter=this&&this.__awaiter||function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r["throw"](e))}catch(e){i(e)}}function a(e){e.done?n(e.value):o(e.value).then(u,s)}a((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(e){return function(t){return a([e,t])}}function a(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=u[0]&2?o["return"]:u[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;if(o=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;o=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1];i=u;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(u);break}if(i[2])n.ops.pop();n.trys.pop();continue}u=t.call(e,n)}catch(e){u=[6,e];o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-f177ddcb.system.js"],(function(e){"use strict";var t,n,r,o,i;return{setters:[function(e){t=e.r;n=e.c;r=e.h;o=e.H;i=e.g}],execute:function(){var u=e("rs_menu",function(){function e(e){t(this,e);this.change=n(this,"change",4)}e.prototype.openeddHandler=function(){this.isOpened()};e.prototype.isOpened=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.opened){this.menu.classList.add("-opened")}else{this.menu.classList.remove("-opened")}return[2]}))}))};e.prototype.componentDidLoad=function(){var e=this;this.menu=this.el.shadowRoot.querySelector(".rs-menu");this.isOpened();var t=Array.from(this.el.shadowRoot.querySelector("slot").assignedElements())[0];this.listItems=Array.from(t.shadowRoot.querySelector("slot").assignedElements()).filter((function(e){return e.tagName==="RS-LIST-ITEM"}));this.listItems.forEach((function(t){t.addEventListener("click",(function(){var n=Array.from(t.shadowRoot.querySelector("slot").assignedElements()).find((function(e){return e.tagName==="RS-LIST-TEXT"}));if(!n)return e.change.emit();e.change.emit({value:n.innerHTML})}))}))};e.prototype.componentDidUnLoad=function(){var e=this;this.listItems.forEach((function(t){t.removeEventListener("click",(function(){var n=Array.from(t.shadowRoot.querySelector("slot").assignedElements()).find((function(e){return e.tagName==="RS-LIST-TEXT"}));if(!n)return e.change.emit();e.change.emit({value:n.innerHTML})}))}))};e.prototype.render=function(){return r(o,null,r("div",{class:"rs-menu rs-menu-surface"},r("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{opened:["openeddHandler"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".rs-menu{min-width:var(--rs-menu---min-width)}.rs-menu.rs-menu-surface{background-color:var(--rs-menurs-menu-surface---background-color);color:var(--rs-menurs-menu-surface---color);border-radius:var(--rs-menurs-menu-surface---border-radius);-webkit-transform:var(--rs-menurs-menu-surface---transform);transform:var(--rs-menurs-menu-surface---transform);opacity:var(--rs-menurs-menu-surface---opacity)}.rs-menu-surface{max-width:var(--rs-menu-surface---max-width);max-height:var(--rs-menu-surface---max-height);height:var(--rs-menu-surface---height);-webkit-box-sizing:var(--rs-menu-surface---box-sizing);box-sizing:var(--rs-menu-surface---box-sizing);margin:var(--rs-menu-surface---margin);padding:var(--rs-menu-surface---padding);z-index:var(--rs-menu-surface---z-index);-webkit-box-shadow:var(--rs-menu-surface---box-shadow);box-shadow:var(--rs-menu-surface---box-shadow);min-width:var(--rs-menu-surface---min-width);-webkit-transition:var(--rs-menu-surface---transition);transition:var(--rs-menu-surface---transition)}.rs-menu-surface.-opened{height:var(--rs-menu-surface-opened---height);will-change:var(--rs-menu-surface-opened---will-change);display:var(--rs-menu-surface-opened---display);-webkit-transform:var(--rs-menu-surface-opened---transform);transform:var(--rs-menu-surface-opened---transform);opacity:var(--rs-menu-surface-opened---opacity);-webkit-transition:var(--rs-menu-surface-opened---transition);transition:var(--rs-menu-surface-opened---transition)}rs-menu>rs-list>rs-list-item{--rs-list-item---user-select:var(--TArs-menuCHTArs-listCHTArs-list-item-----rs-list-item---user-select)}rs-menu>rs-list>rs-list-divider{--rs-list-divider---margin:var(--TArs-menuCHTArs-listCHTArs-list-divider-----rs-list-divider---margin)}"},enumerable:true,configurable:true});return e}())}}}));