<template>
    <div  class="center">
      <div class="center-item" >
        <div class="center-title">客户数量</div>
        <div class="box-child">
          <div class="box-item">
            <div>排名</div>
            <div>区域</div>
            <div>客户数量</div>
          </div>
          <div v-for="(item,index) in mountList" :key="index" class="box-item">
            <div>{{item.rank}}</div>
            <div>{{item.name}}</div>
            <div>{{item.number}}</div>
          </div>
        </div>
      </div>

      <div class="center-item" >
        <div  class="center-title">开户数</div>
        <div class="box-child">
          <div class="box-item">
            <div>排名</div>
            <div>区域</div>
            <div>开户数</div>
          </div>
          <div v-for="(item,index) in mountList" :key="index" class="box-item">
            <div>{{item.rank}}</div>
            <div>{{item.name}}</div>
            <div>{{item.number}}</div>
          </div>
        </div>
      </div>

      <div class="center-item" >
        <div  class="center-title">退户数</div>
        <div class="box-child">
          <div class="box-item">
            <div>排名</div>
            <div>区域</div>
            <div>退户数</div>
          </div>
          <div v-for="(item,index) in mountList" :key="index" class="box-item">
            <div>{{item.rank}}</div>
            <div>{{item.name}}</div>
            <div>{{item.number}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      mountList:[
        {
          rank:1,
          name:'华东lpg经营',
          number:166963
        },
        {
          rank:2,
          name:'华南lpg经营',
          number:156233
        },
        {
          rank:3,
          name:'华北lpg经营',
          number:143242
        },
        {
          rank:4,
          name:'北方lpg经营',
          number:111139
        },
        {
          rank:5,
          name:'西南lpg经营',
          number:105482
        },
      ]
    }
  }
}
</script>

<style scoped>
.center{
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
}
.center-title{
  text-align: center;
  margin: 0 0 10px;
  font-size: 20px;
}
.box-child{
    width: 250px;
    height: 300px;
    box-shadow: -10px 0px 10px #1A5CD7 inset, 
                0px -10px 10px #1A5CD7 inset, 
                10px 0px 10px #1A5CD7 inset,
                0px 10px 10px #1A5CD7 inset;
    border: 1px solid #1A5CD7;

}
.box-item{
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box-item:nth-child(2n){
  /* background-color: #1A5CD7; */
  box-shadow: -10px 0px 10px #1A5CD7 inset, 10px 0px 10px #1A5CD7 inset;
}
</style>