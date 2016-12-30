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
  <pzradiogroup v-model="check">
    <pzradio name="c1" value="1" :checked="true">选项1</pzradio>
    <pzradio name="c1" value="2">选项2</pzradio>
    <pzradio name="c1" value="3">选项3</pzradio>
    <pzradio name="c1" value="4" :disabled="true" :checked="true">不可用</pzradio>
  </pzradiogroup>
</div>

</template>

<script>
import pzradiogroup from '../src/radio-group.vue';

export default {
  data(){
    return {
      check:"",
    }
  },
    components: {
        pzradiogroup
    },
    methods:{
      change: function(value, checked) {
          console.log("是否选中：" + checked);
          console.log("checkbox的值：" + value);
      }
    }
}

</script>
