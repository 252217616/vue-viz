<template>
  <!-- <dv-full-screen-container> -->
      <router-view/>
  <!-- </dv-full-screen-container> -->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  
  position:absolute;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: 0 auto;

}
body{
  margin:0px;
  width: 100%;
  height: 100%;
  position: relative;
}
html{
  width: 100%;
  height: 100%;
}
</style>
