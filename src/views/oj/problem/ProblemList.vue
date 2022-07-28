<template>
  <div>
    <div class="banner">
      <div class="banner-title"> Clouds-Cat Contest #1</div>
      <div class="banner-remark"> OJ 第一场月赛</div>
      <div class="banner-desc"> 每月一场，激情过瘾！</div>
    </div>
  </div>
  <div style="width: 86%;height: 100px; margin: 30px auto 0;">
    <a-row :gutter="21">
      <!--      题目列表-->
      <a-col :span="18">
        <a-card>
          <template #title>
            <el-space class="margin_space" spacer="">
              <span style="font-size: 22px;">查找题目</span>
              <a-input-search v-model:value="search_main" placeholder="请输入题目标题 / ID" @search="searchMain"
                              style="width: 35vh;margin-left: 2vh" :loading="search_loading"/>
            </el-space>
            <br/>
            <el-space class="margin_space" spacer="">
              <span style="font-size: 17px">难度</span>
              <el-radio-group v-model="search_level" style="margin-left: 2vh" size="small" @change="searchLevel">
                <el-radio label="" border>全部</el-radio>
                <el-radio label="0" border>入门</el-radio>
                <el-radio label="1" border>简单</el-radio>
                <el-radio label="2" border>中等</el-radio>
                <el-radio label="3" border>困难</el-radio>
                <el-radio label="4" border>非常困难</el-radio>
              </el-radio-group>
            </el-space>
            <div class="margin_space">
              <span style="font-size: 17px;">标签</span>
              <div style="margin-top: 10px"/>
              <el-button size="small" v-for="tag in TagList" style="font-size: 15px" :color="tag.color" plain>
                {{ tag.tag_id }}
              </el-button>
            </div>
          </template>
          <el-table :data="ProblemList" table-layout="auto">
            <el-table-column prop="problemId" label="#" align="center">
              <template #default="scope">
                <span style="font-size: 17px;">{{ scope.row.problemId }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="title" label="题目">
              <template #default="scope">
                <span style="font-size: 17px;">{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="level" label="难度" align="center">
              <template #default="scope">
                <el-tag effect="dark" type="danger">{{ scope.row.level }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="rate" label="通过率" align="center" sortable>
              <template #default="scope">
                <span style="font-size: 16px;">{{ scope.row.rate }}%</span>
              </template>
            </el-table-column>
            <el-table-column prop="submit" label="提交数" align="center" sortable>
              <template #default="scope">
                <span style="font-size: 16px;">{{ scope.row.submit }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="submit">
              <template #default="scope">
                <el-button class="btn1" round @click="toDetail(scope.row.problemId)">开始挑战</el-button>
              </template>
            </el-table-column>
          </el-table>
          <a-pagination style="margin-top: 20px;text-align:center;" v-model:current="pageNumber" :total="total"
                        @change="pageChange"/>
        </a-card>
      </a-col>
      <a-col :span="6">
        <!--      即将开始的比赛-->
        <a-card style="overflow: hidden;min-height: 170px;min-width: 250px">
          <template #cover>
            <div style="position: relative">
              <div class="contest">
                <div class="contest-title">第十三届蓝桥杯软件类大赛模拟赛测试</div>
                <div class="contest-time">开始时间：2022-12-19 14:00:00</div>
              </div>
              <el-button class="btn2" size="large"> 参与竞赛</el-button>
            </div>
          </template>
        </a-card>
        <!--      排行榜-->
        <div style="background: #ffffff;border-radius: 20px; width: 100%;background-size: 100% 100%;  min-width: 250px;">
          <a-card class="rank">
            <div class="rank-top">
              上周刷题榜
            </div>
            <div class="rank-middle">
              <div class="rank-middle-interior">
                <div class="rank-middle-main">
                  <span style="font-size: 16px; font-weight: 320"><b style="font-weight: 500;font-size: 17px">我通过了：</b>{{ "3" }}题 </span>
                  <span style="font-size: 21px; font-weight: 600;color: #ff5905;">No.{{ "1" }}</span>
                </div>
              </div>
            </div>
            <a-list item-layout="horizontal" :data-source="UserList">
              <template #renderItem="{ item, index }">
                <a-list-item>
                  <a-list-item-meta :description="item.nick">
                    <template #title>
                      <a href="https://www.antdv.com/">{{ item.userId }} </a>
                    </template>
                    <template #avatar>
                      <div style="display: flex;">
                        <div v-if="index == 0" style="height: 32px; width: 28px; background: url('src/assets/problem/rank1.png'); background-size: 100% 100%"></div>
                        <div v-else-if="index == 1" style="height: 32px; width: 28px; background: url('src/assets/problem/rank2.png'); background-size: 100% 100%"></div>
                        <div v-else-if="index == 2" style="height: 32px; width: 28px; background: url('src/assets/problem/rank3.png'); background-size: 100% 100%"></div>
                        <div v-else style="height: 32px; width: 28px;font-size: 17px;font-weight: 500;text-align: center"><span>{{index + 1}}</span></div>
                        <a-avatar style="margin-left: 15px" :size="50" src="https://joeschmoe.io/api/v1/random"/>
                      </div>
                    </template>
                  </a-list-item-meta>
                  <template #extra>
                    <div style="font-size: 16px;font-weight: 500;color: #4759fa;"> {{item.score}}题 </div>
                  </template>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </div>
        <!--        题解-->
        <a-button class="answer_key" style="width: 100%; padding: 28px">
          <div style="float: left"> 题解汇总</div>
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {DownOutlined} from '@ant-design/icons-vue'

export default {
  components: {
    DownOutlined
  },
  name: "ProblemList",
  data() {
    return {
      ProblemList: [
        {
          problemId: 1001,
          title: "质因子个数",
          description: "### 问题描述\n" + "\n" + "给定正整数 $n$, 请问有多少个质数是 $n$ 的约数。\n" + "\n" + "### 输入格式 \n" + "\n" + "输入的第一行包含一个整数 $n$ 。\n" + "\n" + "### 输出格式 \n" + "\n" + "输出一个整数, 表示 $n$ 的质数约数个数。\n" + "\n" + "### 样例输入 \n" + "\n" + "```TEXT\n" + "396\n" + "```\n" + "\n" + "\n" + "\n" + "### 样例输出 \n" + "\n" + "```text\n" + "3\n" + "```\n" + "\n" + "\n" + "\n" + "### 样例说明\n" + "\n" + "396 有 $2,3,11$ 三个质数约数。\n" + "\n" + "### 评测用例规模与约定 \n" + "\n" + "对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n" + "\n" + "对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n" + "\n" + "对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。",
          level: "入门",
          time_limit: "1000",
          memory_limit: "256",
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
          problemId: 1002,
          title: "A + B",
          description: "### 问题描述\n" + "\n" + "给定正整数 $n$, 请问有多少个质数是 $n$ 的约数。\n" + "\n" + "### 输入格式 \n" + "\n" + "输入的第一行包含一个整数 $n$ 。\n" + "\n" + "### 输出格式 \n" + "\n" + "输出一个整数, 表示 $n$ 的质数约数个数。\n" + "\n" + "### 样例输入 \n" + "\n" + "```TEXT\n" + "396\n" + "```\n" + "\n" + "\n" + "\n" + "### 样例输出 \n" + "\n" + "```text\n" + "3\n" + "```\n" + "\n" + "\n" + "\n" + "### 样例说明\n" + "\n" + "396 有 $2,3,11$ 三个质数约数。\n" + "\n" + "### 评测用例规模与约定 \n" + "\n" + "对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n" + "\n" + "对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n" + "\n" + "对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。",
          level: "入门",
          time_limit: "1000",
          memory_limit: "256",
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
      TagList: [
        {tag_id: "线段树", color: "#f50"},
        {tag_id: "分治", color: "#2db7f5"},
        {tag_id: "组合数学", color: "#87d068"},
        {tag_id: "lca", color: "#108ee9"},
        {tag_id: "dp", color: "#531dba"},
      ],
      UserList: [
        {
          userId: "GsjzTle",
          nick: "txc",
          score: 15
        },
        {
          userId: "GoodVv",
          nick: "vv",
          score: 13
        },
        {
          userId: "GoodVv",
          nick: "vv",
          score: 13
        },        {
          userId: "GoodVv",
          nick: "vv",
          score: 13
        },        {
          userId: "GoodVv",
          nick: "vv",
          score: 13
        },        {
          userId: "GoodVv",
          nick: "vv",
          score: 13
        },        {
          userId: "GoodVv",
          nick: "vv",
          score: 13
        }, {
          userId: "GoodVv",
          nick: "vv",
          score: 13
        }, {
          userId: "GoodVv",
          nick: "vv",
          score: 13
        },{
          userId: "GoodVv",
          nick: "vv",
          score: 13
        },
      ],
      pageSize: 15,
      pageNumber: 1,
      total: 30,
      search_main: "",
      search_loading: false,
      search_level: "",
      options: [{value: "0", label: "入门"}, {value: "1", label: "简单"}],
    }
  },
  methods: {
    pageChange(pageNumber) {
      this.pageNumber = pageNumber
    },
    searchMain() {
      this.search_loading = true
    },
    toDetail(problemId) {
      this.$router.push({
        path: '/problems/' + problemId,
        query: problemId
      });
    },
    searchLevel() {
      console.log(this.search_level)
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  min-height: 360px;
  background: url("../../../assets/problem/banner.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  width: 100%;
  color: #fff;

  .banner-title {
    padding: 70px 0 24px;
    font-size: 48px;
    font-weight: 600;
    line-height: 48px;
  }

  .banner-remark {
    margin-bottom: 70px;
    font-size: 25px;
    line-height: 26px;
  }

  .banner-desc {
    font-size: 18px;
    line-height: 22px;
  }
}

.btn1 {
  background: linear-gradient(318deg, #2d58ff, #69a4f8);
  color: #ffffff;
}

.btn2 {
  background: linear-gradient(180deg, #f5c940, #ff9b27 100%, #ff9b27 0);
  color: #ffffff;
  box-shadow: 0 10px 20px 0 rgb(255 89 5 / 15%);
  font-weight: 500;
  font-size: 18px;
  position: absolute;
  z-index: 1;
  top: 136px;
  left: -1px;
  border: 2px solid #8ba5ff;
}

.margin_space {
  margin-top: 10px;
  margin-bottom: 15px;
}

.contest {
  min-height: 175px;
  background: url("../../../assets/problem/contest.png") no-repeat;
  background-size: 100% 100%;
  transition: all .5s;
  padding: 28px;
  color: #ffffff;
  position: absolute;
  width: 100%;
  .contest-title {
    font-size: 23px;
    font-weight: 600;
    width: 100%;
    white-space: nowrap; // 禁止换行
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .contest-time {
    font-size: 15px;
    margin-top: 10px;
  }
}
.contest:hover {
  transform: scale(1.1);
}

.contest:hover .contest-title {
  transform: scale(1);
}

.rank {
  min-width: 250px;
  margin-top: 30px;
  background: url("../../../assets/problem/rank.png") no-repeat;
  background-size: 100% 100px;
  .rank-top {
    justify-content: space-between;
    width: auto;
    font-size: 23px;
    font-weight: 600;
    color: #fff;
  }

  .rank-middle {
    width: auto;
    padding: 0 20px;
    margin: 8px auto 2px;

    .rank-middle-interior {
      background: #fff;
      border-radius: 10px;

      .rank-middle-main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 20px;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(13, 36, 241, 0.2), rgba(62, 81, 255, 0) 48%, hsla(0, 0%, 100%, 0));
        box-shadow: 0 2px 10px 0 rgba(205, 209, 213, 0.5);
        border-radius: 10px;
      }
    }
  }
}
.answer_key {
  min-width: 250px;
  font-size: 23px;
  font-weight: 600;
  color: #ffffff;
  background: url("../../../assets/problem/answerkey.png") no-repeat;
  background-size: 100% 100%;
  height: 16vh;
  margin-top: 30px;
}
.ant-card {
  border-radius: 20px;
  border: 0;
}
.ant-btn {
  border-radius: 20px;
  border: 0;
}
.ant-card-head-title {
  padding: 3px;
}
.el-table {
  --el-table-border-color: #ffffff;
}
/deep/ .el-table thead {
  font-size: 18px;
}
/deep/ .el-radio.is-bordered.el-radio--small .el-radio__label {
  font-size: 15px;
}
</style>