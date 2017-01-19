<template lang="html">

<div class="form-item" :class="{'form-iserror': error}">
    <label>{{label}}</label>
    <slot></slot>
    <span class="validate-tip" :class="{'validate-tip-err': error}" v-if="isshow">{{message}}</span>
</div>

</template>

<script>

import validate from '../../../tools/validate.js';
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
                        type: "string", //string, number,array
                        min: 1,
                        max: 10000,
                        reg: '',
                        eq: '',
                        message: '$'
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
            'checkChange': async function(msg, isshow = true) {
                if (msg != undefined) {
                    this.value = msg;
                }
                if(this.message == '$') {
                  return true;
                }
                let ischeck = await validate.check(this.validate, this.value);
                if (ischeck) { //通过校验
                    this.error = false;
                } else {
                    this.error = true;
                }
                if(isshow) {
                  this.isshow = false;
                }
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
