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
  <dv-water-level-pond :config="config" />
</div>
  
</template>

<script>
export default {
  name: "WaterPond",
  props: {
    title: String
  },
  data() {
      return {
        config:{
         data: [55],
         shape: 'rect'
        }      
    }
    
      
  }
};
</script>
