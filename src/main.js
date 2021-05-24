import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//1.引入reset.css rem.js
import "./assets/css/reset.css"
// 2.引入rem
import "./assets/js/rem"

//3.引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

// 4.公共组件
import "./components"

// 5.过滤器
import "./filters"

//6.font字体
import "./assets/font/iconfont.css";
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
