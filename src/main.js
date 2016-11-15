import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import Notification from './components/notification/index.js';
import layer from 'vue-layer';

Vue.use(VueRouter);
Vue.prototype.$layer = layer;

const routes = [{
    path: '/',
    component: require("./pages/index.vue")
}, {
    path: '/component',
    component: require("./pages/component.vue"),
    redirect: "/component/button",
    children: [{
        path: "button",
        component: require("./pages/button.vue")
    }, {
        path: 'input',
        name: 'input',
        component: require("./pages/input.vue")
    }, {
        path: 'checkbox',
        name: 'checkbox',
        component: require("./pages/checkbox.vue")
    }, {
        path: 'radio',
        name: 'radio',
        component: require("./pages/radio.vue")
    }, {
        path: 'form',
        name: 'form',
        component: require("./pages/form.vue")
    },{
        path: 'select',
        name: 'select',
        component: require("./pages/select.vue")
    },{
        path: 'layer',
        name: 'layer',
        component: require("./pages/layer.vue")
    }]
}];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router //使用路由器
});
