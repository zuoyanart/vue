<template lang="html">
  <div>
    <h2>普通</h2>
    <pzinput placeholder="normal"></pzinput>
    <div class="markdown">
      <link rel="import" href="/md/input/1.md?__inline">
    </div>
    <h2>前置</h2>
    <pzinput placeholder="@163.com" type="email" id="input4" value="">
      <template slot="prepend">email</template>
    </pzinput>
    <div class="markdown">
      <link rel="import" href="/md/input/2.md?__inline">
    </div>
    <h2>前后置</h2>
    <pzinput placeholder="请输入网址" type="email" id="input5" value="">
      <template slot="prepend">http://</template>
      <template slot="append">.com</template>
    </pzinput>
    <div class="markdown">
      <link rel="import" href="/md/input/3.md?__inline">
    </div>
    <h2>后置</h2>
    <pzinput placeholder="请输入网址" type="email" id="input5" value="" icon="user-md"></pzinput>
    <div class="markdown">
      <link rel="import" href="/md/input/4.md?__inline">
    </div>
    <h2>不可用</h2>
    <pzinput placeholder="请输入网址" type="email" id="input5" value="不可用" icon="user-md" :disabled="true"></pzinput>
    <div class="markdown">
      <link rel="import" href="/md/input/5.md?__inline">
    </div>
    <div class="markdown">
      <link rel="import" href="/md/input/6.md?__inline">
    </div>
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
