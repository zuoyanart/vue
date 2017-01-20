<style lang="scss">
 // @import "./timeline.scss";
</style>

<template lang="html">
  <li class="pz-timeline-item">
    <div class="pz-timeline-dot" :style="borderColor"></div>
    <div class="pz-timeline-line"></div>
    <div class="pz-timeline-content">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  data () {
    return {
      state: this.checked//未选中
    }
  },
  props: {
    color: {
      type: String,
      default: 'blue'
    }
  },
  computed: {
    borderColor: function() {
      return {
        'border-color': this.color,
      }
    },
  },
  mounted () {

  },
  methods: {

  },
  components: {}
}
</script>
