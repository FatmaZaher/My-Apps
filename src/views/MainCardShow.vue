<template>
  <div class="MainCard pad-100">
    <b-container>
      <h1 class="H1">{{page.ServiceTypeName}}</h1>
      <b-row>
        <b-col
          v-for="(fatoom, index) in services"
          :key="index"
          cols
          md="4"
          class="web-card"
        >
          <router-link
            class="card-link"
            :to="{ name: 'SubCardShow', params: { id: fatoom.ServiceId } }"
          >
            <b-card
              :title="fatoom.ServiceName"
              :sub-title="page.ServiceTypeName"
              :img-src="fatoom.ServiceURL"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-5"
            >
            </b-card>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      services: [],
      page: null,
    };
  },
  created() {
    const servicesId = this.$route.params.id;
    
    axios
      .get(
        "https://myapps.cc/wcf/service.svc/getServicesListByServiceTypeId/" +
          servicesId
      )
      .then((res) => {
        this.services = res.data;
      });
    axios
      .get("https://myapps.cc/wcf/service.svc/getServicesTypeList")
      .then((res) => {
        this.page = res.data.find((item) => item.ServiceTypeId == servicesId)
      });
  },
};
</script>
<style scoped>
.card-link .card {
  padding: 50px 0;
}
</style>
