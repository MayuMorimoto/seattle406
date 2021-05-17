<template>
  <div id="app">
    <About></About>
  </div>
</template>

<script>
import About from '@/components/About.vue'
export default {
  name: 'App',
  components: {
    About
  },
}
</script>

<style>
html, body, form {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
