import{C as e,P as t}from"./ProblemEcharts.c0ebfe61.js";import{_ as l}from"./index.192a2509.js";import{m as o}from"./ant-design-vue.dfaf466d.js";import{ac as a,o as i,a as s,c as n,a8 as r,b as d,ab as p,F as m,ad as c,aa as f,M as u,a7 as g}from"./@vue.88fef876.js";import"./vue-codemirror.34896a06.js";import"./codemirror.44ab372b.js";import"./@codemirror.f49f4e1a.js";import"./@lezer.e17d3211.js";import"./crelt.67277586.js";import"./style-mod.a2e40363.js";import"./w3c-keyname.490704ff.js";import"./@ant-design.298d6812.js";import"./@ctrl.837ec117.js";import"./vue-router.5315b1fb.js";import"./vuex.1fc25219.js";import"./element-plus.7e4e4e3c.js";import"./lodash-es.3f39f82c.js";import"./@vueuse.e1dddea6.js";import"./@element-plus.5beaf1ac.js";import"./dayjs.9879ccc7.js";import"./@babel.3b8bad14.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.1c4ac15a.js";import"./@floating-ui.cba15af0.js";import"./@kangc.d7903a5d.js";import"./vue.f8e276d2.js";import"./copy-to-clipboard.91f73d5f.js";import"./toggle-selection.b84dd588.js";import"./highlight.js.9fe688eb.js";import"./echarts.2fe7d5ce.js";import"./tslib.60310f1a.js";import"./zrender.528e6a54.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.6e6d84ba.js";import"./dom-align.243fa364.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";const b={name:"test",components:{CodeEditor:e,ProblemEcharts:t},data:()=>({submit_loading:!1,code:"",theme:"dark",language:"C++",tag_show:!1,Problem:{problemId:1,title:"质因子个数",description:"### 问题描述\n\n给定正整数 $n$, 请问有多少个质数是 $n$ 的约数。\n\n### 输入格式 \n\n输入的第一行包含一个整数 $n$ 。\n\n### 输出格式 \n\n输出一个整数, 表示 $n$ 的质数约数个数。\n\n### 样例输入 \n\n```TEXT\n396\n```\n\n\n\n### 样例输出 \n\n```text\n3\n```\n\n\n\n### 样例说明\n\n396 有 $2,3,11$ 三个质数约数。\n\n### 评测用例规模与约定 \n\n对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n\n对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n\n对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。",level:"入门",time_limit:"1000",memory_limit:"256",data:{ac:"100",wa:"50",tle:"30",mle:"20",re:"10",ce:"5"}},Tags:[{tag_id:"线段树",color:"#f50"},{tag_id:"分治",color:"#2db7f5"},{tag_id:"组合数学",color:"#87d068"},{tag_id:"lca",color:"#108ee9"},{tag_id:"dp",color:"#531dba"}]}),methods:{ModifyCodeEditor(){this.$refs.CM.changeThemeMode(this.language,this.theme)},handleDelete(){this.$refs.CM.code="",this.code="",console.log(this.code)},submitCode(){this.code.length<=0?o.error({content:()=>" 代 码 不 能 为 空",class:"message-prompt",duration:"3"}):(this.submit_loading=!0,setTimeout((()=>{this.submit_loading=!1,o.success({content:()=>" 提 交 成 功",class:"message-prompt",duration:"3"})}),2e3))}}},h={style:{"font-size":"28px","text-align":"center",color:"#777",display:"block"}},y=d("span",{style:{"font-size":"28px","text-align":"center",color:"#71a9c5",display:"block"}},"提交评测",-1),_=d("span",{style:{"font-size":"17px"}}," 语言: ",-1),j=u("C / C++"),x=u("Java"),v=u("Python3"),z=d("span",{style:{"font-size":"17px"}}," 主题: ",-1),w=u("优雅黑"),C=u("简约白"),$=d("hr",{style:{"margin-top":"20px"}},null,-1),k={style:{"margin-top":"20px",height:"400px"}},P=u(" 清空 "),E=u(" 提交 "),M=d("span",{style:{"font-size":"28px","text-align":"center",color:"#71a9c5",display:"block"}},"题目信息",-1),q=d("p",{style:{"font-size":"21px","margin-left":"15px","font-weight":"bolder"}},"运行限制",-1),T={style:{"font-size":"16px"}},U=u("最大运行时间："),V=u("ms"),D={style:{"margin-top":"12px"}},J=u("最大运行内存："),B=u("MB"),F={style:{"font-size":"21px","vertical-align":"middle","margin-left":"15px","font-weight":"bolder"}},I=u(" 标签 "),X={key:0},A=d("p",{style:{"font-size":"21px","margin-top":"25px","margin-left":"15px","font-weight":"bolder"}},"统计",-1),G=d("span",{style:{"font-size":"28px","text-align":"center",color:"#71a9c5",display:"block"}},"讨论",-1),H=d("p",{style:{"font-size":"21px","margin-left":"15px","font-weight":"bolder"}},". . .",-1);var K=l(b,[["render",function(e,t,l,o,b,K){const L=a("v-md-editor"),N=a("a-card"),O=a("a-select-option"),Q=a("a-select"),R=a("a-space"),S=a("a-col"),W=a("a-row"),Y=a("CodeEditor"),Z=a("a-button"),ee=a("a-button-group"),te=a("a-tag"),le=a("a-switch"),oe=a("ProblemEcharts"),ae=a("a-badge-ribbon");return i(),s("div",null,[n(W,{gutter:25},{default:r((()=>[n(S,{span:17},{default:r((()=>[n(N,{class:"problem-description"},{title:r((()=>[d("span",h,p(b.Problem.title),1)])),default:r((()=>[n(L,{modelValue:b.Problem.description,"onUpdate:modelValue":t[0]||(t[0]=e=>b.Problem.description=e),mode:"preview"},null,8,["modelValue"])])),_:1}),n(N,{style:{"margin-top":"20px"}},{title:r((()=>[y])),default:r((()=>[n(W,{justify:"space-between"},{default:r((()=>[n(S,null,{default:r((()=>[n(R,{size:10},{default:r((()=>[_,n(Q,{onChange:K.ModifyCodeEditor,value:b.language,"onUpdate:value":t[1]||(t[1]=e=>b.language=e),style:{width:"20vh"}},{default:r((()=>[n(O,{value:"C++"},{default:r((()=>[j])),_:1}),n(O,{value:"Java"},{default:r((()=>[x])),_:1}),n(O,{value:"Python"},{default:r((()=>[v])),_:1})])),_:1},8,["onChange","value"])])),_:1})])),_:1}),n(S,null,{default:r((()=>[n(R,{size:10},{default:r((()=>[z,n(Q,{onChange:K.ModifyCodeEditor,value:b.theme,"onUpdate:value":t[2]||(t[2]=e=>b.theme=e),style:{width:"20vh"}},{default:r((()=>[n(O,{value:"dark"},{default:r((()=>[w])),_:1}),n(O,{value:"bright"},{default:r((()=>[C])),_:1})])),_:1},8,["onChange","value"])])),_:1})])),_:1})])),_:1}),$,d("div",k,[n(Y,{ref:"CM",code:b.code,"onUpdate:code":t[3]||(t[3]=e=>b.code=e)},null,8,["code"])]),n(W,{justify:"end",style:{"margin-top":"20px"}},{default:r((()=>[n(ee,null,{default:r((()=>[n(Z,{size:"large",style:{width:"100px","font-weight":"bold"},danger:"",type:"primary",onClick:K.handleDelete,disabled:b.code.length<=0},{default:r((()=>[P])),_:1},8,["onClick","disabled"]),n(Z,{size:"large",style:{width:"100px","font-weight":"bold","margin-left":"15px"},onClick:K.submitCode,loading:b.submit_loading,type:"primary"},{default:r((()=>[E])),_:1},8,["onClick","loading"])])),_:1})])),_:1})])),_:1})])),_:1}),n(S,{span:7},{default:r((()=>[n(ae,{text:b.Problem.level,color:"purple",style:{width:"10vh",height:"4vh","font-size":"23px"}},{default:r((()=>[n(N,{size:"small"},{title:r((()=>[M])),default:r((()=>[q,d("div",T,[d("ul",null,[d("li",null,[U,n(te,{color:"orange"},{default:r((()=>[d("b",null,p(b.Problem.time_limit),1)])),_:1}),V]),d("li",D,[J,n(te,{color:"orange"},{default:r((()=>[d("b",null,p(b.Problem.memory_limit),1)])),_:1}),B])])]),d("p",F,[I,n(le,{checked:b.tag_show,"onUpdate:checked":t[4]||(t[4]=e=>b.tag_show=e),style:{"margin-top":"-4px","margin-left":"15px"}},null,8,["checked"])]),b.tag_show?(i(),s("div",X,[n(R,{style:{"margin-left":"25px"},size:5},{default:r((()=>[(i(!0),s(m,null,c(b.Tags,(e=>(i(),g(te,{color:e.color,style:{"font-size":"16px"}},{default:r((()=>[u(p(e.tag_id),1)])),_:2},1032,["color"])))),256))])),_:1})])):f("",!0),A,n(oe,{data:b.Problem.data},null,8,["data"])])),_:1})])),_:1},8,["text"]),n(N,{size:"small",style:{"margin-top":"20px"}},{title:r((()=>[G])),default:r((()=>[H])),_:1})])),_:1})])),_:1})])}]]);export{K as default};