<template>
  <header>
    <div class="logo">{{ "OnlineJudge" }}</div>
    <div class="menu">题目</div>
  </header>
  <body>
    <section class="banner1">
      <img src="../assets/1.jpg" class="bg">
      <router-view class="content"/>
    </section>
  </body>
</template>

<script>
export default {
  name: "Header"
}
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  let scrollPosition = window.pageYOffset
  header.classList.toggle("sticky", scrollPosition > 500)
  const bg = document.querySelector(".bg")
  bg.style.transform = `translateY(${scrollPosition*0.5}px)`;

})
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
  z-index: 1;
  transition: 0.6s;
}
.banner1 {
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  position: relative;
  background: #e5e5e5;
}
.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  /*box-shadow:     -20px 0 20px 5px rgba(213, 255, 145, 0.5),*/
  /*0px -20px 20px 5px rgba(145, 255, 191, 0.5),*/
  /*20px 0 20px 5px rgba(82, 255, 220, 0.5),*/
  /*0 20px 20px 5px rgba(239, 255, 91, 0.5);*/
  /*z-index: -1;*/
}
.content {
  top: 100vh;
  position: absolute;
  width: 96%;
  display: block;
  background: #ffffff;
}

.logo {
  font-size: 32px;
  color: #fff;
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