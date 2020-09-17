<style >
    .o-echarts {
        min-width: 30px;
        min-height: 30px;
        width: 100%;
        height: 100%;
    }
</style>
<template>
<div class="o-echarts">
  <dv-capsule-chart :config="config"  />
</div>
  
</template>

<script>
export default {
  name: "Capsule",
  props: {
    title: String
  },
  data() {
      return {
        config:{
           data: [
                {
                name: '南阳',
                value: 167
                },
                {
                name: '周口',
                value: 123
                },
                {
                name: '漯河',
                value: 98
                },
                {
                name: '郑州',
                value: 75
                },
                {
                name: '西峡',
                value: 66
                },
            ],
            colors:['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
            unit:'单位',
            showValue:true
        }
        
    }
    
      
  }
};
</script>
