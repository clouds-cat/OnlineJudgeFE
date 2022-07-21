<template>
  <codemirror
      v-model="code"
      placeholder=""
      :style="style"
      :mode="mode"
      :spellcheck="spellcheck"
      :autofocus="autofocus"
      :indent-with-tab="indentWithTab"
      :tabSize="tabSize"
      :extensions="extensions"
      @change="useEditedCode"
  />
</template>

<script>
import { Codemirror } from "vue-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java} from "@codemirror/lang-java"
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";

import { reactive, ref, toRefs } from "vue";

export default {
  components: {
    Codemirror,
  },
  props:{
    code:{
      type: String,
      require: true
    },
  },
  setup(props, context) {
    // 数据
    const code = ref(props.code);
    let selectValue = "cpp";
    let dateTime = "黑夜";
    const options = reactive({
      style: { height: "400px"},
      mode: "text/x-c++src",
      spellcheck: true,
      autofocus: true,
      indentWithTab: true,
      tabSize: 2,
      extensions: [cpp(), oneDark], //传递给CodeMirror EditorState。创建({扩展})
    });
    // 方法
    // 失去焦点时,使用已编辑的代码
    function useEditedCode() {
      context.emit("update:code", code.value)
    }
    function changeThemeMode(language, theme){
      console.log("语言", language)
      console.log("主题", theme)
      if(language == "C++"){
        if(theme == "dark") options.extensions = [cpp(), oneDark]
        else options.extensions = [cpp(), ]
        options.mode = "text/x-c++src";
      }
      else if(language == "Java"){
        if(theme == "dark") options.extensions = [java(), oneDark]
        else options.extensions = [java(), ]
        options.mode = "text/x-java";
      }
      else if(language == "Python"){
        if(theme == "dark") options.extensions = [python(), oneDark]
        else options.extensions = [python(), ]
        options.mode = "text/x-python";
      }
    }
    // 返回
    return {
      code,
      selectValue,
      dateTime,
      ...toRefs(options),
      useEditedCode,
      changeThemeMode
    };
  },
};
</script>
<style>
/deep/ .ͼ1.cm-editor.cm-focused{
  /*outline: 1px  #42b983;*/
}
.ͼ1.cm-editor.cm-focused {
  position: relative !important;
  box-sizing: border-box;
  display: flex !important;
  flex-direction: column;
  outline: 0;
  box-shadow:     -6px 0 6px 5px rgba(213, 255, 145, 0.5),
  0 -6px 6px 5px rgba(145, 255, 191, 0.5),
  6px 0 6px 5px rgba(82, 255, 220, 0.5),
  0 6px 6px 5px rgba(239, 255, 91, 0.5);
}
</style>