<style lang="scss">
 @import "./switch.scss";
</style>

<template lang="html">
   <span class="pz-switch" @click="change" :class="checkChoose">
     <slot name="open" v-if="state"></slot>
      <slot name="close" v-if="!state"></slot>
   </span>
</template>

<script>
export default {
  data () {
    return {
      state: this.checked//未选中
    }
  },
  props: {
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type:Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkChoose: function() {
      return {
        'pz-switch-active': this.state,
        'pz-switch-disabled': this.disabled,
        [`pz-switch-${this.size}`]: !!this.size
      }
    },
  },
  mounted () {

  },
  methods: {
    change: function() {//改变切换状态
      if(this.disabled) {
        return;
      }
      this.state = !this.state;
      this.$emit("change", this.state)
    }
  },
  components: {}
}
</script>
