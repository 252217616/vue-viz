<template>
  <div id="main">
      <Header v-bind:title="total"/>
      <div style="width:100%">
        <dv-decoration-2 style="width:100%;height:10px;" />
      </div>
     
       <!-- <div>
         <button @click="changeTitle">123</button>
         <span>12312</span>
         <Capsule/>
       <div id="op" />
      </div> -->
      
      <div style="height:100%;display:inline">
        <div class="statNum" >
          <div>
           <dv-border-box-3 style="width:600px;height:200px;top:50px;margin-left:50px;">
            <div class="statModal">
              <div class="statModalTab" >累计用户数：</div>
              <div class="statModalNum" >
                 <DigitalAnimation/>
              </div>
            </div>
            <div class="statModal">
              <div class="statModalTab">今日新增用户数：</div>
              <div class="statModalNum">
                 <DigitalAnimation/>
              </div>
            </div>
            </dv-border-box-3>
             <dv-border-box-8 style="top:60px;height:510px">
               <EchartMap/>
              
             </dv-border-box-8>

        
          </div>
          <div>

          </div>
          
        </div>
        <div style="position:absolute; left:50%; top:85px; width:25%;height:100%;">
          <div>
            <dv-border-box-5 :reverse="true"  style="top:10px;height:250px">
              <dv-charts :option="option" style="width:200px;height:200px;"  />
            </dv-border-box-5>
            
          </div>
          <div>
             <dv-border-box-5   style="top:20px;height:250px">
                <Capsule/>
             </dv-border-box-5>
          </div>
          <div>
            <dv-border-box-5  :reverse="true" style="top:25px;height:250px">
            <Capsule/>
            </dv-border-box-5>
          </div>
        </div>
        <div style="position:absolute; left:75%; top:85px; width:25%;height:100%; ">
          <div>
            <dv-border-box-9 style="height:300px">
              
                <RingDiagram/>
             
            
            </dv-border-box-9>
          </div>
          <div>
             <dv-border-box-9 style="height:460px;top:10px">
             <!-- <WaterPond/> -->
              <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
            </dv-border-box-9>
          </div>
        </div>
      </div>
  </div>
 
 
    <!-- <div style="width:700px">
        <dv-border-box-1> 
          <div id="c1"></div>
        </dv-border-box-1>
    </div> -->
    <!-- <dv-active-ring-chart :config="config" style="width:300px;height:300px" /> -->
    


    <!-- <dv-loading>Loading...</dv-loading> -->
    
 
</template>

<script>
// import * as G2 from "@antv/g2";
import Header from "../components/app-header/Header";
import Capsule from "../components/charts/Capsule";
import RingDiagram from "../components/charts/RingDiagram-Static";
import WaterPond from "../components/charts/WaterPond";
import EchartMap from "../components/charts/Echart-map";
import DigitalAnimation from "../components/other/DigitalAnimation";
export default {
  name: "HelloWorld",
  components: {Header,Capsule,DigitalAnimation,RingDiagram,WaterPond,EchartMap},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    // this.initComponent();
    this.drawLine();
  },
  data() {
    return {
      msg: "123",
      chart: null,
      data: [
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 115 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 }
      ],
      config: {
        number:[11111],
        content:"{nt}"
      },
      total:"销售",
      option:{
          title: {
    text: '周销售额趋势'
  },
  legend: {
    data: [
      {
        name: '销售额',
        color: '#aeeff0'
      },
      {
        name: '人流量',
        color: '#f1829f'
      }
    ]
  },
  xAxis: {
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: [
    {
      name: '销售额',
      data: 'value'
    },
    {
      name: '人流量',
      data: 'value',
      position: 'right',
      max: 2000,
      splitLine: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '人流量',
      data: [1000, 1200, 900, 1500, 900, 1200, 1000],
      type: 'line',
      smooth: true,
      lineArea: {
        show: true,
        gradient: ['rgba(251, 114, 147, 1)', 'rgba(251, 114, 147, 0)']
      },
      lineStyle: {
        stroke: 'rgba(251, 114, 147, 1)',
        lineDash: [3, 3]
      },
      linePoint: {
        style: {
          stroke: 'rgba(251, 114, 147, 1)'
        }
      },
      yAxisIndex: 1
    },
    {
      name: '销售额',
      data: [1500, 1700, 1400, 2000, 1400, 1700, 1500],
      type: 'bar',
      gradient: {
        color: ['rgba(103, 224, 227, .6)', 'rgba(103, 224, 227, .1)']
      },
      barStyle: {
        stroke: 'rgba(103, 224, 227, 1)'
      }
    }
  ]
  
      }
           
    };
  },
  // 方法集合
  methods: {
    initComponent() {
      // 此函数为个人习惯,喜欢创建一个初始化的函数
      this.msg = "vue-cli案例";
      const chart = new G2.Chart({
        container: 'c1', // 指定图表容器 ID
        width: 600, // 指定图表宽度
        height: 300, // 指定图表高度
      });

      // Step 2: 载入数据源
      chart.data(this.data);

      // Step 3：创建图形语法，绘制柱状图
      chart.interval().position('genre*sold');

      // Step 4: 渲染图表
      chart.render();
    },
    drawLine(){
    // 基于准备好的dom，初始化echarts实例
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    // 绘制图表
    myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
    }
   
  },
  // 计算属性
  computed: {}
};
</script>
<style lang="scss" >
  #dv-full-screen-container{
    background-color:#2c3e50;
  }
  #main{
    position:relative
  }
  .statNum{
    position:absolute;
    top:85px;
    width:50%;
    height:100%;
  }
  .statModal{
    display:inline;
    margin-left:50px;
    float:left;
  }
  .statModalTab{
    color:#7EDDF3;
    font-size:28px;
    float:left;
    margin-top:30px;
    margin-left:10px;
  }
  .statModalNum{
    float:left;
    margin-top:30px;
  }

</style>
