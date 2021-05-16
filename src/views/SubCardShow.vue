<template>
  <div class="SubCard pad-100">
    <b-container>
      <h1 class="H1">وزارة الداخلية</h1>
      <b-row>
        <b-col cols md="4" class="web-card">
          <router-link class="card-link" :to="{ name: 'ShowInfoApp' , params:{id:1} }">
            <b-card
              title="ابشر"
              :img-src="require('../assets/1-2.png')"
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
</style>
