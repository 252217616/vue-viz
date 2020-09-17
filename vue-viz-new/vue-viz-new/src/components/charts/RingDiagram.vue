<style >
    .o-echarts {
        min-width: 30px;
        min-height: 30px;
        width: 100%;
        height: 100%;
    }
</style>

<template>
<div style="o-echarts">
  <dv-active-ring-chart :config="config" />
</div>
  
</template>

<script>
export default {
  name: "RingDiagram",
  props: {
    title: String
  },
  data() {
      return {
        config:{
          radius: '70%',
          activeRadius: '75%',
          data: [
            {
              name: '周口',
              value: 55
            },
            {
              name: '南阳',
              value: 120
            },
            {
              name: '西峡',
              value: 78
            },
            {
              name: '驻马店',
              value: 66
            },
            {
              name: '新乡',
              value: 80
            }
          ],
          digitalFlopStyle: {
            fontSize: 20
          },
          // color:[
          //   "red","black"
          // ]
          
  
        }      
    }
    
      
  }
};
</script>
