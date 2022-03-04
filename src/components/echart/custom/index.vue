<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  data () {
    return {
      cdata: {
        xData: ["民用", "商业", "工业", "槽批", "瓶批"],
        seriesData: [
          { value: 10, name: "民用" },
          { value: 5, name: "商业" },
          { value: 25, name: "工业" },
          { value: 15, name: "槽批" },
          { value: 20, name: "瓶批" },
        ]
      }
    }
  },
  components: {
    Chart,
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>