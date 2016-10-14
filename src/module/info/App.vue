<style lang="scss">

@import "../../assets/scss/pizza.scss";
@import "../../assets/scss/font-awesome.scss";
#app {
    margin: 100px;
    h2 {
        font-size: 16px;
        margin: 10px;
    }
}

</style>

<template>

<div id="app">
    <h2>普通样式</h2>
    <pzbutton>默认</pzbutton>
    <pzbutton btn="success">成功</pzbutton>
    <pzbutton btn="info">一般信息</pzbutton>
    <pzbutton btn="warning">警告</pzbutton>
    <pzbutton btn="danger">危险</pzbutton>
    <pzbutton btn="danger" :disabled="true">禁用</pzbutton>
    <br>
    <br>
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
    <h2>复选</h2>
    <pzcheckbox id="c1" value="1">好吧</pzcheckbox> &nbsp;&nbsp;&nbsp;&nbsp;
    <pzcheckbox id="c2">sdf</pzcheckbox>&nbsp;&nbsp;&nbsp;&nbsp;
    <pzcheckbox id="c3">sdf</pzcheckbox>&nbsp;&nbsp;&nbsp;&nbsp;
    <h2>输入框</h2>
    <pzinput placeholder="请输入内容" id="input1"></pzinput>
    <br><br>
    <pzinput placeholder="请输入内容" id="input2" value="value"></pzinput>
    <br><br>
    <pzinput placeholder="数字" type="number" id="input3" value="0.0"></pzinput>
    <br><br>
    <pzinput placeholder="@163.com" type="email" id="input4" value="">
      <template slot="prepend">email</template>
    </pzinput>
    <br><br>
    <pzinput placeholder="请输入网址" type="email" id="input5" value="">
      <template slot="prepend">http:\\</template>
      <template slot="append">.com</template>
    </pzinput>
</div>

</template>

<script>

import pzbutton from '../../components/button/index';
import pzcheckbox from '../../components/Checkbox.vue';
import pzinput from '../../components/input/index';

export default {
    components: {
        pzbutton,
        pzcheckbox,
        pzinput
    }
}

</script>
