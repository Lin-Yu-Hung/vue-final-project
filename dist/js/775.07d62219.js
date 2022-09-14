(self["webpackChunkfinal_project"]=self["webpackChunkfinal_project"]||[]).push([[775],{8803:function(t,e,s){s(1703),
/*!
  * Bootstrap toast.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,i){t.exports=i(s(1437),s(4130),s(1884),s(9069))}(0,(function(t,e,s,i){"use strict";const n=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},a=n(e),o=n(s),r="toast",l="bs.toast",c=`.${l}`,u=`mouseover${c}`,d=`mouseout${c}`,h=`focusin${c}`,m=`focusout${c}`,_=`hide${c}`,f=`hidden${c}`,p=`show${c}`,g=`shown${c}`,w="fade",v="hide",b="show",y="showing",D={animation:"boolean",autohide:"boolean",delay:"number"},L={animation:!0,autohide:!0,delay:5e3};class k extends o.default{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return L}static get DefaultType(){return D}static get NAME(){return r}show(){const e=a.default.trigger(this._element,p);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(w);const s=()=>{this._element.classList.remove(y),a.default.trigger(this._element,g),this._maybeScheduleHide()};this._element.classList.remove(v),t.reflow(this._element),this._element.classList.add(b,y),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=a.default.trigger(this._element,_);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(v),this._element.classList.remove(y,b),a.default.trigger(this._element,f)};this._element.classList.add(y),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(b),super.dispose()}isShown(){return this._element.classList.contains(b)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){a.default.on(this._element,u,(t=>this._onInteraction(t,!0))),a.default.on(this._element,d,(t=>this._onInteraction(t,!1))),a.default.on(this._element,h,(t=>this._onInteraction(t,!0))),a.default.on(this._element,m,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=k.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return i.enableDismissTrigger(k),t.defineJQueryPlugin(k),k}))},8557:function(t,e,s){"use strict";function i(t){return{all:t=t||new Map,on:function(e,s){var i=t.get(e);i?i.push(s):t.set(e,[s])},off:function(e,s){var i=t.get(e);i&&(s?i.splice(i.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var i=t.get(e);i&&i.slice().map((function(t){t(s)})),(i=t.get("*"))&&i.slice().map((function(t){t(e,s)}))}}}s.d(e,{Z:function(){return a}});const n=i();var a=n},43:function(t,e,s){"use strict";s.d(e,{Z:function(){return y}});var i=s(3396);const n={class:"toast-container position-absolute pe-3 top-0 end-0"};function a(t,e,s,a,o,r){const l=(0,i.up)("Toast");return(0,i.wg)(),(0,i.iD)("div",n,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.messages,((t,e)=>((0,i.wg)(),(0,i.j4)(l,{key:e,msg:t},null,8,["msg"])))),128))])}var o=s(7139);const r={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},l={class:"toast-header"},c={class:"me-auto"},u=(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),d={key:0,class:"toast-body"};function h(t,e,s,n,a,h){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",l,[(0,i._)("span",{class:(0,o.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,i._)("strong",c,(0,o.zw)(s.msg.title),1),u]),s.msg.content?((0,i.wg)(),(0,i.iD)("div",d,(0,o.zw)(s.msg.content),1)):(0,i.kq)("",!0)],512)}var m=s(8803),_=s.n(m),f={name:"Toast",props:["msg"],mounted(){const t=this.$refs.toast,e=new(_())(t,{delay:6e3});e.show()}},p=s(89);const g=(0,p.Z)(f,[["render",h]]);var w=g,v={components:{Toast:w},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e="success",title:s,content:i}=t;this.messages.push({style:e,title:s,content:i})}))}};const b=(0,p.Z)(v,[["render",a]]);var y=b},4775:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return S}});var i=s(3396),n=s(7139);const a={class:"header"},o={class:"header"},r=(0,i._)("img",{src:"https://dlcdnwebimgs.asus.com/gain/F3ADB159-24F6-4C9C-941A-BB998C7F5682/fwebp",alt:""},null,-1),l=(0,i._)("a",{href:"https://www.asus.com/tw/events/infoM/3472/"},[(0,i._)("img",{src:"https://www.asus.com/events/eventes/epic/3472_1900.jpg",alt:""})],-1),c=(0,i._)("img",{src:"https://dlcdnwebimgs.asus.com/gain/FA0E1264-D4F9-40F6-9861-CD60D40C24CF/fwebp",alt:""},null,-1),u={class:"product"},d=(0,i.uE)('<div class="list"><nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="#">Home</a></li><li class="breadcrumb-item active" aria-current="page">Library</li></ol></nav><div class="card" style="width:100%;"><div class="card-header">Featured</div><ul class="list-group list-group-flush"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li></ul></div></div>',1),h={class:"productList"},m=["src"],_={class:"card-body"},f={class:"card-title"},p={class:"card-text"},g={class:"origin-price"},w={class:"price"},v={class:"footer-button"},b={class:"detail"},y=["onClick"],D=(0,i._)("div",{class:"add-cart"},[(0,i._)("button",{class:"btn btn-primary"},"加入購物車")],-1);function L(t,e,s,L,k,$){const C=(0,i.up)("Loading"),I=(0,i.up)("ToastMessage"),T=(0,i.up)("router-view"),F=(0,i.up)("swiper-slide"),W=(0,i.up)("swiper"),P=(0,i.up)("marquee"),M=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(C,{active:k.isLoading},null,8,["active"]),(0,i.Wm)(I),(0,i.Wm)(T),(0,i._)("section",a,[(0,i._)("div",o,[(0,i.Wm)(W,{spaceBetween:30,modules:L.modules,class:"mySwiper",loop:!0,autoplay:{delay:2500,disableOnInteraction:!1}},{default:(0,i.w5)((()=>[(0,i.Wm)(F,null,{default:(0,i.w5)((()=>[r])),_:1}),(0,i.Wm)(F,null,{default:(0,i.w5)((()=>[l])),_:1}),(0,i.Wm)(F,null,{default:(0,i.w5)((()=>[c])),_:1})])),_:1},8,["modules"])])]),(0,i._)("section",u,[d,(0,i._)("div",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.Products,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"card",style:{width:"17rem"},key:t.id},[(0,i._)("img",{src:t.imageUrl,class:"card-img-top",alt:"..."},null,8,m),(0,i._)("div",_,[(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.content),1)])),_:2},1024),(0,i._)("h5",f,(0,n.zw)(t.title),1),(0,i._)("div",p,[(0,i._)("small",g,"原價"+(0,n.zw)(t.origin_price),1),(0,i._)("p",w,"優惠價$"+(0,n.zw)(t.price),1)]),(0,i._)("div",v,[(0,i._)("div",b,[(0,i._)("button",{class:"btn btn-secondary",onClick:e=>$.ProductDetail(t.id)}," 詳細資訊 ",8,y)]),D])])])))),128))])]),(0,i.Wm)(M)],64)}var k=s(8170),$=s(8557),C=s(43);const I={class:"bg-dark"},T=(0,i._)("h1",null,"我是footer",-1),F=[T];function W(t,e,s,n,a,o){return(0,i.wg)(),(0,i.iD)("footer",I,F)}var P={},M=s(89);const Z=(0,M.Z)(P,[["render",W]]);var j=Z,A={data(){return{Products:{},isLoading:!1}},setup(){return{modules:[k.pt,k.tl,k.W_,k.lI]}},components:{ToastMessage:C.Z,Footer:j},provide(){return{emitter:$.Z}},methods:{getData(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/toad-api/products/all";this.$http.get(t).then((t=>{t.data.success&&(this.Products=t.data.products,this.isLoading=!1,console.log(this.Products))}))},ProductDetail(t){this.$router.push(`/user/product/${t}`)}},created(){this.getData()}};const H=(0,M.Z)(A,[["render",L]]);var S=H}}]);
//# sourceMappingURL=775.07d62219.js.map