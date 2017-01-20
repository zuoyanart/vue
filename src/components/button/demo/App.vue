<style lang="scss">@import "../../../assets/scss/pizza.scss";
@import "../../../assets/site.scss";
#app {
    margin: 100px;
}
</style>

<template>
<div id="app">
    <h2 class="title">图标样式</h2>
    <pzbutton btn="success">成功</pzbutton>
    <pzbutton btn="info">一般信息</pzbutton>
    <pzbutton btn="warning">警告</pzbutton>
    <pzbutton btn="danger">危险</pzbutton>
    <pzbutton btn="danger" :disabled="true">禁用</pzbutton>
    <h2 class="title">图标样式</h2>
    <pzbutton icon="user-md">默认</pzbutton>
    <pzbutton icon="user-md" btn="success">成功</pzbutton>
    <pzbutton icon="user-md" btn="info">一般信息</pzbutton>
    <pzbutton btn="danger" :loading="true">危险</pzbutton>
    <h2 class="title">尺寸</h2>
    <pzbutton size="larger">默认</pzbutton>
    <pzbutton  size="small">成功</pzbutton>
    <pzbutton  btn="info" @click="aa">一般信息</pzbutton>
    <pzbutton btn="danger" :loading="true">危险</pzbutton>
</div>
</template>

<script>
import pzbutton from '../index.js';

export default {
    data() {
        return {
            check: "",
        }
    },
    components: {
        "pzbutton": pzbutton,
    },
    methods: {
        change: function(checked) {
            console.log("是否选中：" + checked);
        },
        aa: function() {
          alert("asd");
        }
    }
}
</script>
