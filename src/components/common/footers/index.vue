<template>
<div class="footers-wrapper">
  <div class="footers-wrapper-left" >
  <div class="footers-wrapper-left-item" v-for="(item,index) in footerList" :key="index">
    <a :href="item.url">{{item.label}}</a>
  </div>
  </div>
  <div>
     @2022 , made with  by <heart-filled /> <a :href="urlGreatMan">Great Man</a> for a better web
  </div>
</div>
</template>
<script>
import { HeartFilled } from '@ant-design/icons-vue';
export default {
  name: "footer",
  components: {
    HeartFilled
  },
  data() {
    return {
      footerList:[
          {
            label:'ABOUT US',
            url:''
          },
          {
            label:'HELP',
            url:''
          },{
            label:'LICENSES',
            url:''
          },{
            label:'BLOG',
            url:''
          }
      ],
      urlGreatMan:''
    };
  },
  mounted(){

  },
  methods:{

  },


};
</script>
<style lang="less" scoped>
a{
  color: white;
}
.footers-wrapper{
  background: #000000BF;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  .footers-wrapper-left{
    display: flex;
    margin-right: 200px;
    .footers-wrapper-left-item{
      margin:0 20px;
    }
  }
}
</style>