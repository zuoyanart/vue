<template lang="html">
  <div class="radio" :class="{disabled:disabled}">
      <input type="radio" :id="name + value" :name="name" :value="value" :disabled="disabled" v-on:change="changeHandle" v-if="checked === 'false'"/>
      <input type="radio" :id="name + value" :name="name" :value="value" :disabled="disabled" v-on:change="changeHandle" v-if="checked === 'true'" checked="checked"/>
      <label :for="name + value"></label><label :for="name+value"><slot></slot></label>
  </div>
</template>
<script>
export default {
  data () {
    return {
      check:false
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
    value: {
      default: 0
    },
    checked: {
      type: String,
      default: "false"
    },
    disabled:{
      trpe: Boolean,
      default:false
    }
  },
  computed: {},
  mounted () {
    if(this.checked == 'true') {
      this.check = true;
    }
  },
  methods: {
    changeHandle() {
      this.$parent.$emit('input', this.value);
    }
  },
  components: {},
  watch:{
    check(){
      this.$parent.$emit('input', this.value);
    }
  }
}
</script>

<style lang="css">

</style>
