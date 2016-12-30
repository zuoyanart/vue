<template lang="html">
  <div>
    <h2>normal</h2>
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
import pzinput from 'pzvue-input';

export default {
  data(){
    return {
    }
  },
    components: {
        pzinput,
    },
    methods:{
    }
}
</script>

<style lang="css">
</style>
