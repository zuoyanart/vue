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
  <pzinput placeholder="normal"></pzinput>
  <br>
  <pzinput placeholder="@163.com" type="email" id="input4" value="">
    <template slot="prepend">email</template>
  </pzinput>
  <br>
  <pzinput placeholder="请输入网址" type="email" id="input5" value="" size="larger">
    <template slot="prepend">http://</template>
    <template slot="append">.com</template>
  </pzinput>
  <br>
  <pzinput placeholder="请输入网址" type="email" id="input5" value="" icon="user-md"></pzinput>
  <br>
  <pzinput placeholder="请输入网址" type="email" id="input5" value="不可用" icon="user-md" :disabled="true"></pzinput>
  <!-- <h2>数字按钮</h2> -->
  <!-- <pzinputnumber></pzinputnumber> -->
  <!-- <br><br> -->
  <!-- <pzinputnumber :disabled="true"></pzinputnumber> -->
</div>

</template>

<script>
import pzinput from '../src/input.vue';

export default {
  data(){
    return {
      check:"",
    }
  },
    components: {
        pzinput
    },
    methods:{
      change: function(value, checked) {
          console.log("是否选中：" + checked);
          console.log("checkbox的值：" + value);
      }
    }
}

</script>
