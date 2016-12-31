<style lang="scss">

@import "./assets/scss/pizza.scss";
@import "./assets/scss/font-awesome.scss";
@import "./assets/site.scss";
@import "./assets/markdown.scss";

#app {
}

</style>

<template>

<div id="app">
  <div class="head">
    <div class="head-c">
      <h1><router-link to="/">Pizza Vue<em>1.0.0</em></router-link></h1>
      <span>
        <router-link to="/guid">指南</router-link>
        <router-link to="/component">组件</router-link>
        <router-link to="/change">更新日志</router-link>
        <router-link to="/about">关于作者</router-link>
      </span>
    </div>
  </div>
  <router-view></router-view>
  <div class="footer">
      <div class="footer-c">
         <span>Pizza Vue Ui</span>
         <em>
           <a href="https://github.com/zuoyanart/vue" target="_blank" alt="github"><i class=" icon-github"></i></a>&nbsp;&nbsp;
           <a href="mailto:huabinglan@163.com" alt="email:huabinglan@163.com"><i class=" icon-envelope-alt"></i></a>
         </em>
      </div>
  </div>
</div>

</template>

<script>

export default {
  data(){
    return {
    }
  },
    components: {

    },
    methods:{

    }
}

</script>
