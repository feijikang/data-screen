<template>
  <div>
    <dv-border-box-8 style="padding:18px">
      <div style="font-size:18px;display:flex">
        <div>项目公司区域排名</div>
        <dv-decoration-3 style="width:3.25rem;height:.45rem;position:relative;left:10px;top:-8px;" />
      </div>
      <dv-scroll-ranking-board :config="config" style="width: 550px; height: 60vh"/>
    </dv-border-box-8>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        rowNum:7,
        data: [
          {
            name: "包头中燃",
            value: 55,
          },
          {
            name: "镇江中燃",
            value: 120,
          },
          {
            name: "陕西中燃",
            value: 78,
          },
          {
            name: "湖北中燃",
            value: 66,
          },
          {
            name: "深圳中燃",
            value: 80,
          },
          {
            name: "信阳中燃",
            value: 45,
          },
          {
            name: "广西中燃",
            value: 29,
          },
          {
            name: "广西中燃",
            value: 39,
          }
        ]
      }
    };
  },
};
</script>

<style>
</style>