<template>
  <div class="home" v-loading.fullscreen.lock="fullscreenLoading">
    <Sidebar />
    <div class="main">
      <div class="list">
        <div class="list-item" v-for="item in list" :key="item.cid" @click="details(item.cid)">
          <p class="list-title">{{ item.title }}</p>
          <span class="list-date">{{ item.created }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Axios from 'axios';
export default {
  name: 'index',
  components: {
    Sidebar,
  },
  data() {
    return {
      list: [],
      fullscreenLoading: true,
    }
  },
  methods: {
    getData() {
      const api = 'https://zburu.com/api/posts.php';
      Axios.get(api).then((response) => {
        this.fullscreenLoading = false;
        this.list = response.data;
        // console.log(response.data);
      }).catch((error) => {
        console.log(error);
      })
    },
    details(cid) {
      console.log(cid, 444);
      let GoodsCodeid = cid
      this.$router.push({ name: "post", query: { cid: GoodsCodeid } });
    },
  },
  mounted() {
    this.getData();
  },
}
</script>

<style scoped>
.main {
  padding-bottom: 30px;
}

.list-item {
  border-bottom: 1px solid #eee;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  transition: all 0.2s linear;
}

.list-item:hover {
  cursor: pointer;
  background: #f3f3f3;
}

.list-title {
  margin: 0;
  font-size: 18px;
}

.list-date {
  color: #999;
  font-size: 16px;
}

@media(max-width:950px) {
  .list-item {
    flex-direction: column;
    align-items: baseline;
  }
}
</style>