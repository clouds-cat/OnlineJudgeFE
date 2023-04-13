<template>
  <div class="finallytext-box" @mousemove="mouseMove" @mouseup="mouseUp">
    <div class="finallytext-introduce">
      <div class="finallytext-introduce-title">
        <img
            @click="goHomePage"
            src="../../../assets/finally-text/home.png"
        />{{ Problem.title }}
      </div>
      <div class="finallytext-introduce-content">
        <div class="finallytext-introduce-content-left">
          <div
              class="finallytext-introduce-content-left-normal"
              v-for="(item, index) in leftList"
              @mouseenter="changeUrl(index,'hover')"
              @mouseleave="changeUrl(index,'')"
              :key="index"
          >
            <img :src="item.showIcon" @click="changeContent(index)"/>
            <div v-if="item.number >= 0">({{ item.number }})</div>
          </div>
          <div class="finallytext-introduce-content-left-bottom" @click="showDrawer">题目列表</div>
        </div>
        <div class="finallytext-introduce-content-right">
          <v-md-editor
              v-show="isShowContent === 0"
              v-model="Problem.description"
              mode="preview"
          ></v-md-editor>
          <div v-show="isShowContent === 1">2222</div>
          <div v-show="isShowContent === 2">22228888</div>
        </div>
      </div>
    </div>
    <div class="finallytext-line" @mousedown="mouseDown"></div>
    <div class="finallytext-code">
      <a-card style="height: 100%;">
        <a-row>
          <a-col>
            <a-space :size="10">
              <span style="font-size: 17px"> 语言: </span>
              <a-select
                  @change="ModifyCodeEditor"
                  v-model:value="language"
                  style="width: 20vh"
              >
                <a-select-option value="C++">C / C++</a-select-option>
                <a-select-option value="Java">Java</a-select-option>
                <a-select-option value="Python">Python3</a-select-option>
              </a-select>
            </a-space>
          </a-col>
        </a-row>
        <div :style="'height: calc(100% - 100px)'">
          <CodeEditor ref="CM" v-model:code="code"></CodeEditor>
        </div>
        <div class="finallytext-footer">
          <div style="width: 85%;">
            <el-button type="warning" @click="showCompare">在线对拍</el-button>
          </div>
          <div danger block style="color: white;width: 60px;" type="primary" @click="handleDelete"
               :disabled="code.length <= 0">清空代码
          </div>
          <a-button block style="width: 80px;margin-left: 10px;" @click="submitCode" :loading="submit_loading"
                    type="primary">提交
          </a-button>
        </div>
      </a-card>
    </div>
  </div>
  <a-drawer
      v-model:visible="visible"
      class="custom-class"
      style="color: red"
      title="letcode题目列表"
      placement="left"
      @after-visible-change="afterVisibleChange"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
  <a-drawer
      width="1300"
      v-model:visible="compareVis"
      style="color: red"
      title="在线对拍"
      placement="right"
      @after-visible-change="afterVisibleChange"
  >
    <el-row :gutter="20">
      <el-col :span="7">
        <a-tag style="width: 100%;text-align: center;font-size: 15px" color="red">你的代码</a-tag>
        <CodeEditor ref="CM1" v-model:code="user_code" style="height: 600px;"/>
      </el-col>
      <el-col :span="7">
        <a-tag style="width: 100%;text-align: center;font-size: 15px" color="green">标准答案</a-tag>
        <CodeEditor ref="CM2" v-model:code="ac_code" style="height: 600px"/>
      </el-col>
      <el-col :span="10">
        <a-space align="center" :size="30">
          <h2 style="margin-top: 10px">输入用例 </h2>
          <a-switch v-model:checked="switch_coding" style="vertical-align: center"/>
        </a-space>
        <el-input v-if="!switch_coding" type="textarea" v-model="user_input" style="width: 100%;"
                  :autosize="{ minRows: 5, maxRows: 5}"></el-input>
        <CodeEditor v-else ref="CM3" v-model:code="random_code" style="height: 300px;"/>
        <h2 style="margin-top: 10px">输出比对</h2>
        <div v-if="switch_coding" v-for="(item, index) in random_output">
          <a-badge-ribbon text="错误" color="red" v-if="item.ac_output.trim() != item.user_output.trim()">
          <a-collapse
              v-if="switch_coding"
              :bordered="false"
              style="background: rgb(255, 255, 255)"
          >
            <template #expandIcon="{ isActive }"><caret-right-outlined :rotate="isActive ? 90 : 0"/></template>
            <a-collapse-panel key="1" :header="'# Compare ' + (index + 1)" style="background: #f8f8f8;border-radius: 4px;margin-bottom: 15px;border: 0;overflow: hidden">
              <el-card>{{item.input}}</el-card>
              <code-diff
                  :old-string="item.user_output"
                  :new-string="item.ac_output"
                  filename="your code : ac code"
                  output-format="side-by-side"/>
            </a-collapse-panel>
          </a-collapse>
          </a-badge-ribbon>
          <a-badge-ribbon text="正确" color="green" v-else>
            <a-collapse
                v-if="switch_coding"
                :bordered="false"
                style="background: rgb(255, 255, 255)"
            >
              <template #expandIcon="{ isActive }"><caret-right-outlined :rotate="isActive ? 90 : 0"/></template>
              <a-collapse-panel key="1" :header="'# Compare ' + (index + 1)" style="background: #f8f8f8;border-radius: 4px;margin-bottom: 15px;border: 0;overflow: hidden">
                <el-card>{{item.input}}</el-card>
                <code-diff
                    :old-string="item.user_output"
                    :new-string="item.ac_output"
                    filename="your code : ac code"
                    output-format="side-by-side"/>
              </a-collapse-panel>
            </a-collapse>
          </a-badge-ribbon>
        </div>
        <code-diff
            v-if="!switch_coding"
            :old-string="user_output"
            :new-string="ac_output"
            filename="your code : ac code"
            output-format="side-by-side"/>
        <!--        <el-card style="width: 100%;padding: 0">-->
        <!--          <el-row :gutter="10">-->
        <!--            <el-col :span="12">-->
        <!--              <h3> 你的结果 </h3>-->
        <!--              <el-input type="textarea" v-model="user_output" :autosize="{ minRows: 13, maxRows: 13}"></el-input>-->
        <!--            </el-col>-->
        <!--            <el-col :span="12">-->
        <!--              <h3> 标准结果 </h3>-->
        <!--              <el-input type="textarea" v-model="ac_output" :autosize="{ minRows: 13, maxRows: 13}"></el-input>-->
        <!--            </el-col>-->
        <!--          </el-row>-->
        <!--        </el-card>-->
        <a-button style="border-color:#e6a23c;color:#e6a23c; width: 100%; margin-top: 0" plain
                  :loading="compare_loading" @click="handleCompare">
          执行对拍
        </a-button>
      </el-col>
    </el-row>
  </a-drawer>
