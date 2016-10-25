<template lang="html">
  <div class="radio">
      <input type="radio" :id="name + value" :name="name" :value="value" :checked="checked"/><label :for="name + value"></label><label :for="name+value"><slot></slot></label>
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
    }

  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">

</style>
