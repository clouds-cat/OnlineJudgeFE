<template>
  <div>
    <a-row>
      <a-col :span="13">
        <a-card class="problem-description">
          <template #title>
            <span style="font-size: 28px;text-align: center;color:#777;display: block">{{Problem.title}}</span>
          </template>
          <v-md-editor v-model="Problem.description" mode="preview"></v-md-editor>
        </a-card>
      </a-col>
      <a-col :span="10" :offset="1">
        <a-badge-ribbon :text="Problem.level" color="purple" style="width: 10vh;height:4vh;font-size: 23px;">
          <a-card size="small">
            <template #title>
              <span style="font-size: 28px;text-align: center;color:#71a9c5;display: block">题目信息</span>
            </template>
            <p style="font-size: 21px; margin-left: 15px; font-weight: bolder">运行限制</p>
            <div style="font-size: 16px">
              <ul>
                <li>最大运行时间：<a-tag color="orange"><b>{{Problem.time_limit}}</b></a-tag>ms</li>
                <li style="margin-top: 12px">最大运行内存：<a-tag color="orange"><b>{{Problem.memory_limit}}</b></a-tag>MB</li>
              </ul>
            </div>
            <p style="font-size: 21px;vertical-align:middle;margin-left: 15px; font-weight: bolder">
                标签
              <a-switch v-model:checked="tag_show" style="margin-top: -4px; margin-left: 15px"/>
            </p>
            <div v-if="tag_show">
              <a-space style="margin-left: 25px;" :size="5">
                <a-tag v-for="tag in Tags" :color="tag.color" style="font-size: 16px">{{tag.tag_id}}</a-tag>
              </a-space>
            </div>
            <p style="font-size: 21px;margin-top: 25px;margin-left: 15px;font-weight: bolder">统计</p>
            <ProblemEcharts :data="Problem.data"/>
          </a-card>
        </a-badge-ribbon>
          <a-card style="margin-top: 20px">
            <template #title>
              <span style="font-size: 28px;text-align: center;color:#71a9c5;display: block">提交评测</span>
            </template>
            <a-row justify="space-between">
              <a-col>
                <a-space :size="10">
                  <span style="font-size: 17px"> 语言: </span>
                  <a-select @change="ModifyCodeEditor" v-model:value="language" style="width: 20vh">
                    <a-select-option value="C++">C / C++</a-select-option>
                    <a-select-option value="Java">Java</a-select-option>
                    <a-select-option value="Python">Python3</a-select-option>
                  </a-select>
                </a-space>
              </a-col>
              <a-col>
                <a-space :size="10">
                  <span style="font-size: 17px"> 主题: </span>
                  <a-select @change="ModifyCodeEditor" v-model:value="theme" style="width: 20vh">
                    <a-select-option value="dark">优雅黑</a-select-option>
                    <a-select-option value="bright">简约白</a-select-option>
                  </a-select>
                </a-space>
              </a-col>
            </a-row>
            <hr style="margin-top: 20px"/>
            <div style="margin-top:20px;height: 400px">
              <CodeEditor ref="CM" v-model:code="code"></CodeEditor>
            </div>
            <a-button danger block style="margin-top: 10px" type="primary" @click="handleDelete" :disabled="code.length<=0"> 清空代码 </a-button>
            <a-button block style="margin-top: 10px" @click="submitCode" :loading="submit_loading" type="primary"> 提交 </a-button>
          </a-card>
      </a-col>
    </a-row>
  </div>
  
</template>
<script>
import CodeEditor from "../../components/CodeEditor.vue";
import ProblemEcharts from "../../components/ProblemEcharts.vue";
import {message} from "ant-design-vue";
export default {
  name: "test",
  components: {CodeEditor, ProblemEcharts},
  data(){
    return {
      submit_loading:false,
      code:"",
      theme: "dark",
      language:"C++",
      tag_show:false,
      Problem:{
        problemId: 1,
        title:"质因子个数",
        description: "### 问题描述\n" + "\n" + "给定正整数 $n$, 请问有多少个质数是 $n$ 的约数。\n" + "\n" + "### 输入格式 \n" + "\n" + "输入的第一行包含一个整数 $n$ 。\n" + "\n" + "### 输出格式 \n" + "\n" + "输出一个整数, 表示 $n$ 的质数约数个数。\n" + "\n" + "### 样例输入 \n" + "\n" + "```TEXT\n" + "396\n" + "```\n" + "\n" + "\n" + "\n" + "### 样例输出 \n" + "\n" + "```text\n" + "3\n" + "```\n" + "\n" + "\n" + "\n" + "### 样例说明\n" + "\n" + "396 有 $2,3,11$ 三个质数约数。\n" + "\n" + "### 评测用例规模与约定 \n" + "\n" + "对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n" + "\n" + "对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n" + "\n" + "对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。",
        level: "入门",
        time_limit: "1000",
        memory_limit:"256",
        data:{
          ac: "100",
          wa: "50",
          tle: "30",
          mle: "20",
          re: "10",
          ce: "5"
        },
      },
      Tags: [
          {tag_id: "线段树", color: "#f50"},
          {tag_id: "分治", color: "#2db7f5"},
          {tag_id: "组合数学", color: "#87d068"},
          {tag_id:"lca",color:"#108ee9"},
          {tag_id:"dp",color:"#531dba"},
      ],
    }
  },
  methods:{
    ModifyCodeEditor(){
      this.$refs.CM.changeThemeMode(this.language, this.theme)
    },
    handleDelete(){
      this.$refs.CM.code = ""
      this.code = ""
      console.log(this.code)
    },
    submitCode(){
      if(this.code.length <= 0){
        message.error({
          content: ()=> " 代 码 不 能 为 空",
          class: "message-prompt",
          duration:"3"
        });
        return
      }
      this.submit_loading = true
      setTimeout(() => {
        this.submit_loading = false;
          message.success({
          content: ()=> " 提 交 成 功",
          class: "message-prompt",
          duration:"3"
        });
      }, 2000);
    }
  }
}
</script>

<style>
/*/deep/ .el-card__header {*/
/*  background-color: #f5faff;*/
/*  padding:10px 10px 10px 10px*/
/*}*/
.ant-card-head-title{
  padding: 5px;
}
.github-markdown-body{
  padding: 0 10px 10px;
}
.ant-card-bordered{
  box-shadow: 0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
}
.ant-ribbon-text {
  vertical-align: sub;
}
.ant-card{
  border-radius: 35px;
}
.message-prompt{
  margin-top: 6vh;
  font-size: 16px;
}
.ant-message-notice-content{
  font-weight: bold;
  border: 1px solid black;
  box-shadow:
      0 0 10px 10px #fce9e9,  /* inner white */
      0 0 10px 10px #f0f, /* middle magenta */
      0 0 10px 10px #0ff; /* outer cyan */
}
.problem-description{

}
</style>