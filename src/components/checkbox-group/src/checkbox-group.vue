<template lang="html">
  <div class="checkbox-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:"PZCheckboxGroup",
  data () {
    return {
      value:[]
    }
  },
  watch:{
  },
  events: {
    'checkChange': function(msg) {
      console.log(msg);
       this.value.push(msg);
    }
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>
