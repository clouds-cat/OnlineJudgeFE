<template>
  <header>
    <div>{{ "Clouds-Cat OJ" }}</div>
    <div>题目</div>
  </header>
  <body style="margin-top: 7vh">
  <section class="banner1">
    <!--      <img src="../assets/1.jpg" class="bg">-->
    <router-view/>
  </section>
  <footers></footers>
  </body>
</template>

<script>
import Footers from '../components/common/footers/index.vue';

export default {
  components: {Footers},
  name: "OJ",
  methods: {
    throttle(fn, wait) {
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
    handle() {
      let header = document.querySelector("header");
      let scrollPosition = window.pageYOffset;
      header.classList.toggle("sticky", scrollPosition > 500);
      const bg = document.querySelector(".bg");
      bg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
  },
  mounted() {
    // window.addEventListener("scroll", this.handle);
  },
  // destroyed() {
  //     window.removeEventListener("scroll", this.throttle(), false);
  // },
}
</script>

<style scoped>

/*body::before{*/
/*  content: ' ';*/
/*  position: fixed;*/
/*  z-index: -1;*/
/*  top: 0;*/
/*  right: 0;*/
/*  bottom: 0;*/
/*  left: 0;*/
/*  background: #e5e5e5;*/
/*  background-size: 100% auto;*/
/*}*/

header {
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 18%);
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
  background-color: #ffffff;
  height: 7vh;
}

.banner1 {
  width: 100%;
  background: #e5e5e5;
  min-height:100vh;
  /*padding-bottom: 30px;*/
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

.menu {
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