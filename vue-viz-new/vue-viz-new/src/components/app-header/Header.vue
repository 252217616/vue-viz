<template>
  <div class="header-wrap" :style="header" style="background-repeat:no-repeat;
                background-size:100% 100%;
                -moz-background-size:100% 100%;">
    <div class="header-left" >
      <!-- <dv-decoration-8 style="width:300px;height:50px;" /> -->
    </div>
    <div class="header-title">
      <span class="title" >{{title}}</span>
      <!-- <dv-decoration-5 style="width:700px;height:40px;" /> -->
    </div>
    <div class="time" >
      <span>{{date}}</span>
      <!-- <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" /> -->
    </div>
  
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  },
   data() {
      return {
            header: {
            backgroundImage: "url(" + require("../../assets/header.png") + ")",
            height: "100%",
            
            },
            date: new Date(),
     }
   },
    mounted() {
    let that= this;
    this.timer = setInterval(function() {
      that.date = new Date().toLocaleString();
    });
    },
    beforeDestroy: function() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
};
</script>
<style >
.header-left{
  width:320px
}
.header-title{
  height: 100%;
  width:100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content:center;
  
}
.header-wrap {
  width: 100%;
  height:100%;
  display: flex;
  justify-content: space-between;}
.header-left{
  float:left
}
.title {
 
  font-size: 38px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #BAECFF;
  line-height: 53px;
  letter-spacing: 9px;

}
.time{
  width: 320px;
  height: 100%;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  color: #BCEDFF;
  line-height: 26px;
   text-align: center;
  display: flex;
  flex-direction: column;
  justify-content:center;
  
}
</style>