<style lang="css">

</style>

<template lang="html">
  <div class="input" :class="{disabled: disabled}">
    <div class="input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
      <i :class="'icon-' + icon" v-if="icon !== ''"></i>
    <input :type="type" :name="id" value="" :id="id" :placeholder="placeholder" :disabled="disabled">
    <div class="input-append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
    data() {
            return {}
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
            // value: {
            //     type: String,
            //     default: ''
            // },
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
        methods: {},
        components: {}
}

</script>
