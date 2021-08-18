<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col col="6" md="4" offset-md="1">
          <img src="../assets/logo.png" alt="logo" />
          <p class="my-4">
            تطبيقاتي هو دليلك لأهم التـطبيقات الـموثوقـة التي تحتاجها بشكل دائم
          </p>
          <h5>حمّل التطبيق</h5>

          <b-row>
            <b-col col="6">
              <div class="download text-center mt-3">
                <img src="../assets/AppGallery.png" alt="App Gallery" />
                <p class="my-1">حمل التطبيق من</p>
                <a href="#">App Gallery</a>
              </div>
            </b-col>
            <b-col col="6">
              <div class="download text-center mt-3">
                <img src="../assets/google-play.png" alt="App Gallery" />
                <p class="my-1">حمل التطبيق من</p>
                <a href="#">Google Play</a>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col col="6" md="2">
          <h5>تواصل معنا</h5>
          <p class="mt-4">info@myapps.cc</p>
          <a href="#"> Ksa_Myaaps </a>
        </b-col>
        <b-col col="6" md="4">
          <h5>أقسام المواقع</h5>
          <ul class="mt-4">
            <li><a href="#">الوزارات</a></li>
            <li><a href="#">شركات الاتصالات</a></li>
            <li><a href="#">طيران وحجوزات</a></li>
            <li><a href="#">صحف</a></li>
            <li><a href="#">تسوق - توصيل - صيانة</a></li>
            <li><a href="#">مطاعم وكافيات وحلويات</a></li>
            <li><a href="#">الترفيه</a></li>
            <li><a href="#">البنوك</a></li>
            <li><a href="#">الجامعات والمعاهد</a></li>
            <li><a href="#">مؤسسات وهيئات</a></li>
            <li><a href="#">خدمات حكومية</a></li>
            <li><a href="#">القطاع الصحي</a></li>
            <li><a href="#">التواصل الاجتماعي</a></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #000;
  padding: 50px 0;
  color: #fff;
  font-size: 13px;
}
.footer img {
  height: 50px;
}
.download {
  padding: 15px 0;
  background-color: #fff;
  color: #41979a;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
}
.download img {
  height: 25px;
}
a {
  text-decoration: none !important;
  color: #c7c7c7;
}
a:hover {
  color: #fff;
}
.download a {
  color: #41979a;
}
ul {
  -moz-column-count: 2;
  -moz-column-gap: 20px;
  -webkit-column-count: 2;
  -webkit-column-gap: 20px;
  column-count: 2;
  column-gap: 10px;
  padding: 0;
}
ul li {
  list-style: none;
  margin-bottom: 10px;
}
</style>
