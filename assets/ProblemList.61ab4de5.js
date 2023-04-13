import{_ as e}from"./index.36333f3c.js";import{D as a}from"./@ant-design.e0b8c34a.js";import{ac as t,o as l,a as s,b as o,c as i,a8 as n,F as r,ad as d,a7 as c,M as p,ab as m,aA as u,aB as f}from"./@vue.c6738312.js";import"./ant-design-vue.08ad2374.js";import"./@babel.00f887b3.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.6e6d84ba.js";import"./@ctrl.a33f4eba.js";import"./dom-align.243fa364.js";import"./lodash-es.3f39f82c.js";import"./dayjs.4195847b.js";import"./async-validator.fb49d0f5.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-router.e1040d61.js";import"./vuex.6f6222d5.js";import"./element-plus.d2be7d0e.js";import"./@vueuse.8be422ad.js";import"./@element-plus.4972b647.js";import"./@popperjs.36402333.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.cba15af0.js";import"./@kangc.b4a4c810.js";import"./vue.6a749dd0.js";import"./copy-to-clipboard.91f73d5f.js";import"./toggle-selection.b84dd588.js";import"./highlight.js.9fe688eb.js";import"./echarts.7d94cd28.js";import"./tslib.60310f1a.js";import"./zrender.f97eece5.js";const v={components:{DownOutlined:a},name:"ProblemList",data:()=>({ProblemList:[{problemId:1001,title:"质因子个数",description:"### 问题描述\n\n给定正整数 $n$, 请问有多少个质数是 $n$ 的约数。\n\n### 输入格式 \n\n输入的第一行包含一个整数 $n$ 。\n\n### 输出格式 \n\n输出一个整数, 表示 $n$ 的质数约数个数。\n\n### 样例输入 \n\n```TEXT\n396\n```\n\n\n\n### 样例输出 \n\n```text\n3\n```\n\n\n\n### 样例说明\n\n396 有 $2,3,11$ 三个质数约数。\n\n### 评测用例规模与约定 \n\n对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n\n对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n\n对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。",level:"入门",time_limit:"1000",memory_limit:"256",ac:100,wa:50,tle:30,mle:20,re:10,ce:5,submit:1e3,rate:53.3}],TagList:[{tag_id:"线段树",color:"#f50"},{tag_id:"分治",color:"#2db7f5"},{tag_id:"组合数学",color:"#87d068"},{tag_id:"lca",color:"#108ee9"},{tag_id:"dp",color:"#531dba"}],UserList:[{userId:"GsjzTle",nick:"txc",score:15},{userId:"GoodVv",nick:"vv",score:13},{userId:"GoodVv",nick:"vv",score:13},{userId:"GoodVv",nick:"vv",score:13},{userId:"GoodVv",nick:"vv",score:13},{userId:"GoodVv",nick:"vv",score:13},{userId:"GoodVv",nick:"vv",score:13},{userId:"GoodVv",nick:"vv",score:13},{userId:"GoodVv",nick:"vv",score:13},{userId:"GoodVv",nick:"vv",score:13}],pageSize:15,pageNumber:1,total:30,search_main:"",search_loading:!1,search_level:"",options:[{value:"0",label:"入门"},{value:"1",label:"简单"}]}),methods:{pageChange(e){this.pageNumber=e},searchMain(){this.search_loading=!0},toDetail(e){this.$router.push({name:"ProblemDetail",params:{problemId:e}})},searchLevel(){console.log(this.search_level)}}},b=e=>(u("data-v-0de214f0"),e=e(),f(),e),g=b((()=>o("div",null,[o("div",{class:"banner"},[o("div",{class:"banner-title"}," Clouds-Cat Contest #1"),o("div",{class:"banner-remark"}," OJ 第一场月赛"),o("div",{class:"banner-desc"}," 每月一场，激情过瘾！")])],-1))),h={style:{width:"86%",height:"100px",margin:"30px auto 0"}},_=b((()=>o("span",{style:{"font-size":"22px"}},"查找题目",-1))),y=b((()=>o("br",null,null,-1))),j=b((()=>o("span",{style:{"font-size":"17px"}},"难度",-1))),x=p("全部"),k=p("入门"),w=p("简单"),z=p("中等"),$=p("困难"),I=p("非常困难"),V={class:"margin_space"},C=b((()=>o("span",{style:{"font-size":"17px"}},"标签",-1))),G=b((()=>o("div",{style:{"margin-top":"10px"}},null,-1))),L={style:{"font-size":"17px"}},q={style:{"font-size":"17px"}},D={style:{"font-size":"16px"}},N={style:{"font-size":"16px"}},T=p("开始挑战"),U={style:{position:"relative"}},P=b((()=>o("div",{class:"contest"},[o("div",{class:"contest-title"},"第十三届蓝桥杯软件类大赛模拟赛测试"),o("div",{class:"contest-time"},"开始时间：2022-12-19 14:00:00")],-1))),M=p(" 参与竞赛"),S={style:{background:"#ffffff","border-radius":"20px",width:"100%","background-size":"100% 100%","min-width":"300px"}},O=b((()=>o("div",{class:"rank-top"}," 上周刷题榜 ",-1))),A=b((()=>o("div",{class:"rank-middle"},[o("div",{class:"rank-middle-interior"},[o("div",{class:"rank-middle-main"},[o("span",{style:{"font-size":"16px","font-weight":"320"}},[o("b",{style:{"font-weight":"500","font-size":"17px"}},"我通过了："),p(m("15")+"题 ")]),o("span",{style:{"font-size":"21px","font-weight":"600",color:"#ff5905"}},"No."+m("1"))])])],-1))),B={href:"/"},E={style:{display:"flex"}},F={key:0,class:"first"},J={key:1,class:"second"},X={key:2,class:"third"},H={key:3,style:{height:"32px",width:"28px","font-size":"17px","font-weight":"500","text-align":"center"}},K={style:{"font-size":"16px","font-weight":"500",color:"#4759fa"}},Q=b((()=>o("div",{style:{float:"left"}}," 题解汇总",-1)));var R=e(v,[["render",function(e,a,u,f,v,b){const R=t("a-input-search"),W=t("el-space"),Y=t("el-radio"),Z=t("el-radio-group"),ee=t("el-button"),ae=t("el-table-column"),te=t("el-tag"),le=t("el-table"),se=t("a-pagination"),oe=t("a-card"),ie=t("a-col"),ne=t("a-avatar"),re=t("a-list-item-meta"),de=t("a-list-item"),ce=t("a-list"),pe=t("a-button"),me=t("a-row");return l(),s(r,null,[g,o("div",h,[i(me,{gutter:21},{default:n((()=>[i(ie,{span:18},{default:n((()=>[i(oe,null,{title:n((()=>[i(W,{class:"margin_space",spacer:""},{default:n((()=>[_,i(R,{value:v.search_main,"onUpdate:value":a[0]||(a[0]=e=>v.search_main=e),placeholder:"请输入题目标题 / ID",onSearch:b.searchMain,style:{width:"35vh","margin-left":"2vh"},loading:v.search_loading},null,8,["value","onSearch","loading"])])),_:1}),y,i(W,{class:"margin_space",spacer:""},{default:n((()=>[j,i(Z,{modelValue:v.search_level,"onUpdate:modelValue":a[1]||(a[1]=e=>v.search_level=e),style:{"margin-left":"2vh"},size:"small",onChange:b.searchLevel},{default:n((()=>[i(Y,{label:"",border:""},{default:n((()=>[x])),_:1}),i(Y,{label:"0",border:""},{default:n((()=>[k])),_:1}),i(Y,{label:"1",border:""},{default:n((()=>[w])),_:1}),i(Y,{label:"2",border:""},{default:n((()=>[z])),_:1}),i(Y,{label:"3",border:""},{default:n((()=>[$])),_:1}),i(Y,{label:"4",border:""},{default:n((()=>[I])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),o("div",V,[C,G,(l(!0),s(r,null,d(v.TagList,(e=>(l(),c(ee,{size:"small",style:{"font-size":"15px"},color:e.color,plain:""},{default:n((()=>[p(m(e.tag_id),1)])),_:2},1032,["color"])))),256))])])),default:n((()=>[i(le,{data:v.ProblemList,"table-layout":"auto"},{default:n((()=>[i(ae,{prop:"problemId",label:"#",align:"center"},{default:n((e=>[o("span",L,m(e.row.problemId),1)])),_:1}),i(ae,{prop:"title",label:"题目"},{default:n((e=>[o("span",q,m(e.row.title),1)])),_:1}),i(ae,{prop:"level",label:"难度",align:"center"},{default:n((e=>[i(te,{effect:"dark",type:"danger"},{default:n((()=>[p(m(e.row.level),1)])),_:2},1024)])),_:1}),i(ae,{prop:"rate",label:"通过率",align:"center",sortable:""},{default:n((e=>[o("span",D,m(e.row.rate)+"%",1)])),_:1}),i(ae,{prop:"submit",label:"提交数",align:"center",sortable:""},{default:n((e=>[o("span",N,m(e.row.submit),1)])),_:1}),i(ae,{prop:"submit"},{default:n((e=>[i(ee,{class:"btn1",round:"",onClick:a=>b.toDetail(e.row.problemId)},{default:n((()=>[T])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),i(se,{style:{"margin-top":"20px","text-align":"center"},current:v.pageNumber,"onUpdate:current":a[2]||(a[2]=e=>v.pageNumber=e),total:v.total,onChange:b.pageChange},null,8,["current","total","onChange"])])),_:1})])),_:1}),i(ie,{span:6},{default:n((()=>[i(oe,{style:{overflow:"hidden","min-height":"170px","min-width":"300px"}},{cover:n((()=>[o("div",U,[P,i(ee,{class:"btn2",size:"large"},{default:n((()=>[M])),_:1})])])),_:1}),o("div",S,[i(oe,{class:"rank"},{default:n((()=>[O,A,i(ce,{"item-layout":"horizontal","data-source":v.UserList},{renderItem:n((({item:e,index:a})=>[i(de,null,{extra:n((()=>[o("div",K,m(e.score)+"题 ",1)])),default:n((()=>[i(re,{description:e.nick},{title:n((()=>[o("a",B,m(e.userId),1)])),avatar:n((()=>[o("div",E,[0==a?(l(),s("div",F)):1==a?(l(),s("div",J)):2==a?(l(),s("div",X)):(l(),s("div",H,[o("span",null,m(a+1),1)])),i(ne,{style:{"margin-left":"15px"},size:50,src:"https://joeschmoe.io/api/v1/random"})])])),_:2},1032,["description"])])),_:2},1024)])),_:1},8,["data-source"])])),_:1})]),i(pe,{class:"answer_key",style:{width:"100%",padding:"28px"}},{default:n((()=>[Q])),_:1})])),_:1})])),_:1})])],64)}],["__scopeId","data-v-0de214f0"]]);export{R as default};
