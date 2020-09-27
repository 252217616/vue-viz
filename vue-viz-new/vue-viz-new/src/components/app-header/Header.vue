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
    <div class="header-right">
      <div class="time" >{{date}}</div>
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
.header-title{
  margin-top:8px
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
  margin-left:260px
}
.time{
  width: 220px;
  height: 26px;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  color: #BCEDFF;
  line-height: 26px;
  margin-top:25px;
  margin-right: 23px;

}
</style>