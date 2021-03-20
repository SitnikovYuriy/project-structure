(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{10:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var n=s(9);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class i{constructor(e=[],{url:t="",sorted:s={id:e.find(e=>e.sortable).id,order:"asc"},isSortLocally:n=!1,step:i=20,start:a=0,end:o=a+i,placeholder:l="Не найдено"}={}){r(this,"element",void 0),r(this,"subElements",{}),r(this,"data",[]),r(this,"loading",!1),r(this,"onSortClick",e=>{const t=e.target.closest("[data-sortable]");if(t){const{id:e,order:s}=t.dataset,n={asc:"desc",desc:"asc","":"desc"};this.sort(e,n[s])}}),r(this,"onWindowScroll",async()=>{const{bottom:e}=this.element.getBoundingClientRect();if(e<document.documentElement.clientHeight&&!this.loading&&!this.isSortLocally){const{id:e,order:t}=this.sorted;this.start=this.end,this.end=this.start+this.step,this.loading=!0;const s=await this.loadData(e,t,this.start,this.end);this.addRows(s),this.loading=!1}}),this.headerConfig=e,this.url=new URL(t,"https://course-js.javascript.ru/"),this.sorted=s,this.isSortLocally=n,this.step=i,this.start=a,this.end=o,this.placeholder=l,this.render()}async setFilter(e={}){for(const e of this.url.searchParams.keys())this.url.searchParams.delete(e);Object.entries(e).forEach(([e,t])=>{this.url.searchParams.set(e,t)});const{id:t,order:s}=this.sorted;this.start=0,this.end=this.start+this.step,this.subElements.body.innerHTML="",this.data=await this.loadData(t,s,this.start,this.end),this.renderRows(this.data)}get template(){return`\n      <div class="sortable-table">\n        <div data-element="header" class="sortable-table__header sortable-table__row">\n          ${this.getHeader()}\n        </div>\n        <div data-element="body" class="sortable-table__body">\n          ${this.getBody()}\n        </div>\n        <div data-element="loading" class="loading-line sortable-table__loading-line"></div>\n        <div data-element="emptyPlaceholder" class="sortable-table__empty-placeholder">${this.placeholder}</div>\n      </div>\n    `}getHeader(){return this.headerConfig.map(e=>`\n      <div class="sortable-table__cell" data-id="${e.id}" ${e.sortable?"data-sortable":""} data-order="${e.id===this.sorted.id?this.sorted.order:""}">\n        <span>${e.title}</span>\n        <span data-element="arrow" class="sortable-table__sort-arrow">\n          <span class="sort-arrow"></span>\n        </span>\n      </div>\n    `).join("")}getBody(e=[]){return e.map(e=>`\n      <a href="/products/${e.id}" class="sortable-table__row">\n        ${this.getRow(e)}\n      </a>\n    `).join("")}getRow(e){return this.headerConfig.map(t=>t.template?t.template(e[t.id]):`\n      <div class="sortable-table__cell">${e[t.id]}</div>\n    `).join("")}async render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements();const{id:t,order:s}=this.sorted;this.data=await this.loadData(t,s,this.start,this.end),this.renderRows(this.data),this.initEventListners()}renderRows(e){e.length?(this.element.classList.remove("sortable-table_empty"),this.subElements.body.innerHTML=this.getBody(e)):this.element.classList.add("sortable-table_empty")}getSubElements(){return[...this.element.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}initEventListners(){this.subElements.header.addEventListener("pointerdown",this.onSortClick),document.addEventListener("scroll",this.onWindowScroll)}async loadData(e,t,s,r){this.url.searchParams.set("_sort",e),this.url.searchParams.set("_order",t),this.url.searchParams.set("_start",s),this.url.searchParams.set("_end",r),this.element.classList.add("sortable-table_loading");const i=await Object(n.a)(this.url);return this.element.classList.remove("sortable-table_loading"),i}sort(e,t){this.sorted={id:e,order:t},this.subElements.header.querySelectorAll("[data-sortable]").forEach(s=>{s.dataset.order=s.dataset.id===e?t:""}),this.isSortLocally?this.sortLocally(e,t):this.sortOnServer(e,t,1,1+this.step)}sortLocally(e,t){const s=this.sortData(e,t);this.renderRows(s)}async sortOnServer(e,t,s,n){this.data=await this.loadData(e,t,s,n),this.renderRows(this.data)}sortData(e,t){const s={asc:1,desc:-1}[t];if(!s)return this.data;const n=this.headerConfig.find(t=>t.id===e),{sortType:r,customSorting:i}=n;return[...this.data].sort((t,n)=>{switch(r){case"string":return s*t[e].localeCompare(n[e],["ru","en"],{caseFirst:"upper"});case"number":return s*(t[e]-n[e]);case"custom":return s*i(t,n);default:return s*(t[e]-n[e])}})}addRows(e){this.data.push(...e);const t=document.createElement("div");t.innerHTML=this.getBody(e),this.subElements.body.append(...t.childNodes)}update(e){this.data=e,this.renderRows(this.data)}remove(){this.element.remove()}destroy(){this.remove(),document.removeEventListener("scroll",this.onWindowScroll),this.subElements={}}}},14:function(e,t,s){"use strict";function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",(function(){return r}));class r{static formatDate(e){return e.toLocaleString("ru",{dateStyle:"short"})}constructor({from:e=new Date,to:t=new Date}={}){n(this,"element",null),n(this,"subElements",{}),n(this,"selectingFrom",!0),n(this,"selected",{from:new Date,to:new Date}),n(this,"onDocumentClick",e=>{const t=this.element.classList.contains("rangepicker_open"),s=this.element.contains(e.target);t&&!s&&this.close()}),this.showDateFrom=new Date(e),this.selected={from:e,to:t},this.render()}get template(){return`<div class="rangepicker">\n      <div class="rangepicker__input" data-element="input">\n        <span data-element="from">${r.formatDate(this.selected.from)}</span> -\n        <span data-element="to">${r.formatDate(this.selected.to)}</span>\n      </div>\n      <div class="rangepicker__selector" data-element="selector"></div>\n    </div>`}render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(e),this.initEventListeners()}getSubElements(e){const t={};for(const s of e.querySelectorAll("[data-element]"))t[s.dataset.element]=s;return t}initEventListeners(){const{input:e,selector:t}=this.subElements;document.addEventListener("click",this.onDocumentClick,!0),e.addEventListener("click",()=>this.toggle()),t.addEventListener("click",e=>this.onSelectorClick(e))}toggle(){this.element.classList.toggle("rangepicker_open"),this.renderDateRangePicker()}onSelectorClick({target:e}){e.classList.contains("rangepicker__cell")&&this.onRangePickerCellClick(e)}close(){this.element.classList.remove("rangepicker_open")}renderDateRangePicker(){const e=new Date(this.showDateFrom),t=new Date(this.showDateFrom),{selector:s}=this.subElements;t.setMonth(t.getMonth()+1),s.innerHTML=`\n      <div class="rangepicker__selector-arrow"></div>\n      <div class="rangepicker__selector-control-left"></div>\n      <div class="rangepicker__selector-control-right"></div>\n      ${this.renderCalendar(e)}\n      ${this.renderCalendar(t)}\n    `;const n=s.querySelector(".rangepicker__selector-control-left"),r=s.querySelector(".rangepicker__selector-control-right");n.addEventListener("click",()=>this.prev()),r.addEventListener("click",()=>this.next()),this.renderHighlight()}prev(){this.showDateFrom.setMonth(this.showDateFrom.getMonth()-1),this.renderDateRangePicker()}next(){this.showDateFrom.setMonth(this.showDateFrom.getMonth()+1),this.renderDateRangePicker()}renderHighlight(){const{from:e,to:t}=this.selected;for(const s of this.element.querySelectorAll(".rangepicker__cell")){const{value:n}=s.dataset,r=new Date(n);s.classList.remove("rangepicker__selected-from"),s.classList.remove("rangepicker__selected-between"),s.classList.remove("rangepicker__selected-to"),e&&n===e.toISOString()?s.classList.add("rangepicker__selected-from"):t&&n===t.toISOString()?s.classList.add("rangepicker__selected-to"):e&&t&&r>=e&&r<=t&&s.classList.add("rangepicker__selected-between")}if(e){const t=this.element.querySelector(`[data-value="${e.toISOString()}"]`);t&&t.closest(".rangepicker__cell").classList.add("rangepicker__selected-from")}if(t){const e=this.element.querySelector(`[data-value="${t.toISOString()}"]`);e&&e.closest(".rangepicker__cell").classList.add("rangepicker__selected-to")}}renderCalendar(e){const t=new Date(e);t.setDate(1);const s=t.toLocaleString("ru",{month:"long"});let n=`<div class="rangepicker__calendar">\n      <div class="rangepicker__month-indicator">\n        <time datetime=${s}>${s}</time>\n      </div>\n      <div class="rangepicker__day-of-week">\n        <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div><div>Вс</div>\n      </div>\n      <div class="rangepicker__date-grid">\n    `;var r;for(n+=`\n      <button type="button"\n        class="rangepicker__cell"\n        data-value="${t.toISOString()}"\n        style="--start-from: ${r=t.getDay(),1+(0===r?6:r-1)}">\n          ${t.getDate()}\n      </button>`,t.setDate(2);t.getMonth()===e.getMonth();)n+=`\n        <button type="button"\n          class="rangepicker__cell"\n          data-value="${t.toISOString()}">\n            ${t.getDate()}\n        </button>`,t.setDate(t.getDate()+1);return n+="</div></div>",n}onRangePickerCellClick(e){const{value:t}=e.dataset;if(t){const e=new Date(t);this.selectingFrom?(this.selected={from:e,to:null},this.selectingFrom=!1,this.renderHighlight()):(e>this.selected.from?this.selected.to=e:(this.selected.to=this.selected.from,this.selected.from=e),this.selectingFrom=!0,this.renderHighlight()),this.selected.from&&this.selected.to&&(this.dispatchEvent(),this.close(),this.subElements.from.innerHTML=r.formatDate(this.selected.from),this.subElements.to.innerHTML=r.formatDate(this.selected.to))}}dispatchEvent(){this.element.dispatchEvent(new CustomEvent("date-select",{bubbles:!0,detail:this.selected}))}remove(){this.element.remove(),document.removeEventListener("click",this.onDocumentClick,!0)}destroy(){return this.remove(),this.element=null,this.subElements={},this.selectingFrom=!0,this.selected={from:new Date,to:new Date},this}}},8:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return o}));var n=s(14),r=s(10);var i=[{id:"id",title:"ID",sortable:!0,sortType:"number"},{id:"user",title:"Клиент",sortable:!0,sortType:"string"},{id:"createdAt",title:"Дата",sortable:!0,sortType:"custom",customSorting:(e,t)=>new Date(t.createdAt)-new Date(e.createdAt),template:e=>`\n      <div class="sortable-table__cell">\n        ${new Date(e).toLocaleDateString("ru-RU",{year:"numeric",month:"short",day:"numeric"})}\n      </div>\n    `},{id:"totalCost",title:"Стоимость",sortable:!0,sortType:"number",template:e=>`\n      <div class="sortable-table__cell">\n        $${e.toLocaleString("en-US")}\n      </div>\n    `},{id:"delivery",title:"Статус",sortable:!0,sortType:"string"}];function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class o{constructor(){a(this,"element",void 0),a(this,"subElements",{}),a(this,"components",{})}get template(){return'\n      <div class="sales">\n        <div class="content__top-panel">\n          <h2 class="page-title">Продажи</h2>\n          <div data-element="rangePicker"></div>\n        </div>\n        <div data-element="ordersContainer"></div>\n      </div>\n    '}render(){const e=document.createElement("div");return e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(),this.initComponents(),this.renderComponents(),this.initEventListners(),this.element}initComponents(){const e=new Date,t=new Date;t.setMonth(t.getMonth()-1);const s=new n.a({from:t,to:e}),a=new r.a(i,{url:`api/rest/orders?createdAt_gte=${t.toISOString()}&createdAt_lte=${e.toISOString()}`,sorted:{id:"createdAt",order:"desc"}});this.components={rangePicker:s,ordersContainer:a}}renderComponents(){Object.keys(this.components).forEach(e=>{const t=this.subElements[e],{element:s}=this.components[e];t.append(s)})}initEventListners(){this.components.rangePicker.element.addEventListener("date-select",e=>{const{from:t,to:s}=e.detail;this.updateComponents(t,s)})}updateComponents(e,t){this.components.ordersContainer.setFilter({createdAt_gte:e.toISOString(),createdAt_lte:t.toISOString()})}getSubElements(){return[...this.element.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}remove(){this.element.remove()}destroy(){for(const e of Object.values(this.components))e.destroy();this.remove(),this.element=null,this.subElements=null,this.components=null}}},9:function(e,t,s){"use strict";t.a=async function(e,t){let s,r;try{s=await fetch(e.toString(),t)}catch(e){throw new n(s,"Network error has occurred.")}if(!s.ok){let e=s.statusText;try{r=await s.json(),e=r.error&&r.error.message||r.data&&r.data.error&&r.data.error.message||e}catch(e){}let t=`Error ${s.status}: ${e}`;throw new n(s,r,t)}try{return await s.json()}catch(e){throw new n(s,null,e.message)}};class n extends Error{constructor(e,t,s){var n,r,i;super(s),i="FetchError",(r="name")in(n=this)?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",e=>{e.reason instanceof n&&alert(e.reason.message)})}}]);
//# sourceMappingURL=sales-index-js-6.js.map