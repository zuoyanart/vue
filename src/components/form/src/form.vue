<template lang="html">
  <form class="pz-form">
    <slot></slot>
  </form>
</template>
<script>
export default {
  data () {
    return {
      fields:{},
      filedLength:0
    }
  },
  created() {

  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
