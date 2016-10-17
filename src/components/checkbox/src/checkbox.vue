<template lang="html">
  <div class="checkbox" :class="{disabled: disabled}">
      <input v-model="_value" type="checkbox" :id="name + value" :name="name" :value="value" :checked="checked" :disabled="disabled"
      @change="chanegHandel"/><label :for="name + value"></label><label :for="name+value"><slot></slot></label>
  </div>
</template>
<script>
export default {
  data () {
    // console.log(this.$parent);
    return {
      focus: false,
      // wrapInGroup: this.$parent.$options._componentTag.indexOf("checkbox") > -1,
      value:""
    }
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
    "value": {
      type: String,
      default: 0
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    _value: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      }
    }
  },
  mounted () {},
  methods: {
    chanegHandel: function(event) {
      console.log(event);
      this.value = event.target.value;
      this.$dispatch('checkChange', this.value)
    }
  },
  components: {},
  watch: {

  }
}
</script>

<style lang="css">

</style>
