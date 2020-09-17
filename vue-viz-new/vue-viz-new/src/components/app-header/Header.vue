<template>
  <div class="header-wrap">
    <div class="header-left" style="flot:left">
      <dv-decoration-8 style="width:300px;height:50px;" />
    </div>
    <div class="header-title">
      <h1 class="title"  style="margin:0px">{{title}}</h1>
      <dv-decoration-5 style="width:700px;height:40px;" />
    </div>
    <div class="header-right">
      <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
    </div>
  
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>
<style >
.header-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;}
.title {
      color: white;
      text-align: center;
      font-size: 30px;
      padding-top: 10px;
}
</style>