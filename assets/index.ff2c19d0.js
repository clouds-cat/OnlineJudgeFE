import{ac as e,o as t,a as r,b as s,F as o,ad as a,ab as i,c as n,M as m,X as l}from"./@vue.fdf15af0.js";import{a0 as p}from"./@ant-design.13703ba0.js";import{c,a as d}from"./vue-router.9e99a420.js";import{c as f}from"./vuex.b181c63a.js";import{i as u}from"./element-plus.91e4b9a1.js";import{A as b}from"./ant-design-vue.4c2f3e21.js";import{V as _,g as h,d as j,_ as v}from"./@kangc.dfd4c328.js";import{H as E}from"./highlight.js.61bffb66.js";import{e as L}from"./echarts.2fe7d5ce.js";import"./@babel.779edfb1.js";import"./@ctrl.837ec117.js";import"./lodash-es.3f39f82c.js";import"./@vueuse.aefaf066.js";import"./@element-plus.52d5c579.js";import"./dayjs.0955ecba.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.57bb965d.js";import"./normalize-wheel-es.1c4ac15a.js";import"./@floating-ui.cba15af0.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.6e6d84ba.js";import"./dom-align.243fa364.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue.d9a5518d.js";import"./copy-to-clipboard.ea1d059a.js";import"./toggle-selection.0bb833ce.js";import"./tslib.60310f1a.js";import"./zrender.528e6a54.js";var g=(e,t)=>{const r=e.__vccOpts||e;for(const[s,o]of t)r[s]=o;return r};const y={name:"footer",components:{HeartFilled:p},data:()=>({footerList:[{label:"ABOUT US",url:""},{label:"HELP",url:""},{label:"LICENSES",url:""},{label:"BLOG",url:""}],urlGreatMan:""}),mounted(){},methods:{}},O={class:"footers-wrapper"},P={class:"footers-wrapper-left"},w=["href"],I=m(" @2022 , made with by "),A=m(),T=["href"],V=m(" for a better web ");var D=g({components:{footers:g(y,[["render",function(m,l,p,c,d,f){const u=e("heart-filled");return t(),r("div",O,[s("div",P,[(t(!0),r(o,null,a(d.footerList,((e,o)=>(t(),r("div",{class:"footers-wrapper-left-item",key:o},[s("a",{href:e.url},i(e.label),9,w)])))),128))]),s("div",null,[I,n(u),A,s("a",{href:d.urlGreatMan},"Great Man",8,T),V])])}],["__scopeId","data-v-ba6c541c"]])}},[["render",function(s,a,i,m,l,p){const c=e("router-view"),d=e("footers");return t(),r(o,null,[n(c),n(d,{style:{"margin-top":"10vh"}})],64)}]]);let R;const z={},k=function(e,t){if(!t)return e();if(void 0===R){const e=document.createElement("link").relList;R=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in z)return;z[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":R,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},x=[{path:"/admin",redirect:"/admin/home",beforeEnter:(e,t,r)=>{},children:[]},{path:"/",redirect:"/test",component:()=>k((()=>import("./OJ.a44b28b4.js")),["/assets/OJ.a44b28b4.js","/assets/OJ.c9da0588.css","/assets/@vue.fdf15af0.js","/assets/@babel.779edfb1.js","/assets/@ant-design.13703ba0.js","/assets/@ctrl.837ec117.js","/assets/vue-router.9e99a420.js","/assets/vuex.b181c63a.js","/assets/element-plus.91e4b9a1.js","/assets/element-plus.0a5a8557.css","/assets/lodash-es.3f39f82c.js","/assets/@vueuse.aefaf066.js","/assets/@element-plus.52d5c579.js","/assets/dayjs.0955ecba.js","/assets/async-validator.fb49d0f5.js","/assets/memoize-one.4ee5c96d.js","/assets/escape-html.57bb965d.js","/assets/normalize-wheel-es.1c4ac15a.js","/assets/@floating-ui.cba15af0.js","/assets/ant-design-vue.4c2f3e21.js","/assets/ant-design-vue.e396ed58.css","/assets/resize-observer-polyfill.f664b406.js","/assets/vue-types.6e6d84ba.js","/assets/dom-align.243fa364.js","/assets/scroll-into-view-if-needed.5191fdbf.js","/assets/compute-scroll-into-view.6058b3be.js","/assets/@kangc.dfd4c328.js","/assets/@kangc.cb90f61d.css","/assets/vue.d9a5518d.js","/assets/copy-to-clipboard.ea1d059a.js","/assets/toggle-selection.0bb833ce.js","/assets/highlight.js.61bffb66.js","/assets/echarts.2fe7d5ce.js","/assets/tslib.60310f1a.js","/assets/zrender.528e6a54.js"]),children:[{path:"/index",meta:{},component:()=>k((()=>import("./index.4eae2b6d.js")),["/assets/index.4eae2b6d.js","/assets/index.fc70801c.css","/assets/@ant-design.13703ba0.js","/assets/@vue.fdf15af0.js","/assets/@babel.779edfb1.js","/assets/@ctrl.837ec117.js","/assets/vue-router.9e99a420.js","/assets/vuex.b181c63a.js","/assets/element-plus.91e4b9a1.js","/assets/element-plus.0a5a8557.css","/assets/lodash-es.3f39f82c.js","/assets/@vueuse.aefaf066.js","/assets/@element-plus.52d5c579.js","/assets/dayjs.0955ecba.js","/assets/async-validator.fb49d0f5.js","/assets/memoize-one.4ee5c96d.js","/assets/escape-html.57bb965d.js","/assets/normalize-wheel-es.1c4ac15a.js","/assets/@floating-ui.cba15af0.js","/assets/ant-design-vue.4c2f3e21.js","/assets/ant-design-vue.e396ed58.css","/assets/resize-observer-polyfill.f664b406.js","/assets/vue-types.6e6d84ba.js","/assets/dom-align.243fa364.js","/assets/scroll-into-view-if-needed.5191fdbf.js","/assets/compute-scroll-into-view.6058b3be.js","/assets/@kangc.dfd4c328.js","/assets/@kangc.cb90f61d.css","/assets/vue.d9a5518d.js","/assets/copy-to-clipboard.ea1d059a.js","/assets/toggle-selection.0bb833ce.js","/assets/highlight.js.61bffb66.js","/assets/echarts.2fe7d5ce.js","/assets/tslib.60310f1a.js","/assets/zrender.528e6a54.js"])},{path:"/test",meta:{},component:()=>k((()=>import("./test.905cbaac.js")),["/assets/test.905cbaac.js","/assets/test.9b2af9fe.css","/assets/ProblemEcharts.c1e96579.js","/assets/ProblemEcharts.5ad01a73.css","/assets/vue-codemirror.eadda7dd.js","/assets/codemirror.44ab372b.js","/assets/@codemirror.f49f4e1a.js","/assets/@lezer.e17d3211.js","/assets/crelt.67277586.js","/assets/style-mod.a2e40363.js","/assets/w3c-keyname.490704ff.js","/assets/@vue.fdf15af0.js","/assets/@babel.779edfb1.js","/assets/ant-design-vue.4c2f3e21.js","/assets/ant-design-vue.e396ed58.css","/assets/resize-observer-polyfill.f664b406.js","/assets/vue-types.6e6d84ba.js","/assets/@ant-design.13703ba0.js","/assets/@ctrl.837ec117.js","/assets/dom-align.243fa364.js","/assets/lodash-es.3f39f82c.js","/assets/dayjs.0955ecba.js","/assets/async-validator.fb49d0f5.js","/assets/scroll-into-view-if-needed.5191fdbf.js","/assets/compute-scroll-into-view.6058b3be.js","/assets/vue-router.9e99a420.js","/assets/vuex.b181c63a.js","/assets/element-plus.91e4b9a1.js","/assets/element-plus.0a5a8557.css","/assets/@vueuse.aefaf066.js","/assets/@element-plus.52d5c579.js","/assets/memoize-one.4ee5c96d.js","/assets/escape-html.57bb965d.js","/assets/normalize-wheel-es.1c4ac15a.js","/assets/@floating-ui.cba15af0.js","/assets/@kangc.dfd4c328.js","/assets/@kangc.cb90f61d.css","/assets/vue.d9a5518d.js","/assets/copy-to-clipboard.ea1d059a.js","/assets/toggle-selection.0bb833ce.js","/assets/highlight.js.61bffb66.js","/assets/echarts.2fe7d5ce.js","/assets/tslib.60310f1a.js","/assets/zrender.528e6a54.js"])},{path:"/test1",meta:{},component:()=>k((()=>import("./test1.d42c6887.js")),["/assets/test1.d42c6887.js","/assets/test.9b2af9fe.css","/assets/ProblemEcharts.c1e96579.js","/assets/ProblemEcharts.5ad01a73.css","/assets/vue-codemirror.eadda7dd.js","/assets/codemirror.44ab372b.js","/assets/@codemirror.f49f4e1a.js","/assets/@lezer.e17d3211.js","/assets/crelt.67277586.js","/assets/style-mod.a2e40363.js","/assets/w3c-keyname.490704ff.js","/assets/@vue.fdf15af0.js","/assets/@babel.779edfb1.js","/assets/ant-design-vue.4c2f3e21.js","/assets/ant-design-vue.e396ed58.css","/assets/resize-observer-polyfill.f664b406.js","/assets/vue-types.6e6d84ba.js","/assets/@ant-design.13703ba0.js","/assets/@ctrl.837ec117.js","/assets/dom-align.243fa364.js","/assets/lodash-es.3f39f82c.js","/assets/dayjs.0955ecba.js","/assets/async-validator.fb49d0f5.js","/assets/scroll-into-view-if-needed.5191fdbf.js","/assets/compute-scroll-into-view.6058b3be.js","/assets/vue-router.9e99a420.js","/assets/vuex.b181c63a.js","/assets/element-plus.91e4b9a1.js","/assets/element-plus.0a5a8557.css","/assets/@vueuse.aefaf066.js","/assets/@element-plus.52d5c579.js","/assets/memoize-one.4ee5c96d.js","/assets/escape-html.57bb965d.js","/assets/normalize-wheel-es.1c4ac15a.js","/assets/@floating-ui.cba15af0.js","/assets/@kangc.dfd4c328.js","/assets/@kangc.cb90f61d.css","/assets/vue.d9a5518d.js","/assets/copy-to-clipboard.ea1d059a.js","/assets/toggle-selection.0bb833ce.js","/assets/highlight.js.61bffb66.js","/assets/echarts.2fe7d5ce.js","/assets/tslib.60310f1a.js","/assets/zrender.528e6a54.js"])},{path:"/test2",name:"Test2",component:()=>k((()=>import("./test2.9b31ffc7.js")),["/assets/test2.9b31ffc7.js","/assets/test2.040e40c7.css","/assets/ProblemEcharts.c1e96579.js","/assets/ProblemEcharts.5ad01a73.css","/assets/vue-codemirror.eadda7dd.js","/assets/codemirror.44ab372b.js","/assets/@codemirror.f49f4e1a.js","/assets/@lezer.e17d3211.js","/assets/crelt.67277586.js","/assets/style-mod.a2e40363.js","/assets/w3c-keyname.490704ff.js","/assets/@vue.fdf15af0.js","/assets/@babel.779edfb1.js","/assets/ant-design-vue.4c2f3e21.js","/assets/ant-design-vue.e396ed58.css","/assets/resize-observer-polyfill.f664b406.js","/assets/vue-types.6e6d84ba.js","/assets/@ant-design.13703ba0.js","/assets/@ctrl.837ec117.js","/assets/dom-align.243fa364.js","/assets/lodash-es.3f39f82c.js","/assets/dayjs.0955ecba.js","/assets/async-validator.fb49d0f5.js","/assets/scroll-into-view-if-needed.5191fdbf.js","/assets/compute-scroll-into-view.6058b3be.js","/assets/vue-router.9e99a420.js","/assets/vuex.b181c63a.js","/assets/element-plus.91e4b9a1.js","/assets/element-plus.0a5a8557.css","/assets/@vueuse.aefaf066.js","/assets/@element-plus.52d5c579.js","/assets/memoize-one.4ee5c96d.js","/assets/escape-html.57bb965d.js","/assets/normalize-wheel-es.1c4ac15a.js","/assets/@floating-ui.cba15af0.js","/assets/@kangc.dfd4c328.js","/assets/@kangc.cb90f61d.css","/assets/vue.d9a5518d.js","/assets/copy-to-clipboard.ea1d059a.js","/assets/toggle-selection.0bb833ce.js","/assets/highlight.js.61bffb66.js","/assets/echarts.2fe7d5ce.js","/assets/tslib.60310f1a.js","/assets/zrender.528e6a54.js"])}]},{path:"/401",name:"401",component:()=>k((()=>import("./401.22ff0ff5.js")),["/assets/401.22ff0ff5.js","/assets/@vue.fdf15af0.js","/assets/@babel.779edfb1.js","/assets/@ant-design.13703ba0.js","/assets/@ctrl.837ec117.js","/assets/vue-router.9e99a420.js","/assets/vuex.b181c63a.js","/assets/element-plus.91e4b9a1.js","/assets/element-plus.0a5a8557.css","/assets/lodash-es.3f39f82c.js","/assets/@vueuse.aefaf066.js","/assets/@element-plus.52d5c579.js","/assets/dayjs.0955ecba.js","/assets/async-validator.fb49d0f5.js","/assets/memoize-one.4ee5c96d.js","/assets/escape-html.57bb965d.js","/assets/normalize-wheel-es.1c4ac15a.js","/assets/@floating-ui.cba15af0.js","/assets/ant-design-vue.4c2f3e21.js","/assets/ant-design-vue.e396ed58.css","/assets/resize-observer-polyfill.f664b406.js","/assets/vue-types.6e6d84ba.js","/assets/dom-align.243fa364.js","/assets/scroll-into-view-if-needed.5191fdbf.js","/assets/compute-scroll-into-view.6058b3be.js","/assets/@kangc.dfd4c328.js","/assets/@kangc.cb90f61d.css","/assets/vue.d9a5518d.js","/assets/copy-to-clipboard.ea1d059a.js","/assets/toggle-selection.0bb833ce.js","/assets/highlight.js.61bffb66.js","/assets/echarts.2fe7d5ce.js","/assets/tslib.60310f1a.js","/assets/zrender.528e6a54.js"]),hidden:!0},{path:"/:pathMatch(.*)*",name:"404",component:()=>k((()=>import("./404.0e9ffee0.js")),["/assets/404.0e9ffee0.js","/assets/ant-design-vue.4c2f3e21.js","/assets/ant-design-vue.e396ed58.css","/assets/@babel.779edfb1.js","/assets/resize-observer-polyfill.f664b406.js","/assets/@vue.fdf15af0.js","/assets/vue-types.6e6d84ba.js","/assets/@ant-design.13703ba0.js","/assets/@ctrl.837ec117.js","/assets/dom-align.243fa364.js","/assets/lodash-es.3f39f82c.js","/assets/dayjs.0955ecba.js","/assets/async-validator.fb49d0f5.js","/assets/scroll-into-view-if-needed.5191fdbf.js","/assets/compute-scroll-into-view.6058b3be.js","/assets/vue-router.9e99a420.js","/assets/vuex.b181c63a.js","/assets/element-plus.91e4b9a1.js","/assets/element-plus.0a5a8557.css","/assets/@vueuse.aefaf066.js","/assets/@element-plus.52d5c579.js","/assets/memoize-one.4ee5c96d.js","/assets/escape-html.57bb965d.js","/assets/normalize-wheel-es.1c4ac15a.js","/assets/@floating-ui.cba15af0.js","/assets/@kangc.dfd4c328.js","/assets/@kangc.cb90f61d.css","/assets/vue.d9a5518d.js","/assets/copy-to-clipboard.ea1d059a.js","/assets/toggle-selection.0bb833ce.js","/assets/highlight.js.61bffb66.js","/assets/echarts.2fe7d5ce.js","/assets/tslib.60310f1a.js","/assets/zrender.528e6a54.js"]),hidden:!0}],M=c({history:d(),routes:x});var G=f({state:{},mutations:{},actions:{},modules:{}});_.use(h,{Hljs:E}),_.use(j()),_.use(v());const H=l(D);H.config.globalProperties.$echarts=L,H.use(u,{size:"small",zIndex:3e3}).use(M).use(G).use(b).use(_).mount("#app");export{g as _};
