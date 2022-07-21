<template>
  <body>
    <header>
      <div class="logo">{{ "OnlineJudge" }}</div>
      <ul>
        <li>{{ "题目" }}</li>
      </ul>
    </header>
    <div >
         <section class="banner1"></section>
    <section class="banner2">
      <el-card  :shadow="always" class="box-card">
          
          <div>111</div>
      </el-card>

    </section>
    </div>


  </body>
</template>

<script>
import { SmileTwoTone } from "@ant-design/icons-vue";
export default {
  name: "index",
  components: {
    SmileTwoTone,
  },
  data() {
    return {};
  },

};

window.addEventListener("scroll",()=>{
    let header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>300)
  })
</script>

<style scoped>
body {
  min-height: 200vh;
  background-color: rgb(243, 243, 243);
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px;
  z-index: 1;
  transition: 0.6s;
}

.logo {
  font-size: 32px;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.6s;
}
header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul li {
  list-style: none;
  /* margin: 0 15px; */
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  letter-spacing: 2px;
  transition: 0.6s;
}
.banner1 {
  width: 100%;
  height: 100vh;
  background: url("../../assets/1.jpg") no-repeat;
  background-size: cover;
}

.banner2 {
  margin-top: -100px;
   box-shadow: 0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
    border-radius: 6px;

}


header.sticky {
  padding: 6px 100px;
  background-color: #fff;
}
header.sticky .logo,
header.sticky ul li{
  color:black;
}

.box-card {
  width: 90%;
  height: 100vh;
  background-color: #fff;
  margin: 0 auto;
  left: 5%;
}
</style>