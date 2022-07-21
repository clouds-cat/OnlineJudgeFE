<template>
  <router-view />
  <footers></footers>

</template>
<script>
import  footers  from './components/common/footers/index.vue'
export default{
  components: {
    footers
  }
}
</script>