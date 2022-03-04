<template>
  <div class="left">
    <dv-border-box-8 :reverse="true" style="padding:20px 10px 0">
      <div style="font-size:18px">
        <div>月总销量</div>
        <dv-decoration-3 style="width:3.25rem;height:.45rem;position:relative;left:90px;top:-22px;" />
      </div>
      <dv-capsule-chart :config="config" style="width: 550px; height: 60vh" />
    </dv-border-box-8>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        
        data: [
          {
            name: "2021-01",
            value: 67,
          },
          {
            name: "2021-02",
            value: 137,
          },
          {
            name: "2021-03",
            value: 167,
          },
          {
            name: "2021-04",
            value: 67,
          },
          {
            name: "2021-05",
            value: 123,
          },
          {
            name: "2021-06",
            value: 55,
          },
         
        ],
        colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        unit: "销量",
        showValue: false
      },


    
    };
  },
};
</script>

<style scoped>
</style>