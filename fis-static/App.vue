<style lang="scss">

@import "./assets/scss/pizza.scss";
@import "./assets/scss/font-awesome.scss";
@import "./assets/site.scss";
@import "./assets/markdown.css";

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
        <router-link to="/resource">资源</router-link>
      </span>
    </div>
  </div>
  <router-view></router-view>
  <div class="footer">

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
