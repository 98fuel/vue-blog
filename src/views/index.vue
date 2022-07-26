<template>
  <div class="home">
    <Sidebar />
    <div class="main">
      <!-- <h1>My blog</h1> -->
      <div class="list">
        <div class="list-item" v-for="item in list" :key="item.cid">
          <div @click="dianji(item.cid)">
            <p>{{ item.title }}</p>
            <span>{{ item.created }}</span>
          </div>

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
      list: []
    }
  },
  methods: {
    getData() {
      const api = 'https://zburu.com/api/posts.php';
      Axios.get(api).then((response) => {
        this.list = response.data;
        // console.log(response.data);

      }).catch((error) => {
        console.log(error);
      })
    },
    dianji(cid) {
      console.log(cid, 444);  // 这里的id就是我们上面传下来的id 
      let GoodsCodeid = cid  //把id重新赋值
      //这里就是跳转name: "miun"是指跳转到miun页面上面
      //query: { id: GoodsCodeid}就是我们跳转过去需要带的参数
      this.$router.push({ name: "post", query: { cid: GoodsCodeid } });
    },
  },
  mounted() {
    this.getData();
  },
}
</script>

<style>
.main {
  padding-bottom: 30px;
}

h1 {
  text-align: center;
}

.list {
  max-width: 800px;
  margin: 0 auto;
}

.list-item {
  border-bottom: 1px solid #eee;
}

.list-item a {
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  font-size: 17px;
  transition: all 0.2s linear;
}

.list-item a:hover {
  background: #eee;
}
</style>