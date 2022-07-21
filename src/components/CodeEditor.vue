<template>
  <div class="in-coder-panel">
    <textarea style="height: 100% !important;" ref="textarea" v-model="code"></textarea>
  </div>
</template>

<script>
// 引入全局实例
import _CodeMirror from 'codemirror/lib/codemirror'

// 核心样式
import 'codemirror/lib/codemirror.css'
// 引入主题后还需要在 options 中指定主题才会生效
// 需要引入具体的语法高亮库才会有对应的语法高亮效果, 目前已动态引入
import 'codemirror/theme/midnight.css'
import 'codemirror/theme/duotone-light.css'
import 'codemirror/theme/mdn-like.css'
import 'codemirror/theme/neo.css'
import 'codemirror/theme/juejin.css'
import 'codemirror/theme/darcula.css'
import 'codemirror/theme/3024-day.css'
// 主题样式
import 'codemirror/addon/hint/show-hint.css'
// 括号补全
import 'codemirror/addon/edit/closebrackets.js'
// 代码折叠
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/xml-fold.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import {reactive, defineComponent, toRefs, getCurrentInstance, onMounted, onBeforeUnmount} from 'vue'

// codemirror 官方其实支持通过 /addon/mode/loadmode.js 和 /mode/meta.js 来实现动态加载对应语法高亮库
// 但 vue 貌似没有无法在实例初始化后再动态加载对应 JS ，所以此处才把对应的 JS 提前引入
import 'codemirror/mode/clike/clike.js'
import 'codemirror/mode/python/python.js'

const codemirrorThemList = []
const requireModules = require.context('codemirror/theme/', false, /\.css$/)
requireModules.keys().forEach(value => {
  const newValue = value.replace(/^\.\//, '').replace(/\.css$/, '')
  codemirrorThemList.push(newValue)
})

// 尝试获取全局实例
const CodeMirror = window.CodeMirror || _CodeMirror
let coder = null // 编辑器实例

export default defineComponent({
  name: 'CodeEditor',
  watch:{
    theme(newValue, oldValue){
      coder.setOption("theme", newValue)
    },
    mode(newValue, oldValue){
      let language = "text/x-";
      if(newValue == "C") language += "csrc";
      if(newValue == "C++") language += "c++src";
      if(newValue == "Java") language += "java";
      if(newValue == "Python3") language += "python";
      coder.setOption("mode", language)
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    heightSize: {
      type: Number,
      default: 250
    },
    scene: {
      type: String,
      default: 'look' // add: 新增； edit: 编辑； look: 查看
    },
    eventType: {
      type: String,
      default: 'change' // 可用事件'change', 'blur'等等；具体参考codemirror文档
    },
    theme: {
      type: String,
      default: 'juejin' // 编辑器主题色
    },
    mode: {
      type: String,
      default: 'text/x-c++src',
    }
  },
  setup(props, {emit}) {
    const {proxy} = getCurrentInstance()
    const data = reactive({
      code: props.value, // 内部真实的内容
      // 默认配置
      options: {
        mode: props.mode,
        // 缩进格式
        tabSize: 2,
        // 主题，对应主题库 JS 需要提前引入
        theme: props.theme,
        // 显示行号
        lineNumbers: true,
        autoCloseBrackets:true, //自动补全括号
        lineWrapping: true,//代码折叠
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        readOnly: (props.scene === 'add' || props.scene === 'edit') ? false : 'nocursor' // true: 不可编辑  false: 可编辑 'nocursor' 失焦,不可编辑
      },
      // 初始化
      initialize: () => {
        // GsjzTle 代码默认语言
        let language = "text/x-";
        if(props.mode == "C" || props.mode == "text/x-csrc") language += "csrc";
        else if(props.mode == "C++" || props.mode == "text/x-c++src") language += "c++src";
        else if(props.mode == "Java" || props.mode == "text/x-java") language += "java";
        else if(props.mode == "Python3" || props.mode == "text/x-python") language += "python";
        data.options.mode = language

        // 初始化编辑器实例，传入需要被实例化的文本域对象和默认配置
        coder = CodeMirror.fromTextArea(proxy.$refs.textarea, data.options)
        const h = props.heightSize + 'px'
        coder.setSize('auto', h)
        // 此处也可使用'change'事件，不过每次书写的过程中都会触发，为了提高性能，故默认使用'blur'
        coder.on(props.eventType, coder => {
          emit('update:value', coder.getValue())
        })
      },
      // 动态引入语法高亮库
      importThemDynamic: () => {
        return new Promise(resolve => {
          codemirrorThemList.forEach(value => {
            if (props.theme === value) {
              import(`codemirror/theme/${props.theme}.css`)
              resolve()
            }
          })
        })
      }
    })
    onMounted(() => {
      // console.log('value:', props.value)
      data.importThemDynamic().then(() => {
        data.initialize()
      })
    })
    onBeforeUnmount(() => {
      coder.off(props.eventType)
    })
    return {
      ...toRefs(data)
    }
  },
  methods: {
    ClearCode(){
      coder.setValue("")
    },
  }
})
</script>

<style>
.in-coder-panel {
  flex-grow: 1;
  display: flex;
  position: relative;
}

.in-coder-panel .CodeMirror {
  flex-grow: 1;
  text-align: left !important;
  z-index: 1;
}

.in-coder-panel .CodeMirror .CodeMirror-code {
  line-height: 20px;
}
.CodeMirror{
  font-size:15px;
}
.CodeMirror-scroll{
  /*background-color: #FFFFFF;*/
}
</style>

