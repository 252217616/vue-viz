<template>
  <div id="main">
    <div>
      <Header v-bind:title="total"  />
          <!-- <div style="width:100%">
            <dv-decoration-2 style="width:100%;height:10px;" />
          </div> -->
    </div>
    <div :style="bodyCss" style="background-repeat:no-repeat;
                background-size:100% 100%;
                -moz-background-size:100% 100%;">
            <div style="float:left;margin-left:23px;width:521.26px;height:100%">
              <!-- 左 -->
              <!-- <button v-on:click="onload()">123123</button> -->
              <div style="margin-top:37px;width:100%;height:345px">
                 <!-- 左-上 -->
                <div style="box-sizing: border-box;padding-top:10px;margin-left:22px;width: 144px;height: 25px;font-size: 18px;font-family: AppleSystemUIFont;color: #BCEDFF;line-height: 21px;">电商品类销售占比</div>          
                  <RingDiagram v-bind:option="RingDiagramOption"/>
              </div>
              <div style="margin-top:21px;width:100%;height:555px">
                <!-- 左-下 -->
                <div style="box-sizing: border-box;padding:21px 41px;height:100%;width:100%">
                  <div style="height:45px;width:100%">
                    <span style="
                        font-size: 18px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #BCEDFF;
                        line-height: 25px;">
                        电商品类销售
                      </span>
                  </div>
                  <div style="height:95%;width:100%">
                      <el-table :data="tableData"
                        style="width: 100%;height:100%"
                        :header-cell-style="thStyleFun"
                        :cell-style="cellStyleFun"
                        >
                        <el-table-column
                          prop="remark"
                          label="月份"
                          width="140"
                          :formatter="formatMonth">
                        </el-table-column>
                        <el-table-column
                          prop="totalCount"
                          label="订单数量"
                          width="140">
                        </el-table-column>
                        <el-table-column
                          prop="totalAmount"
                          label="订单金额"
                          width="140"
                          :formatter="formatAmount">
                        </el-table-column>
                      </el-table>
                  </div>
                </div>
                
              </div>
            </div>
            <div style="float:left;margin-top:37px;margin-left:21px;width:773px;height:100%">
              <!-- 中 -->
              <div style="width:100%;height:630px;">
                <!-- 中-上 -->
                <div style="width: 438px;
                      height: 220px;
                      background: linear-gradient(180deg, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.02) 100%);
                      border: 1px solid;
                      border-image: linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.04)) 1 1;
                       position:absolute;margin-left:335px;">
                       <div style="float:right;margin-top:20px;height:17px;margin-right:24px;">
                         <div id="userNum" style="width:100px;height:50px;position:absolute; margin-top:10px;margin-left:80px;                         
                          font-size: 40px;
                          font-family: Impact;
                          color: #51AEFF;
                          line-height: 68px;">{{changeUserNum}}</div>
                         <span style="color:white;font-size: 14px;font-family: Impact;float:right">累计用户数</span></div>
                       <div style="float:right;margin-top:20px;height:70px;width:100%;margin-right:17px;letter-spacing:7px">
                         <div style="float:right;">
                          <DigitalAnimation v-bind:config="userNum" />
                         </div>
                       </div>
                       <div style="float:right;margin-top:5px;height:17px;width:100%;margin-right:24px;">
                          <div id="todayUserNum" style="width:100px;height:50px;position:absolute; margin-top:20px;margin-left:450px;                                                 
                            font-size: 30px;
                            font-family: Impact;
                            color: #FF9235;
                            line-height: 48px;">{{changeTodayUserNum}}</div>
                         <span style="color:white;font-size: 14px;font-family: Impact;float:right">今日新增用户数</span></div>
                       <div style="float:right;margin-top:10px;height:70px;width:100%;margin-right:24px;">
                         <div style="float:right;">
                          <DigitalAnimation v-bind:config="todayUserNum" />
                         </div>
                       </div>
                      </div>
                <div style="margin-top:70px;margin-left:70px;width:525.4px;height:541px;position:absolute;">
                  <EchartMap/>
                </div>
              </div>
               <div style="width:100%;height:270px;display:inline;">
                <!-- 中-下 -->
                <div style="margin-top:20px;float:left;height:271px;width:375px">
                  <div style="box-sizing: border-box;padding:0 20px;height:100%;width:100%">
                    <div style="margin-top:10px;height:20px">
                      <span style="color:#BCEDFF;font-size: 13px;font-family:PingFangSC-Medium, PingFang SC;float:left">累计套餐交易</span>
                    </div>
                    <div style="width:100%;height:90px;">
                      <div style="margin-top:20px;margin-left:5px;float:left;width:150px;height:70px;background: #002A61;border: 1px solid #004878;">
                          <span style="color:#BCEDFF;font-size: 12px;font-family: AppleSystemUIFont;float:left;margin-top:13px;margin-left:17px">交易数量</span>
                          
                          <div style="width:150px;height:30px;margin-top:30px"> 
                            <span style="color:#FF9235;font-size: 18px;font-family: Impact;float:left;margin-top:13px;margin-left:17px">{{unicomNum}}</span>
                            <span style="color:#BCEDFF;font-size: 12px;font-family: AppleSystemUIFont;float:right;margin-top:15px;margin-right:10px">单</span>
                          </div>
                        </div>
                      <div style="margin-top:20px;margin-left:25px;float:left;width:150px;height:70px;background: #002A61;border: 1px solid #004878;">
                        <span style="color:#BCEDFF;font-size: 12px;font-family: AppleSystemUIFont;float:left;margin-top:13px;margin-left:17px">交易金额</span>
                          <div style="width:150px;height:30px;margin-top:30px"> 
                            <span style="color:#FF9235;font-size: 18px;font-family: Impact;float:left;margin-top:13px;margin-left:17px">{{unicomAmount}}</span>
                            <span style="color:#BCEDFF;font-size: 12px;font-family: AppleSystemUIFont;float:right;margin-top:15px;margin-right:10px">元</span>
                          </div>
                      </div>
                    </div>
                    <div style="margin-top:20px;height:20px">
                      <span style="color:#BCEDFF;font-size: 13px;font-family:PingFangSC-Medium, PingFang SC;float:left">今日套餐交易</span>
                    </div>
                    <div >
                       <div style="position:absolute;margin-top:70px;z-index: 10;margin-left:55px;
                          font-size: 12px;
                          font-family: AppleSystemUIFont;
                          color: #BCEDFF;">交易数量</div>
                      <div style="margin-top:5px;margin-left:5px;float:left;width:150px;height:100px">
                       <WaterPond v-bind:config="unicomNumWaterPond"/>
                      </div>
                      <div>
                        <div style="position:absolute;margin-top:70px;z-index: 10;margin-left:235px;
                          font-size: 12px;
                          font-family: AppleSystemUIFont;
                          color: #BCEDFF;">交易金额</div>
                      <div style="margin-top:5px;margin-left:30px;float:left;width:150px;height:100px">
                       <WaterPond v-bind:config="unicomAmountWaterPond"/>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="margin-top:20px;margin-left:21px;float:left;height:271px;width:375px">
                  <div style="box-sizing: border-box;padding:0 20px;height:100%;width:100%">
                    <div style="margin-top:10px;height:20px">
                      <span style="color:#BCEDFF;font-size: 13px;font-family:PingFangSC-Medium, PingFang SC;float:left">累计电商交易</span>
                    </div>
                    <div style="width:100%;height:90px;">
                      <div style="margin-top:20px;margin-left:5px;float:left;width:150px;height:70px;background: #002A61;border: 1px solid #004878;">
                          <span style="color:#BCEDFF;font-size: 12px;font-family: AppleSystemUIFont;float:left;margin-top:13px;margin-left:17px">交易数量</span>
                          
                          <div style="width:150px;height:30px;margin-top:30px"> 
                            <span style="color:#FF9235;font-size: 18px;font-family: Impact;float:left;margin-top:13px;margin-left:17px">{{mallNum}}</span>
                            <span style="color:#BCEDFF;font-size: 12px;font-family: AppleSystemUIFont;float:right;margin-top:15px;margin-right:10px">单</span>
                          </div>
                        </div>
                      <div style="margin-top:20px;margin-left:25px;float:left;width:150px;height:70px;background: #002A61;border: 1px solid #004878;">
                        <span style="color:#BCEDFF;font-size: 12px;font-family: AppleSystemUIFont;float:left;margin-top:13px;margin-left:17px">交易金额</span>
                          <div style="width:150px;height:30px;margin-top:30px"> 
                            <span style="color:#FF9235;font-size: 18px;font-family: Impact;float:left;margin-top:13px;margin-left:17px">{{mallAmount}}</span>
                            <span style="color:#BCEDFF;font-size: 12px;font-family: AppleSystemUIFont;float:right;margin-top:15px;margin-right:10px">元</span>
                          </div>
                      </div>
                    </div>
                    <div style="margin-top:20px;height:20px">
                      <span style="color:#BCEDFF;font-size: 13px;font-family:PingFangSC-Medium, PingFang SC;float:left">今日电商交易</span>
                    </div>
                    <div >
                       <div style="position:absolute;margin-top:70px;z-index: 10;margin-left:55px;
                          font-size: 12px;
                          font-family: AppleSystemUIFont;
                          color: #BCEDFF;">交易数量</div>
                      <div style="margin-top:5px;margin-left:5px;float:left;width:150px;height:100px">
                       <WaterPond v-bind:config="mallNumWaterPond"/>
                      </div>
                      <div>
                        <div style="position:absolute;margin-top:70px;z-index: 10;margin-left:235px;
                          font-size: 12px;
                          font-family: AppleSystemUIFont;
                          color: #BCEDFF;">交易金额</div>
                      <div style="margin-top:5px;margin-left:30px;float:left;width:150px;height:100px">
                       <WaterPond v-bind:config="mallAmountWaterPond"/>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div style="float:left;margin-left:21px;width:537.12px;height:100%">
              <!-- 右 -->
              <div style="margin-top:37px;width:100%;height:320px;box-sizing: border-box;padding:0 20px;">
                <!-- 右-上 -->
                <div style="float:left;margin-top:10px;
                  font-size: 13px;
                  font-family: PingFangSC-Medium, PingFang SC;
                  font-weight: 500;
                  color: #BCEDFF;
                  line-height: 18px;">今日套餐分布</div>
                  <br/>
                  <div style="height:20px;width:100%;margin-top:20px">
                    <span style="margin-left:10%;
                        font-size: 13px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #387FFF;
                        line-height: 18px;">受理笔数</span>
                    <span style="margin-left:55%;
                        font-size: 13px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #FED6B1;
                        line-height: 18px;">金额占比</span>
                    </div>
                  <div style="box-sizing: content-box;display:flex;width:100%;padding:0;float:left;">
                    <div style="box-sizing: content-box;padding:5px;float:left;width:170px;height:250px">
                        <div style="width:100%;height:20%" v-for="x in unicomDistributed">
                         <div class="barNum" style="width:100%;height:50%;">{{x.num+" 单"}}</div>
                         <div style="width:100%;height:50%"><Percent v-bind:barStyle="x.numStyle"/></div>
                        </div>
                    </div>
                    <div style="box-sizing: content-box;padding:5px;float:left;width:170px;height:250px;
                        background: linear-gradient(180deg, rgba(79, 237, 249, 0) 0%, rgba(79, 237, 249, 0.2) 54%, rgba(39, 214, 240, 0) 100%);
                        ">
                        <div style="height:18px"></div>
                          <div style="width:100%;height:20%; " v-for="x in unicomDistributed"> 
                            <div class="barExplain"> 
                              <span>{{x.remark}}</span> 
                            </div>
                          </div>
                        </div>
                    <div style="box-sizing: content-box;padding:5px;float:left;width:170px;height:250px">
                       <div style="width:100%;height:20%" v-for="x in unicomDistributed">
                         <div class="barNum" style="width:100%;height:50%">{{x.amount+" 元"}}</div>
                         <div style="width:100%;height:50%"><Percent v-bind:barStyle="x.amountStyle"/></div>
                        </div>
                    </div>
                  </div>
                
                
              </div>
              <div style="margin-top:24px;width:100%;height:281px;box-sizing: border-box;padding:0 20px;">
                 <!-- 右-中 -->
                <div style="float:left;margin-top:10px;
                  font-size: 13px;
                  font-family: PingFangSC-Medium, PingFang SC;
                  font-weight: 500;
                  color: #BCEDFF;
                  line-height: 18px;">当月业务受理分布</div>
                  <div style="position:absolute;width:420px;height:165px;margin-left:65px;margin-top:80px;
                  background: linear-gradient(180deg, rgba(89, 153, 255, 0) 0%, rgba(93, 220, 229, 0.28) 100%);
                  opacity: 0.58;"></div>
                  <div style="position:absolute;z-index:10;margin-left:370px">
                    <div style="margin-top: 10px">
                      <el-radio-group v-model="dayColumnType" size="small" @change="changeDayColumnLineType">
                        <el-radio-button label="0">数量</el-radio-button>
                        <el-radio-button label="1">流水</el-radio-button>
                      </el-radio-group>
                    </div>
                  </div>
                  <div style="width:550px;height:300px;padding:20px 0 0 0 ; box-sizing: border-box;">
                    <ColumnLine v-bind:option="dayColumnLineOption"/>
                  </div>
               
              </div>
              <div style="margin-top:22.5px;width:100%;height:271px;box-sizing: border-box;padding:0 20px;">
                <!-- 右-下 -->
                <div style="float:left;margin-top:10px;
                  font-size: 13px;
                  font-family: PingFangSC-Medium, PingFang SC;
                  font-weight: 500;
                  color: #BCEDFF;
                  line-height: 18px;">整体业务受理分布</div>
                  <div style="position:absolute;width:420px;height:165px;margin-left:65px;margin-top:60px;
                  background: linear-gradient(180deg, rgba(89, 153, 255, 0) 0%, rgba(93, 220, 229, 0.28) 100%);
                  opacity: 0.58;"></div>
                  <div style="position:absolute;z-index:10;margin-left:370px">
                    <div style="margin-top: 10px">
                      <el-radio-group v-model="monthColumnType" size="small" @change="changeMonthColumnLineType">
                        <el-radio-button label="0">数量</el-radio-button>
                        <el-radio-button label="1">流水</el-radio-button>
                      </el-radio-group>
                    </div>
                  </div>
                  <div style="width:550px;height:280px;padding:20px 0 0 0 ; box-sizing: border-box;">
                    <ColumnLine  v-bind:option="monthColumnLineOption"/>
                  </div>
              </div>
            </div>

            
          </div> 
      </div>
    
    
        
     
    
 
