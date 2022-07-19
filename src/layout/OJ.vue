<template>
  <div>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "OJ",
  components: {Header}
}
</script>

<style scoped>

</style>