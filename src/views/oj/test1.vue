<template>
  <a-button @click="add">ha</a-button>
  <p> {{count}} </p>
</template>
<script>
import {ref} from "vue"
import test2 from "./test2.vue"
export default{
  components:{
    test2
  },
  setup(props, context){
    let count = '0'
    function add(){
      // count.value ++
      // console.log("fuck", count.value)
      count ++
      console.log(count)
    }
    return {
      count,
      add
    }
  }
}
</script>