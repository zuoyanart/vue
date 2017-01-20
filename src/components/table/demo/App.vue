<style lang="scss">

@import "../../../assets/scss/pizza.scss";
@import "../../../assets/site.scss";
#app {
    margin: 100px;
}

</style>

<template>

<div id="app">
    <h2 class="title">普通</h2>
    <pz-table :column="column" :rows="rows" :action="action"></pz-table>
</div>

</template>

<script>

import table from '../src/table.vue';

export default {
    data() {
            return {
              pk:"id",
                column: [{
                    title: "姓名",
                    key: "name"
                }, {
                    title: "年龄",
                    key: "age"
                }, {
                    title: "地址",
                    key: "address"
                }],
                rows: [{
                    id: 1,
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居'
                }, {
                  id:2,
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                }, {
                  id:3,
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                }, {
                  id:4,
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                }],
                action: [{
                    link: "info",
                    text: "详细"
                }, {
                    text: "编辑",
                    size: "small",
                    action: function(id, index) {
                        alert("编辑,id=" +id +",index=" + index);
                    },
                }, {
                    text: "删除",
                    size: "small",
                    btn: "success",
                    action: function(id) {
                        alert("删除,id=" +id);
                    },
                }, {
                    text: "冻结",
                    size: "danger",
                    btn: "waring",
                    action: function(id) {
                        alert("冻结,id=" +id);
                    },
                }],
            }
        },
        components: {
            "pz-table": table,
        },
        methods: {
            change: function(checked) {
                console.log("是否选中：" + checked);
            }
        }
}

</script>
