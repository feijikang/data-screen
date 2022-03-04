<template>
  <!-- 区域各项具体情况 -->
  <dv-border-box-10 class="warrap">
    <div class="center-bottom">
      <div class="center-item">
      <dv-active-ring-chart :config="config" style="width:240px;height:200px"/>
      <div class="item-text">总销量</div>
    </div>
    <div class="center-item">
      <dv-active-ring-chart :config="config" style="width:240px;height:200px"/>
      <div class="item-text">直销量</div>
    </div>
    <div class="center-item">
      <dv-active-ring-chart :config="config1" style="width:240px;height:200px"/>
      <div class="item-text">商业量</div>
    </div>
    <div class="center-item">
      <dv-active-ring-chart :config="config" style="width:240px;height:200px"/>
      <div class="item-text">吨毛利</div>
    </div>
    <div class="center-item">
      <dv-active-ring-chart :config="config" style="width:240px;height:200px"/>
      <div class="item-text">溢气量</div>
    </div>
    <div class="center-item">
      <dv-active-ring-chart :config="config1" style="width:240px;height:200px"/>
      <div class="item-text">溢气率</div>
    </div>
    </div>
  </dv-border-box-10>
</template>

<script>
export default {
  data() {
    return {
      config: {
        radius: "55%",
        activeRadius: "65%",
        data: [
          {
            name: "华东LPG",
            value: 55,
          },
          {
            name: "华南LPG",
            value: 120,
          },
          {
            name: "西南LPG",
            value: 78,
          },
          {
            name: "东南LPG",
            value: 66,
          },
          {
            name: "北方LPG",
            value: 80,
          },
        ],
        digitalFlopStyle: {
          fontSize: 15,
          fill:'#7D58AD'
        },
        showOriginValue: true,
      },
      config1: {
        radius: "55%",
        activeRadius: "65%",
        data: [
          {
            name: "华东LPG",
            value: 40,
          },
          {
            name: "华南LPG",
            value: 120,
          },
          {
            name: "西南LPG",
            value: 68,
          },
          {
            name: "东南LPG",
            value: 66,
          },
          {
            name: "北方LPG",
            value: 150,
          },
        ],
        digitalFlopStyle: {
          fontSize: 15,
          fill:'#7D58AD'
        },
        showOriginValue: true,
      },
    };
  },
};
</script>

<style scoped>
.warrap{
  margin: 0.8rem 0 0.3rem;
  padding-bottom: 0.2rem;
}
.center-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.center-item{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-text{
  font-size: 22px;
}
</style>