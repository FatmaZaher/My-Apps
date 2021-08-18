<template>
  <div v-if="service" class="aboutapps text-center pad-100">
    <b-container>
      <h1 class="H1">{{page.ServiceName}}</h1>
      <b-card
        :img-src="service.ServiceURL"
        img-alt="Image"
        img-top
        tag="article"
      >
        <div class="down-link mt-4 mb-5">
          <b-link href="#">
            <img src="../assets/google-play.png" alt="google-play" />
            <span>تحميل التطبيق</span>
          </b-link>
          <b-link href="#">
            <i class="fab fa-apple"></i>
            <span>تحميل التطبيق</span>
          </b-link>
        </div>
        <b-card-text class="my-4" v-html="service.ServiceDescription">
        </b-card-text>
      </b-card>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data (){
    return{
      service :null,
      page : null,
      parent : null
    }
  },
  created (){
     const servicesId = this.$route.params.id
    axios.get("https://myapps.cc/wcf/service.svc/getServiceById/" + servicesId).then(res => {
      this.service = res.data
      this.parent = res.data.ParentId;
        axios
          .get(
            "https://myapps.cc/wcf/service.svc/getServiceChildById/" +
              this.parent
          )
          .then((res) => {
             this.page = res.data.find((item) => item.ServiceId == servicesId);
          });
    })
  }
};
</script>


<style scoped>
</style>
