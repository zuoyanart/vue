import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar11</div>' }

const routes = [
  {path:'/foo', component:Foo},
  {path: '/bar', component: Bar}
];

const router = new VueRouter({
   routes
});

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router//使用路由器
});
