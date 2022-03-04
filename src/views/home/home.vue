<template>
  <div id="home">
    <div class="bg" >

      <!-- 头部导航 -->
      <nav-bar></nav-bar>

      <!-- 左侧数据 -->
      <dv-border-box-12 class="left-border">
        <data-screen></data-screen>
      </dv-border-box-12>
      
      <!-- 中心地图展示区域 -->
      <center></center>

      <!-- 右侧排名 -->
      <dv-border-box-13 class="right-border">
        <center-right ></center-right>
      </dv-border-box-13>

      <!-- 中间数字盘 -->
      <center-bottom></center-bottom>

      <!-- 底部表格 -->
      <div class="bottom-table">
        <dv-border-box-13 style="width:49%">
          <bottom-left />
        </dv-border-box-13>
        <dv-border-box-12 style="width:49%">
          <bottom-right />
        </dv-border-box-12>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/navbar/navbar.vue"
import Center from "./childComps/business.vue"
import CenterRight from "./childComps/saleRank.vue"
import dataScreen from "./childComps/dataScreen.vue"
import BottomLeft from "./childComps/conplationRate.vue"
import BottomRight from "./childComps/saleTrend.vue"
import CenterBottom from "./childComps/regionPropertion.vue"

import {formatTime} from '../../utils/index.js'


export default {
  data () {
    return {
      isShow:true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  components:{
    NavBar,
    Center,
    CenterRight,
    dataScreen,
    BottomLeft,
    BottomRight,
    CenterBottom,
  },
  mounted () {
    this.timeFn();
    setTimeout(() => {
      this.isShow = false;
    },500)
  },
  methods: {
    // 时间
    timeFn () {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss');
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 500)
    }
  }
};
</script>

<style lang="scss">
  #home{
    color: #d3d6dd;
    background-color: #000000;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .bg {
    width: 100%;
    padding: 0.2rem 0.2rem 0 0.2rem;
    background-image: url("../../assets/img/bg.jpg");
    background-size: cover;
    background-position: center center;
  }
    // 中间左边
  .left-border{
    width: 23%;
    height: 8rem;
    margin-top: 0.2rem;
  }
  // 中间右边
  .right-border{
    width: 23%;
    height: 8rem;
    position: absolute;
    right: 0.2rem;
    top: 1.65rem;
  }
  // 左下
  .left-bottom{
   width: 25%; 
   height: 6.225rem;
   position: absolute;
   top:10rem
  }
  // 底部两个表格
  .bottom-table{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
 
  }
</style>