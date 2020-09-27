<style >
    .o-echarts {
        min-width: 30px;
        min-height: 30px;
        width: 100%;
        height: 100%;
    }
</style>
<template>
<div  class="o-echarts" >
  <div :id="id" style="width:100%; height:100%;"></div>
</div>
  
</template>

<script>

export default {
  name: "RingDiagram-Static",
  props: {
    option: Object
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById(this.id));
    if(this.option != undefined){
      this.myChart.setOption(this.option);
    }
  },
  watch: { 
    option(a,b){
      this.myChart.setOption(a);
    }
   },
  data() {
    return{
      id: 'pie_' + new Date().getTime() + Math.floor(Math.random() * 1000),
     }
  }
};
</script>
