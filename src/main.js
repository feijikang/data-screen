import "core-js/stable";
import "regenerator-runtime/runtime";

import "babel-polyfill"; 

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入可视化组件
import dataV from '@jiaminghi/data-view';
Vue.use(dataV);

// 适配flex
import '@/common/flexible.js';

// 引入全局css
import './assets/scss/style.scss';


//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
