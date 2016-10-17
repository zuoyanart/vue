<style lang="css">

</style>

<template lang="html">
  <div class="input" :class="{disabled: disabled}">
    <div class="input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <i :class="'icon-' + icon" v-if="icon !== ''"></i>
    <input v-if="type==='text'" type="text" :name="id" :value="value" :id="id" :placeholder="placeholder" :disabled="disabled" v-model="currentValue" @blur="handleBlur" v-on:input="input">
    <input v-if="type==='email'" type="email" :name="id" :value="value" :id="id" :placeholder="placeholder" :disabled="disabled" v-model="currentValue">
    <input v-if="type==='number'" type="number" :name="id" :value="value" :id="id" :placeholder="placeholder" :disabled="disabled" v-model="currentValue">
    <div class="input-append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
    data() {
            return {
              currentValue: this.value
            }
        },
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            id: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            icon: {
              type: String,
              default:''
            },
            disabled:{
              type: Boolean,
              default: false
            }
        },
        computed: {},
        mounted() {},
        methods: {
          handleBlur(event) {
            // this.$emit('onblur', this.currentValue);
            // this.$parent.$data.form["name"] =this.currentValue;
          },
          input(event) {
            this.$emit('input', this.currentValue)
          }
        },
        components: {}
}

</script>
