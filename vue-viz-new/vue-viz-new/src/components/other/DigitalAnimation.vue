<style scoped>
 .mystyle{
   width:200px;height:50px;
 }
</style>
<template>
  <dv-digital-flop :config="config" class="mystyle" />
</template>
 
 
<script>

export default {
    name: "DigitalAnimation",
      props: {
        config: Object
    },
    methods:{
        
    }


}
</script>