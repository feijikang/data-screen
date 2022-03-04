<template>
  <div id="bottom1">
    <div id="bottomTable1" style="width: 480px; height: 280px"></div> 
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
        document.getElementById("bottomTable1")
      ); 
      
      myChart.clear();

      var option = {
        title: {
          text: '安检分析',
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
          data: ["安检量",  "安检率"],
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
            name: "安检量",
            type: "bar",
            data: [
              123.2, 35.6, 176.7, 35.6, 162.2, 
            ],
            // 柱状颜色
            itemStyle:{
              normal:{
                color:'#189702'
              }
            }
          },
          {
            name: "安检率",
            type: "line",
            yAxisIndex: 1,
            data: [
               16.3, 10.2, 24.3, 13.4, 21.0
            ],
            // 柱状颜色
            itemStyle:{
              normal:{
                color:'#189702'
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