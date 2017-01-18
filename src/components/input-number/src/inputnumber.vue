<style lang="scss">@import "./inputnumber.scss";</style>
<style lang="css">
  @import "//at.alicdn.com/t/font_s1uzx3pag18257b9.css";
</style>
<template lang="html">
  <div class="pz-inputnumber" :class="checkChoose">
      <input type="text" name="" :value="state" @change="change" :readonly="disabled"/>
      <span class="pz-inputnumber-up pzvue-inputnumber-icon" @click="up" v-if="!disabled"></span>
      <span class="pz-inputnumber-down pzvue-inputnumber-icon" @click="down" v-if="!disabled"></span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            state: this.value //未选中
        }
    },
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 1
        },
        step: {
            type: Number,
            default: 1
        },
        size: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        checkChoose: function() {
            return {
                'pz-inputnumber-disabled': this.disabled,
                [`pz-inputnumber-${this.size}`]: !!this.size
            }
        },
    },
    mounted() {

    },
    methods: {
        change: function(event) { //改变切换状态
            if (this.disabled) {
                return;
            }
            this.checkIv(event.target.value);
        },
        up: function() {
            this.checkIv(this.accAdd(this.state,this.step));
        },
        down: function() {
            this.checkIv(this.accSub(this.state,this.step));
        },
        checkIv: function(iv) {
            if (isNaN(iv)) {
                this.state = this.accAdd(this.state, 1);
                this.state = this.accSub(this.state, 1);
                return;
            }
            iv = iv > this.max ? this.max : iv;
            iv = iv < this.min ? this.min : iv;
            this.state = iv;
            this.$emit("onchange", this.state);
        },
        accAdd: function(arg1, arg2) { //加法运算
            var r1, r2, m, c;
            try {
                r1 = arg1.toString().split(".")[1].length;
            } catch (e) {
                r1 = 0;
            }
            try {
                r2 = arg2.toString().split(".")[1].length;
            } catch (e) {
                r2 = 0;
            }
            c = Math.abs(r1 - r2);
            m = Math.pow(10, Math.max(r1, r2));
            if (c > 0) {
                var cm = Math.pow(10, c);
                if (r1 > r2) {
                    arg1 = Number(arg1.toString().replace(".", ""));
                    arg2 = Number(arg2.toString().replace(".", "")) * cm;
                } else {
                    arg1 = Number(arg1.toString().replace(".", "")) * cm;
                    arg2 = Number(arg2.toString().replace(".", ""));
                }
            } else {
                arg1 = Number(arg1.toString().replace(".", ""));
                arg2 = Number(arg2.toString().replace(".", ""));
            }
            return (arg1 + arg2) / m;
        },
        accSub: function(arg1, arg2) { //减法
            var r1, r2, m, n;
            try {
                r1 = arg1.toString().split(".")[1].length;
            } catch (e) {
                r1 = 0;
            }
            try {
                r2 = arg2.toString().split(".")[1].length;
            } catch (e) {
                r2 = 0;
            }
            m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
            n = (r1 >= r2) ? r1 : r2;
            return ((arg1 * m - arg2 * m) / m).toFixed(n);
        }
    },
    components: {}
}
</script>
