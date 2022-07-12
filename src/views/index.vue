<template>
  <div class="main">
    <h1>My blog</h1>
    <div class="list">
      <div
        class="list-item"
        v-for="item in list"
        :key="item.cid"
      >
        <router-link :to="'/post?cid='+item.cid">
          <p>{{ item.title }}</p>
          <span>{{ item.created }}</span>
        </router-link>

      </div>
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
    },

  },
  mounted () {
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