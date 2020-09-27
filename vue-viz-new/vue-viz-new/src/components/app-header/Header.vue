<template>
  <div class="header-wrap" :style="header" style="background-repeat:no-repeat;">
    <div class="header-left" style="flot:left">
      <!-- <dv-decoration-8 style="width:300px;height:50px;" /> -->
    </div>
    <div class="header-title" style="margin-top:8px">
      <span class="title"  style="margin-left:260px">{{title}}</span>
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
            height: "75px",
            
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
.header-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;}

.title {
 
  font-size: 38px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #BAECFF;
  line-height: 53px;
  letter-spacing: 9px;
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