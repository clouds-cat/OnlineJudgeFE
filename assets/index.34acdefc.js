import{ac as e,o as t,a7 as o,a8 as s,c as r,X as a}from"./@vue.c6738312.js";import{z as i,A as m}from"./ant-design-vue.b18dc19a.js";import{c as n,a as p}from"./vue-router.e1040d61.js";import{c}from"./vuex.6f6222d5.js";import{i as d}from"./element-plus.d2be7d0e.js";import{V as l,g as f,d as _,_ as u}from"./@kangc.b4a4c810.js";import{H as j}from"./highlight.js.9fe688eb.js";import{e as b}from"./echarts.7d94cd28.js";import"./@babel.00f887b3.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.6e6d84ba.js";import"./@ant-design.9403b3cb.js";import"./@ctrl.a33f4eba.js";import"./dom-align.243fa364.js";import"./lodash-es.3f39f82c.js";import"./dayjs.4195847b.js";import"./async-validator.fb49d0f5.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./@vueuse.8be422ad.js";import"./@element-plus.4972b647.js";import"./@popperjs.36402333.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.cba15af0.js";import"./vue.6a749dd0.js";import"./copy-to-clipboard.91f73d5f.js";import"./toggle-selection.b84dd588.js";import"./tslib.60310f1a.js";import"./zrender.f97eece5.js";var h=(e,t)=>{const o=e.__vccOpts||e;for(const[s,r]of t)o[s]=r;return o};var E=h({components:{},data:()=>({locale:i})},[["render",function(a,i,m,n,p,c){const d=e("router-view"),l=e("a-config-provider");return t(),o(l,{locale:p.locale},{default:s((()=>[r(d)])),_:1},8,["locale"])}]]);let v;const P={},g=function(e,t){if(!t)return e();if(void 0===v){const e=document.createElement("link").relList;v=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in P)return;P[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":v,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},L=[{path:"/admin",redirect:"/admin/home",beforeEnter:(e,t,o)=>{},children:[]},{path:"/",redirect:"/problems",component:()=>g((()=>import("./OJ.8823e3d9.js")),["./assets/OJ.8823e3d9.js","./assets/OJ.2a784eb1.css","./assets/@ant-design.9403b3cb.js","./assets/@vue.c6738312.js","./assets/@babel.00f887b3.js","./assets/@ctrl.a33f4eba.js","./assets/ant-design-vue.b18dc19a.js","./assets/ant-design-vue.e396ed58.css","./assets/resize-observer-polyfill.f664b406.js","./assets/vue-types.6e6d84ba.js","./assets/dom-align.243fa364.js","./assets/lodash-es.3f39f82c.js","./assets/dayjs.4195847b.js","./assets/async-validator.fb49d0f5.js","./assets/scroll-into-view-if-needed.5191fdbf.js","./assets/compute-scroll-into-view.6058b3be.js","./assets/vue-router.e1040d61.js","./assets/vuex.6f6222d5.js","./assets/element-plus.d2be7d0e.js","./assets/element-plus.0a5a8557.css","./assets/@vueuse.8be422ad.js","./assets/@element-plus.4972b647.js","./assets/@popperjs.36402333.js","./assets/memoize-one.4ee5c96d.js","./assets/escape-html.e5dfadb9.js","./assets/normalize-wheel-es.8aeb3683.js","./assets/@floating-ui.cba15af0.js","./assets/@kangc.b4a4c810.js","./assets/@kangc.cb90f61d.css","./assets/vue.6a749dd0.js","./assets/copy-to-clipboard.91f73d5f.js","./assets/toggle-selection.b84dd588.js","./assets/highlight.js.9fe688eb.js","./assets/echarts.7d94cd28.js","./assets/tslib.60310f1a.js","./assets/zrender.f97eece5.js"]),children:[{path:"/index",meta:{},component:()=>g((()=>import("./index.5902280b.js")),["./assets/index.5902280b.js","./assets/index.c087d880.css","./assets/@ant-design.9403b3cb.js","./assets/@vue.c6738312.js","./assets/@babel.00f887b3.js","./assets/@ctrl.a33f4eba.js","./assets/ant-design-vue.b18dc19a.js","./assets/ant-design-vue.e396ed58.css","./assets/resize-observer-polyfill.f664b406.js","./assets/vue-types.6e6d84ba.js","./assets/dom-align.243fa364.js","./assets/lodash-es.3f39f82c.js","./assets/dayjs.4195847b.js","./assets/async-validator.fb49d0f5.js","./assets/scroll-into-view-if-needed.5191fdbf.js","./assets/compute-scroll-into-view.6058b3be.js","./assets/vue-router.e1040d61.js","./assets/vuex.6f6222d5.js","./assets/element-plus.d2be7d0e.js","./assets/element-plus.0a5a8557.css","./assets/@vueuse.8be422ad.js","./assets/@element-plus.4972b647.js","./assets/@popperjs.36402333.js","./assets/memoize-one.4ee5c96d.js","./assets/escape-html.e5dfadb9.js","./assets/normalize-wheel-es.8aeb3683.js","./assets/@floating-ui.cba15af0.js","./assets/@kangc.b4a4c810.js","./assets/@kangc.cb90f61d.css","./assets/vue.6a749dd0.js","./assets/copy-to-clipboard.91f73d5f.js","./assets/toggle-selection.b84dd588.js","./assets/highlight.js.9fe688eb.js","./assets/echarts.7d94cd28.js","./assets/tslib.60310f1a.js","./assets/zrender.f97eece5.js"])},{path:"/problems",name:"Problems",component:()=>g((()=>import("./ProblemList.32fc240e.js")),["./assets/ProblemList.32fc240e.js","./assets/ProblemList.73912b43.css","./assets/@ant-design.9403b3cb.js","./assets/@vue.c6738312.js","./assets/@babel.00f887b3.js","./assets/@ctrl.a33f4eba.js","./assets/ant-design-vue.b18dc19a.js","./assets/ant-design-vue.e396ed58.css","./assets/resize-observer-polyfill.f664b406.js","./assets/vue-types.6e6d84ba.js","./assets/dom-align.243fa364.js","./assets/lodash-es.3f39f82c.js","./assets/dayjs.4195847b.js","./assets/async-validator.fb49d0f5.js","./assets/scroll-into-view-if-needed.5191fdbf.js","./assets/compute-scroll-into-view.6058b3be.js","./assets/vue-router.e1040d61.js","./assets/vuex.6f6222d5.js","./assets/element-plus.d2be7d0e.js","./assets/element-plus.0a5a8557.css","./assets/@vueuse.8be422ad.js","./assets/@element-plus.4972b647.js","./assets/@popperjs.36402333.js","./assets/memoize-one.4ee5c96d.js","./assets/escape-html.e5dfadb9.js","./assets/normalize-wheel-es.8aeb3683.js","./assets/@floating-ui.cba15af0.js","./assets/@kangc.b4a4c810.js","./assets/@kangc.cb90f61d.css","./assets/vue.6a749dd0.js","./assets/copy-to-clipboard.91f73d5f.js","./assets/toggle-selection.b84dd588.js","./assets/highlight.js.9fe688eb.js","./assets/echarts.7d94cd28.js","./assets/tslib.60310f1a.js","./assets/zrender.f97eece5.js"])},{path:"/test",meta:{},component:()=>g((()=>import("./test.5dfa47e3.js")),["./assets/test.5dfa47e3.js","./assets/test.38a5113e.css","./assets/CodeEditor.32b5347b.js","./assets/CodeEditor.4644faa1.css","./assets/vue-codemirror.f54be624.js","./assets/codemirror.bf7feceb.js","./assets/@codemirror.5bf050be.js","./assets/@lezer.3f49cc49.js","./assets/crelt.67277586.js","./assets/style-mod.a2e40363.js","./assets/w3c-keyname.490704ff.js","./assets/@vue.c6738312.js","./assets/@babel.00f887b3.js","./assets/ProblemEcharts.55b99c6d.js","./assets/ProblemEcharts.feef8341.css","./assets/ant-design-vue.b18dc19a.js","./assets/ant-design-vue.e396ed58.css","./assets/resize-observer-polyfill.f664b406.js","./assets/vue-types.6e6d84ba.js","./assets/@ant-design.9403b3cb.js","./assets/@ctrl.a33f4eba.js","./assets/dom-align.243fa364.js","./assets/lodash-es.3f39f82c.js","./assets/dayjs.4195847b.js","./assets/async-validator.fb49d0f5.js","./assets/scroll-into-view-if-needed.5191fdbf.js","./assets/compute-scroll-into-view.6058b3be.js","./assets/vue-router.e1040d61.js","./assets/vuex.6f6222d5.js","./assets/element-plus.d2be7d0e.js","./assets/element-plus.0a5a8557.css","./assets/@vueuse.8be422ad.js","./assets/@element-plus.4972b647.js","./assets/@popperjs.36402333.js","./assets/memoize-one.4ee5c96d.js","./assets/escape-html.e5dfadb9.js","./assets/normalize-wheel-es.8aeb3683.js","./assets/@floating-ui.cba15af0.js","./assets/@kangc.b4a4c810.js","./assets/@kangc.cb90f61d.css","./assets/vue.6a749dd0.js","./assets/copy-to-clipboard.91f73d5f.js","./assets/toggle-selection.b84dd588.js","./assets/highlight.js.9fe688eb.js","./assets/echarts.7d94cd28.js","./assets/tslib.60310f1a.js","./assets/zrender.f97eece5.js"])},{path:"/test1",meta:{},component:()=>g((()=>import("./test1.990c825b.js")),["./assets/test1.990c825b.js","./assets/test1.ab183cc9.css","./assets/CodeEditor.32b5347b.js","./assets/CodeEditor.4644faa1.css","./assets/vue-codemirror.f54be624.js","./assets/codemirror.bf7feceb.js","./assets/@codemirror.5bf050be.js","./assets/@lezer.3f49cc49.js","./assets/crelt.67277586.js","./assets/style-mod.a2e40363.js","./assets/w3c-keyname.490704ff.js","./assets/@vue.c6738312.js","./assets/@babel.00f887b3.js","./assets/ProblemEcharts.55b99c6d.js","./assets/ProblemEcharts.feef8341.css","./assets/ant-design-vue.b18dc19a.js","./assets/ant-design-vue.e396ed58.css","./assets/resize-observer-polyfill.f664b406.js","./assets/vue-types.6e6d84ba.js","./assets/@ant-design.9403b3cb.js","./assets/@ctrl.a33f4eba.js","./assets/dom-align.243fa364.js","./assets/lodash-es.3f39f82c.js","./assets/dayjs.4195847b.js","./assets/async-validator.fb49d0f5.js","./assets/scroll-into-view-if-needed.5191fdbf.js","./assets/compute-scroll-into-view.6058b3be.js","./assets/vue-router.e1040d61.js","./assets/vuex.6f6222d5.js","./assets/element-plus.d2be7d0e.js","./assets/element-plus.0a5a8557.css","./assets/@vueuse.8be422ad.js","./assets/@element-plus.4972b647.js","./assets/@popperjs.36402333.js","./assets/memoize-one.4ee5c96d.js","./assets/escape-html.e5dfadb9.js","./assets/normalize-wheel-es.8aeb3683.js","./assets/@floating-ui.cba15af0.js","./assets/@kangc.b4a4c810.js","./assets/@kangc.cb90f61d.css","./assets/vue.6a749dd0.js","./assets/copy-to-clipboard.91f73d5f.js","./assets/toggle-selection.b84dd588.js","./assets/highlight.js.9fe688eb.js","./assets/echarts.7d94cd28.js","./assets/tslib.60310f1a.js","./assets/zrender.f97eece5.js"])},{path:"/test2",name:"Test2",component:()=>g((()=>import("./test2.bf032e9f.js")),["./assets/test2.bf032e9f.js","./assets/test2.040e40c7.css","./assets/CodeEditor.32b5347b.js","./assets/CodeEditor.4644faa1.css","./assets/vue-codemirror.f54be624.js","./assets/codemirror.bf7feceb.js","./assets/@codemirror.5bf050be.js","./assets/@lezer.3f49cc49.js","./assets/crelt.67277586.js","./assets/style-mod.a2e40363.js","./assets/w3c-keyname.490704ff.js","./assets/@vue.c6738312.js","./assets/@babel.00f887b3.js","./assets/ProblemEcharts.55b99c6d.js","./assets/ProblemEcharts.feef8341.css","./assets/ant-design-vue.b18dc19a.js","./assets/ant-design-vue.e396ed58.css","./assets/resize-observer-polyfill.f664b406.js","./assets/vue-types.6e6d84ba.js","./assets/@ant-design.9403b3cb.js","./assets/@ctrl.a33f4eba.js","./assets/dom-align.243fa364.js","./assets/lodash-es.3f39f82c.js","./assets/dayjs.4195847b.js","./assets/async-validator.fb49d0f5.js","./assets/scroll-into-view-if-needed.5191fdbf.js","./assets/compute-scroll-into-view.6058b3be.js","./assets/vue-router.e1040d61.js","./assets/vuex.6f6222d5.js","./assets/element-plus.d2be7d0e.js","./assets/element-plus.0a5a8557.css","./assets/@vueuse.8be422ad.js","./assets/@element-plus.4972b647.js","./assets/@popperjs.36402333.js","./assets/memoize-one.4ee5c96d.js","./assets/escape-html.e5dfadb9.js","./assets/normalize-wheel-es.8aeb3683.js","./assets/@floating-ui.cba15af0.js","./assets/@kangc.b4a4c810.js","./assets/@kangc.cb90f61d.css","./assets/vue.6a749dd0.js","./assets/copy-to-clipboard.91f73d5f.js","./assets/toggle-selection.b84dd588.js","./assets/highlight.js.9fe688eb.js","./assets/echarts.7d94cd28.js","./assets/tslib.60310f1a.js","./assets/zrender.f97eece5.js"])}]},{path:"/401",name:"401",component:()=>g((()=>import("./401.af024c4d.js")),["./assets/401.af024c4d.js","./assets/@vue.c6738312.js","./assets/@babel.00f887b3.js","./assets/ant-design-vue.b18dc19a.js","./assets/ant-design-vue.e396ed58.css","./assets/resize-observer-polyfill.f664b406.js","./assets/vue-types.6e6d84ba.js","./assets/@ant-design.9403b3cb.js","./assets/@ctrl.a33f4eba.js","./assets/dom-align.243fa364.js","./assets/lodash-es.3f39f82c.js","./assets/dayjs.4195847b.js","./assets/async-validator.fb49d0f5.js","./assets/scroll-into-view-if-needed.5191fdbf.js","./assets/compute-scroll-into-view.6058b3be.js","./assets/vue-router.e1040d61.js","./assets/vuex.6f6222d5.js","./assets/element-plus.d2be7d0e.js","./assets/element-plus.0a5a8557.css","./assets/@vueuse.8be422ad.js","./assets/@element-plus.4972b647.js","./assets/@popperjs.36402333.js","./assets/memoize-one.4ee5c96d.js","./assets/escape-html.e5dfadb9.js","./assets/normalize-wheel-es.8aeb3683.js","./assets/@floating-ui.cba15af0.js","./assets/@kangc.b4a4c810.js","./assets/@kangc.cb90f61d.css","./assets/vue.6a749dd0.js","./assets/copy-to-clipboard.91f73d5f.js","./assets/toggle-selection.b84dd588.js","./assets/highlight.js.9fe688eb.js","./assets/echarts.7d94cd28.js","./assets/tslib.60310f1a.js","./assets/zrender.f97eece5.js"]),hidden:!0},{path:"/problems/:problemId/",name:"ProblemDetail",component:()=>g((()=>import("./ProblemDetail.ef59f7f8.js")),["./assets/ProblemDetail.ef59f7f8.js","./assets/ProblemDetail.c79e3537.css","./assets/CodeEditor.32b5347b.js","./assets/CodeEditor.4644faa1.css","./assets/vue-codemirror.f54be624.js","./assets/codemirror.bf7feceb.js","./assets/@codemirror.5bf050be.js","./assets/@lezer.3f49cc49.js","./assets/crelt.67277586.js","./assets/style-mod.a2e40363.js","./assets/w3c-keyname.490704ff.js","./assets/@vue.c6738312.js","./assets/@babel.00f887b3.js","./assets/ant-design-vue.b18dc19a.js","./assets/ant-design-vue.e396ed58.css","./assets/resize-observer-polyfill.f664b406.js","./assets/vue-types.6e6d84ba.js","./assets/@ant-design.9403b3cb.js","./assets/@ctrl.a33f4eba.js","./assets/dom-align.243fa364.js","./assets/lodash-es.3f39f82c.js","./assets/dayjs.4195847b.js","./assets/async-validator.fb49d0f5.js","./assets/scroll-into-view-if-needed.5191fdbf.js","./assets/compute-scroll-into-view.6058b3be.js","./assets/vue-router.e1040d61.js","./assets/vuex.6f6222d5.js","./assets/element-plus.d2be7d0e.js","./assets/element-plus.0a5a8557.css","./assets/@vueuse.8be422ad.js","./assets/@element-plus.4972b647.js","./assets/@popperjs.36402333.js","./assets/memoize-one.4ee5c96d.js","./assets/escape-html.e5dfadb9.js","./assets/normalize-wheel-es.8aeb3683.js","./assets/@floating-ui.cba15af0.js","./assets/@kangc.b4a4c810.js","./assets/@kangc.cb90f61d.css","./assets/vue.6a749dd0.js","./assets/copy-to-clipboard.91f73d5f.js","./assets/toggle-selection.b84dd588.js","./assets/highlight.js.9fe688eb.js","./assets/echarts.7d94cd28.js","./assets/tslib.60310f1a.js","./assets/zrender.f97eece5.js"]),hidden:!0},{path:"/:pathMatch(.*)*",name:"404",component:()=>g((()=>import("./404.19014c86.js")),["./assets/404.19014c86.js","./assets/ant-design-vue.b18dc19a.js","./assets/ant-design-vue.e396ed58.css","./assets/@babel.00f887b3.js","./assets/resize-observer-polyfill.f664b406.js","./assets/@vue.c6738312.js","./assets/vue-types.6e6d84ba.js","./assets/@ant-design.9403b3cb.js","./assets/@ctrl.a33f4eba.js","./assets/dom-align.243fa364.js","./assets/lodash-es.3f39f82c.js","./assets/dayjs.4195847b.js","./assets/async-validator.fb49d0f5.js","./assets/scroll-into-view-if-needed.5191fdbf.js","./assets/compute-scroll-into-view.6058b3be.js","./assets/vue-router.e1040d61.js","./assets/vuex.6f6222d5.js","./assets/element-plus.d2be7d0e.js","./assets/element-plus.0a5a8557.css","./assets/@vueuse.8be422ad.js","./assets/@element-plus.4972b647.js","./assets/@popperjs.36402333.js","./assets/memoize-one.4ee5c96d.js","./assets/escape-html.e5dfadb9.js","./assets/normalize-wheel-es.8aeb3683.js","./assets/@floating-ui.cba15af0.js","./assets/@kangc.b4a4c810.js","./assets/@kangc.cb90f61d.css","./assets/vue.6a749dd0.js","./assets/copy-to-clipboard.91f73d5f.js","./assets/toggle-selection.b84dd588.js","./assets/highlight.js.9fe688eb.js","./assets/echarts.7d94cd28.js","./assets/tslib.60310f1a.js","./assets/zrender.f97eece5.js"]),hidden:!0}],O=n({history:p(),routes:L});var D=c({state:{},mutations:{},actions:{},modules:{}});l.use(f,{Hljs:j}),l.use(_()),l.use(u());const A=a(E);A.config.globalProperties.$echarts=b,A.use(d).use(O).use(D).use(m).use(l).mount("#app");export{h as _};
