<style >
    .o-echarts {
        min-width: 30px;
        min-height: 30px;
        width: 100%;
        height: 100%;
    }
</style>
<template>
<div  class="o-echarts">
  <div :id="id" style="width:100%; height:100%"></div>
</div>
  
</template>

<script>

export default {
  name: "WaterPond",
  props: {
    config: Object
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById(this.id));
    if(this.config != undefined){
      this.myChart.setOption(this.config);
    }
  },
  watch: { 
    config(a,b){
      if(b.series == undefined){
        this.myChart.setOption(a);
      }else {
        this.myChart.setOption(b);
      }
    }
   },
  methods:{
    updateNum(){

    }
  },
  data() {
    return{
      id: 'WaterPond_' + new Date().getTime() + Math.floor(Math.random() * 1000),
      myChart:{}
      }
    }
  
};
</script>
