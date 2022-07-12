<template>
  <div class="posts">
    <div
      v-for="item in list"
      :key="item.cid"
    >
      <router-link :to="'/post?cid='+item.cid">{{ item.title }}</router-link>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'index',
  data () {
    return {
      list: []
    }
  },

  methods: {
    getData () {
      var api = 'https://zburu.com/api/posts.php';
      Axios.get(api).then((response) => {
        this.list = response.data;
        console.log(response.data)
      }).catch((error) => {
        console.log(error);
      })
    }
  },
  mounted () {
    this.getData();
  },
}
</script>

<style>
</style>