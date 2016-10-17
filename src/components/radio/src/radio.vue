<template lang="html">
  <div class="radio" :class="{disabled:disabled}">
      <input type="radio" :id="name + value" :name="name" :value="value" :checked="checked" :disabled="disabled" v-on:input="input"/><label :for="name + value"></label><label :for="name+value"><slot></slot></label>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    id: {
      type: String,
      default: 'id'
    },
    name: {
      type:String,
      default: "name"
    },
    value: {
      default: 0
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled:{
      trpe: Boolean,
      default:false
    }
  },
  computed: {},
  mounted () {},
  methods: {
    input(event) {
      console.log(event);
      this.$emit('input', [this.value]);
    }
  },
  components: {}
}
</script>

<style lang="css">

</style>
