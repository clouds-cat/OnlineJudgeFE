<template>
  <header>
    <div class="logo">{{ "Clouds-Cat OJ" }}</div>
    <div class="menu">题目</div>
  </header>
  <body>
    <section class="banner1">
      <img src="../assets/1.jpg" class="bg">
      <router-view class="main"/>
    </section>
  </body>
</template>

<script>
export default {
  name: "OJ",
  methods: {
    throttle(fn, wait) { // 封装函数进行节流
      let timer = null;
      return function () {
        let context = this;
        let args = arguments;
        if (!timer) {
          timer = setTimeout(function () {
            fn.apply(context, args);
            timer = null;
          }, wait);
        }
      };
    },
    handle() { // 功能代码
      let header = document.querySelector("header");
      let scrollPosition = window.pageYOffset
      header.classList.toggle("sticky", scrollPosition > 500)
      const bg = document.querySelector(".bg")
      bg.style.transform = `translateY(${scrollPosition*0.5}px)`;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handle);
  },
  destroyed(){  // 这里运用毁灭生命周期 , 避免资源泄露和浪费
    window.removeEventListener("scroll", this.throttle(),false);
  },
}
</script>

<style scoped>

body::before{
  content: ' ';
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #e5e5e5;
  background-size: 100% auto;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 100px;
  z-index: 99;
  transition: 0.6s;
}
.banner1 {
  width: 100%;
  background: #e5e5e5;
}
.bg {
  width: 100%;
  height: 100vh;
  /*z-index: -1;*/
  /*box-shadow:     -20px 0 20px 5px rgba(213, 255, 145, 0.5),*/
  /*0px -20px 20px 5px rgba(145, 255, 191, 0.5),*/
  /*20px 0 20px 5px rgba(82, 255, 220, 0.5),*/
  /*0 20px 20px 5px rgba(239, 255, 91, 0.5);*/
}
.main {
  width: 95%;
  border-radius: 15px;
  flex: 1;
  margin: 0 auto;
}
.logo {
  font-size: 32px;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.6s;
}
.menu{
  font-size: 20px;
  color: #ffffff;
}

header.sticky {
  width: 100%;
  box-shadow: 0 2px 5px 1px rgba(58, 59, 45, 0.5);
  padding: 6px 100px;
  background-color: #fff;
}

header.sticky .logo, header.sticky .menu {
  color: black;
}
</style>