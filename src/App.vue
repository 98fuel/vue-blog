<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import marked from 'marked';
import '@/assets/style.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
