<style lang="scss">
@import "../../../assets/scss/pizza.scss";
@import "../../../assets/site.scss";
   #app{
     margin:100px;
     width:500px;
   }
</style>

<template>

<div id="app">
  <pzradio name="t1" value="0" checked="true">选项1</pzradio>
  <pzradio name="t1" value="1">选项2</pzradio>
  <pzradio name="t1" value="2">选项3</pzradio>
  <pzradio name="t1" value="3" :disabled="true">禁用</pzradio>
</div>

</template>

<script>
import pzradio from '../src/radio.vue';

export default {
  data(){
    return {
      check:"",
    }
  },
    components: {
        pzradio
    },
    methods:{
      change: function(value, checked) {
          console.log("是否选中：" + checked);
          console.log("checkbox的值：" + value);
      }
    }
}

</script>
