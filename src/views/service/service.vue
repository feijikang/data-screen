<template>
  <!-- 客服分析 -->
  <div class="service">
    <div class="wraper">
      <navbar></navbar>
      <!-- 进度条 -->
      <div class="progess">
        <dv-decoration-2 style="width: 50%; height: 5px" :color="['#1A5CD7']" />
        <dv-decoration-2
          style="width: 50%; height: 5px; transform: rotateY(180deg)"
          :color="['#1A5CD7']"
        />
      </div>
      <!-- 内容展示区 -->
      <div class="top-content">
        <div>
          <dv-border-box-8 class="wraper-top">
            <top-right></top-right>
          </dv-border-box-8>
          <dv-border-box-8 class="wraper-top wraper-top_2" :reverse="true">
            <bottom-right></bottom-right>
          </dv-border-box-8>
        </div>

        <div class="map-list">
          <img src="../../assets/img/map/lbx.png" alt="" class="map-img">
           <img src="../../assets/img/map/jt.png" alt="" class="jzxz1">
          <img src="../../assets/img/map/jzxz2.png" alt="" class="jzxz2">
          <img src="../../assets/img/map/jzxz1.png" alt="" class="jzxz3"> 
        </div>

        <div>
          <dv-border-box-8 class="wraper-top_1" :reverse="true">
            <top-left></top-left>
          </dv-border-box-8>
          <dv-border-box-8 class="wraper-top_1 wraper-top_2">
            <bottom-left></bottom-left>
          </dv-border-box-8>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../../components/navbar/navbar.vue";
import topLeft from "./childComps/topLeft.vue";
import topRight from "./childComps/topRight.vue";
import bottomLeft from "./childComps/bottomLeft.vue";
import bottomRight from "./childComps/bottomRight.vue";

export default {
  name:'Service',
  components: {
    navbar,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
  }
};
</script>

<style scoped>
.service {
  color: #d3d6dd;
  background-color: #000000;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
}
.wraper {
  width: 100vw;
  height: 100vh;
  padding: 0.2rem 0.2rem 0 0.2rem;
  background-image: url("../../assets/img/pageBg.png");
  background-size: cover;
  background-position: center center;
}
.progess {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
}
.middle-table {
  width: 55vw;
}
/* 四个表格 */
.top-content {
  display: flex;
  justify-content: space-between;
}
.wraper-top {
  width: 650px;
  height: 320px;
  padding: 8px 15px;
}
.wraper-top_1 {
  width: 550px;
  height: 320px;
  padding: 8px 15px;
}
.wraper-top_2{
  height: 280px;
}
/* 中间地图图片 */
.map-list{
  position: relative;
  top: 200px;
}
.map-img{
  width: 250px;
  height: 250px;
  animation:animation-map 4s infinite linear;
}
.jzxz1{
  width: 240px;
  height: 240px;
  position: absolute;
  top: 5px;
  left: 5px;
  animation:animation-map1 4s infinite linear;
}
.jzxz2{
  width: 220px;
  height: 220px;
  position: absolute;
  top: 15px;
  left: 15px;
  animation:animation-map1 4s infinite linear;
}
.jzxz3{
  width: 230px;
  height: 230px;
  position: absolute;
  top: 10px;
  left: 10px;
  animation:animation-map 4s infinite linear;
}
@keyframes animation-map{
  0% {
    transform: rotatez(360deg);
  }
  100% {
    transform: rotatez(0deg);
  }
}
@keyframes animation-map1{
  0% {
    transform: rotatez(0deg);
  }
  100% {
    transform: rotatez(360deg);
  }
}
</style>