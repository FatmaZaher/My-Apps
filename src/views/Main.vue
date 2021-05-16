<template>
  <div class="main-content">
    <div class="section-1 d-flex justify-content-center">
      <div class="section-img">
        <img src="../assets/animate-1.png" alt="img" class="back-img" />
        <img src="../assets/animate-2.png" alt="img" class="front-img" />
      </div>
    </div>
    <b-container>
      <div class="section-2 pad-100">
        <b-row>
          <b-col cols md="6">
            <div class="header">
              <h3 class="mb-4">رؤيتنا</h3>
              <p>
                تطبيقاتي هو دليلك لأهم التـطبيقات الـموثوقـة التي تحتاجها بشكل
                دائم والتي تخص الجهات الحكوميـة والـشـركـات الخـدمــية فـي كــل
                الاهتمــامــات مثـل الخدمـات الحكومـية وخدمات التسـوق
                والاتصـالات والتطبيقات التعليميةوالإعلامية وتطبيقات المطاعم
                والصيـانة والتطبيقـات الصحيـة وكـذلك التطبيقـات الخاصـة بالبنـوك
                والمدفوعـات المـالـية
              </p>
            </div>
          </b-col>
          <b-col cols md="6"> </b-col>
        </b-row>
      </div>
      <div class="section-3">
        <div class="header">
          <h3 class="mb-4">أقسام المواقع</h3>
        </div>
        <b-row>
          <b-col cols md="4" lg="3" class="web-card">
            <router-link class="card-link" :to="{ name: 'MainCardShow' }">
              <b-card
                title="الوزارات"
                :img-src="require('../assets/1.png')"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-5"
              >
              </b-card>
            </router-link>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style scoped>
.section-1 {
  height: 100vh;
  background-color: #33bedf;
}
.section-1 .section-img {
  position: relative;
  height: 100%;
}
.section-1 img {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
.section-1 .back-img {
  height: 60%;
  top: 40%;
}
.section-1 .front-img {
  height: 60%;
  top: 60%;
}
.header h3 {
  font-weight: 700;
  font-size: 26px;
}
.section-2 .header h3:before {
  content: "";
  width: 5px;
  height: 30px;
  background: linear-gradient(135deg, #17ead9, #6078ea);
  background-size: 400% 400%;
  -webkit-animation: AnimationName 10s ease infinite;
  animation: AnimationName 10s ease infinite;
  display: inline-block;
  margin-left: 7px;
  position: relative;
  top: 10px;
}
.section-3 {
  padding-bottom: 100px;
}
.card-link .card:hover{
  background-color: #33bedfa1;
}
</style>
