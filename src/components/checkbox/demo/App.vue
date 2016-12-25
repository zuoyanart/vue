<style lang="scss">
@import "../../../assets/scss/pizza.scss";
@import "../../../assets/site.scss";
   #app{
     margin:100px;
   }
</style>

<template>

<div id="app">
  <h2 class="title">普通</h2>
  <pzcheckbox value="0" name="shop">京东</pzcheckbox>
  <pzcheckbox value="1" name="shop">淘宝</pzcheckbox>
  <pzcheckbox value="2" name="shop">天猫</pzcheckbox>
  <pzcheckbox value="3" name="shop" disabled="false">聚美优品</pzcheckbox>
  <h2 class="title">绑定change事件</h2>
  <pzcheckbox value="0" name="shop1" :change="change">京东</pzcheckbox>(打开控制台查看输出)
</div>

</template>

<script>
import pzcheckbox from '../src/checkbox';

export default {
  data(){
    return {}
  },
    components: {
        pzcheckbox,
    },
    methods:{
      change: function(value, checked) {
          console.log("是否选中：" + checked);
          console.log("checkbox的值：" + value);
      }
    }
}

</script>
