<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
        category: [
          "华东LPG",
          "华南LPG",
          "西南LPG",
          "东南LPG",
          "北方LPG",
          "",
          
        ],
        lineData: [
          18092,
          20728,
          24045,
          28348,
          32808,
          0,
         
        ],
        barData: [
          4600,
          15000,
          5500,
          6500,
          7500,
          0,
         
         
        ],
        rateData: []
      }
    };
  },
  components: {
    Chart,
  },
  mounted () {
    this.setData();
  },
  methods: {
    // 根据自己的业务情况修改
    setData () {
      for (let i = 0; i < this.cdata.barData.length -1; i++) {
        let rate = this.cdata.barData[i] / this.cdata.lineData[i];
        this.cdata.rateData.push(rate.toFixed(2));
      }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>