</template>

<script>

import Header from "../components/app-header/Header";
import Capsule from "../components/charts/Capsule";
import RingDiagram from "../components/charts/RingDiagram-Static";
import WaterPond from "../components/charts/WaterPond";
import EchartMap from "../components/charts/Echart-map";
import Percent from "../components/charts/Percent";
import ColumnLine from "../components/charts/ColumnLine";
import DigitalAnimation from "../components/other/DigitalAnimation";
import api from '@/common/cockpitApi';
export default {
  name: "HelloWorld",
  components: {Header,Capsule,DigitalAnimation,RingDiagram,WaterPond,EchartMap,Percent,ColumnLine},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    var that = this;
    var userNum = document.getElementById("userNum");
    userNum.addEventListener("webkitAnimationEnd", function() {
      that.changeUserNum = "";
      userNum.classList.remove("addNum");
      
    })

    var todayUserNum = document.getElementById("todayUserNum");
    todayUserNum.addEventListener("webkitAnimationEnd", function() {
      that.changeTodayUserNum ="";
      todayUserNum.classList.remove("addTodayNum");
      
    }) 
    // this.onload();
  },
  data() {
    return {
      total:"来乐-销售数据驾驶舱",
      bodyCss:{
        backgroundImage: "url(" + require("../assets/body.png") + ")",
        height: "1004px",
         
      },
      RingDiagramOption:{
        title: {
           show:false,
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
              radius: ['45%', '60%'],
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
                labelLineEndLength:30
              }
            }
          ]
      },
      userNum: {},
      changeUserNum:"",
      todayUserNum: {},
      changeTodayUserNum:"",
      unicomNum:0,
      unicomAmount:0,
      unicomNumWaterPond:{},
      unicomAmountWaterPond:{},
      mallNum:0,
      mallAmount:0,
      mallNumWaterPond:{},
      mallAmountWaterPond:{},
      tableData: [],
      unicomDistributed:[],
      dayColumnLineOption:{},
      dayColumnType:0,
      dayColumnAmountData:{},
      dayColumnNumData:{},
      monthColumnLineOption:{},
      monthColumnType:0,
      monthColumnAmountData:{},
     
    };
  },
  // 方法集合
  methods: {
    formatMonth(row, column) {
        const date = row[column.property]
        if (date == undefined) {
          return ''
        }
        return date+"月";
    },
    formatAmount(row, column) {
        const date = row[column.property]
        if (date == undefined) {
          return ''
        }
        return "￥"+this.commafy(date);
    },
    commafy(num){
      if((num+"").trim()==""){
      return"";
      }
      if(isNaN(num)){
      return"";
      }
      num = num+"";
      if(/^.*\..*$/.test(num)){
      let pointIndex =num.lastIndexOf(".");
      let intPart = num.substring(0,pointIndex);
      let pointPart =num.substring(pointIndex+1,num.length);
      intPart = intPart +"";
        let re =/(-?\d+)(\d{3})/
        while(re.test(intPart)){
        intPart =intPart.replace(re,"$1,$2")
        }
      num = intPart+"."+pointPart;
      }else{
      num = num +"";
        let re =/(-?\d+)(\d{3})/
        while(re.test(num)){
        num =num.replace(re,"$1,$2")
        }
      }
      return num;
    },
    thStyleFun() {
      return 'text-align:center'
    },
    cellStyleFun() {
      return 'text-align:center'
    },
    onload(){
      this.updateRingDiagram();
      this.updateMallTable();
      this.updateUserNumber();
      this.updateMallNum();
      this.updateUnicomNum();
      this.updateUnicomDistributed();
      this.updateMonthColumnLine();
      this.updateDayColumnLine();

      
    },
    updateRingDiagram(data){
        api.mallCategoryRank().then(res => {
          // 获取数据成功后的其他操作
          let data = [];
          let total = res.result["total"];
          let sum = 0;
          for(let i in res.result){
            if(i == "total"){
              continue;
            }  
            let param = {};
            param.name =  i+"\n"+((res.result[i]/total)*100).toFixed(2)+"%";
            param.value = res.result[i]
            sum += res.result[i];
            data.push(param);
          }
          data.push({
            name:"其他\n"+((total-sum/total)*100).toFixed(2)+"%",
            value:total-sum
            })
          console.log(data)
          this.RingDiagramOption={
            title: {
              show:false,
              },
              series: [
                {
                  type: 'pie',
                  data:data,
                  radius: ['45%', '60%'],
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
                    labelLineEndLength:30
                  }
                }
              ]
          }            
      }).catch((err)=>{
        this.$message.error("电商品类销售占比数据加载失败。")
      })
    },
    updateMallTable(){
       api.mallMonthlyStat({year:"2020"})
       .then(res => {
         this.tableData = res.result
       })
       .catch(err=>{
         this.$message.error("电商年度数据加载失败。")
       })
    },
    updateUserNumber(){
       api.userStatCount()
       .then(res => {
         let total = res.result.total;
         let today = res.result.today;
         if(this.userNum.number != undefined){
           let uNum = this.userNum.number[0];
           if(uNum -total == 0){
            //  console.log("无变化");
             return;
           }
           let utNum = this.todayUserNum.number[0];
           this.changeUserNum = "+ "+(total - uNum);
           this.changeTodayUserNum ="+ "+ (today - utNum);
           this.anp();
         }
         this.userNum= {
            number: [total],
            content: '{nt}',
            textAlign:"right",
            
            style: {
                fill:"#51AEFF",
                fontSize:56,
                fontWeight:"bold",
                fontFamily: "Impact",
            }
          };
          this.todayUserNum= {
          number: [today],
          content: '{nt}',
          textAlign:"right",
          
          style: {
              fill:"#FF9235",
              fontSize:40,
              fontWeight:"bold",
              fontFamily: "Impact",
          }
      }
        
       })
       .catch(err=>{
         console.log(err);
         this.$message.error("用户数据加载失败。")
       })
    },
    updateMallNum(){
      api.mallOrderStat()
       .then(res => {
         let result = res.result;
         this.mallNum = result.total.totalCount;
         let amount = result.total.totalAmount;
         if(amount>10000){
           amount = this.commafy((amount/10000).toFixed(2))+"w"
         }
         this.mallAmount = amount;
         let todayCount = result.today.totalCount;
         let todayAmount = result.today.totalAmount;
         if(todayAmount>10000){
           todayAmount = (todayAmount/10000).toFixed(1)+"w"
         }
         this.mallNumWaterPond =this.changeWaterOption(todayCount);
         this.mallAmountWaterPond =this.changeWaterOption(todayAmount);
        
       })
       .catch(err=>{
         this.$message.error("电商数据加载失败。")
       })
    },
    updateUnicomNum(){
      api.unicomOrderStat()
       .then(res => {
         let result = res.result;
         this.unicomNum = result.total.totalCount;
         let amount = result.total.totalAmount;
         if(amount>10000){
           amount = this.commafy((amount/10000).toFixed(2))+"w"
         }
         this.unicomAmount = amount;
         let todayCount = result.today.totalCount;
         let todayAmount = result.today.totalAmount;
         if(todayAmount>10000){
           todayAmount = (todayAmount/10000).toFixed(1)+"w"
         }
         this.unicomNumWaterPond =this.changeWaterOption(todayCount);
         this.unicomAmountWaterPond=this.changeWaterOption(todayAmount);
         
        
       })
       .catch(err=>{
         this.$message.error("电商数据加载失败。")
       })
    },
    changeWaterOption(number){
      return{
                  series: [{
                  type: 'liquidFill',
                  radius: '90%',
                  data: [{
                    name: ' ',
                    value: number,
                    itemStyle: {
                        normal: {
                            color: '#0A1F4D'
                        }
                    }
                    
                },0.5,0.4, {
                    value: 0.3,
                    direction: 'right',
                    itemStyle: {
                        normal: {
                            color: '#000080'
                        }
                    }}],
                label: {
                    normal: {
                        color: '#B2FFDC',
                        insideColor: '#B2FFDC',
                        formatter: '{c}\n',
                        textStyle: {
                            fontSize: 20,
                          
                            fontFamily: 'SFNSDisplay'
                            
                        }
                    }
                }, 
                backgroundStyle: {
                    color: '#0A1F4D'
                },
                outline: {
                    show: true,
                    borderDistance: 5,
                    itemStyle: {
                        borderColor: '#69DDEE',
                        borderWidth: 1
                    }
                },
            }]
          } 
    },
    updateUnicomDistributed(){
      api.unicomDistributed()
       .then(res => {
          console.log(22)
          let result = res.result;
          let numSum = 0;
          let amountSum = 0;
          result.forEach(x=>{
            numSum += Number(x.totalCount);
            amountSum += Number(x.totalAmount);
          })
          let dataList = [];
          
          result.forEach(x=>{
            let numWidth = 0;
            let amountWidth = 0;
            if(numSum != 0){
              numWidth = (x.totalCount/numSum*100).toFixed(0)+"%";
            }
             if(amountSum != 0){
              amountWidth = (x.totalAmount/amountSum*100).toFixed(0)+"%";
            }
            dataList.push({
              remark:x.remark,
              num:x.totalCount,
              amount:x.totalAmount,
              numStyle:{
                width:numWidth,
                background: 'linear-gradient(180deg, #5DAFFF 0%, #377DFF 100%)',
                transition:"width 1s"
              },
              amountStyle:{
                width:amountWidth,
                background: 'linear-gradient(180deg, #FBB173 0%, #FF8C63 100%)',
                transition:"width 1s"
              }
            })
          })
           this.unicomDistributed = dataList;

       })
       .catch(err=>{
         console.log(err)
         this.$message.error("联通天数据加载失败。")
       })

    }
    ,
    updateDayColumnLine(){
        api.unicomDayStat()
       .then(res => {
          
          let xAxis = [];
          let numData = [];
          let amountDate = [];
          let result = res.result;
          result.forEach(x=>{
            xAxis.push(x.remark);
            amountDate.push(x.totalAmount);
            numData.push(x.totalCount)
          })
          this.dayColumnAmountData = {
            data:amountDate,
            unit:"元",
            xLine:xAxis
          }
          this.dayColumnNumData = {
            data:numData,
            unit:"单",
            xLine:xAxis
          }
          this.dayColumnLineOption=this.changeColumnLineOption(numData,xAxis,"单")

       })
       .catch(err=>{
         console.log(err)
         this.$message.error("联通业务分布加载失败。")
       })      
    }
    ,
    updateMonthColumnLine(){
        api.unicomMonthlyStat({year:"2020"})
       .then(res => {
          console.log(res)
          let xAxis = [];
          let numData = [];
          let amountDate = [];
          let result = res.result;
          result.forEach(x=>{
            xAxis.push(x.remark);
            amountDate.push(x.totalAmount);
            numData.push(x.totalCount)
          })
          this.monthColumnAmountData = {
            data:amountDate,
            unit:"元",
            xLine:xAxis
          }
          this.monthColumnNumData = {
            data:numData,
            unit:"单",
            xLine:xAxis
          }
          this.monthColumnLineOption= this.changeColumnOption(numData,xAxis,"单")

       })
       .catch(err=>{
         console.log(err)
         this.$message.error("联通年度数据加载失败。")
       })  
    }
    ,
    changeColumnOption( list ,xLine, unit){
      return {
              title:{
                show:false
              },
              legend: {
                data: ['时间'],
                bottom: 10
              },
              xAxis: {
                data: xLine,
                axisLabel: {
                  style: {
                    rotate: 0,
                    textAlign: 'left',
                    textBaseline: 'top',
                    fill:"#FFFFFF"
                  }
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show:true,
                  style: {
                      stroke: '#3484D0',
                      lineWidth: 4, //这里是为了突出显示加上的  
                  }
                },

              },
              yAxis: [
                {
                  name: unit,
                  data: 'value',
                  min:0,
                  nameTextStyle: {
                    fill: '#FFFFFF',
                    fontSize: 10
                  },
                  splitLine: {
                    show:false
                  },
                  axisLabel: {
                    
                    style:{
                      fill:"#FFFFFF"
                    }
                  },
                  axisTick: {
                    show: false
                  },
                  axisLine: {
                    show:true,
                    style: {
                        stroke: '#3484D0',
                        lineWidth: 1, //这里是为了突出显示加上的  
                    }
                  },

                },
              
              ],
              series: [
                {
                  name: unit,
                  data:list,
                  type: 'bar',
                  gradient: {
                    color: ['#37a2da', '#67e0e3']
                  },
                  barWidth:10,
                  animationCurve: 'easeOutBounce',
                  label:{
                    show:true,
                    style: {
                      fontSize: 12,
                      fill: '#FFFFFF'
                    }
                  },
                  
                },
              ],       
          }
    }
    ,
    changeColumnLineOption( list ,xLine, unit){
      return {
              title:{
                show:false
              },
              legend: {
                data: ['时间'],
                bottom: 10
              },
              xAxis: {
                data: xLine,
                axisLabel: {
                  style: {
                    rotate: 0,
                    textAlign: 'left',
                    textBaseline: 'top',
                    fill:"#FFFFFF"
                  }
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show:true,
                  style: {
                      stroke: '#3484D0',
                      lineWidth: 4, //这里是为了突出显示加上的  
                  }
                },

              },
              yAxis: [
                {
                  name: unit,
                  data: 'value',
                  min:0,
                  nameTextStyle: {
                    fill: '#FFFFFF',
                    fontSize: 10
                  },
                  splitLine: {
                    show:false
                  },
                  axisLabel: {
                    
                    style:{
                      fill:"#FFFFFF"
                    }
                  },
                  axisTick: {
                    show: false
                  },
                  axisLine: {
                    show:true,
                    style: {
                        stroke: '#3484D0',
                        lineWidth: 1, //这里是为了突出显示加上的  
                    }
                  },

                },
                {
                  name: unit,
                  data: 'value',
                  min:0,
                  nameTextStyle: {
                    fill: '#FFFFFF',
                    fontSize: 10
                  },
                  splitLine: {
                    show:false
                  },
                  axisLabel: {
                    
                    style:{
                      fill:"#FFFFFF"
                    }
                  },
                  axisTick: {
                    show: false
                  },
                  axisLine: {
                    show:true,
                    style: {
                        stroke: '#3484D0',
                        lineWidth: 1, //这里是为了突出显示加上的  
                    }
                  },

                },
              
              ],
              series: [
                {
                  name: unit,
                  data:list,
                  type: 'bar',
                  gradient: {
                    color: ['#37a2da', '#67e0e3']
                  },
                  barWidth:10,
                  animationCurve: 'easeOutBounce',
                  label:{
                    show:true,
                    style: {
                      fontSize: 12,
                      fill: '#FFFFFF'
                    }
                  },
                  
                },
                {
                  name: unit,
                  data:list,
                  type: 'line',
                  yAxisIndex: 1,
                  animationCurve: 'easeOutBounce',
                  
                  
                },
              ],       
          }
    }
    ,
    changeMonthColumnLineType(){
      if(this.monthColumnType == 0){
         this.monthColumnLineOption= this.changeColumnOption( this.monthColumnNumData.data, this.monthColumnNumData.xLine, this.monthColumnNumData.unit)
      }else{
         this.monthColumnLineOption= this.changeColumnOption( this.monthColumnAmountData.data, this.monthColumnAmountData.xLine, this.monthColumnAmountData.unit)
      }
    }
    ,
    changeDayColumnLineType(){
      if(this.dayColumnType == 0){
         this.dayColumnLineOption= this.changeColumnLineOption( this.dayColumnNumData.data, this.dayColumnNumData.xLine, this.dayColumnNumData.unit)
      }else{
         this.dayColumnLineOption= this.changeColumnLineOption( this.dayColumnAmountData.data, this.dayColumnAmountData.xLine, this.dayColumnAmountData.unit)
      }
    },
    anp() {
        var addNum = document.getElementById("userNum");

        addNum.classList.add("addNum");

        var todayUserNum = document.getElementById("todayUserNum");
    
        todayUserNum.classList.add("addTodayNum");
    
    }
     
  },
  // 计算属性
  computed: {}
};
</script>
<style lang="scss" >
  #dv-full-screen-container{
    // background-color:#2c3e50;
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
 .el-table{
 /* 表格字体颜色 */
 color:#51AEFF;
 background-color: #0A1F4D;
 }
 /* 表格内背景颜色 */
 .el-table th, .el-table tr,.el-table td{
 border: 0;
 background-color: #0A1F4D;
 }

 /* 删除表格下横线 */
 .el-table::before {
 left: 0;
 bottom: 0;
 width: 100%;
 height: 0px;
 }
 /* 表格表头字体颜色 */
 .el-table thead {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 20px;
  background-color: #0080CB
 }
 .el-table__body{
    background-color: #0080CB
 }
 .el-table td, .el-table th.is-leaf{
   border-bottom:0;
 }
 /* 表格高度 */
 .el-table__header tr,
  .el-table__header th {
    padding: 7px;
    height: 15px;
}
.el-table__body tr,
  .el-table__body td {
    padding: 7px;
    height: 15px;
    //  border: 0.0001px solid  #3484D0; 
}
 
