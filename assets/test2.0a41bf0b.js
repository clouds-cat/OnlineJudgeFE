import{C as e,P as t}from"./ProblemEcharts.05da40f6.js";import{_ as l}from"./index.975e727a.js";import{s as a,r as o,o as n,c as i,d as s,w as d,a as r,t as p,F as u,b as c,u as m,e as g,v as f}from"./vendor.5ff2c9b5.js";const h={name:"test",components:{CodeEditor:e,ProblemEcharts:t},data:()=>({submit_loading:!1,code:"",theme:"dark",language:"C++",tag_show:!1,Problem:{problemId:1,title:"质因子个数",description:"### 问题描述\n\n给定正整数 $n$, 请问有多少个质数是 $n$ 的约数。\n\n### 输入格式 \n\n输入的第一行包含一个整数 $n$ 。\n\n### 输出格式 \n\n输出一个整数, 表示 $n$ 的质数约数个数。\n\n### 样例输入 \n\n```TEXT\n396\n```\n\n\n\n### 样例输出 \n\n```text\n3\n```\n\n\n\n### 样例说明\n\n396 有 $2,3,11$ 三个质数约数。\n\n### 评测用例规模与约定 \n\n对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n\n对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n\n对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。",level:"入门",time_limit:"1000",memory_limit:"256",data:{ac:"100",wa:"50",tle:"30",mle:"20",re:"10",ce:"5"}},Tags:[{tag_id:"线段树",color:"#f50"},{tag_id:"分治",color:"#2db7f5"},{tag_id:"组合数学",color:"#87d068"},{tag_id:"lca",color:"#108ee9"},{tag_id:"dp",color:"#531dba"}]}),methods:{ModifyCodeEditor(){this.$refs.CM.changeThemeMode(this.language,this.theme)},handleDelete(){this.$refs.CM.code="",this.code="",console.log(this.code)},submitCode(){this.code.length<=0?a.error({content:()=>" 代 码 不 能 为 空",class:"message-prompt",duration:"3"}):(this.submit_loading=!0,setTimeout((()=>{this.submit_loading=!1,a.success({content:()=>" 提 交 成 功",class:"message-prompt",duration:"3"})}),2e3))}}},_={style:{"font-size":"28px","text-align":"center",color:"#777",display:"block"}},b=r("span",{style:{"font-size":"28px","text-align":"center",color:"#71a9c5",display:"block"}},"提交评测",-1),y=r("span",{style:{"font-size":"17px"}}," 语言: ",-1),x=g("C / C++"),v=g("Java"),C=g("Python3"),$=r("span",{style:{"font-size":"17px"}}," 主题: ",-1),w=g("优雅黑"),z=g("简约白"),k=r("hr",{style:{"margin-top":"20px"}},null,-1),P={style:{"margin-top":"20px",height:"400px"}},E=g(" 清空 "),M=g(" 提交 "),q=r("span",{style:{"font-size":"28px","text-align":"center",color:"#71a9c5",display:"block"}},"题目信息",-1),T=r("p",{style:{"font-size":"21px","margin-left":"15px","font-weight":"bolder"}},"运行限制",-1),j={style:{"font-size":"16px"}},U=g("最大运行时间："),V=g("ms"),D={style:{"margin-top":"12px"}},J=g("最大运行内存："),B=g("MB"),F={style:{"font-size":"21px","vertical-align":"middle","margin-left":"15px","font-weight":"bolder"}},I=g(" 标签 "),X={key:0},A=r("p",{style:{"font-size":"21px","margin-top":"25px","margin-left":"15px","font-weight":"bolder"}},"统计",-1),G=r("span",{style:{"font-size":"28px","text-align":"center",color:"#71a9c5",display:"block"}},"讨论",-1),H=r("p",{style:{"font-size":"21px","margin-left":"15px","font-weight":"bolder"}},". . .",-1);var K=l(h,[["render",function(e,t,l,a,h,K){const L=o("v-md-editor"),N=o("a-card"),O=o("a-select-option"),Q=o("a-select"),R=o("a-space"),S=o("a-col"),W=o("a-row"),Y=o("CodeEditor"),Z=o("a-button"),ee=o("a-button-group"),te=o("a-tag"),le=o("a-switch"),ae=o("ProblemEcharts"),oe=o("a-badge-ribbon");return n(),i("div",null,[s(W,{gutter:25},{default:d((()=>[s(S,{span:17},{default:d((()=>[s(N,{class:"problem-description"},{title:d((()=>[r("span",_,p(h.Problem.title),1)])),default:d((()=>[s(L,{modelValue:h.Problem.description,"onUpdate:modelValue":t[0]||(t[0]=e=>h.Problem.description=e),mode:"preview"},null,8,["modelValue"])])),_:1}),s(N,{style:{"margin-top":"20px"}},{title:d((()=>[b])),default:d((()=>[s(W,{justify:"space-between"},{default:d((()=>[s(S,null,{default:d((()=>[s(R,{size:10},{default:d((()=>[y,s(Q,{onChange:K.ModifyCodeEditor,value:h.language,"onUpdate:value":t[1]||(t[1]=e=>h.language=e),style:{width:"20vh"}},{default:d((()=>[s(O,{value:"C++"},{default:d((()=>[x])),_:1}),s(O,{value:"Java"},{default:d((()=>[v])),_:1}),s(O,{value:"Python"},{default:d((()=>[C])),_:1})])),_:1},8,["onChange","value"])])),_:1})])),_:1}),s(S,null,{default:d((()=>[s(R,{size:10},{default:d((()=>[$,s(Q,{onChange:K.ModifyCodeEditor,value:h.theme,"onUpdate:value":t[2]||(t[2]=e=>h.theme=e),style:{width:"20vh"}},{default:d((()=>[s(O,{value:"dark"},{default:d((()=>[w])),_:1}),s(O,{value:"bright"},{default:d((()=>[z])),_:1})])),_:1},8,["onChange","value"])])),_:1})])),_:1})])),_:1}),k,r("div",P,[s(Y,{ref:"CM",code:h.code,"onUpdate:code":t[3]||(t[3]=e=>h.code=e)},null,8,["code"])]),s(W,{justify:"end",style:{"margin-top":"20px"}},{default:d((()=>[s(ee,null,{default:d((()=>[s(Z,{size:"large",style:{width:"100px","font-weight":"bold"},danger:"",type:"primary",onClick:K.handleDelete,disabled:h.code.length<=0},{default:d((()=>[E])),_:1},8,["onClick","disabled"]),s(Z,{size:"large",style:{width:"100px","font-weight":"bold","margin-left":"15px"},onClick:K.submitCode,loading:h.submit_loading,type:"primary"},{default:d((()=>[M])),_:1},8,["onClick","loading"])])),_:1})])),_:1})])),_:1})])),_:1}),s(S,{span:7},{default:d((()=>[s(oe,{text:h.Problem.level,color:"purple",style:{width:"10vh",height:"4vh","font-size":"23px"}},{default:d((()=>[s(N,{size:"small"},{title:d((()=>[q])),default:d((()=>[T,r("div",j,[r("ul",null,[r("li",null,[U,s(te,{color:"orange"},{default:d((()=>[r("b",null,p(h.Problem.time_limit),1)])),_:1}),V]),r("li",D,[J,s(te,{color:"orange"},{default:d((()=>[r("b",null,p(h.Problem.memory_limit),1)])),_:1}),B])])]),r("p",F,[I,s(le,{checked:h.tag_show,"onUpdate:checked":t[4]||(t[4]=e=>h.tag_show=e),style:{"margin-top":"-4px","margin-left":"15px"}},null,8,["checked"])]),h.tag_show?(n(),i("div",X,[s(R,{style:{"margin-left":"25px"},size:5},{default:d((()=>[(n(!0),i(u,null,c(h.Tags,(e=>(n(),f(te,{color:e.color,style:{"font-size":"16px"}},{default:d((()=>[g(p(e.tag_id),1)])),_:2},1032,["color"])))),256))])),_:1})])):m("",!0),A,s(ae,{data:h.Problem.data},null,8,["data"])])),_:1})])),_:1},8,["text"]),s(N,{size:"small",style:{"margin-top":"20px"}},{title:d((()=>[G])),default:d((()=>[H])),_:1})])),_:1})])),_:1})])}]]);export{K as default};
