<template>
      <div  class="host-body">
        <div class="d-flex jc-center nav-bar">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" :color="['#1A5CD7']"/>
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#1A5CD7','#1A5CD7']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <span class="title-text">LPG业务可视化平台</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#1A5CD7', '#1A5CD7']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" :color="['#1A5CD7']" />
          <div class="time-date">{{dateYear}} {{dateWeek}} {{dateDay}}</div>
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2" style="margin-top:5px">

          <div class="d-flex" style="width: 35%">
            <div class="react-right ml-4" @click="toHome" :class=" this.$route.path == '/home'? 'bg-color-blue':'bc-color'">
              <span class="react-before"   :class=" this.$route.path == '/home'? 'bg-color-blue':'bc-color'"></span>
                <span class="text">LPG终端</span>
            </div>
            <div class="react-right ml-3 "  @click="toCompany"  :class=" this.$route.path == '/company'? 'bg-color-blue':'bc-color'">
              <span class="text ">项目公司</span>
            </div>
            <div class="react-right ml-3 "  @click="toSell"  :class=" this.$route.path == '/sell'? 'bg-color-blue':'bc-color'">
              <span class="text ">销售分析</span>
            </div>
          </div>

          <div style="width: 35%;text-align:right;" class="d-flex">
            <div class="react-left ml-3" @click="toCustom"  :class=" this.$route.path == '/custom'? 'bg-color-blue':'bc-color'">
              <span class="text ">客户分析</span>
            </div>
            <div class="react-left ml-3" @click="toShops"  :class=" this.$route.path == '/shops'? 'bg-color-blue':'bc-color'">
              <span class="text ">门店分析</span>
            </div>
            <div class="react-left mr-4 " style="width: 4rem; text-align: left;margin-left:12px"  @click="toService"
              :class=" this.$route.path == '/service'? 'bg-color-blue':'bc-color'">
              <span class="react-after" :class=" this.$route.path == '/service'? 'bg-color-blue':'bc-color'">客服分析</span>
            </div>
          </div>
        </div>
      </div>

     
      
</template>

<script>
import { formatTime } from '../../utils/index.js'

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
  components: {
   
  },
  mounted () {
    this.timeFn();
  },
  methods: {
    // 时间
    timeFn () {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss');
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 500)
    },
    // 路由跳转
    toHome(){
      this.$router.push('/home')
    },
    toCompany(){
      this.$router.push('/company')
    },
    toCustom(){
      this.$router.push('/custom')
    },
    toService(){
      this.$router.push('/service')
    },
    toSell(){
      this.$router.push('/sell')
    },
    toShops(){
      this.$router.push('/shops')
    },
  }
};
</script>

<style lang="scss" scoped>
  // 顶部
  .host-body {
    width: 100%;

    .nav-bar{
      position: relative;
    }
    .time-date{
      position: absolute;
      bottom: 5px;
      right: 10px;
    }
    .bc-color{
      background-color: #0f1325;
    }
    .title {
      position: relative;
      width: 6.25rem;
      text-align: center;
      background-size: cover;
      background-repeat: no-repeat;

      .title-text {
        font-size: 0.3rem;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }

      .title-bototm {
        position: absolute;
        bottom: -0.375rem;
        left: 50%;
        transform: translate(-50%);
      }
    }

    // 平行四边形
    .react-left {
      cursor: pointer;
      font-size: 0.225rem;
      width: 3.75rem;
      height: 0.625rem;
      line-height: 0.625rem;
      text-align: center;
      transform: skewX(-45deg);

      .react-after {
        position: absolute;
        right: -0.3125rem;
        top: 0;
        height: 0.625rem;
        width: 1.625rem;
        background-color: #0f1325;
        transform: skewX(45deg);
      }

      .text {
        display: inline-block;
        font-size: 18;
        font-weight: 700;
        transform: skewX(45deg);
      }
    }

    .react-right {
      cursor: pointer;
      font-size: 0.225rem;
      width: 3.75rem;
      height: 0.625rem;
      line-height: 0.625rem;
      text-align: center;
      transform: skewX(45deg);

      .react-before {
        position: absolute;
        left: -0.3125rem;
        top: 0;
        height: 0.625rem;
        width: 0.625rem;
        // background-color: #0f1325;
        transform: skewX(-45deg);
      }

      .text {
        display: inline-block;
        transform: skewX(-45deg);
      }
    }

    .body-box {
      margin-top: 0.2rem;
      display: flex;
      flex-direction: column;

      //下方区域的布局
      .content-box {
        display: grid;
        grid-template-columns: 2fr 3fr 5fr 3fr 2fr;
      }

      // 底部数据
      .bototm-box {
        margin-top: 0.125rem;
        display: grid;
        grid-template-columns: repeat(2, 50%);
      }
    }
  }


</style>