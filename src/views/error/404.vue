<template>
  <a-result :status="status" title="404" sub-title="抱歉，页面不存在">
    <template #extra>
      <a-button type="primary" @click="confirm">返回首页</a-button>
    </template>
  </a-result>
</template>

<script>
import { Modal } from 'ant-design-vue';
export default {
  components:{
    Modal
  },
  data(){
    return{
      status : "404"
    }
  },
  methods:{
    confirm(){
      Modal.confirm({
        title:"提示",
        content:"还没有页面...",
        type:"info"
      });
    }
  }
}
</script>
