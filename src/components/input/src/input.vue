<style lang="css">

</style>

<template lang="html">
  <div class="input" :class="[{disabled: disabled}, size ? 'input-' + size : '']">
    <div class="input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <i :class="'icon-' + icon" v-if="icon !== ''"></i>
    <input v-if="type==='text'" type="text" :name="id" :value="value" :id="id" :placeholder="placeholder" :disabled="disabled"  @change="handleChange" @blur="handleChange" @focus="handleFocus" @input="input">
    <input v-if="type==='email'" type="email" :name="id" :value="value" :id="id" :placeholder="placeholder" :disabled="disabled" >
    <input v-if="type==='number'" type="number" :name="id" :value="value" :id="id" :placeholder="placeholder" :disabled="disabled" >
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
            },
            size:{
              type: String,
              default:''
            }
        },
        computed: {},
        mounted() {},
        methods: {
          handleChange(event) {
            this.$parent.$emit('pz.form.change', event.target.value);
          },
          handleFocus(event) {
            this.$parent.$emit('pz.form.focus');
          },
          input(event) {
            this.$emit('input', event.target.value);
          }
        },
        watch: {},
        components: {}
}

</script>
