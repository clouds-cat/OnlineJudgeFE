import{_ as e}from"./index.192a2509.js";import{ac as s,o as t,a as o,b as r,c as a,F as i,aA as l,aB as d,ab as n}from"./@vue.88fef876.js";import"./@ant-design.298d6812.js";import"./@ctrl.837ec117.js";import"./vue-router.5315b1fb.js";import"./vuex.1fc25219.js";import"./element-plus.7e4e4e3c.js";import"./lodash-es.3f39f82c.js";import"./@vueuse.e1dddea6.js";import"./@element-plus.5beaf1ac.js";import"./dayjs.9879ccc7.js";import"./@babel.3b8bad14.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.1c4ac15a.js";import"./@floating-ui.cba15af0.js";import"./ant-design-vue.dfaf466d.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.6e6d84ba.js";import"./dom-align.243fa364.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./@kangc.d7903a5d.js";import"./vue.f8e276d2.js";import"./copy-to-clipboard.91f73d5f.js";import"./toggle-selection.b84dd588.js";import"./highlight.js.9fe688eb.js";import"./echarts.2fe7d5ce.js";import"./tslib.60310f1a.js";import"./zrender.528e6a54.js";const m={name:"OJ",methods:{throttle(e,s){let t=null;return function(){let o=this,r=arguments;t||(t=setTimeout((function(){e.apply(o,r),t=null}),s))}},handle(){let e=document.querySelector("header"),s=window.pageYOffset;e.classList.toggle("sticky",s>500);document.querySelector(".bg").style.transform=`translateY(${.5*s}px)`}},mounted(){window.addEventListener("scroll",this.handle)},destroyed(){window.removeEventListener("scroll",this.throttle(),!1)}},c=e=>(l("data-v-5ff0dbfc"),e=e(),d(),e),p=c((()=>r("header",null,[r("div",{class:"logo"},n("OnlineJudge")),r("div",{class:"menu"},"题目")],-1))),f={class:"banner1"},j=c((()=>r("img",{src:"./assets/1.1f7e3c3c.jpg",class:"bg"},null,-1)));var u=e(m,[["render",function(e,l,d,n,m,c){const u=s("router-view");return t(),o(i,null,[p,r("body",null,[r("section",f,[j,a(u,{class:"main"})])])],64)}],["__scopeId","data-v-5ff0dbfc"]]);export{u as default};