</template>
<script>
import CodeEditor from "../../../components/CodeEditor.vue";
import {message} from "ant-design-vue";
import 'ant-design-vue/es/message/style/css';
import {CodeDiff} from 'v-code-diff'
import JudgeAPI from "../../../utils/api/JudgeAPI";
import Qs from 'qs'
import StrUtil from "../../../utils/StrUtil";
import { CaretRightOutlined } from '@ant-design/icons-vue';
export default {
  name: "ProblemDetail",
  components: {CodeEditor, CodeDiff, CaretRightOutlined},
  data() {
    return {
      switch_coding: false,
      compareVis: false,
      visible: false,
      submit_loading: false,
      compare_loading: false,
      code: "",
      user_code: "",
      user_input: "",
      user_output: "",
      ac_output: "",
      ac_code: "#include<bits/stdc++.h>\n" +
          "using namespace std;\n" +
          "signed main(){\n" +
          "  int a , b;\n" +
          "  cin >> a >> b;\n" +
          "  cout << a + b << '\\n';\n" +
          "  cout << a - b << '\\n';\n" +
          "  cout << a * b << '\\n';\n" +
          "  return 0;\n" +
          "}",
      random_cnt: 3,
      random_input: [],
      random_output: [],
      random_code: "#include<bits/stdc++.h>\n" +
          "#define int long long\n" +
          "using namespace std;\n" +
          "random_device rd;//用于生成随机数种子\n" +
          "mt19937 r_eng(rd());//随机数生成器  \n" +
          "int random(int n){\n" +
          "    return r_eng() % n;\n" +
          "}\n" +
          "signed main()\n" +
          "{\n" +
          "    int a = random(5) + 3 , b = random(20) + 5;\n" +
          "    cout << a << \" \" << b << '\\n';\n" +
          "    return 0;\n" +
          "}",
      theme: "dark",
      language: "C++",
      Problem: {
        problemId: 1,
        title: "质因子个数",
        description:
            "### 问题描述\n" +
            "\n" +
            "给定正整数 $n$, 请问有多少个质数是 $n$ 的约数。\n" +
            "\n" +
            "### 输入格式 \n" +
            "\n" +
            "输入的第一行包含一个整数 $n$ 。\n" +
            "\n" +
            "### 输出格式 \n" +
            "\n" +
            "输出一个整数, 表示 $n$ 的质数约数个数。\n" +
            "\n" +
            "### 样例输入 \n" +
            "\n" +
            "```TEXT\n" +
            "396\n" +
            "```\n" +
            "\n" +
            "\n" +
            "\n" +
            "### 样例输出 \n" +
            "\n" +
            "```text\n" +
            "3\n" +
            "```\n" +
            "\n" +
            "\n" +
            "\n" +
            "### 样例说明\n" +
            "\n" +
            "396 有 $2,3,11$ 三个质数约数。\n" +
            "\n" +
            "### 评测用例规模与约定 \n" +
            "\n" +
            "对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n" +
            "\n" +
            "对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n" +
            "\n" +
            "对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。" +
            "\n" +
            "```text\n" +
            "3\n" +
            "```\n" +
            "\n" +
            "\n" +
            "\n" +
            "### 样例说明\n" +
            "\n" +
            "396 有 $2,3,11$ 三个质数约数。\n" +
            "\n" +
            "### 评测用例规模与约定 \n" +
            "\n" +
            "对于 $30 \\%$ 的评测用例, $1 \\leq n \\leq 10000$ 。\n" +
            "\n" +
            "对于 $60 \\%$ 的评测用例, $1 \\leq n \\leq 10^{9}$ 。\n" +
            "\n" +
            "对于所有评测用例, $1 \\leq n \\leq 10^{16}$ 。",
        level: "入门",
        time_limit: "1000",
        memory_limit: "256",
        data: {
          ac: "100",
          wa: "50",
          tle: "30",
          mle: "20",
          re: "10",
          ce: "5",
        },
      },
      dx: 0,
      leftWidth: 0,
      rightWidth: 0,
      leftChild: undefined,
      oLine: undefined,
      rightChild: undefined,
      flag: false,
      isShowContent: 0,
      leftList: [
        {
          label: "题目",
          showIcon: '',
          icon: new URL(
              "../../../assets/finally-text/list.png",
              import.meta.url
          ).href,
          icon2: new URL(
              "../../../assets/finally-text/list2.png",
              import.meta.url
          ).href,
        },
        {
          label: "答案",
          showIcon: '',
          icon: new URL(
              "../../../assets/finally-text/answer.png",
              import.meta.url
          ).href,
          icon2: new URL(
              "../../../assets/finally-text/answer2.png",
              import.meta.url
          ).href,
          number: 0,
        },
        {
          label: "时间",
          showIcon: '',
          icon: new URL(
              "../../../assets/finally-text/time.png",
              import.meta.url
          ).href,
          icon2: new URL(
              "../../../assets/finally-text/time2.png",
              import.meta.url
          ).href,
          number: 2,
        },
      ],
      query_data: {
        selfType: "8",
        tagId: "4",
        subTagId: "0",
        questionId: "105271",
        selfInput: "",
        selfOutput: "",
        content: "",
        language: "2",
        languageName: "C++(clang++ 11.0.1)",
      }
    };
  },
  methods: {
    mouseDown(ev) {
      this.leftChild = document.getElementsByClassName(
          "finallytext-introduce"
      )[0];
      // 获取中间的横线位置
      this.oLine = document.getElementsByClassName("finallytext-line")[0];
      // 获取右侧的元素
      this.rightChild = document.getElementsByClassName("finallytext-code")[0];
      const iEvent = ev || event;
      this.dx = iEvent.clientX;
      //当你第一次单击的时候，存储x轴的坐标。//相对于浏览器窗口
      this.leftWidth = this.leftChild.offsetWidth;
      this.rightWidth = this.rightChild.offsetWidth;
      this.flag = true;
    },
    mouseMove(ev) {
      if (this.flag) {
        const iEvent = ev || event;
        const diff = iEvent.clientX - this.dx;
        //移动的距离（向左滑时为负数,右滑时为正数）
        //两个div的最小宽度均为100px
        this.leftChild.style.width = this.leftWidth + diff + "px";
        this.rightChild.style.width = this.rightWidth - diff + "px";
      }
    },
    mouseUp() {
      this.flag = false;
      document.getElementsByClassName("finallytext-line")[0].onmousedown = null;
      document.getElementsByClassName("finallytext-line")[0].onmousemove = null;
    },
    goHomePage() {
      this.$router.push({name: "Problems"});
    },
    changeContent(index) {
      this.isShowContent = index;
    },
    changeUrl(index, way) {
      if (way) {
        this.leftList[index].showIcon = this.leftList[index].icon2
      } else {
        this.leftList[index].showIcon = this.leftList[index].icon
      }
    },
    handleDelete() {
      this.$refs.CM.code = ""
      this.code = ""
    },
    submitCode() {
      if (this.code.length <= 0) {
        message.error({
          content: () => " 代 码 不 能 为 空",
          class: "message-prompt",
          duration: "3"
        });
        return
      }
      this.submit_loading = true
      setTimeout(() => {
        this.submit_loading = false;
        message.success({
          content: () => " 提 交 成 功",
          class: "message-prompt",
          duration: "3"
        });
      }, 2000);
    },
    ModifyCodeEditor() {
      this.$refs.CM.changeThemeMode(this.language, this.theme)
    },
    showDrawer() {
      this.visible = true;
    },
    afterVisibleChange(bool) {
    },
    showCompare() {
      this.user_code = this.code
      this.compareVis = true
    },
    handleCompare1() {
      this.compare_loading = true
      setTimeout(() => {
        let Input = this.user_input.split(' ')
        let x = parseInt(Input[0]), y = parseInt(Input[1])
        this.compare_loading = false;
        if (this.user_code.includes("+") && this.user_code.includes("-")) {
          this.user_output = (x + y) + "\n" + (x - y) + "\n" + (x * y) + "\n"
          console.log(this.user_output)
        } else this.user_output = (x + y) + "\n" + (x + y) + "\n" + (x * y) + "\n"
        if (this.user_code.includes(x.toString())) this.user_output += "YES\n"
        this.ac_output = (x + y) + "\n" + (x - y) + "\n" + (x * y) + "\n"
        message.success({
          content: () => "执行成功",
          class: "message-prompt",
          duration: "3"
        });
      }, 1000);
    },
    async judgeCode(input_sample, code) {
      let data = this.query_data
      data.content = code
      data.selfInput = input_sample
      if (StrUtil.isEmpty(data.selfInput)) data.selfInput = "2 1"
      let res = await JudgeAPI.judge(Qs.stringify(data))
      if (!res.hasOwnProperty("userOutput")) res["userOutput"] = ""
      return res.userOutput
    },
    async handleCompare() {
      this.compare_loading = true
      if (this.switch_coding) {
        let requestPromiseArray_random = []
        for(let i = 0 ; i < this.random_cnt ; i ++){
          requestPromiseArray_random.push(this.judgeCode(i.toString()/* 随便传的 */ , this.random_code))
        }
        Promise.all(requestPromiseArray_random).then(resList => {
          let requestPromiseArray = []
          resList.forEach(input => {
            requestPromiseArray.push(this.judgeCode(input, this.user_code))
          })
          resList.forEach(input => {
            requestPromiseArray.push(this.judgeCode(input, this.ac_code))
          })
          Promise.all(requestPromiseArray).then(outputList => {
            this.random_output = []
            for(let i = 0 ; i < this.random_cnt ; i ++)  {
              this.random_output.push({
                user_output: outputList[i],
                ac_output: outputList[i + this.random_cnt],
                input: resList[i]
              })
            }
            this.compare_loading = false
            message.success("对拍结束")
          })
        })
        // let input_sample = await this.judgeCode("123"/* 随便传的 */ , this.random_code)
        // console.log(input_sample)
        // let requestPromiseArray = []
        // requestPromiseArray.push(this.judgeCode(input_sample, this.ac_code))
        // requestPromiseArray.push(this.judgeCode(input_sample, this.user_code))
        // Promise.all(requestPromiseArray).then(resList => {
        //   this.ac_output = resList[0]
        //   this.user_output = resList[1]
        //   this.compare_loading = false
        // })
      } else {
        let requestPromiseArray = []
        requestPromiseArray.push(this.judgeCode(this.user_input, this.ac_code))
        requestPromiseArray.push(this.judgeCode(this.user_input, this.user_code))
        Promise.all(requestPromiseArray).then(resList => {
          this.ac_output = resList[0]
          this.user_output = resList[1]
          message.success("对拍结束")
          this.compare_loading = false
        })
        // this.ac_output = await this.judgeCode(this.user_input, this.ac_code)
        // this.user_output = await this.judgeCode(this.user_input, this.user_code)
      }
    }
  },
  mounted() {
    this.leftList.forEach((item) => {
      item.showIcon = item.icon
    });
  },
};
</script>
<style lang="less" scoped>
.finallytext-box {
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;

  .finallytext-introduce {
    width: 49.3%;

    .finallytext-introduce-title {
      display: flex;
      height: 54px;
      background: #fff;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      padding: 0 25px 0 10px;
      font-size: 20px;
      color: #777;

      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }

    .finallytext-introduce-content {
      display: flex;
      height: calc(100% - 54px);

      .finallytext-introduce-content-left {
        width: 50px;
        height: 100%;
        text-align: center;
        border-right: 1px solid #eee;

        img {
          width: 24px;
          height: 24px;
        }

        .finallytext-introduce-content-left-normal {
          margin: 15px 0;
        }

        .finallytext-introduce-content-left-normal:hover {
          margin: 15px 0;
          color: #007bff
        }

        .finallytext-introduce-content-left-bottom {
          writing-mode: vertical-lr;
          margin: 0 auto;
          position: relative;
          top: 70%;
        }
      }

      .finallytext-introduce-content-right {
        width: calc(100% - 50px);
        overflow: scroll;

        /deep/ .github-markdown-body {
          padding: 20px;
        }
      }

      ::-webkit-scrollbar {
        display: none;
      }

    }
  }

  .finallytext-line {
    width: 0.2%;
    height: 100%;
    cursor: col-resize;
  }

  .finallytext-line:hover {
    background-color: #777;
  }

  .finallytext-code {
    height: 100%;
    width: 50.5%;

    /deep/ .ant-card-body {
      padding: 0;
      height: 100%;
    }

    /deep/ .ant-row {
      display: flex;
      align-items: center;
      padding: 8px 20px;
      color: #fff;
      background-color: #28343c;
    }
  }
}

.finallytext-footer {
  display: flex;
  padding: 10px 20px;
  align-items: center;
  background: #1e1e1e;
  border-top: 1px solid hsla(0, 0%, 100%, .15);
}
</style>
