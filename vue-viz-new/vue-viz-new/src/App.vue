<template>
  <dv-full-screen-container>
      <router-view/>
  </dv-full-screen-container>
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
  color: #2c3e50;
  margin-top: 60px;
}
body{
  margin:0px;
  width: 100%;
  height: 100%;
}
html{
  width: 100%;
  height: 100%;
}
</style>
