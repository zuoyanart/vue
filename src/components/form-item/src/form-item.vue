<template lang="html">
  <div class="">
      <label>{{label}}</label>
      <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      field:""
    }
  },
  props: {
     label: {
       type: String,
       default:""
     }
  },
  computed: {},
  mounted () {},
  methods: {

  },
  components: {}
}
</script>

<style lang="css">
</style>
