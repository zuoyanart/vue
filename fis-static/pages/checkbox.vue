<template lang="html">
  <div>
    <h2>复选</h2>
    <pzcheckbox value="1" :checked="true">香蕉</pzcheckbox>
    <pzcheckbox value="2">苹果</pzcheckbox>
    <pzcheckbox value="3">橙子</pzcheckbox>
    <pzcheckbox value="4" :disabled="true">柚子</pzcheckbox>
    <div class="markdown">
      <link rel="import" href="/md/checkbox/1.md?__inline">
    </div>
    <h2>change事件</h2>
    <pzcheckbox value="字符串值" :change="change">change事件</pzcheckbox>，打开控制台看输出
    <div class="markdown">
      <link rel="import" href="/md/checkbox/2.md?__inline">
    </div>
    <h2>切换状态</h2>
    <pzcheckbox value="5" :checked="checked" :change="change1">切换选中状态</pzcheckbox><pzbutton @click.native="changeChecked">切换选中状态</pzbutton>
    <div class="markdown">
      <link rel="import" href="/md/checkbox/3.md?__inline">
    </div>
    <h2>复选框组</h2>
    <pzcheckboxgroup v-model="checks">
      <pzcheckbox value="1">香蕉</pzcheckbox>
      <pzcheckbox value="2">苹果</pzcheckbox>
      <pzcheckbox value="3">橙子</pzcheckbox>
      <pzcheckbox value="4">柚子</pzcheckbox>
    </pzcheckboxgroup>
    选择的值：{{checks}}
    <div class="markdown">
      <link rel="import" href="/md/checkbox/4.md?__inline">
    </div>
    <div class="markdown">
      <link rel="import" href="/md/checkbox/5.md?__inline">
    </div>
  </div>
</template>

<script>
import pzbutton from 'pzvue-button';
import pzcheckbox from 'pzvue-checkbox';
import pzcheckboxgroup from 'pzvue-checkbox-group';

export default {
  data(){
    return {
      checked: true,
      checks:[],
    }
  },
    components: {
        pzbutton,
        pzcheckbox,
        pzcheckboxgroup,
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
