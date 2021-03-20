(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return h}));var a=s(14),r=s(10),n=s(9);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class o{constructor({url:e="",range:t={from:new Date,to:new Date},label:s="",link:a="",formatHeading:r=(e=>e),formatTooltip:n=((e,t)=>`<b>${t}</b>`)}={}){i(this,"element",void 0),i(this,"subElements",{}),i(this,"chartHeight",50),i(this,"data",{}),this.url=new URL(e,"https://course-js.javascript.ru/"),this.range=t,this.label=s,this.link=a,this.formatHeading=r,this.formatTooltip=n,this.render(),this.initEventListners(),this.loadData(this.range.from,this.range.to)}get template(){return`\n      <div class="column-chart" style="--chart-height: ${this.chartHeight}">\n        <div class="column-chart__title">\n          ${this.label}\n          ${this.link?`<a href="/${this.link}" class="column-chart__link">Подробнее</a>`:""}\n        </div>\n        <div class="column-chart__container">\n          <div data-element="header" class="column-chart__header">${this.header}</div>\n          <div data-element="body" class="column-chart__chart">${this.body}</div>\n        </div>\n      </div>\n    `}get header(){return this.formatHeading(Object.values(this.data).reduce((e,t)=>e+t,0))}get body(){const e=Object.values(this.data),t=Math.max(...e);return Object.entries(this.data).map(([e,s])=>`\n      <div style="--value: ${Math.floor(s/t*this.chartHeight)}" data-tooltip="${this.formatTooltip(e,s)}"></div>\n    `).join("")}render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements()}initEventListners(){const{body:e}=this.subElements;e.addEventListener("pointerover",t=>{t.target.dataset.tooltip&&(e.classList.add("has-hovered"),t.target.classList.add("is-hovered"))}),e.addEventListener("pointerout",t=>{t.target.dataset.tooltip&&(e.classList.remove("has-hovered"),t.target.classList.remove("is-hovered"))})}getSubElements(){return[...this.element.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}async loadData(e,t){this.element.classList.add("column-chart_loading"),this.subElements.header.innerHTML="",this.subElements.body.innerHTML="",this.url.searchParams.set("from",e.toISOString()),this.url.searchParams.set("to",t.toISOString());const s=await Object(n.a)(this.url);s&&Object.values(s).length&&(this.data=s,this.subElements.header.innerHTML=this.header,this.subElements.body.innerHTML=this.body,this.element.classList.remove("column-chart_loading"))}async update(e,t){return await this.loadData(e,t)}remove(){this.element.remove()}destroy(){this.remove()}}var l=s(11);var d=[{id:"images",title:"Фото",sortable:!1,template:e=>`\n        <div class="sortable-table__cell">\n          <img class="sortable-table-image" alt="Image" src="${e[0].url}">\n        </div>\n      `},{id:"title",title:"Название",sortable:!0,sortType:"string"},{id:"subcategory",title:"Категория",sortable:!0,sortType:"custom",template:e=>{return`\n        <div class="sortable-table__cell">\n          <span data-tooltip="${Object(l.a)((t=e.category.title,s=e.title,`\n  <div class="sortable-table-tooltip">\n    <span class="sortable-table-tooltip__category">${t}</span> / <b class="sortable-table-tooltip__subcategory">${s}</b>\n  </div>\n`))}">${e.title}</span>\n        </div>\n      `;var t,s},customSorting:(e,t)=>e.subcategory.title.localeCompare(t.subcategory.title,["ru","en"],{caseFirst:"upper"})},{id:"quantity",title:"Количество",sortable:!0,sortType:"number"},{id:"price",title:"Цена",sortable:!0,sortType:"number",template:e=>`\n        <div class="sortable-table__cell">\n          <span>$${e}</span>\n        </div>\n      `},{id:"sales",title:"Продажи",sortable:!0,sortType:"number"}];function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class h{constructor(){c(this,"element",void 0),c(this,"subElements",{}),c(this,"components",{})}get template(){return'\n      <div class="dashboard">\n        <div class="content__top-panel">\n          <h2 class="page-title">Панель управления</h2>\n          <div data-element="rangePicker"></div>\n        </div>\n        <div class="dashboard__charts">\n          <div class="dashboard__chart_orders" data-element="ordersChart"></div>\n          <div class="dashboard__chart_sales" data-element="salesChart"></div>\n          <div class="dashboard__chart_customers" data-element="customersChart"></div>\n        </div>\n        <h3 class="block-title">Лидеры продаж</h3>\n        <div data-element="sortableTable"></div>\n      </div>\n    '}render(){const e=document.createElement("div");return e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(),this.initComponents(),this.renderComponents(),this.initEventListners(),this.element}initEventListners(){this.components.rangePicker.element.addEventListener("date-select",e=>{const{from:t,to:s}=e.detail;this.updateComponents(t,s)})}async updateComponents(e,t){const s=new URL("api/dashboard/bestsellers","https://course-js.javascript.ru/");s.searchParams.set("_start",0),s.searchParams.set("_end",30),s.searchParams.set("from",e.toISOString()),s.searchParams.set("to",t.toISOString()),s.searchParams.set("_sort","sales"),s.searchParams.set("_order","desc");const a=await Object(n.a)(s);this.components.sortableTable.update(a),this.components.ordersChart.update(e,t),this.components.salesChart.update(e,t),this.components.customersChart.update(e,t)}initComponents(){const e=new Date,t=new Date;t.setMonth(t.getMonth()-1);const s=new a.a({from:t,to:e}),n=new r.a(d,{url:`api/dashboard/bestsellers?from=${t.toISOString()}&to=${e.toISOString()}`,sorted:{id:"sales",order:"desc"},start:0,end:30,isSortLocally:!0}),i=(e,t)=>`\n      <div>\n        <small>${new Date(e).toLocaleDateString("ru-RU",{year:"numeric",month:"short",day:"numeric"})}</small>\n      </div>\n      <strong>${t}</strong>\n    `,l=new o({url:"api/dashboard/orders",range:{from:t,to:e},label:"Заказы",link:"sales",formatTooltip:i}),c=new o({url:"api/dashboard/sales",range:{from:t,to:e},label:"Продажи",formatHeading:e=>"$"+e.toLocaleString("en-US"),formatTooltip:(e,t)=>`\n        <div>\n          <small>${new Date(e).toLocaleDateString("ru-RU",{year:"numeric",month:"short",day:"numeric"})}</small>\n        </div>\n        <strong>$${t.toLocaleString("en-US")}</strong>\n      `}),h=new o({url:"api/dashboard/customers",range:{from:t,to:e},label:"Клиенты",formatTooltip:i});this.components={rangePicker:s,sortableTable:n,ordersChart:l,salesChart:c,customersChart:h}}renderComponents(){Object.keys(this.components).forEach(e=>{const t=this.subElements[e],{element:s}=this.components[e];t.append(s)})}getSubElements(){return[...this.element.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}remove(){this.element.remove()}destroy(){for(const e of Object.values(this.components))e.destroy();this.remove(),this.element=null,this.subElements=null,this.components=null}}},,,,,function(e,t,s){"use strict";t.a=async function(e,t){let s,r;try{s=await fetch(e.toString(),t)}catch(e){throw new a(s,"Network error has occurred.")}if(!s.ok){let e=s.statusText;try{r=await s.json(),e=r.error&&r.error.message||r.data&&r.data.error&&r.data.error.message||e}catch(e){}let t=`Error ${s.status}: ${e}`;throw new a(s,r,t)}try{return await s.json()}catch(e){throw new a(s,null,e.message)}};class a extends Error{constructor(e,t,s){var a,r,n;super(s),n="FetchError",(r="name")in(a=this)?Object.defineProperty(a,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[r]=n,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",e=>{e.reason instanceof a&&alert(e.reason.message)})},function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var a=s(9);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class n{constructor(e=[],{url:t="",sorted:s={id:e.find(e=>e.sortable).id,order:"asc"},isSortLocally:a=!1,step:n=20,start:i=0,end:o=i+n,placeholder:l="Не найдено"}={}){r(this,"element",void 0),r(this,"subElements",{}),r(this,"data",[]),r(this,"loading",!1),r(this,"onSortClick",e=>{const t=e.target.closest("[data-sortable]");if(t){const{id:e,order:s}=t.dataset,a={asc:"desc",desc:"asc","":"desc"};this.sort(e,a[s])}}),r(this,"onWindowScroll",async()=>{const{bottom:e}=this.element.getBoundingClientRect();if(e<document.documentElement.clientHeight&&!this.loading&&!this.isSortLocally){const{id:e,order:t}=this.sorted;this.start=this.end,this.end=this.start+this.step,this.loading=!0;const s=await this.loadData(e,t,this.start,this.end);this.addRows(s),this.loading=!1}}),this.headerConfig=e,this.url=new URL(t,"https://course-js.javascript.ru/"),this.sorted=s,this.isSortLocally=a,this.step=n,this.start=i,this.end=o,this.placeholder=l,this.render()}async setFilter(e={}){for(const e of this.url.searchParams.keys())this.url.searchParams.delete(e);Object.entries(e).forEach(([e,t])=>{this.url.searchParams.set(e,t)});const{id:t,order:s}=this.sorted;this.start=0,this.end=this.start+this.step,this.subElements.body.innerHTML="",this.data=await this.loadData(t,s,this.start,this.end),this.renderRows(this.data)}get template(){return`\n      <div class="sortable-table">\n        <div data-element="header" class="sortable-table__header sortable-table__row">\n          ${this.getHeader()}\n        </div>\n        <div data-element="body" class="sortable-table__body">\n          ${this.getBody()}\n        </div>\n        <div data-element="loading" class="loading-line sortable-table__loading-line"></div>\n        <div data-element="emptyPlaceholder" class="sortable-table__empty-placeholder">${this.placeholder}</div>\n      </div>\n    `}getHeader(){return this.headerConfig.map(e=>`\n      <div class="sortable-table__cell" data-id="${e.id}" ${e.sortable?"data-sortable":""} data-order="${e.id===this.sorted.id?this.sorted.order:""}">\n        <span>${e.title}</span>\n        <span data-element="arrow" class="sortable-table__sort-arrow">\n          <span class="sort-arrow"></span>\n        </span>\n      </div>\n    `).join("")}getBody(e=[]){return e.map(e=>`\n      <a href="/products/${e.id}" class="sortable-table__row">\n        ${this.getRow(e)}\n      </a>\n    `).join("")}getRow(e){return this.headerConfig.map(t=>t.template?t.template(e[t.id]):`\n      <div class="sortable-table__cell">${e[t.id]}</div>\n    `).join("")}async render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements();const{id:t,order:s}=this.sorted;this.data=await this.loadData(t,s,this.start,this.end),this.renderRows(this.data),this.initEventListners()}renderRows(e){e.length?(this.element.classList.remove("sortable-table_empty"),this.subElements.body.innerHTML=this.getBody(e)):this.element.classList.add("sortable-table_empty")}getSubElements(){return[...this.element.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}initEventListners(){this.subElements.header.addEventListener("pointerdown",this.onSortClick),document.addEventListener("scroll",this.onWindowScroll)}async loadData(e,t,s,r){this.url.searchParams.set("_sort",e),this.url.searchParams.set("_order",t),this.url.searchParams.set("_start",s),this.url.searchParams.set("_end",r),this.element.classList.add("sortable-table_loading");const n=await Object(a.a)(this.url);return this.element.classList.remove("sortable-table_loading"),n}sort(e,t){this.sorted={id:e,order:t},this.subElements.header.querySelectorAll("[data-sortable]").forEach(s=>{s.dataset.order=s.dataset.id===e?t:""}),this.isSortLocally?this.sortLocally(e,t):this.sortOnServer(e,t,1,1+this.step)}sortLocally(e,t){const s=this.sortData(e,t);this.renderRows(s)}async sortOnServer(e,t,s,a){this.data=await this.loadData(e,t,s,a),this.renderRows(this.data)}sortData(e,t){const s={asc:1,desc:-1}[t];if(!s)return this.data;const a=this.headerConfig.find(t=>t.id===e),{sortType:r,customSorting:n}=a;return[...this.data].sort((t,a)=>{switch(r){case"string":return s*t[e].localeCompare(a[e],["ru","en"],{caseFirst:"upper"});case"number":return s*(t[e]-a[e]);case"custom":return s*n(t,a);default:return s*(t[e]-a[e])}})}addRows(e){this.data.push(...e);const t=document.createElement("div");t.innerHTML=this.getBody(e),this.subElements.body.append(...t.childNodes)}update(e){this.data=e,this.renderRows(this.data)}remove(){this.element.remove()}destroy(){this.remove(),document.removeEventListener("scroll",this.onWindowScroll),this.subElements={}}}},function(e,t,s){"use strict";t.a=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},,,function(e,t,s){"use strict";function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",(function(){return r}));class r{static formatDate(e){return e.toLocaleString("ru",{dateStyle:"short"})}constructor({from:e=new Date,to:t=new Date}={}){a(this,"element",null),a(this,"subElements",{}),a(this,"selectingFrom",!0),a(this,"selected",{from:new Date,to:new Date}),a(this,"onDocumentClick",e=>{const t=this.element.classList.contains("rangepicker_open"),s=this.element.contains(e.target);t&&!s&&this.close()}),this.showDateFrom=new Date(e),this.selected={from:e,to:t},this.render()}get template(){return`<div class="rangepicker">\n      <div class="rangepicker__input" data-element="input">\n        <span data-element="from">${r.formatDate(this.selected.from)}</span> -\n        <span data-element="to">${r.formatDate(this.selected.to)}</span>\n      </div>\n      <div class="rangepicker__selector" data-element="selector"></div>\n    </div>`}render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(e),this.initEventListeners()}getSubElements(e){const t={};for(const s of e.querySelectorAll("[data-element]"))t[s.dataset.element]=s;return t}initEventListeners(){const{input:e,selector:t}=this.subElements;document.addEventListener("click",this.onDocumentClick,!0),e.addEventListener("click",()=>this.toggle()),t.addEventListener("click",e=>this.onSelectorClick(e))}toggle(){this.element.classList.toggle("rangepicker_open"),this.renderDateRangePicker()}onSelectorClick({target:e}){e.classList.contains("rangepicker__cell")&&this.onRangePickerCellClick(e)}close(){this.element.classList.remove("rangepicker_open")}renderDateRangePicker(){const e=new Date(this.showDateFrom),t=new Date(this.showDateFrom),{selector:s}=this.subElements;t.setMonth(t.getMonth()+1),s.innerHTML=`\n      <div class="rangepicker__selector-arrow"></div>\n      <div class="rangepicker__selector-control-left"></div>\n      <div class="rangepicker__selector-control-right"></div>\n      ${this.renderCalendar(e)}\n      ${this.renderCalendar(t)}\n    `;const a=s.querySelector(".rangepicker__selector-control-left"),r=s.querySelector(".rangepicker__selector-control-right");a.addEventListener("click",()=>this.prev()),r.addEventListener("click",()=>this.next()),this.renderHighlight()}prev(){this.showDateFrom.setMonth(this.showDateFrom.getMonth()-1),this.renderDateRangePicker()}next(){this.showDateFrom.setMonth(this.showDateFrom.getMonth()+1),this.renderDateRangePicker()}renderHighlight(){const{from:e,to:t}=this.selected;for(const s of this.element.querySelectorAll(".rangepicker__cell")){const{value:a}=s.dataset,r=new Date(a);s.classList.remove("rangepicker__selected-from"),s.classList.remove("rangepicker__selected-between"),s.classList.remove("rangepicker__selected-to"),e&&a===e.toISOString()?s.classList.add("rangepicker__selected-from"):t&&a===t.toISOString()?s.classList.add("rangepicker__selected-to"):e&&t&&r>=e&&r<=t&&s.classList.add("rangepicker__selected-between")}if(e){const t=this.element.querySelector(`[data-value="${e.toISOString()}"]`);t&&t.closest(".rangepicker__cell").classList.add("rangepicker__selected-from")}if(t){const e=this.element.querySelector(`[data-value="${t.toISOString()}"]`);e&&e.closest(".rangepicker__cell").classList.add("rangepicker__selected-to")}}renderCalendar(e){const t=new Date(e);t.setDate(1);const s=t.toLocaleString("ru",{month:"long"});let a=`<div class="rangepicker__calendar">\n      <div class="rangepicker__month-indicator">\n        <time datetime=${s}>${s}</time>\n      </div>\n      <div class="rangepicker__day-of-week">\n        <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div><div>Вс</div>\n      </div>\n      <div class="rangepicker__date-grid">\n    `;var r;for(a+=`\n      <button type="button"\n        class="rangepicker__cell"\n        data-value="${t.toISOString()}"\n        style="--start-from: ${r=t.getDay(),1+(0===r?6:r-1)}">\n          ${t.getDate()}\n      </button>`,t.setDate(2);t.getMonth()===e.getMonth();)a+=`\n        <button type="button"\n          class="rangepicker__cell"\n          data-value="${t.toISOString()}">\n            ${t.getDate()}\n        </button>`,t.setDate(t.getDate()+1);return a+="</div></div>",a}onRangePickerCellClick(e){const{value:t}=e.dataset;if(t){const e=new Date(t);this.selectingFrom?(this.selected={from:e,to:null},this.selectingFrom=!1,this.renderHighlight()):(e>this.selected.from?this.selected.to=e:(this.selected.to=this.selected.from,this.selected.from=e),this.selectingFrom=!0,this.renderHighlight()),this.selected.from&&this.selected.to&&(this.dispatchEvent(),this.close(),this.subElements.from.innerHTML=r.formatDate(this.selected.from),this.subElements.to.innerHTML=r.formatDate(this.selected.to))}}dispatchEvent(){this.element.dispatchEvent(new CustomEvent("date-select",{bubbles:!0,detail:this.selected}))}remove(){this.element.remove(),document.removeEventListener("click",this.onDocumentClick,!0)}destroy(){return this.remove(),this.element=null,this.subElements={},this.selectingFrom=!0,this.selected={from:new Date,to:new Date},this}}}]]);
//# sourceMappingURL=dashboard-index-js-2.js.map