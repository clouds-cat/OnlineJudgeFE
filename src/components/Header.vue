<template>
  <body>
    <header>
      <div class="logo">{{ "OnlineJudge" }}</div>
      <ul>
        <li>{{ "题目" }}</li>
      </ul>
    </header>
    <section class="banner1"></section>
    <div class="test">
      <el-card>haha</el-card>
      <router-view/>
    </div>
  </body>
</template>

<script>
export default {
  name: "Header"
}
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 300)
})
</script>

<style scoped>
body {

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
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  letter-spacing: 2px;
  transition: 0.6s;
}

.banner1 {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background: url("../assets/1.jpg") no-repeat center center;
}

header.sticky {
  padding: 6px 100px;
  background-color: #fff;
}

header.sticky .logo, header.sticky ul li {
  color: black;
}
</style>