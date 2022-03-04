<template>
<!-- 数据总览 -->
  <div id="centerLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <!-- <icon name="chart-bar"></icon> -->
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">数据总览</span>
          <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <div class="d-flex jc-center" style="margin:0.6rem 0">
        <center-left-chart></center-left-chart>
      </div>
      <!-- 4个主要的数据 -->
      <div class="bottom-data">
        <div class="item-box" v-for="(item,index) in numberData" :key="index">
          <div>
            <p class="text" style="text-align:center;margin:5px 0">
              {{item.text}}
              <!-- <span class="colorYellow">(件)</span> -->
            </p>
            <!-- <span class="coin">￥</span> -->
            <dv-digital-flop :config="item.number" style="width:2.5rem;height:.625rem;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CenterLeftChart from "../../../components/echart/centerLeft/centerLeftChart/index";
export default {
  name:'dataScreen',
  components:{
    CenterLeftChart
  },
  data() {
    return {
      numberData: [
        {
          number: {
            number: [15],
            toFixed: 1,
            content: "{nt}"
          },
          text: "当日销量(吨)"
        },
        {
          number: {
            number: [1144],
            toFixed: 1,
            content: "{nt}"
          },
          text: "当日新增客户(个)"
        },
        {
          number: {
            number: [361],
            toFixed: 1,
            content: "{nt}"
          },
          text: "当日订单量(单)"
        },
        {
          number: {
            number: [157],
            toFixed: 1,
            content: "{nt}"
          },
          text: "当日营业额(万元)"
        }
      ]
    };
  },

  mounted() {
    this.changeTiming();
  },
  methods: {
    changeTiming() {
      setInterval(() => {
        this.changeNumber();
      }, 3000);
    },
    changeNumber() {
      this.numberData.forEach((item, index) => {
        item.number.number[0] += ++index;
        item.number = { ...item.number };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#centerLeft1 {
  width: 100%;
  height: 100%;
  padding: 0.2rem 0.2rem 0 0.2rem ;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 98%;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
    font-size: 16px;
  }
  .chart-box {
    margin-top: 0.2rem;
    width: 2.125rem;
    height: 2.125rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }

  .bottom-data {
    display: flex;
    flex-wrap: wrap;
    .item-box {
    
      position: relative;
      width: 50%;
      color: #d3d6dd;
      margin-bottom: 0.2rem;
      // 金币
      .coin {
        position: absolute;
        left: 0.1rem;
        top: 0.2125rem;
        font-size: 0.25rem;
        color: #ffc107;
      }
      .colorYellow {
        color: yellowgreen;
      }
    }
  }
}
</style>