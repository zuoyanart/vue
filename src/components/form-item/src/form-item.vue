<style lang="css">



</style>

<template lang="html">

<div class="form-item" :class="{'form-iserror': error}">
    <label>{{label}}</label>
    <slot></slot>
    <span class="validate-tip" :class="{'validate-tip-err': error}" v-if="isshow">{{message}}</span>
</div>

</template>

<script>

import validate from '../../../module/info/tools/validate.js';
export default {
    data() {
            return {
                value: '',
                error: false,
                isshow: false,
                message: this.validate.message
            }
        },
        props: {
            label: {
                type: String,
                default: ""
            },
            validate: {
                type: Object,
                default: function() {
                    return {
                        required: true,
                        type: "string", //string, number,boolean
                        min: 1,
                        max: 10000,
                        reg: '',
                        eq: '',
                        message: '验证规则描述'
                    }
                }
            }
        },
        computed: {},
        mounted() {
            this.$on('pz.form.change', this.checkChange);
            this.$on('pz.form.focus', this.checkFocus);
        },
        methods: {
            'checkChange': async function(msg) {
                if (msg != undefined) {
                    this.value = msg;
                }
                let ischeck = await validate.check(this.validate, this.value);
                console.log("change-ischeck=" + ischeck);
                if (ischeck.check) { //通过校验
                    this.error = false;
                } else {
                    this.error = true;
                }
                this.isshow = false;
                return !this.error;
            },
            'checkFocus': function() {
                this.isshow = true;
            },
            'checkBlur': function() {
                this.isshow = false;
            }
        },
        components: {}
}

</script>
