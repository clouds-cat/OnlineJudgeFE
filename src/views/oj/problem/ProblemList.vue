<template>
  <div>
    <div class="banner">
      <div class="title"> Clouds-Cat Contest #1</div>
      <div class="remark"> OJ 第一场月赛 </div>
      <div class="desc"> 每月一场，激情过瘾！</div>
    </div>
  </div>
  <div style="width: 86%;height: 100px; margin: 30px auto 0;">
    <a-row :gutter="21">
      <a-col :span="16">
        <a-card>
          <el-table :data="ProblemList" table-layout="auto">
            <el-table-column prop="problemId" label="#" align="center"/>
            <el-table-column prop="title" label="题目" />
            <el-table-column prop="level" label="难度" align="center"/>
            <el-table-column prop="" label="通过率" align="center">
              <template #default="scope">
                {{scope.row.rate}}%
              </template>
            </el-table-column>
            <el-table-column prop="submit" label="提交数" align="center"/>
            <el-table-column prop="submit" label="">
              <template #default="scope">
                <el-button class="btn" round>开始挑战</el-button>
              </template>
            </el-table-column>
          </el-table>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card>
          即将开始的比赛
        </a-card>
        <a-card style="margin-top: 20px">
          本月刷题排行版
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "ProblemList",
  data(){
    return {
      ProblemList: [
        {
          problemId: 1,
          title:"质因子个数",
          description: "### 问题描述\n" + "\n" + "给定正整数 $n$, 请问有多少个质数是 $n$ 的约数。\n" + "\n" + "### 输入格式 \n" + "\n" + "输入的第一行包含一个整数 $n$ 。\n" + "\n" + "### 输出格式 \n" + "\n" + "输出一个整数, 表示 $n$ 的质数约数个数。\n" + "\n" + "### 样例输入 \n" + "\n" + "```TEXT\n" + "396\n" + "```\n" + "\n" + "\n" + "\n" + "### 样例输出 \n" + "\n" + "```text\n" + "3\n" + "```\n" + "\n" + "\n" + "\n" + "### 样例说明\n" + "\n" + "396 有 $2,3,11$ 三个质数约数。\n" + "\n" + "### 评测用例规模与约定 \n" + "\n" + "对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n" + "\n" + "对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n" + "\n" + "对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。",
          level: "入门",
          time_limit: "1000",
          memory_limit:"256",
          ac: 100,
          wa: 50,
          tle: 30,
          mle: 20,
          re: 10,
          ce: 5,
          submit: 1000,
          rate: 53.3
        },
        {
          problemId: 2,
          title:"A + B",
          description: "### 问题描述\n" + "\n" + "给定正整数 $n$, 请问有多少个质数是 $n$ 的约数。\n" + "\n" + "### 输入格式 \n" + "\n" + "输入的第一行包含一个整数 $n$ 。\n" + "\n" + "### 输出格式 \n" + "\n" + "输出一个整数, 表示 $n$ 的质数约数个数。\n" + "\n" + "### 样例输入 \n" + "\n" + "```TEXT\n" + "396\n" + "```\n" + "\n" + "\n" + "\n" + "### 样例输出 \n" + "\n" + "```text\n" + "3\n" + "```\n" + "\n" + "\n" + "\n" + "### 样例说明\n" + "\n" + "396 有 $2,3,11$ 三个质数约数。\n" + "\n" + "### 评测用例规模与约定 \n" + "\n" + "对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n" + "\n" + "对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n" + "\n" + "对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。",
          level: "入门",
          time_limit: "1000",
          memory_limit:"256",
          ac: 0,
          wa: 0,
          tle: 0,
          mle: 0,
          re: 0,
          ce: 0,
          submit: 0,
          rate: 0.0,
        }
      ],
    }
  }
}
</script>

<style lang="less" scoped>
.banner{
  min-height: 360px;
  background: url("../../../assets/problems.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  width: 100%;
  color: #fff;
}
.banner .title{
  padding: 70px 0 24px;
  font-size: 48px;
  font-weight: 600;
  line-height: 48px;
}
.banner .remark {
  margin-bottom: 70px;
  font-size: 25px;
  line-height: 26px;
}
.banner .desc {
  font-size: 18px;
  line-height: 22px;
}
.ant-card{
  border-radius: 10px;
}
.el-table{
  --el-table-border-color: #ffffff;
}
.btn{
  background: linear-gradient(318deg,#2d58ff,#3c8dff);
  color: #ffffff;
}
</style>