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
  <pzcheckbox value="3" name="shop" :disabled="true">聚美优品</pzcheckbox>
  <h2 class="title">绑定change事件</h2>
  <pzcheckbox value="0" name="shop1" :change="change">京东</pzcheckbox>(打开控制台查看输出)
  <h2 class="title">checkbox-group</h2>
  <checkboxgroup v-model="check">
    <pzcheckbox name="c1" value="1" :checked="true">选项1</pzcheckbox>
    <pzcheckbox name="c1" value="2">选项2</pzcheckbox>
    <pzcheckbox name="c1" value="3">选项3</pzcheckbox>
    <pzcheckbox name="c1" value="4" :disabled="true" :checked="true">不可用</pzcheckbox>
  </checkboxgroup>
  {{check}}
</div>

</template>

<script>
import pzcheckbox from '../src/checkbox';
import checkboxgroup from '../src/checkbox-group';

export default {
  data(){
    return {
      check:"",
    }
  },
    components: {
        pzcheckbox,
        checkboxgroup,
    },
    methods:{
      change: function(value, checked) {
          console.log("是否选中：" + checked);
          console.log("checkbox的值：" + value);
      }
    }
}

</script>
