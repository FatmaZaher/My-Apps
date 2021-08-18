<template>
  <div class="SubCard pad-100">
    <b-container>
      <h1 class="H1">{{ page.ServiceName }}</h1>
      <b-row>
        <b-col
          v-for="(service, index) in services"
          :key="index"
          cols
          md="4"
          class="web-card"
        >
          <router-link
            class="card-link"
            :to="{ name: 'ShowInfoApp', params: { id: service.ServiceId } }"
          >
            <b-card
              :title="service.ServiceName"
              :img-src="service.ServiceURL"
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
      parent: null,
    };
  },
  created() {
    const servicesId = this.$route.params.id;
 
    axios
      .get(
        "https://myapps.cc/wcf/service.svc/getServiceChildById/" + servicesId
      )
      .then((res) => {
        this.services = res.data;
        this.parent = res.data[0].ServiceTypeId;
        axios
          .get(
            "https://myapps.cc/wcf/service.svc/getServicesListByServiceTypeId/" +
              this.parent
          )
          .then((res) => {
             this.page = res.data.find((item) => item.ServiceId == servicesId);
          });
      });
  },
};
</script>
<style scoped></style>
