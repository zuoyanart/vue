<style lang="scss">
  @import "../../../assets/site.scss";
  @import "../../../assets/scss/pizza.scss";
   #app{
     margin:100px;
   }
</style>

<template>

<div id="app">
  <pzcheckbox value="0" name="shop">京东</pzcheckbox>
  <pzcheckbox value="1" name="shop">淘宝</pzcheckbox>
  <pzcheckbox value="2" name="shop">天猫</pzcheckbox>
  <pzcheckbox value="3" name="shop" disabled="false">聚美优品</pzcheckbox>
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
    methods:{}
}

</script>
