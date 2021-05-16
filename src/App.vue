<template>
  <div id="app">
    <Nav />
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

body {
  font-family: "Cairo", sans-serif !important;
  direction: rtl !important;
  text-align: right !important;
}
.pad-100 {
  padding: 100px 0;
}
.H1 {
  font-weight: 700;
  text-align: center;
  margin-bottom: 35px;
}
.card-link {
  color: black !important;
  text-decoration: none;
  font-weight: 100;
}
.card-link .card {
  padding: 30px 0;
  border: none;
  box-shadow: 0 6px 20px 0 rgb(18 45 46 / 11%);
  cursor: pointer;
}
.card-link .card .card-body {
  padding: 0;
  text-align: center;
}
.card-link .card .card-title {
  margin: 30px 0 10px 0;
  font-size: 18px;
  font-weight: 700;
}
.card-link .card .card-subtitle {
  margin-top: 20px;
  font-size: 14px;
}
.card-link .card img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.aboutapps .card {
  padding: 30px 20px;
  border: none;
  box-shadow: 0 6px 20px 0 rgb(18 45 46 / 11%);
  width: 90%;
  margin: 0 auto;
}
.aboutapps .card img {
  height: 220px;
  width: 220px;
  margin: 0 auto;
}
.aboutapps .card a {
  text-decoration: none !important;
  color: #fff !important;
  background-color: black;
  text-align: center;
  margin: 0 10px;
  padding: 5px 20px;
  border-radius: 5px;
  display: inline-block;
}
.aboutapps .card a img,
.aboutapps .card a i {
  margin-left: 10px;
}
.aboutapps .card a img {
  height: 15px;
  width: 15px;
}
.aboutapps .card a i {
  font-size: 17px;
}
</style>
