<template>
  <a-result title="还没有页面!">
    <template #icon>
      <smile-twoTone />
    </template>
    <template #extra>
      <a-button type="primary" @click="this.$router.push('/eqweqsddad')">go 404</a-button>
    </template>
  </a-result>
</template>

<script>
import { SmileTwoTone } from '@ant-design/icons-vue';
export default {
  name: "index",
  components:{
    SmileTwoTone,
  },
  data(){
    return {
      
    }
  },

}
</script>

<style scoped>

</style>