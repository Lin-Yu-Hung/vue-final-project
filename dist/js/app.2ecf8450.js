(function(){"use strict";var e={4676:function(e,n,t){var r=t(9242),o=t(6265),i=t.n(o),a=t(6423),c=t(3396);function u(e,n,t,r,o,i){const a=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(a)}t(3455);var f={},d=t(89);const l=(0,d.Z)(f,[["render",u]]);var s=l,p=t(2483);const h=[{path:"/login",component:()=>t.e(349).then(t.bind(t,4349))},{path:"/user",component:()=>Promise.all([t.e(746),t.e(208)]).then(t.bind(t,9552)),children:[{path:"index",component:()=>t.e(532).then(t.bind(t,5158))},{path:"productlist",component:()=>Promise.all([t.e(746),t.e(642)]).then(t.bind(t,3188)),props:e=>({query:e.query.query})},{path:"cart",component:()=>t.e(55).then(t.bind(t,5055))},{path:"product/:productId",component:()=>t.e(342).then(t.bind(t,9342))}]},{path:"/dashboard",component:()=>Promise.all([t.e(746),t.e(14)]).then(t.bind(t,2014)),children:[{path:"products",component:()=>Promise.all([t.e(746),t.e(980),t.e(747)]).then(t.bind(t,5697))},{path:"order",component:()=>Promise.all([t.e(746),t.e(980),t.e(696)]).then(t.bind(t,5907))},{path:"coupon",component:()=>Promise.all([t.e(746),t.e(980),t.e(398)]).then(t.bind(t,3702))}]},{path:"/:pathMatch(.*)*",component:()=>t.e(107).then(t.bind(t,4107))}],b=(0,p.p7)({history:(0,p.r5)(),routes:h,linkActiveClass:"active"});var m=b,v=t(5708),g=t(3990),y=t(579),w=t(2389),j=t(6216);function O(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}var k=t(3412),C=t.n(k),P=t(3461),E=t(4677);t(343);(0,v.aH)("required",g.C1),(0,v.aH)("email",g.Do),(0,v.aH)("min",g.VV),(0,v.jQ)({generateMessage:(0,y.NC)({zh_TW:w}),validateOnInput:!0});const S={};(0,y.i_)("zh_TW");const x=(0,r.ri)(s);x.use(C()),x.use(E.ZP,S),x.config.globalProperties.$filters={currency:O},x.use(a.Z,i()),x.use(m),x.component("Loading",j.Z),x.component("Form",v.l0),x.component("Field",v.gN),x.component("ErrorMessage",v.Bc),x.component("Swiper",P.tq),x.component("SwiperSlide",P.o5),x.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{14:"b60108dc",55:"e3bbae11",107:"b2704be3",208:"799fbc0e",342:"f0eef7e5",349:"bdaadd8c",398:"39b5d402",532:"48ead4f9",642:"9482cd48",696:"b3624f46",746:"e6e74917",747:"43063df8",980:"a7542c27"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{14:"b45c3c63",107:"807fc375",208:"ba5ab44d",342:"5e5609dd",398:"3a9bf3b6",532:"d1bfda19",642:"bbc0b3fc",696:"3a9bf3b6",747:"3a9bf3b6"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="final-project:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var c,u;if(void 0!==i)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var l=f[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){c=l;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=r),e[r]=[o];var s=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/vue-final-project/dist/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),c=t.p+a;if(n(a,c))return o();e(r,c,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={14:1,107:1,208:1,342:1,398:1,532:1,642:1,696:1,747:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),c=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],c=r[1],u=r[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var d=u(t)}for(n&&n(r);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},r=self["webpackChunkfinal_project"]=self["webpackChunkfinal_project"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(4676)}));r=t.O(r)})();
//# sourceMappingURL=app.2ecf8450.js.map