<template>
  <div id="right2">
    <div id="rightTable2" style="width: 480px; height: 300px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getRightEcharts2() {
      var myChart = this.$echarts.init(document.getElementById("rightTable2"));
      var option = {
        title: {
          text: "定气周期分析",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: [],
          textStyle: {
            fontSize: 15,
            color: "#fff",
          },
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: ["华东lpg", "华南lpg", "西南lpg", "东南lpg", "北方lpg"],
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值得具体的颜色
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "单位(天)",
            color: "#fff",
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
          },
        ],
        series: [
          {
            name: "商用",
            type: "bar",
            data: [25.6, 76.7, 135.6, 162.2, 32.6],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
            // 柱状颜色
            itemStyle:{
              normal:{
                color:'#e8615d'
              }
            }
          },
          {
            name: "民用",
            type: "bar",
            data: [28.7, 70.7, 175.6, 182.2, 48.7],
            markPoint: {
              data: [
                { name: "年最高", value: 182.2, xAxis: 7, yAxis: 183 },
                { name: "年最低", value: 2.3, xAxis: 11, yAxis: 3 },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
            // 柱状颜色
            itemStyle:{
              normal:{
                color:'#6bacf3'
              }
            }
          },
        ],
      };

      myChart.setOption(option);
    },
  },
  mounted() {
    this.getRightEcharts2();
  },
};
</script>

<style scoped>
#right2 {
  position: absolute;
  right: 1rem;
  top: 6.5rem;
}
</style>