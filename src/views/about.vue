<template>
  <div class="home" v-loading.fullscreen.lock="fullscreenLoading">
    <Sidebar />
    <div class="main">
      <div class="container">
        test
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'index',
  components: {
    Sidebar,
  },
  data() {
    return {
      
    }
  },
 
}
</script>

<style scoped>

</style>