<template>
  <div class="MainCard pad-100">
    <b-container>
      <h1 class="H1">قسم الوزارات</h1>
      {{ $route.params.id }}
      <b-row>
        <b-col cols md="4" class="web-card">
          <router-link class="card-link" :to="{ name: 'SubCardShow' , params:{id:1}}">
            <b-card
              title="وزارة الداخلية"
              sub-title="تطبيقات وزارة الداخلية"
              :img-src="require('../assets/1-1.png')"
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
export default {};
</script>
<style scoped>
.card-link .card{
  padding: 50px 0;
}

</style>
