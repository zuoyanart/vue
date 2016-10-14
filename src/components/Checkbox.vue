<style lang="less">
.checkbox {
    font-size: 14px;
    cursor: pointer;
    input {
        vertical-align: middle;
        width: 18px;
        height: 18px;
        margin-top:-3px;
        margin-right:2px;
    }
    label {
        vertical-align: middle;
    }
}
</style>

<template lang="html">

<span class="checkbox">
        <input type="checkbox" :id="id" :name="id" :value="value">
        <label :for="id"><slot></slot></label>
  </span>

</template>

<script>

export default {
    data() {
            return {}
        },
        props: {
            id: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            checked: {
                type: Boolean,
                default: false
            }
        },
        computed: {},
        mounted() {},
        methods: {},
        components: {}
}

</script>
