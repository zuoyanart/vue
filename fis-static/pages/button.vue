<template lang="html">
  <div>
    <h2>普通样式</h2>
    <pzbutton>默认</pzbutton>
    <pzbutton btn="success">成功</pzbutton>
    <pzbutton btn="info">一般信息</pzbutton>
    <pzbutton btn="warning">警告</pzbutton>
    <pzbutton btn="danger">危险</pzbutton>
    <pzbutton btn="danger" :disabled="true">禁用</pzbutton>
    <h2>图标样式</h2>
    <pzbutton icon="user-md">默认</pzbutton>
    <pzbutton icon="user-md" btn="success">成功</pzbutton>
    <pzbutton icon="user-md" btn="info">一般信息</pzbutton>
    <pzbutton btn="danger" :loading="true">危险</pzbutton>
    <h2>块级样式</h2>
    <pzbutton icon="user-md" size="block">默认</pzbutton>
    <pzbutton icon="user-md" btn="success" size="block">成功</pzbutton>
    <pzbutton icon="user-md" btn="info" size="block">一般信息</pzbutton>
    <pzbutton btn="danger" :loading="true" size="block">危险</pzbutton>
  </div>
</template>

<script>
import pzbutton from 'pzvue-button';

export default {
  data(){
    return {

    }
  },
    components: {
        pzbutton,
    },
    methods:{
    }
}
</script>

<style lang="css">
</style>
