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
  <pzswitch @change="change">
    <i slot="open">开</i>
    <i slot="close">关</i>
  </pzswitch>
  <h2 class="title">大小</h2>
  <pzswitch @change="change" size="larger" :checked="true">
    <i slot="open">开启</i>
    <i slot="close">关闭</i>
  </pzswitch>
  <h2 class="title">不可用</h2>
  <pzswitch @change="change" size="larger" :disabled="true" :checked="true">
    <i slot="open">开启</i>
    <i slot="close">关闭</i>
  </pzswitch>
</div>

</template>

<script>
import pzswitch from '../src/switch.vue';

export default {
  data(){
    return {
      check:"",
    }
  },
    components: {
        pzswitch
    },
    methods:{
      change: function(checked) {
          console.log("是否选中：" + checked);
      }
    }
}

</script>
