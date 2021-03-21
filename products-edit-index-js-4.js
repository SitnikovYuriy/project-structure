(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[,,,,,,,function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return d}));var n=s(12),i=s(11),r=s(9);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class a{constructor(e){o(this,"product",void 0),o(this,"defaultProduct",{title:"",description:"",images:[],subcategory:"",status:0,quantity:1,price:100,discount:0}),o(this,"categories",[]),o(this,"element",void 0),o(this,"subElements",{}),o(this,"onSubmit",e=>{e.preventDefault(),this.save()}),o(this,"onUploadImage",()=>{const e=document.createElement("input");e.hidden=!0,e.type="file",e.accept="image/*",e.addEventListener("change",async()=>{const[t]=e.files;if(t){const s=new FormData,{uploadImage:n,imageListContainer:i}=this.subElements,[o]=i.children;s.append("image",t),n.classList.add("is-loading"),n.disabled=!0;const a=await Object(r.a)(new URL("https://api.imgur.com/3/image"),{method:"POST",headers:{Authorization:"Client-ID 28aaa2e823b03b1"},body:s});o.append(this.createImageListItem(a.data.link,t.name)),n.classList.remove("is-loading"),n.disabled=!1,e.remove()}}),document.body.append(e),e.click()}),o(this,"onDeleteImage",e=>{"deleteHandle"in e.target.dataset&&e.target.closest("li").remove()}),this.productId=e}async render(){await this.loadData();const e=document.createElement("div");return e.innerHTML=this.product?this.template:this.emptyTemplate,this.element=e.firstElementChild,this.subElements=this.getSubElements(),this.product&&(this.setFormData(),this.initEventListners()),this.element}async loadData(){const[e,[t]]=await Promise.all([this.loadCategories(),this.loadProducts(this.productId)]);this.categories=e,this.product=t}loadProducts(e){if(!e)return[this.defaultProduct];const t=new URL("/api/rest/products","https://course-js.javascript.ru/");return t.searchParams.set("id",e),Object(r.a)(t)}loadCategories(){const e=new URL("/api/rest/categories","https://course-js.javascript.ru/");return e.searchParams.set("_sort","weight"),e.searchParams.set("_refs","subcategory"),Object(r.a)(e)}get template(){return`\n      <div class="product-form">\n        <form data-element="productForm" class="form-grid">\n          <div class="form-group form-group__half_left">\n            <fieldset>\n              <label class="form-label">Название товара</label>\n              <input id="title" required="" type="text" name="title" class="form-control" placeholder="Название товара">\n            </fieldset>\n          </div>\n          <div class="form-group form-group__wide">\n            <label class="form-label">Описание</label>\n            <textarea id="description" required="" class="form-control" name="description" data-element="productDescription" placeholder="Описание товара"></textarea>\n          </div>\n          <div class="form-group form-group__wide" data-element="sortable-list-container">\n            <label class="form-label">Фото</label>\n            <div data-element="imageListContainer"></div>\n            <button type="button" name="uploadImage" class="button-primary-outline fit-content" data-element="uploadImage"><span>Загрузить</span></button>\n          </div>\n          <div class="form-group form-group__half_left">\n            <label class="form-label">Категория</label>\n            <select id="subcategory" class="form-control" name="subcategory">\n              ${this.getSubcategoryOptions(this.categories)}\n            </select>\n          </div>\n          <div class="form-group form-group__half_left form-group__two-col">\n            <fieldset>\n              <label class="form-label">Цена ($)</label>\n              <input id="price" required="" type="number" name="price" class="form-control" placeholder="${this.defaultProduct.price}">\n            </fieldset>\n            <fieldset>\n              <label class="form-label">Скидка ($)</label>\n              <input id="discount" required="" type="number" name="discount" class="form-control" placeholder="${this.defaultProduct.discount}">\n            </fieldset>\n          </div>\n          <div class="form-group form-group__part-half">\n            <label class="form-label">Количество</label>\n            <input id="quantity" required="" type="number" class="form-control" name="quantity" placeholder="${this.defaultProduct.quantity}">\n          </div>\n          <div class="form-group form-group__part-half">\n            <label class="form-label">Статус</label>\n            <select id="status" class="form-control" name="status">\n              <option value="1">Активен</option>\n              <option value="0">Неактивен</option>\n            </select>\n          </div>\n          <div class="form-buttons">\n            <button type="submit" name="save" class="button-primary-outline">\n              ${this.productId?"Сохранить":"Добавить"} товар\n            </button>\n          </div>\n        </form>\n      </div>\n    `}get emptyTemplate(){return'\n      <div class="product-form">\n        <h1 class="page-title">Страница не найдена</h1>\n        <p>Извините, данный товар не существует</p>\n      </div>\n    '}createImageList(e=[]){return new n.a({items:e.map(({url:e,source:t})=>this.createImageListItem(e,t))}).element}createImageListItem(e,t){const s=document.createElement("div");return s.innerHTML=`\n      <li class="products-edit__imagelist-item sortable-list__item" style="">\n        <input type="hidden" name="url" value="${e}">\n        <input type="hidden" name="source" value="${Object(i.a)(t)}">\n        <span>\n          <img src="/project-structure/icons/icon-grab.svg" data-grab-handle="" alt="grab">\n          <img class="sortable-table__cell-img" alt="Image" src="${e}">\n          <span>${Object(i.a)(t)}</span>\n        </span>\n        <button type="button">\n          <img src="/project-structure/icons/icon-trash.svg" data-delete-handle="" alt="delete">\n        </button>\n      </li>\n    `,s.firstElementChild}getSubcategoryOptions(e=[]){const t=[];for(const s of e)for(const e of s.subcategories){const n=new Option(`${s.title} > ${e.title}`,e.id);t.push(n.outerHTML)}return t.join("")}async save(){const e=this.getFormData();try{const t=await Object(r.a)(new URL("/api/rest/products","https://course-js.javascript.ru/"),{method:this.productId?"PATCH":"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});this.dispatchEvent(t.id)}catch(e){console.error(e)}}getFields(){const e=["images"];return Object.keys(this.defaultProduct).filter(t=>!e.includes(t))}setFormData(){const{productForm:e,imageListContainer:t}=this.subElements,s=this.createImageList(this.product.images);t.innerHTML="",t.append(s),this.getFields().forEach(t=>{e.querySelector("#"+t).value=this.product[t]||this.defaultProduct[t]})}getFormData(){const{productForm:e}=this.subElements,t=["status","quantity","price","discount"],s={};return this.productId&&(s.id=this.productId),this.getFields().forEach(n=>{const i=e.querySelector("#"+n);s[n]=t.includes(n)?Number(i.value):i.value}),s.images=[...e.querySelectorAll(".products-edit__imagelist-item")].map(e=>({url:e.querySelector('[name="url"]').value,source:e.querySelector('[name="source"]').value})),s}dispatchEvent(e){const t=this.productId?"product-updated":"product-saved",s=new CustomEvent(t,{detail:e,bubbles:!0});this.element.dispatchEvent(s)}initEventListners(){const{productForm:e,uploadImage:t,imageListContainer:s}=this.subElements;e.addEventListener("submit",this.onSubmit),t.addEventListener("pointerdown",this.onUploadImage),s.addEventListener("pointerdown",this.onDeleteImage)}getSubElements(){return[...this.element.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}remove(){this.element.remove()}destroy(){this.remove(),this.element=null,this.subElements=null}}var l=s(13);function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class d{constructor([e,t]){c(this,"element",void 0),c(this,"subElements",{}),c(this,"components",{}),this.productId=t}get template(){return'\n      <div class="products-edit">\n        <div class="content__top-panel">\n          <h1 class="page-title">\n            <a href="/project-structure/products" class="link">Товары</a> / Редактировать\n          </h1>\n        </div>\n        <div class="content-box" data-element="productForm"></div>\n      </div>\n    '}async render(){const e=document.createElement("div");return e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(),await this.initComponents(),this.renderComponents(),this.initEventListners(),this.element}async initComponents(){const e=new a(this.productId);await e.render(),this.components={productForm:e}}renderComponents(){Object.keys(this.components).forEach(e=>{const t=this.subElements[e],{element:s}=this.components[e];t.append(s)})}initEventListners(){const e=new l.a("Товар добавлен",{duration:2e3,type:"success"});this.element.addEventListener("product-saved",t=>{e.show()});const t=new l.a("Товар сохранен",{duration:2e3,type:"success"});this.element.addEventListener("product-updated",e=>{t.show()})}getSubElements(){return[...this.element.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}remove(){this.element.remove()}destroy(){for(const e of Object.values(this.components))e.destroy();this.remove(),this.element=null,this.subElements=null,this.components=null}}},,function(e,t,s){"use strict";t.a=async function(e,t){let s,i;try{s=await fetch(e.toString(),t)}catch(e){throw new n(s,"Network error has occurred.")}if(!s.ok){let e=s.statusText;try{i=await s.json(),e=i.error&&i.error.message||i.data&&i.data.error&&i.data.error.message||e}catch(e){}let t=`Error ${s.status}: ${e}`;throw new n(s,i,t)}try{return await s.json()}catch(e){throw new n(s,null,e.message)}};class n extends Error{constructor(e,t,s){var n,i,r;super(s),r="FetchError",(i="name")in(n=this)?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",e=>{e.reason instanceof n&&alert(e.reason.message)})},,function(e,t,s){"use strict";t.a=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},function(e,t,s){"use strict";function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",(function(){return i}));class i{constructor({items:e=[]}={}){n(this,"element",void 0),n(this,"onPointerDown",e=>{if(1!==e.which)return;const t=e.target.closest(".sortable-list__item");t&&(e.target.closest("[data-grab-handle]")&&(e.preventDefault(),this.dragStart(t,e)),e.target.closest("[data-delete-handle]")&&(e.preventDefault(),t.remove()))}),n(this,"onPointerMove",({clientX:e,clientY:t})=>{var s;this.moveDraggingItem(e,t),this.draggingItem.style.display="none";const n=null===(s=document.elementFromPoint(e,t))||void 0===s?void 0:s.closest(".sortable-list__item");this.draggingItem.style.display="";const i=[...this.element.children],r=i.indexOf(n),o=i.indexOf(this.placeholder);-1!==r&&-1!==o&&(o<r?n.after(this.placeholder):n.before(this.placeholder))}),n(this,"onPointerUp",()=>{this.dragStop()}),this.items=e,this.render(),this.initEventListners()}render(){this.element=document.createElement("ul"),this.element.className="sortable-list",this.items.forEach(e=>e.classList.add("sortable-list__item")),this.element.append(...this.items)}initEventListners(){this.element.addEventListener("pointerdown",this.onPointerDown)}dragStart(e,{clientX:t,clientY:s}){const{left:n,top:i,width:r,height:o}=e.getBoundingClientRect();this.itemStartIndex=[...this.element.children].indexOf(e),this.placeholder=document.createElement("li"),this.placeholder.className="sortable-list__placeholder",this.placeholder.style.width=r+"px",this.placeholder.style.height=o+"px",this.draggingItem=e,this.draggingItem.classList.add("sortable-list__item_dragging"),this.draggingItem.style.width=r+"px",this.draggingItem.style.height=o+"px",this.draggingItem.before(this.placeholder),this.element.append(this.draggingItem),this.pointerOffset={x:t-n,y:s-i},this.moveDraggingItem(t,s),document.addEventListener("pointermove",this.onPointerMove),document.addEventListener("pointerup",this.onPointerUp)}moveDraggingItem(e,t){this.draggingItem.style.left=e-this.pointerOffset.x+"px",this.draggingItem.style.top=t-this.pointerOffset.y+"px"}dragStop(){const e=[...this.element.children].indexOf(this.placeholder);this.placeholder.replaceWith(this.draggingItem),this.draggingItem.classList.remove("sortable-list__item_dragging"),this.draggingItem.style.left="",this.draggingItem.style.top="",this.draggingItem.style.width="",this.draggingItem.style.height="",document.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("pointerup",this.onPointerUp),this.draggingItem=null,e!==this.itemStartIndex&&this.element.dispatchEvent(new CustomEvent("sortable-list-reorder",{bubbles:!0,details:{from:this.itemStartIndex,to:e}}))}remove(){this.element.remove()}destroy(){this.remove(),document.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("pointerup",this.onPointerMove),this.element=null}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));class n{constructor(e="",{duration:t=2e3,type:s="success"}={}){if(this.type={success:"success",error:"error"}[s],!this.type)throw new Error("Invalid type specified");this.message=e,this.duration=t,this.render()}get template(){return`\n      <div class="notification ${this.type}" style="--value:${(this.duration/1e3).toFixed(0)}s">\n        <div class="inner-wrapper">\n          <div class="notification-body">${this.message}</div>\n        </div>\n        <div class="timer"></div>\n      </div>\n    `}render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild}show(e=document.body){var t;const s=this.constructor.activeComponent;clearTimeout(s.timeoutId),null===(t=s.component)||void 0===t||t.remove(),s.component=e.append(this.element),s.timeoutId=setTimeout(()=>this.remove(),this.duration)}remove(){this.element.remove()}destroy(){this.remove()}}var i,r,o;o={timeoutId:null,component:null},(r="activeComponent")in(i=n)?Object.defineProperty(i,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[r]=o}]]);
//# sourceMappingURL=products-edit-index-js-4.js.map