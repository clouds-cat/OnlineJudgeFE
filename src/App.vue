<template>
  <router-view/>
  <footers style="margin-top: 10vh"/>
</template>
<script>
import  footers  from './components/common/footers/index.vue'
export default{
  components: {
    footers
  }
}
</script>