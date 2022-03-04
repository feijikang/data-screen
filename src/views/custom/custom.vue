<template>
<!-- 客户分析 -->
  <div class="custom">
    <div class="wraper">
      <navbar></navbar>
      <!-- 进度条 -->
      <div class="progess">
        <dv-decoration-2 style="width:50%;height:5px;" :color="['#1A5CD7']" />
        <dv-decoration-2 style="width:50%;height:5px;transform: rotateY(180deg);" :color="['#1A5CD7']" />
      </div>
      
      <!-- 油表 -->
      <div style="display:flex;margin-top:20px">
        <top-one></top-one>
        <top-two></top-two>
        <top-three></top-three>
      </div>

      <!-- 表格 -->
      <div class="middle-table">
        <center></center>
      </div>

      <!-- 折线柱状图 -->
      <top-right></top-right>
      <bottom-right></bottom-right>
      
      
      
    </div>
    
  </div>
</template>

<script>
import navbar from '../../components/navbar/navbar.vue'
import center from './childComps/center.vue'
import topOne from './childComps/topOne.vue'
import topTwo from './childComps/topTwo.vue'
import topThree from './childComps/topThree.vue'
import topRight from './childComps/topRight.vue'
import bottomRight from './childComps/bottomRight.vue'

export default {
  components:{
    navbar,
    center,
    topOne,
    topTwo,
    topThree,
    topRight,
    bottomRight,
  }
}
</script>

<style scoped>
.custom{
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
  background-image: url("../../assets/img/bg.jpg");
  background-size: cover;
  background-position: center center;
}
.progess{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
}
.middle-table{
  width: 55vw;
}
</style>