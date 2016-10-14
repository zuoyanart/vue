<style lang="css">

</style>

<template lang="html">
  <div class="input">
    <div class="input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input :type="type" :name="id" value="" :id="id" :placeholder="placeholder" :value="value">
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
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            }

        },
        computed: {},
        mounted() {},
        methods: {},
        components: {}
}

</script>
