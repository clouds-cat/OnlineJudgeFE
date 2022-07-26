import{C as e,P as t}from"./ProblemEcharts.1a814d50.js";import{_ as o}from"./index.8c72fb1b.js";import{m as l}from"./ant-design-vue.b18dc19a.js";import{ac as a,o as i,a as n,c as s,a8 as r,b as d,ab as m,F as p,ad as c,aa as f,M as u,a7 as b}from"./@vue.c6738312.js";import"./vue-codemirror.f54be624.js";import"./codemirror.bf7feceb.js";import"./@codemirror.5bf050be.js";import"./@lezer.3f49cc49.js";import"./crelt.67277586.js";import"./style-mod.a2e40363.js";import"./w3c-keyname.490704ff.js";import"./vue-router.e1040d61.js";import"./vuex.6f6222d5.js";import"./element-plus.d2be7d0e.js";import"./lodash-es.3f39f82c.js";import"./@vueuse.8be422ad.js";import"./@element-plus.4972b647.js";import"./@popperjs.36402333.js";import"./@ctrl.a33f4eba.js";import"./dayjs.4195847b.js";import"./@babel.00f887b3.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.cba15af0.js";import"./@kangc.b4a4c810.js";import"./vue.6a749dd0.js";import"./copy-to-clipboard.91f73d5f.js";import"./toggle-selection.b84dd588.js";import"./highlight.js.9fe688eb.js";import"./echarts.7d94cd28.js";import"./tslib.60310f1a.js";import"./zrender.f97eece5.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.6e6d84ba.js";import"./@ant-design.9403b3cb.js";import"./dom-align.243fa364.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";const g={name:"test",components:{CodeEditor:e,ProblemEcharts:t},data:()=>({submit_loading:!1,code:"",theme:"dark",language:"C++",tag_show:!1,Problem:{problemId:1,title:"质因子个数",content:"### 问题描述\n\n给定正整数 $n$, 请问有多少个质数是 $n$ 的约数。\n\n### 输入格式 \n\n输入的第一行包含一个整数 $n$ 。\n\n### 输出格式 \n\n输出一个整数, 表示 $n$ 的质数约数个数。\n\n### 样例输入 \n\n```TEXT\n396\n```\n\n\n\n### 样例输出 \n\n```text\n3\n```\n\n\n\n### 样例说明\n\n396 有 $2,3,11$ 三个质数约数。\n\n### 评测用例规模与约定 \n\n对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n\n对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n\n对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。",level:"入门",time_limit:"1000",memory_limit:"256",data:{ac:"100",wa:"50",tle:"30",mle:"20",re:"10",ce:"5"}},Tags:[{tag_id:"线段树",color:"#f50"},{tag_id:"分治",color:"#2db7f5"},{tag_id:"组合数学",color:"#87d068"},{tag_id:"lca",color:"#108ee9"},{tag_id:"dp",color:"#531dba"}]}),methods:{ModifyCodeEditor(){this.$refs.CM.changeThemeMode(this.language,this.theme)},handleDelete(){this.$refs.CM.code="",this.code="",console.log(this.code)},submitCode(){this.code.length<=0?l.error({content:()=>" 代 码 不 能 为 空",class:"message-prompt",duration:"3"}):(this.submit_loading=!0,setTimeout((()=>{this.submit_loading=!1,l.success({content:()=>" 提 交 成 功",class:"message-prompt",duration:"3"})}),2e3))}}},h={style:{"font-size":"28px","text-align":"center",color:"#777",display:"block"}},j=d("span",{style:{"font-size":"28px","text-align":"center",color:"#71a9c5",display:"block"}},"题目信息",-1),y=d("p",{style:{"font-size":"21px","margin-left":"15px","font-weight":"bolder"}},"运行限制",-1),_={style:{"font-size":"16px"}},v=u("最大运行时间："),x=u("ms"),C={style:{"margin-top":"12px"}},$=u("最大运行内存："),z=u("MB"),w={style:{"font-size":"21px","vertical-align":"middle","margin-left":"15px","font-weight":"bolder"}},k=u(" 标签 "),P={key:0},E=d("p",{style:{"font-size":"21px","margin-top":"25px","margin-left":"15px","font-weight":"bolder"}},"统计",-1),M=d("span",{style:{"font-size":"28px","text-align":"center",color:"#71a9c5",display:"block"}},"提交评测",-1),q=d("span",{style:{"font-size":"17px"}}," 语言: ",-1),T=u("C / C++"),U=u("Java"),V=u("Python3"),D=d("span",{style:{"font-size":"17px"}}," 主题: ",-1),J=u("优雅黑"),B=u("简约白"),F=d("hr",{style:{"margin-top":"20px"}},null,-1),I={style:{"margin-top":"20px",height:"400px"}},X=u(" 清空代码 "),A=u(" 提交 ");var G=o(g,[["render",function(e,t,o,l,g,G){const H=a("v-md-editor"),K=a("a-card"),L=a("a-col"),N=a("a-tag"),O=a("a-switch"),Q=a("a-space"),R=a("ProblemEcharts"),S=a("a-badge-ribbon"),W=a("a-select-option"),Y=a("a-select"),Z=a("a-row"),ee=a("CodeEditor"),te=a("a-button");return i(),n("div",null,[s(Z,null,{default:r((()=>[s(L,{span:13},{default:r((()=>[s(K,{class:"problem-description"},{title:r((()=>[d("span",h,m(g.Problem.title),1)])),default:r((()=>[s(H,{modelValue:g.Problem.content,"onUpdate:modelValue":t[0]||(t[0]=e=>g.Problem.content=e),mode:"preview"},null,8,["modelValue"])])),_:1})])),_:1}),s(L,{span:10,offset:1},{default:r((()=>[s(S,{text:g.Problem.level,color:"purple",style:{width:"10vh",height:"4vh","font-size":"23px"}},{default:r((()=>[s(K,{size:"small"},{title:r((()=>[j])),default:r((()=>[y,d("div",_,[d("ul",null,[d("li",null,[v,s(N,{color:"orange"},{default:r((()=>[d("b",null,m(g.Problem.time_limit),1)])),_:1}),x]),d("li",C,[$,s(N,{color:"orange"},{default:r((()=>[d("b",null,m(g.Problem.memory_limit),1)])),_:1}),z])])]),d("p",w,[k,s(O,{checked:g.tag_show,"onUpdate:checked":t[1]||(t[1]=e=>g.tag_show=e),style:{"margin-top":"-4px","margin-left":"15px"}},null,8,["checked"])]),g.tag_show?(i(),n("div",P,[s(Q,{style:{"margin-left":"25px"},size:5},{default:r((()=>[(i(!0),n(p,null,c(g.Tags,(e=>(i(),b(N,{color:e.color,style:{"font-size":"16px"}},{default:r((()=>[u(m(e.tag_id),1)])),_:2},1032,["color"])))),256))])),_:1})])):f("",!0),E,s(R,{data:g.Problem.data},null,8,["data"])])),_:1})])),_:1},8,["text"]),s(K,{style:{"margin-top":"20px"}},{title:r((()=>[M])),default:r((()=>[s(Z,{justify:"space-between"},{default:r((()=>[s(L,null,{default:r((()=>[s(Q,{size:10},{default:r((()=>[q,s(Y,{onChange:G.ModifyCodeEditor,value:g.language,"onUpdate:value":t[2]||(t[2]=e=>g.language=e),style:{width:"20vh"}},{default:r((()=>[s(W,{value:"C++"},{default:r((()=>[T])),_:1}),s(W,{value:"Java"},{default:r((()=>[U])),_:1}),s(W,{value:"Python"},{default:r((()=>[V])),_:1})])),_:1},8,["onChange","value"])])),_:1})])),_:1}),s(L,null,{default:r((()=>[s(Q,{size:10},{default:r((()=>[D,s(Y,{onChange:G.ModifyCodeEditor,value:g.theme,"onUpdate:value":t[3]||(t[3]=e=>g.theme=e),style:{width:"20vh"}},{default:r((()=>[s(W,{value:"dark"},{default:r((()=>[J])),_:1}),s(W,{value:"bright"},{default:r((()=>[B])),_:1})])),_:1},8,["onChange","value"])])),_:1})])),_:1})])),_:1}),F,d("div",I,[s(ee,{ref:"CM",code:g.code,"onUpdate:code":t[4]||(t[4]=e=>g.code=e)},null,8,["code"])]),s(te,{danger:"",block:"",style:{"margin-top":"10px"},type:"primary",onClick:G.handleDelete,disabled:g.code.length<=0},{default:r((()=>[X])),_:1},8,["onClick","disabled"]),s(te,{block:"",style:{"margin-top":"10px"},onClick:G.submitCode,loading:g.submit_loading,type:"primary"},{default:r((()=>[A])),_:1},8,["onClick","loading"])])),_:1})])),_:1})])),_:1})])}]]);export{G as default};
