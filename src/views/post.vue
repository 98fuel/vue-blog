<template>
  <div class="posts">
    <div v-for="(item) in post" :key="item.cid">
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
  data() {
    return {
      post: [],
    }
  },
  created() {
    console.log(this.$route.query.cid, 7777);  //首先在created里面打印一下id是传过来了     
    this.GoodsCodeid = this.$route.query.cid
  },
  mounted() {
    const api = 'https://zburu.com/api/posts.php?cid=' + this.GoodsCodeid;
    //发送axios  get请求
    this.$axios.get(api, {  //api 是我的请求url          
      params: {
        GoodsCodeid: this.GoodsCodeid
      },
    })
      .then((res) => {
        this.indexlist = res.data;
        this.indexlist.forEach(item => {
          if (item.cid === this.GoodsCodeid) {
            this.indexlist = item
          }
        })
        const post = this.indexlist
        console.log(post)
      })
      .catch((error) => {
        console.log(error);
      });
  },


}
</script>

<style>
</style>