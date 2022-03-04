<template>
  <!-- 销售分析 -->
  <div id="sell">
    <div class="wraper">
      <navbar></navbar>
      <top-left></top-left>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/navbar/navbar.vue"
import TopLeft from "./childComps/topLeft.vue"
export default {
  name:"Sell",
  components:{
    Navbar,
    TopLeft
  }
}
</script>

<style scoped>
#sell{
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