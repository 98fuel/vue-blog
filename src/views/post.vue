<template>
  <div class="posts">
    <div v-for="(item) in indexlist" :key="item.cid">
      <h3>{{ item.title }}</h3>
      <p>{{ item.created }}</p>
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post',
  data() {
    return {
      indexlist: [],
    }
  },
  created() {
    console.log(this.$route.query.cid);
    this.GoodsCodeid = this.$route.query.cid
  },
  mounted() {
    const api = 'https://zburu.com/api/posts.php';
    //发送axios  get请求
    this.$axios.get(api, {
      params: {
        cid: this.GoodsCodeid
      },
    }
    )
      .then((res) => {
        this.indexlist = res.data;
        // this.indexlist.forEach(item => {
        //   if (item.cid === this.GoodsCodeid) {
        //     this.indexlist = item
        //   }
        // })
        const post = this.indexlist
        console.log(post)
        console.log(this.indexlist)
      })
      .catch((error) => {
        console.log(error);
      });
  },


}
</script>

<style>
</style>