<style >
    .o-echarts {
        min-width: 30px;
        min-height: 30px;
        width: 100%;
        height: 100%;
    }
</style>
<template>
<div class="o-echarts">
  <dv-charts :option="option" />
</div>
  
</template>

<script>
export default {
  name: "ColumnLine",
  props: {
    option: Object
  }
  
};
</script>
