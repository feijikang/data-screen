<template>
  <div class="top">
    <div class="top-title">
      <div class="top-title-item">总体分析</div>
      <!-- <dv-decoration-1 style="width:150px;height:20px;" /> -->
    </div>
    <div id="top" style="width: 600px; height: 280px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer:null
    };
  },
  methods: {
    getRightEcharts() {
      var myChart = this.$echarts.init(document.getElementById("top"),'dark');

      myChart.clear();

      var option = {
        backgroundColor: '#100C2A',//背景色 
        color:['#4992FF','#7CFFB2','#FDDD60','#FDDD60','#189702'], //图例颜色
        title: {
          text: "",
        },
        tooltip: {
          trigger: "axis",
        },
        // 图例
        legend: {
          data: ["华东lpg", "华南lpg", "西南lpg", "东南lpg", "北方lpg"],
          textStyle: {
            fontSize: 15,
            color:"#fff"
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
          backgroundColor: "rgba(255,255,255)",
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        // x轴
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2021-01",
            "2021-02",
            "2021-03",
            "2021-04",
            "2021-05",
            "2021-06",
            "2021-07",
          ],
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
        },
        // y轴
        yAxis: {
          type: "value",
          color: "#fff",
          name:'热线接听量',
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
        },
        // 折线配置
        series: [
          {
            name: "华东lpg",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
            lineStyle:{
              normal:{
                color:'#4992FF',
                width:3
              }
            }
          },
          {
            name: "华南lpg",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
            lineStyle:{
              normal:{
                color:'#7CFFB2',
                width:3
              }
            }
          },
          {
            name: "西南lpg",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
            lineStyle:{
              normal:{
                color:'#FDDD60',
                width:3
              }
            }
          },
          {
            name: "东南lpg",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320],
            lineStyle:{
              normal:{
                color:'#FDDD60',
                width:3
              }
            }
          },
          {
            name: "北方lpg",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            lineStyle:{
              normal:{
                color:'#189702',
                width:3
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
.top-title{
  display: flex;
  align-items: center;
}
.top-title-item{
  font-size: 18px;
  margin-right: 60px;
  margin-bottom: 10px;
}
</style>