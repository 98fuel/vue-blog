<template>
  <div class="home" v-loading.fullscreen.lock="fullscreenLoading">
    <Sidebar />
    <div class="main">
      <div class="container">
        <div v-for="(item) in indexlist" :key="item.cid">
          <h3>{{ item.title }}</h3>
          <div class="posts-meta">发布于 {{ item.created }} / views: {{ item.views }}</div>
          <div class="posts-content markdown-body">{{ item.text }}</div>
          <div class="meta-bottom">
            tags: {{ item.tags }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
// 将marked 引入
import marked from 'marked'
// 引入代码高亮样式
// 
export default {
  name: 'post',
  components: {
    Sidebar,
  },
  data() {
    return {
      indexlist: [],
      fullscreenLoading: true,
    }
  },
  created() {
    console.log(this.$route.query.cid);
    this.GoodsCodeid = this.$route.query.cid
  },
  mounted() {
    const api = 'https://zburu.com/api/posts.php?type=post&';
    //发送axios  get请求
    this.$axios.get(api, {
      params: {
        cid: this.GoodsCodeid
      },
    }
    )
      .then((res) => {
        this.fullscreenLoading = false;
        this.indexlist = res.data;
        console.log(this.indexlist)
      })
      .catch((error) => {
        console.log(error);
      });
  },


}
</script>

<style scoped>
h3 {
  font-size: 1.6rem;
  margin: 0 0 20px;
  padding-top: 10px;
}

.posts-meta {
  border-bottom: 1px solid #eee;
  padding-bottom: 6px;
}

.posts-content {
  margin-top: 20px;
  line-height: 1.8;
  font-size: 17px;
  padding-bottom: 20px;
}

.meta-bottom {
  padding-top: 10px;
  border-top: 1px solid #eee;
}
</style>