// 鼠标悬浮
.el-table__row:hover {
  // background-color: #0080CB;
  // color: #000!important;
}
.barExplain{
  width:80%;
  height:50%;
  // margin-top:5px;
  margin-left:15px;
  background: rgba(10, 31, 77, 0.62);
  border-radius: 13px;
  border: 1px solid rgba(7, 150, 198, 0.28);
  text-align:center;
    span{
      display:inline-block;
      margin-top:2px;
      font-size: 12px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color:  #FFFFFF;
      line-height: 17px;
    }
}
.barNum{
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #BCEDFF;
  line-height: 17px;
  padding: 5px 0 0 0;
  box-sizing: border-box;
 
}
.el-radio-button:first-child .el-radio-button__inner  {
  width: 52px;
  height: 20px;
  border-radius: 11px;
  border: 1px solid #287EE2;
  padding-top: 3px;
  padding-left: 13px;
 
 
}
.el-radio-button__orig-radio:checked+.el-radio-button__inner{
  width: 52px;
  height: 20px;
  border-radius: 11px;
  border: 1px solid #287EE2;
  padding-top: 3px;
  padding-left: 13px;
  
}
.el-radio-button:last-child .el-radio-button__inner{
  width: 52px;
  height: 20px;
  border-radius: 11px;
  border: 1px solid #287EE2;
  padding-top: 3px;
   padding-left: 13px;
   
   
}
.el-radio-button__inner{
  background: #01143F;
  color: #FFFFFF;
  font-size: 10px;
  margin-left: 10px;
}
.addNum{
  width:50px;
  height:50px;
  position:relative;
  -webkit-animation:mymove 1s ; /*Safari and Chrome*/
}
.addTodayNum{
  width:50px;
  height:50px;
  position:relative;
  -webkit-animation:todaymove 1s ; /*Safari and Chrome*/
}
@keyframes mymove
{
  from {
    top:50px;
  }
  to {
    top:0px;
    opacity:0;
  }
}
@keyframes todaymove
{
  from {
    top:150px;
  }
  to {
    top:100px;
    opacity:0;
  }
}

</style>
