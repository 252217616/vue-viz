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
  <dv-charts :option="option" />
</div>
  
</template>

<script>
export default {
  name: "RingDiagram-Static",
  props: {
    title: String
  },
  data() {
      return {
        option:{
          title: {
          // text: '电商品类销售占比',
          // style:{
          //     fill: 'white',
          //     fontSize: 17,
          //     // fontWeight: 'bold',
          //     textAlign: 'right',
          //     // textBaseline: 'bottom'
             
          // }
          },
          series: [
            {
              type: 'pie',
              
              data: [
                { name: '可口可乐\n asd', value: 93},
                { name: '百事可乐', value: 32 },
                { name: '哇哈哈', value: 65 },
                { name: '康师傅', value: 44 },
                { name: '统一', value: 52 },
                { name: '统一22', value: 52 },
              ],
              radius: ['40%', '55%'],
              insideLabel: {
                show: false,
                style:{
                  fontSize:20,
                  fill: '#fff',
                  textAlign: 'center',
                  textBaseline: 'middle'
                }
              },
              outsideLabel:{
                style: {
                  fontSize: 15,
                },
                labelLineBendGap:30,
                labelLineEndLength:15
              }
            }
          ]
        }      
    }
    
      
  }
};
</script>
