<style >
    .o-echarts {
        min-width: 30px;
        min-height: 30px;
        width: 100%;
        height: 100%;
    }
</style>
<template>
<div class="o-echarts" >
  <dv-capsule-chart :config="config"  />
</div>
  
</template>

<script>
export default {
  name: "Capsule2",
  props: {
    title: String
  },
  data() {
      return {
        config:{
           data: [
                {
                name: '',
                value: 167
                },
                {
                name: '',
                value: 123
                },
                {
                name: '',
                value: 98
                },
                {
                name: '',
                value: 75
                },
                {
                name: '',
                value: 66
                },
            ],
            colors:['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
            
            showValue:true
        }
        
    }
    
      
  }
};
</script>
