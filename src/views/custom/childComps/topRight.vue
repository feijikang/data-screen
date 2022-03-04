<template>
  <div id="right">
    <div id="rightTable" style="width: 480px; height: 300px"></div> 
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getRightEcharts1() {
      var myChart = this.$echarts.init(
        document.getElementById("rightTable")
      );
      var option = {
        title: {
          text: '活跃客户数分析',
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
          data: ["活跃客户数",  "活跃度"],
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
            name: "活跃客户数",
            type: "bar",
            data: [
              23.2, 35.6, 76.7, 135.6, 162.2, 
            ],
            // 柱状颜色
            itemStyle:{
              normal:{
                color:'#e8615d'
              }
            }
          },
          {
            name: "活跃度",
            type: "line",
            yAxisIndex: 1,
            data: [
               6.3, 10.2, 20.3, 23.4, 23.0
            ],
          },
        ],
      };

      myChart.setOption(option);
    },
  },
  mounted() {
    this.getRightEcharts1();
  },
};
</script>

<style scoped>
  #right{
    position: absolute;
    right: 1rem;
    top: 2rem;
  }
</style>