<template>
  <CodeEditor v-model:code="code" />
  <div>ha</div>
  <a-button @click="">点击</a-button>
</template>

<script>
import CodeEditor from "../../components/CodeEditor.vue";

export default {
  components: {
    CodeEditor,
  },
  data(){
    return {
      code: "hahahaha",
      lala:"hehe",
    }
  },
  methods:{
    SwithCodeEditor(){

    }
  },
  setup() {
    // 数据

  },
};
</script>
<style>

</style>
