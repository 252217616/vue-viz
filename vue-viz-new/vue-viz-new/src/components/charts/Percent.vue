<style >
    .o-echarts {
        min-width: 30px;
        min-height: 30px;
        width: 100%;
        height: 100%;
    }
    .parentBar{
      width:100%;
      height:16px;
      background: linear-gradient(180deg, #27BAF0 0%, #0063C6 100%);
      border-radius: 9px;
      opacity: 0.27;
    }
    .bar{
      position:relative;
      
      height:16px;
      background: linear-gradient(180deg, #5DAFFF 0%, #377DFF 100%);
      border-radius: 8px;top:-16px
    }
</style>
<template>
<div class="o-echarts">
  <div class="parentBar">
  
  </div>
  <div class="bar" :style="barStyle"></div>
</div>
  
</template>

<script>
export default {
  name: "Percent",
  props: {
    barStyle: Object
  },
   mounted() {


  },
  data() {
      return {
        
        
             
      }
  }
}
</script>
