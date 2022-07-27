import{_ as e}from"./index.8a2ff9ca.js";import{D as a}from"./@ant-design.9403b3cb.js";import{ac as l,o as t,a as n,b as s,c as r,a8 as o,F as i,ad as d,a7 as p,M as c,ab as m,aA as u,aB as b}from"./@vue.c6738312.js";import"./ant-design-vue.b18dc19a.js";import"./@babel.00f887b3.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.6e6d84ba.js";import"./@ctrl.a33f4eba.js";import"./dom-align.243fa364.js";import"./lodash-es.3f39f82c.js";import"./dayjs.4195847b.js";import"./async-validator.fb49d0f5.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-router.e1040d61.js";import"./vuex.6f6222d5.js";import"./element-plus.d2be7d0e.js";import"./@vueuse.8be422ad.js";import"./@element-plus.4972b647.js";import"./@popperjs.36402333.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.cba15af0.js";import"./@kangc.b4a4c810.js";import"./vue.6a749dd0.js";import"./copy-to-clipboard.91f73d5f.js";import"./toggle-selection.b84dd588.js";import"./highlight.js.9fe688eb.js";import"./echarts.7d94cd28.js";import"./tslib.60310f1a.js";import"./zrender.f97eece5.js";const f={components:{DownOutlined:a},name:"ProblemList",data:()=>({ProblemList:[{problemId:1001,title:"质因子个数",description:"### 问题描述\n\n给定正整数 $n$, 请问有多少个质数是 $n$ 的约数。\n\n### 输入格式 \n\n输入的第一行包含一个整数 $n$ 。\n\n### 输出格式 \n\n输出一个整数, 表示 $n$ 的质数约数个数。\n\n### 样例输入 \n\n```TEXT\n396\n```\n\n\n\n### 样例输出 \n\n```text\n3\n```\n\n\n\n### 样例说明\n\n396 有 $2,3,11$ 三个质数约数。\n\n### 评测用例规模与约定 \n\n对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n\n对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n\n对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。",level:"入门",time_limit:"1000",memory_limit:"256",ac:100,wa:50,tle:30,mle:20,re:10,ce:5,submit:1e3,rate:53.3},{problemId:1002,title:"A + B",description:"### 问题描述\n\n给定正整数 $n$, 请问有多少个质数是 $n$ 的约数。\n\n### 输入格式 \n\n输入的第一行包含一个整数 $n$ 。\n\n### 输出格式 \n\n输出一个整数, 表示 $n$ 的质数约数个数。\n\n### 样例输入 \n\n```TEXT\n396\n```\n\n\n\n### 样例输出 \n\n```text\n3\n```\n\n\n\n### 样例说明\n\n396 有 $2,3,11$ 三个质数约数。\n\n### 评测用例规模与约定 \n\n对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n\n对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n\n对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。",level:"入门",time_limit:"1000",memory_limit:"256",ac:0,wa:0,tle:0,mle:0,re:0,ce:0,submit:0,rate:0}],TagList:[{tag_id:"线段树",color:"#f50"},{tag_id:"分治",color:"#2db7f5"},{tag_id:"组合数学",color:"#87d068"},{tag_id:"lca",color:"#108ee9"},{tag_id:"dp",color:"#531dba"}],pageSize:15,pageNumber:1,total:30,search_main:"",search_loading:!1,search_level:"",options:[{value:"0",label:"入门"},{value:"1",label:"简单"}]}),methods:{pageChange(e){this.pageNumber=e},searchMain(){this.search_loading=!0},toDetail(e){this.$router.push({path:"/problems/"+e,query:e})},searchLevel(){console.log(this.search_level)}}},g=e=>(u("data-v-2fd92e9b"),e=e(),b(),e),_=g((()=>s("div",null,[s("div",{class:"banner"},[s("div",{class:"banner-title"}," Clouds-Cat Contest #1"),s("div",{class:"banner-remark"}," OJ 第一场月赛"),s("div",{class:"banner-desc"}," 每月一场，激情过瘾！")])],-1))),v={style:{width:"86%",height:"100px",margin:"30px auto 0"}},h=g((()=>s("span",{style:{"font-size":"22px"}},"查找题目",-1))),$=g((()=>s("br",null,null,-1))),j=g((()=>s("span",{style:{"font-size":"17px"}},"难度",-1))),y=c("全部"),x=c("入门"),w=c("简单"),z=c("中等"),k=c("困难"),q=c("非常困难"),C={class:"margin_space"},I=g((()=>s("span",{style:{"font-size":"17px"}},"标签",-1))),L=g((()=>s("div",{style:{"margin-top":"10px"}},null,-1))),T={style:{"font-size":"17px"}},D={style:{"font-size":"17px"}},N={style:{"font-size":"16px"}},M={style:{"font-size":"16px"}},P=c("开始挑战"),S={style:{position:"relative"}},U=g((()=>s("div",{class:"contest"},[s("div",{class:"contest-title"},"第十三届蓝桥杯软件类大赛模拟赛测试"),s("div",{class:"contest-time"},"开始时间：2022-12-19 14:00:00")],-1))),V=c(" 参与竞赛 "),A=g((()=>s("div",{class:"rank-top"}," 上周刷题榜 ",-1))),B=g((()=>s("div",{class:"rank-middle"},[s("div",{class:"rank-middle-interior"},[s("div",{class:"rank-middle-main"},[s("span",null," 我已完成 ")])])],-1))),E=g((()=>s("div",{style:{float:"left"}}," 题解汇总 ",-1)));var O=e(f,[["render",function(e,a,u,b,f,g){const O=l("a-input-search"),X=l("el-space"),F=l("el-radio"),J=l("el-radio-group"),G=l("el-button"),H=l("el-table-column"),K=l("el-tag"),Q=l("el-table"),R=l("a-pagination"),W=l("a-card"),Y=l("a-col"),Z=l("a-button"),ee=l("a-row");return t(),n(i,null,[_,s("div",v,[r(ee,{gutter:21},{default:o((()=>[r(Y,{span:17},{default:o((()=>[r(W,null,{title:o((()=>[r(X,{class:"margin_space",spacer:""},{default:o((()=>[h,r(O,{value:f.search_main,"onUpdate:value":a[0]||(a[0]=e=>f.search_main=e),placeholder:"请输入题目标题 / ID",onSearch:g.searchMain,style:{width:"35vh","margin-left":"2vh"},loading:f.search_loading},null,8,["value","onSearch","loading"])])),_:1}),$,r(X,{class:"margin_space",spacer:""},{default:o((()=>[j,r(J,{modelValue:f.search_level,"onUpdate:modelValue":a[1]||(a[1]=e=>f.search_level=e),style:{"margin-left":"2vh"},size:"small",onChange:g.searchLevel},{default:o((()=>[r(F,{label:"",border:""},{default:o((()=>[y])),_:1}),r(F,{label:"0",border:""},{default:o((()=>[x])),_:1}),r(F,{label:"1",border:""},{default:o((()=>[w])),_:1}),r(F,{label:"2",border:""},{default:o((()=>[z])),_:1}),r(F,{label:"3",border:""},{default:o((()=>[k])),_:1}),r(F,{label:"4",border:""},{default:o((()=>[q])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),s("div",C,[I,L,(t(!0),n(i,null,d(f.TagList,(e=>(t(),p(G,{size:"small",style:{"font-size":"15px"},color:e.color,plain:""},{default:o((()=>[c(m(e.tag_id),1)])),_:2},1032,["color"])))),256))])])),default:o((()=>[r(Q,{data:f.ProblemList,"table-layout":"auto"},{default:o((()=>[r(H,{prop:"problemId",label:"#",align:"center"},{default:o((e=>[s("span",T,m(e.row.problemId),1)])),_:1}),r(H,{prop:"title",label:"题目"},{default:o((e=>[s("span",D,m(e.row.title),1)])),_:1}),r(H,{prop:"level",label:"难度",align:"center"},{default:o((e=>[r(K,{effect:"dark",type:"danger"},{default:o((()=>[c(m(e.row.level),1)])),_:2},1024)])),_:1}),r(H,{prop:"rate",label:"通过率",align:"center",sortable:""},{default:o((e=>[s("span",N,m(e.row.rate)+"%",1)])),_:1}),r(H,{prop:"submit",label:"提交数",align:"center",sortable:""},{default:o((e=>[s("span",M,m(e.row.submit),1)])),_:1}),r(H,{prop:"submit"},{default:o((e=>[r(G,{class:"btn1",round:"",onClick:a=>g.toDetail(e.row.problemId)},{default:o((()=>[P])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),r(R,{style:{"margin-top":"20px","text-align":"center"},current:f.pageNumber,"onUpdate:current":a[2]||(a[2]=e=>f.pageNumber=e),total:f.total,onChange:g.pageChange},null,8,["current","total","onChange"])])),_:1})])),_:1}),r(Y,{span:7},{default:o((()=>[r(W,{style:{overflow:"hidden","min-height":"170px","min-width":"250px"}},{cover:o((()=>[s("div",S,[U,r(G,{class:"btn2",size:"large"},{default:o((()=>[V])),_:1})])])),_:1}),r(W,{class:"rank",style:{"background-image":"url('src/assets/problem/rank.png')"}},{default:o((()=>[A,B])),_:1}),r(Z,{class:"answer_key",style:{width:"100%",padding:"28px"}},{default:o((()=>[E])),_:1})])),_:1})])),_:1})])],64)}],["__scopeId","data-v-2fd92e9b"]]);export{O as default};