!function(e){function t(t){for(var n,i,s=t[0],o=t[1],a=0,c=[];a<s.length;a++)i=s[a],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&c.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);c.length;)c.shift()()}var n={},r={0:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=s);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+({1:"categories-index-js",2:"dashboard-index-js",3:"error404-index-js",4:"products-edit-index-js",5:"products-list-index-js",6:"sales-index-js"}[e]||e)+"-"+e+".js"}(e);var d=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",d.name="ChunkLoadError",d.type=i,d.request=s,n[1](d)}r[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/project-structure/",i.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var d=o;i(i.s=2)}([function(e,t,n){var r={"./categories/index.js":[6,1],"./dashboard/index.js":[4,2],"./error404/index.js":[3,3],"./products/edit/index.js":[7,4],"./products/list/index.js":[5,5],"./sales/index.js":[8,6]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=0,e.exports=i},,function(e,t,n){"use strict";n.r(t);class r{constructor(){this.routes=[],this.initEventListeners()}initEventListeners(){document.addEventListener("click",e=>{const t=e.target.closest("a");if(!t)return;const n=t.getAttribute("href");n&&n.startsWith("/")&&(e.preventDefault(),this.navigate(n))})}static instance(){return this._instance||(this._instance=new r),this._instance}async route(){let e,t,n=decodeURI(window.location.pathname).replace(/^\/|\/$/,"");for(let r of this.routes)if(e=n.match(r.pattern),e){t=r.path,this.page=await this.changePage(t,e);break}e||(t=this.notFoundPagePath,this.page=await this.changePage(t)),document.dispatchEvent(new CustomEvent("route",{detail:{page:this.page,path:t}}))}async changePage(e,t){return this.page&&this.page.destroy&&this.page.destroy(),await async function(e,t){const r=document.querySelector("main");r.classList.add("is-loading");const{default:i}=await n(0)(`./${e}/index.js`),s=new i(t),o=await s.render();r.classList.remove("is-loading");const a=document.querySelector("#content");return a.innerHTML="",a.append(o),s}(e,t)}navigate(e){history.pushState(null,null,e),this.route()}addRoute(e,t){return this.routes.push({pattern:e,path:t}),this}setNotFoundPagePath(e){return this.notFoundPagePath=e,this}listen(){window.addEventListener("popstate",()=>this.route()),this.route()}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s{constructor(){if(i(this,"element",void 0),i(this,"onPointerOver",e=>{const{tooltip:t}=e.target.dataset;t&&(this.render(t),e.target.addEventListener("pointermove",this.onPointerMove))}),i(this,"onPointerOut",e=>{this.remove(),e.target.removeEventListener("pointermove",this.onPointerMove)}),i(this,"onPointerMove",e=>{this.element&&(this.element.style.left=e.clientX+10+"px",this.element.style.top=e.clientY+10+"px")}),s.instance)return s.instance;s.instance=this}initialize(){this.initEventListners()}render(e){const t=document.createElement("div");t.innerHTML=`<div class="tooltip">${e}</div>`,this.element=t.firstElementChild,document.body.append(this.element)}initEventListners(){document.addEventListener("pointerover",this.onPointerOver),document.addEventListener("pointerout",this.onPointerOut)}remove(){var e;null===(e=this.element)||void 0===e||e.remove(),this.element=null}destroy(){document.removeEventListener("pointerover",this.onPointerOver),document.removeEventListener("pointerout",this.onPointerOut),this.remove()}}i(s,"instance",void 0);var o=new s;const a="project-structure/";console.error("URL_PATH",a);(new class{constructor(){o.initialize(),this.router=r.instance(),this.render(),this.addEventListeners()}get template(){return`\n      <main class="main">\n      <div class="progress-bar">\n        <div class="progress-bar__line"></div>\n      </div>\n      <aside class="sidebar">\n        <h2 class="sidebar__title">\n          <a href="/${a}">shop admin</a>\n        </h2>\n        <ul class="sidebar__nav">\n          <li>\n            <a href="/${a}" data-page="dashboard">\n              <i class="icon-dashboard"></i> <span>Панель управления</span>\n            </a>\n          </li>\n          <li>\n            <a href="/${a}products" data-page="products">\n              <i class="icon-products"></i> <span>Товары</span>\n            </a>\n          </li>\n          <li>\n            <a href="/${a}categories" data-page="categories">\n              <i class="icon-categories"></i> <span>Категории</span>\n            </a>\n          </li>\n          <li>\n            <a href="/${a}sales" data-page="sales">\n              <i class="icon-sales"></i> <span>Продажи</span>\n            </a>\n          </li>\n        </ul>\n        <ul class="sidebar__nav sidebar__nav_bottom">\n          <li>\n            <button type="button" class="sidebar__toggler">\n              <i class="icon-toggle-sidebar"></i> <span>Скрыть панель</span>\n            </button>\n          </li>\n        </ul>\n      </aside>\n      <section class="content" id="content">\n\n      </section>\n    </main>\n    `}render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,document.body.append(this.element)}initializeRouter(){this.router.addRoute(new RegExp(`^${a}$`),"dashboard").addRoute(new RegExp(`^${a}products$`),"products/list").addRoute(new RegExp(`^${a}products/add$`),"products/edit").addRoute(new RegExp(`^${a}products/([\\w()-]+)$`),"products/edit").addRoute(new RegExp(`^${a}sales$`),"sales").addRoute(new RegExp(`^${a}categories$`),"categories").addRoute(/404\/?$/,"error404").setNotFoundPagePath("error404").listen()}addEventListeners(){this.element.querySelector(".sidebar__toggler").addEventListener("click",e=>{e.preventDefault(),document.body.classList.toggle("is-collapsed-sidebar")})}}).initializeRouter()}]);
//# sourceMappingURL=app.bundle.js.map