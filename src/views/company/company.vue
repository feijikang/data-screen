<template>
  <!-- 项目公司 -->
  <div id="company">
    <div class="wraper">
      <navbar></navbar>

      <div class="select-com"> 
        <label for="">
          <select class="select-item">
            <option value="1">华北LPG</option>
            <option value="2">华南LPG</option>
            <option value="3">北方LPG</option>
            <option value="4">华东LPG</option>
            <option value="5">东南LPG</option>
          </select>
        </label>
        <label for="">
          <select class="select-item">
            <option value="11">南京中燃</option>
            <option value="21">北京中燃</option>
            <option value="31">镇江中燃</option>
            <option value="41">包头中燃</option>
            <option value="51">衡阳中燃</option>
          </select>
        </label>
        <button class="btn">查询</button>
      </div>

      <div class="center">
        <right></right>
        <div>
          <div class="title">衡阳中燃百江能源有限公司</div>
          <center></center>
          <bottom></bottom>
        </div>
        <left></left>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../../components/navbar/navbar.vue";
import bottom from "./childComps/bottom.vue";
import center from "./childComps/center.vue";
import left from "./childComps/left.vue";
import right from "./childComps/right.vue";

export default {
  components: {
    navbar,
    left,
    center,
    right,
    bottom,
  },
};
</script>

<style scoped>
#company {
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
.center {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  text-align: center;
  font-size: 24px;
}
.select-com{
  margin: 20px 0;
}
.select-item{
  width: 150px;
  height: 25px;
  margin-right: 20px;
  /* background-color: transparent; */
  /* color: #fff; */
  border-color: #1A5CD7;
}
option{
  background-color: transparent;
}
.btn{
  background-color: transparent;
  color: #fff;
  border: #1A5CD7 solid 1px;
  width: 50px;
  height: 25px;
}
</style>