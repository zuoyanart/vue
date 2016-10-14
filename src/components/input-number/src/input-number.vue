

<template>

<div class="input-number">
    <PZInput type="number" :disabled="disabled" v-model="currentValue"></PZInput>
    <span class="icon-minus"></span>
    <span class="icon-plus" @click="decrease"></span>
</div>

</template>

<script>

import PZInput from '../../input/index';
export default {
    name: "PZInputNumber",
    components: {
        PZInput
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: Number,
            default: 0
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        step: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        }
    },
    methods: {
        accSub(arg1, arg2) {
                var r1, r2, m, n;
                try {
                    r1 = arg1.toString().split('.')[1].length;
                } catch (e) {
                    r1 = 0;
                }
                try {
                    r2 = arg2.toString().split('.')[1].length;
                } catch (e) {
                    r2 = 0;
                }
                m = Math.pow(10, Math.max(r1, r2));
                n = (r1 >= r2) ? r1 : r2;
                return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));
            },
            accAdd(arg1, arg2) {
                var r1, r2, m, c;
                try {
                    r1 = arg1.toString().split('.')[1].length;
                } catch (e) {
                    r1 = 0;
                }
                try {
                    r2 = arg2.toString().split('.')[1].length;
                } catch (e) {
                    r2 = 0;
                }
                c = Math.abs(r1 - r2);
                m = Math.pow(10, Math.max(r1, r2));
                if (c > 0) {
                    var cm = Math.pow(10, c);
                    if (r1 > r2) {
                        arg1 = Number(arg1.toString().replace('.', ''));
                        arg2 = Number(arg2.toString().replace('.', '')) * cm;
                    } else {
                        arg1 = Number(arg1.toString().replace('.', '')) * cm;
                        arg2 = Number(arg2.toString().replace('.', ''));
                    }
                } else {
                    arg1 = Number(arg1.toString().replace('.', ''));
                    arg2 = Number(arg2.toString().replace('.', ''));
                }
                return (arg1 + arg2) / m;
            },
            increase() {
              console.log(this.currentValue);
                if (this.currentValue + this.step > this.max || this.disabled) return;
                this.currentValue = this.accAdd(this.step, this.currentValue);
                if (this.maxDisabled) {
                    this.inputActive = false;
                }
            },
            decrease() {
              console.log(this.currentValue);
                if (this.currentValue - this.step < this.min || this.disabled) return;
                this.currentValue = this.accSub(this.currentValue, this.step);
                if (this.minDisabled) {
                    this.inputActive = false;
                }
            },
            activeInput(disabled) {
                if (!this.disabled && !disabled) {
                    this.inputActive = true;
                }
            },
            inactiveInput(disabled) {
                if (!this.disabled && !disabled) {
                    this.inputActive = false;
                }
            }
    }
}

</script>
