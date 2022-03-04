<template>
  <div class="bottom">
    <div>
      <dv-water-level-pond :config="config" style="width:150px;height:180px" />
      <div class="title">销售完成率</div>
    </div>
    <div>
      <dv-water-level-pond :config="config1" style="width:150px;height:180px" />
      <div class="title">销售增长率</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      config:{
        data: [66]
      },
      config1:{
        data:[23]
      }
    }
  }
}
</script>

<style scoped>
  .bottom{
    display: flex;
    justify-content: space-between;
  }
  .title{
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
  }
</style>