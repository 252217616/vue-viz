
<template>
  <dv-digital-flop :config="config" style="width:200px;height:50px;" />
</template>
 
 
<script>
export default {
    name: "DigitalAnimation",
    data () {
        return {
            config : {
                number: [100],
                content: '{nt}个'
            }
        }
    },
}
</script>