<template>
  <!-- 项目公司销量排行榜 -->
  <div id="centerRight">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <!-- <icon name="chart-line"></icon> -->
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">销量排行榜</span>
          <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board :config="config" style="width:4.775rem;height:100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ["项目公司", "当日销量"],
        data: [
          ["包头中燃百江能源1",  "24"],
          ["包头中燃百江能源2", "35"],
          ["包头中燃百江能源3", "55"],
          ["包头中燃百江能源4", "62"],
          ["包头中燃百江能源5", "77"],
          ["包头中燃百江能源6", "85"],
          ["包头中燃百江能源7", "93"],
          ["包头中燃百江能源8", "102"],
          ["包头中燃百江能源9", "116"],
          ["包头中燃百江能源10", "124"],
          ["包头中燃百江能源11", "124"],
          ["包头中燃百江能源12", "124"],
          ["包头中燃百江能源13", "124"],
          ["包头中燃百江能源14", "124"],
        ],
        rowNum: 10, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: true,
        columnWidth: [50,160,80],
        align: ["center","center","center"]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#centerRight {
  padding: 0.2rem;
  height: 100%;
  min-width: 3.75rem;
  border-radius: 0.0625rem;

  .bg-color-black {
    height: 100%;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    height: 90%;
    border-radius: 0.125rem;
    overflow: hidden;
  }
}
</style>