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
  created() {},
  computed: {},
  mounted () {
    var a = this.$children;
    console.log("children========");
    console.log(a);
    // for(let i=0,i<a.length;i<l;i++) {
    //
    // }
    a[7].$children[0].$on("click", this.sub)
  },
  methods: {
    sub:function() {
      alert(1);
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
