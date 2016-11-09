<style lang="css">



</style>

<template lang="html">

<div>
    <h2>alert</h2>
    <pzbutton @click.native="submitHandle">提交</pzbutton>
    <h2>confirm</h2>
    <pzbutton @click.native="confirmHandle">删除</pzbutton>
    <h2>msg</h2>
    <pzbutton @click.native="msgHandle">msg</pzbutton>
    <pzbutton @click.native="msg1Handle">带回调</pzbutton>
    <h2>loading</h2>
    <pzbutton @click.native="loadingHandle">默认样式</pzbutton>
    <pzbutton @click.native="loading1Handle">第一种样式</pzbutton>
    <pzbutton @click.native="loading2Handle">第二种样式</pzbutton>
</div>

</template>

<script>

import pzbutton from '../components/button/index';
import tools from '../tools/tools.js';

export default {
    data() {
            return {}
        },
        components: {
            pzbutton
        },
        methods: {
            submitHandle: function() {
                let id = this.$layer.alert("this is demo!!!");
            },
            confirmHandle: function() {
                let self = this;
                let id = this.$layer.confirm("确定要删除吗？", {
                    title: "警告"
                }, async function() {
                    let result = await tools.httpAgent('http://192.168.1.134:3004/v1/article/1', 'get');
                    delete result.msg.content;
                    document.getElementById("confirm").innerText = "ajax获取到的结果：" + JSON.stringify(result);
                    self.$layer.close(id);
                });
            },
            msgHandle: function() {
                let id = this.$layer.msg("弱弱的提示");
            },
            msg1Handle: function() {
                let id = this.$layer.msg("2s后刷新页面", function() {
                    document.location.reload();
                });
            },
            loadingHandle: function() {
                let id = this.$layer.loading({
                    time: 2
                });
            },
            loading1Handle: function() {
                let id = this.$layer.loading(1, {
                    time: 2
                });
            },
            loading2Handle: function() {
                let id = this.$layer.loading(2, {
                    time: 2
                });
            },
        }
}

</script>
