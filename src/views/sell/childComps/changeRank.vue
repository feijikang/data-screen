<template>
  <div>
    
  </div>
</template>

<script>
import $ from "jquery"

export default {
  data(){
    return {

    }
  },
  methods:{
    getNowPrice() {
      var myCharts = this.$echarts.init(document.getElementById("sellAnalyses"));

      var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
      const updateFrequency = 2000;
      const dimension = 0;
      const countryColors = {
        
      };
      $.when(
        $.getJSON("https://cdn.jsdelivr.net/npm/emoji-flags@1.3.0/data.json"),
        $.getJSON(ROOT_PATH + "/data/asset/data/life-expectancy-table.json")
      ).done(function (res0, res1) {
        const flags = res0[0];
        const data = res1[0];
        const years = [];
        for (let i = 0; i < data.length; ++i) {
          if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
            years.push(data[i][4]);
          }
        }
        function getFlag(countryName) {
          if (!countryName) {
            return "";
          }
          return (
            flags.find(function (item) {
              return item.name === countryName;
            }) || {}
          ).emoji;
        }
        let startIndex = 10;
        let startYear = years[startIndex];
        var options = {
          grid: {
            top: 10,
            bottom: 30,
            left: 150,
            right: 80,
          },
          xAxis: {
            max: "dataMax",
            axisLabel: {
              formatter: function (n) {
                return Math.round(n) + "";
              },
            },
          },
          dataset: {
            source: data.slice(1).filter(function (d) {
              return d[4] === startYear;
            }),
          },
          yAxis: {
            type: "category",
            inverse: true,
            max: 10,
            axisLabel: {
              show: true,
              fontSize: 14,
              formatter: function (value) {
                return value + "{flag|" + getFlag(value) + "}";
              },
              rich: {
                flag: {
                  fontSize: 25,
                  padding: 5,
                },
              },
            },
            animationDuration: 300,
            animationDurationUpdate: 300,
          },
          series: [
            {
              realtimeSort: true,
              seriesLayoutBy: "column",
              type: "bar",
              itemStyle: {
                color: function (param) {
                  return countryColors[param.value[3]] || "#5470c6";
                },
              },
              encode: {
                x: dimension,
                y: 3,
              },
              label: {
                show: true,
                precision: 1,
                position: "right",
                valueAnimation: true,
                fontFamily: "monospace",
              },
            },
          ],
          // Disable init animation.
          animationDuration: 0,
          animationDurationUpdate: updateFrequency,
          animationEasing: "linear",
          animationEasingUpdate: "linear",
          graphic: {
            elements: [
              {
                type: "text",
                right: 160,
                bottom: 60,
                style: {
                  text: startYear,
                  font: "bolder 80px monospace",
                  fill: "rgba(100, 100, 100, 0.25)",
                },
                z: 100,
              },
            ],
          },
        };
        // console.log(option);
        myCharts.setOption(options);
        for (let i = startIndex; i < years.length - 1; ++i) {
          (function (i) {
            setTimeout(function () {
              updateYear(years[i + 1]);
            }, (i - startIndex) * updateFrequency);
          })(i);
        }

        function updateYear(year) {
          let source = data.slice(1).filter(function (d) {
            return d[4] === year;
          });
          options.series[0].data = source;
          options.graphic.elements[0].style.text = year;
          myCharts.setOption(options);
        }
      });
      // options && myCharts.setOption(options);
    },
  }
}
</script>

<style>

</style>