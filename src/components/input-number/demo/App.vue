<style lang="scss">
@import "../../../assets/site.scss";
#app {
    margin: 100px;
}
</style>

<template>
<div id="app">
    <h2 class="title">普通</h2>
    <pzinputnumber :max="10"></pzinputnumber> max:10<br><br/>
    <pzinputnumber :max="10" :min="-10" :step="0.2"></pzinputnumber> max:10, min:-10,step:0.2
    <h2 class="title">尺寸</h2>
    <pzinputnumber :max="10" size="larger"></pzinputnumber> max:10<br><br/>
    <pzinputnumber :max="10" :min="-10" :step="0.2" size="larger"></pzinputnumber> max:10, min:-10,step:0.2
    <h2 class="title">禁用</h2>
    <pzinputnumber :max="10" :disabled="true"></pzinputnumber> max:10<br><br/>
    <pzinputnumber :max="10" :min="-10" :step="0.2" :disabled="true"></pzinputnumber> max:10, min:-10,step:0.2
</div>
</template>

<script>
import pzinputnumber from '../src/inputnumber.vue';

export default {
    data() {
        return {
            check: "",
        }
    },
    components: {
        pzinputnumber
    },
    methods: {
        change: function(checked) {
            console.log("是否选中：" + checked);
        }
    }
}
</script>
