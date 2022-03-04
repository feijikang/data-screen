<template>
  <!-- 业务分布 -->
  <div class="center">
    <dv-flyline-chart-enhanced
      :config="config"
      style="width: 100%; height: 100%;"
      :dev="true"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        points: [
          {
            name: "深圳",
            coordinate: [0.71, 0.86],
            halo: {
              show: true,
            },
            icon: {
              src: require("../../../assets/img/mapCenterPoint.png"),
              width: 30,
              height: 30,
            },
            text: {
              show: true,
              color: '#fb7293'
            }
          },
          {
            name: "呼和浩特",
            coordinate: [0.64, 0.37],
          },
          {
            name: "包头",
            coordinate: [0.59, 0.39],
          },
          {
            name: "沈阳",
            coordinate: [0.84, 0.31],
          },
          {
            name: "鸡西",
            coordinate: [0.95, 0.18],
          },
          {
            name: "镇江",
            coordinate: [0.78, 0.54],
          },
          {
            name: "常熟",
            coordinate: [0.82, 0.57],
          },
          {
            name: "台州",
            coordinate: [0.85, 0.67],
          },
          {
            name: "温州",
            coordinate: [0.83, 0.71],
          },
          {
            name: "芜湖",
            coordinate: [0.74, 0.56],
          },
          {
            name: "铜陵",
            coordinate: [0.76, 0.59],
          },
          {
            name: "厦门",
            coordinate: [0.79, 0.80],
          },
          {
            name: "福州",
            coordinate: [0.81, 0.77],
          },
          {
            name: "晋江",
            coordinate: [0.77, 0.77],
          },
          {
            name: "潍坊",
            coordinate: [0.79, 0.47],
          },
          {
            name: "十堰",
            coordinate: [0.63, 0.61],
          },
          {
            name: "襄阳",
            coordinate: [0.66, 0.63],
          },
          {
            name: "株洲",
            coordinate: [0.69, 0.72],
          },
          {
            name: "湘潭",
            coordinate: [0.63, 0.68],
          },
          {
            name: "衡阳",
            coordinate: [0.62, 0.72],
          },
          {
            name: "益阳",
            coordinate: [0.69, 0.77],
          },
          {
            name: "常德",
            coordinate: [0.68, 0.68],
          },
          {
            name: "长沙",
            coordinate: [0.66, 0.71],
          },
          {
            name: "郴州",
            coordinate: [0.66, 0.78],
          },
          {
            name: "佛山",
            coordinate: [0.67, 0.82],
          },
          {
            name: "清远",
            coordinate: [0.65, 0.86],
          },
          {
            name: "韶关",
            coordinate: [0.70, 0.81],
          },
          {
            name: "广西",
            coordinate: [0.55, 0.83],
          },
          {
            name: "柳州",
            coordinate: [0.60, 0.81],
          },
          {
            name: "南宁",
            coordinate: [0.63, 0.84],
          },
          {
            name: "钦州",
            coordinate: [0.59, 0.88],
          },
          {
            name: "海南",
            coordinate: [0.61, 0.95],
          },
          {
            name: "西安",
            coordinate: [0.61, 0.51],
          },
          {
            name: "甘肃",
            coordinate: [0.52, 0.52],
          },
          {
            name: "岳阳",
            coordinate: [0.62, 0.76],
          },
        ],
        lines: [
          {
            source: "呼和浩特",
            target: "深圳",
          },
          {
            source: "包头",
            target: "深圳",
          },
          {
            source: "沈阳",
            target: "深圳",
          },
          {
            source: "鸡西",
            target: "深圳",
          },
          {
            source: "镇江",
            target: "深圳",
          },
          {
            source: "常熟",
            target: "深圳",
          },
          {
            source: "台州",
            target: "深圳",
          },
          {
            source: "温州",
            target: "深圳",
          },
          {
            source: "芜湖",
            target: "深圳",
          },
          {
            source: "铜陵",
            target: "深圳",
          },
          {
            source: "厦门",
            target: "深圳",
          },
          {
            source: "福州",
            target: "深圳",
          },
          {
            source: "晋江",
            target: "深圳",
          },
          {
            source: "潍坊",
            target: "深圳",
          },
          {
            source: "十堰",
            target: "深圳",
          },
          {
            source: "襄阳",
            target: "深圳",
          },
          {
            source: "株洲",
            target: "深圳",
          },
          {
            source: "湘潭",
            target: "深圳",
          },
          {
            source: "衡阳",
            target: "深圳",
          },
          {
            source: "益阳",
            target: "深圳",
          },
          {
            source: "常德",
            target: "深圳",
          },
          {
            source: "长沙",
            target: "深圳",
          },
          {
            source: "郴州",
            target: "深圳",
          },
          {
            source: "佛山",
            target: "深圳",
          },
          {
            source: "清远",
            target: "深圳",
          },
          {
            source: "韶关",
            target: "深圳",
          },
          {
            source: "广西",
            target: "深圳",
          },
          {
            source: "柳州",
            target: "深圳",
          },
          {
            source: "南宁",
            target: "深圳",
          },
          {
            source: "钦州",
            target: "深圳",
          },
          {
            source: "海南",
            target: "深圳",
          },
          {
            source: "西安",
            target: "深圳",
          },
          {
            source: "甘肃",
            target: "深圳",
          },
          {
            source: "岳阳",
            target: "深圳",
          },
        ],
        icon: {
          show: true,
          src: require("../../../assets/img/mapPoint.png"),
        },
        text: {
          show: true,
        },
        k: 0.5,
        bgImgSrc: require("../../../assets/img/china.png"),
      },
    };
  },
};
</script>

<style scoped>
.center {
  width: 48vw;
  height: 75vh;
  position: absolute;
  left:26%;
  top:1.65rem;
}
</style>