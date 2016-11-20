<template lang="html">
  <div>
    <h2>复选</h2>
    <pzcheckbox name="c1" value="1" :checked="true">好吧</pzcheckbox>
    <pzcheckbox name="c1" value="2">sdf</pzcheckbox>
    <pzcheckbox name="c1" value="3">sdf</pzcheckbox>
    <pzcheckbox name="c1" value="4" :disabled="true">不可用</pzcheckbox>
    <h2>change事件</h2>
    <pzcheckbox name="c1" value="字符串值" :change="change">change事件</pzcheckbox>，打开控制台看输出
    <h2>切换状态</h2>
    <pzcheckbox name="c1" value="5" :checked="checked" :change="change1">切换选中状态</pzcheckbox>
    <br>
    <br>
    <pzbutton @click.native="changeChecked">切换选中状态</pzbutton>

  </div>
</template>

<script>
import pzbutton from '../components/button/index';
import pzcheckbox from '../components/checkbox/index';
// import pzcheckbox from 'pzvue-checkbox';

export default {
  data(){
    return {
      checked: true
    }
  },
    components: {
        pzbutton,
        pzcheckbox,
    },
    methods:{
      change: function(value, ischecked) {
        console.log("值=" +value);
        console.log("是否选中=" + ischecked);
      },
      change1: function(value, ischecked) {
        console.log("值=" +value);
        console.log("是否选中=" + ischecked);
      },
      changeChecked: function() {
        this.checked = !this.checked;
      },
    }
}
</script>

<style lang="css">
</style>
