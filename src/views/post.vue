<template>
  <div class="posts">
    <div
      v-for="item in post"
      :key="item.cid"
    >
      <h3>{{ item.title }}</h3>
      <p>{{ item.created }}</p>
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'post',
  data () {
    return {
      post: [],
    }
  },
  props: ['cid'],
  methods: {
    getData () {
      var api = 'https://zburu.com/api/posts.php?cid=' + cid;
      Axios.get(api).then((response) => {
        this.post = response.data;
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