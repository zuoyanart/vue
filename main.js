define('main', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _vue = require('node_modules/vue/dist/vue.min');
  
  var _vue2 = _interopRequireDefault(_vue);
  
  var _AppVue = require('App.vue');
  
  var _AppVue2 = _interopRequireDefault(_AppVue);
  
  var _vueRouter = require('node_modules/vue-router/dist/vue-router.common');
  
  var _vueRouter2 = _interopRequireDefault(_vueRouter);
  
  var _vueLayer = require('node_modules/vue-layer/dist/vue-layer');
  
  var _vueLayer2 = _interopRequireDefault(_vueLayer);
  
  _vue2['default'].use(_vueRouter2['default']);
  _vue2['default'].prototype.$layer = (0, _vueLayer2['default'])(_vue2['default']);
  // Vue.prototype.$layer = layer;
  var routes = [{
      path: '/',
      component: require("pages/index.vue")
  }, {
      path: '/guid',
      component: require('pages/guid.vue')
  }, {
      path: '/about',
      component: require('pages/about.vue')
  }, {
      path: '/change',
      component: require('pages/change.vue')
  }, {
      path: '/component',
      component: require("pages/component.vue"),
      redirect: "/component/button",
      children: [{
          path: "button",
          component: require("pages/button.vue")
      }, {
          path: 'input',
          name: 'input',
          component: require("pages/input.vue")
      }, {
          path: 'checkbox',
          name: 'checkbox',
          component: require("pages/checkbox.vue")
      }, {
          path: 'radio',
          name: 'radio',
          component: require("pages/radio.vue")
      }, {
          path: 'form',
          name: 'form',
          component: require("pages/form.vue")
      }, {
          path: 'select',
          name: 'select',
          component: require("pages/select.vue")
      }, {
          path: 'layer',
          name: 'layer',
          component: require("pages/layer.vue")
      }]
  }];
  
  var router = new _vueRouter2['default']({
      routes: routes
  });
  
  var app = new _vue2['default']({
      el: '#app',
      render: function render(h) {
          return h(_AppVue2['default']);
      },
      router: router //使用路由器
  });
  //# sourceMappingURL=/main.js.map
  

});
