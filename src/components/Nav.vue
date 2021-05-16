<template>
    <div id="nav" class="nav"> 

      <b-container>
        <b-navbar>

              <b-navbar-brand>
                <router-link to="/"><img src="../assets/logo.png" alt="logo"></router-link>
              </b-navbar-brand>

              <b-navbar-nav>
                
                  <b-nav-form>
                    <b-form-input class="" placeholder="إبحث عن تطبيقك هنا"></b-form-input>
                  </b-nav-form>

                  <b-nav-item>
                    <router-link :to="{ name: 'Main' }">الرئيسية</router-link>
                  </b-nav-item>

                  <b-nav-item>
                    <router-link :to="{ name: 'Aboutapps' }">عن تطبيقاتي</router-link>
                  </b-nav-item>
                
              </b-navbar-nav>

        </b-navbar>

      </b-container>


    </div>
</template>

<script>
export default {
}

</script>

<style scoped>
.nav{
  background-color: #15a1c1;
  font-family: 'Cairo', sans-serif;
  font-size: 14px;
}
input{
  padding: 20px;
  border-radius: 20px;
  width: 420px !important;
  margin: 0 180px;
  font-size: 13px;
}
a{
  color: #fff !important;
  text-decoration: none !important;
  font-weight: 600;
}
a:hover{
  font-weight: 700;
}

img{
  height: 50px;
}
</style>
