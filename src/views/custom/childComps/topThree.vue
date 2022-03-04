<template>
  <div >
    <div class="left-title2">直销退户数占比</div>
    <div id="customEcharts2" style="width:280px;height:220px"></div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    setCustomEcharts() {
      var myChart = this.$echarts.init(document.getElementById("customEcharts2"));
      
      var option = {
        series: [
          {
            type: "gauge",
            axisLine: {
              lineStyle: {
                width: 30,
                color: [
                  [0.3, "#67e0e3"],
                  [0.7, "#37a2da"],
                  [1, "#fd666d"],
                ],
              },
            },
            pointer: {
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              distance: -30,
              length: 8,
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            },
            splitLine: {
              distance: -30,
              length: 30,
              lineStyle: {
                color: "#fff",
                width: 4,
              },
            },
            axisLabel: {
              color: "auto",
              distance: 1,
              fontSize:12,
            },
            detail: {
              valueAnimation: true,
              formatter: "90",
              color: "auto",
            },
            data: [
              {
                value: 90,
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.setCustomEcharts();
  },
};
</script>

<style scoped>
.left-title2{
  text-align: center;
  font-size: 20px;
}
</style>