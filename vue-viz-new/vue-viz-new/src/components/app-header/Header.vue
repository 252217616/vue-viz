<template>
  <div class="header-wrap" :style="header" style="background-size: 100%">
    <div class="header-left" style="flot:left">
      <!-- <dv-decoration-8 style="width:300px;height:50px;" /> -->
    </div>
    <div class="header-title" style="margin-top:8px">
      <span class="title"  style="margin:0px">{{title}}</span>
      <!-- <dv-decoration-5 style="width:700px;height:40px;" /> -->
    </div>
    <div class="header-right">
      <span style="color:red">时间</span>
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
            backgroundImage: "url(" + require("../../assets/header.png") + ") ",
            height: "75px"
          },
     }
   }
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
</style>