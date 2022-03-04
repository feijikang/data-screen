<template>
  <!-- 门店分析 -->
  <div id="shops">
    <div class="wraper">
      <navbar></navbar>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/navbar/navbar.vue"
export default {
  name:"Shops",
  components:{
    Navbar
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>
#shops{
  color: #d3d6dd;
  background-color: #000000;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
}
.wraper{
  width: 100vw;
  height: 100vh;
  padding: 0.2rem 0.2rem 0 0.2rem;
  background-image: url("../../assets/img/pageBg.png");
  background-size: cover;
  background-position: center center;
}
</style>