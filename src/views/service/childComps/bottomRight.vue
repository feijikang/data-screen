<template>
  <div id="right">
    <div id="rightTable" style="width: 480px; height: 280px"></div> 
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getRightEcharts() {
      var myChart = this.$echarts.init(
        document.getElementById("rightTable")
      );
      myChart.clear();  

      var option = {
        title: {
          text: '回访分析',
          textStyle:{
            color:'#fff'
          }
       },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#fff",
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["回访量",  "回访率"],
          textStyle: {
            fontSize: 15,
            color:"#fff"
          }
        },
        xAxis: [
          {
            type: "category",
            data: [
              "华东lpg",
              "华南lpg",
              "西南lpg",
              "东南lpg",
              "北方lpg"
            ],
            axisPointer: {
              type: "shadow",
            },
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
            name: "单位(个)",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ",
              textStyle: {
                color: "#fff",
              },
            },
            
          },
          {
            type: "value",
            color:'#fff',
            name: "单位%",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#fff",
              },
            },
          },
          
        ],
        series: [
          {
            name: "回访量",
            type: "bar",
            data: [
              23.2, 135.6, 76.7, 135.6, 62.2, 
            ],
            // 柱状颜色
            itemStyle:{
              normal:{
                color:'#4992FF'
              }
            }
          },
          {
            name: "回访率",
            type: "line",
            yAxisIndex: 1,
            data: [
               6.3, 20.2, 20.3, 23.4, 13.0
            ],
            // 线状颜色
            itemStyle:{
              normal:{
                color:'#4992FF'
              }
            }
          },
        ],
      };

      myChart.setOption(option);
    },
  },
  mounted() {
    this.getRightEcharts();

  },
};
</script>

<style scoped>

</style>