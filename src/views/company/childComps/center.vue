<template>
  <div class="center">
    <div >
      <div class="box_1 box">
        <div>当日销量(吨)</div>
        <div class="box_text">111</div>
      </div>
      <div class="box_2 box">
        <div>新增客户(个)</div>
        <div class="box_text">444</div>
      </div>
    </div>
    <div>
      <div class="box_3 box">
        <div>当日订单量(个)</div>
        <div class="box_text">333</div>
      </div>
      <div class="box_4 box">
        <div>当日营业额(万)</div>
        <div class="box_text">55222.5</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: space-around;
}
.box {
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 16px;
}
.box_text{
  font-size: 28px;
  font-weight: 600;
  margin-top: 14px;
  color: #E062AE;
}
.box_1::before {
  width: 160px;
  height: 160px;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../../../assets/img/quan01.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: animation-rotate 4s linear infinite;
}
.box_2::before {
  width: 160px;
  height: 160px;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../../../assets/img/quan02.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: animation-rotate1 4s linear infinite;
}
.box_3::before {
  width: 160px;
  height: 160px; 
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../../../assets/img/quan02.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: animation-rotate1 4s linear infinite;
}
.box_4::before {
  width: 170px;
  height: 170px;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../../../assets/img/quan01.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: animation-rotate 4s linear infinite;
}
@keyframes animation-rotate {
  0% {
    transform: rotatez(360deg);
  }
  100% {
    transform: rotatez(0deg);
  }
}
@keyframes animation-rotate1 {
  0% {
    transform: rotatez(0deg);
  }
  100% {
    transform: rotatez(360deg);
  }
}
</style>