// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// aixos
import axios from 'axios';
Vue.prototype.$axios = axios;

// 解析markdown
import hljs from 'highlight.js';
Vue.use(hljs);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  markedMixin,
  components: { App },
  template: '<App/>'
})


import marked from 'marked';
const markedMixin = {
  methods: {
    md: function (input) {
      return marked(input);
    },
  },
};

