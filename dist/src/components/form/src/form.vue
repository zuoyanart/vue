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
  methods: {
    validate: async function() {//表单验证
      let ischeck = true;
      let child = this.$children;
      let data = false;

      for(let i=0,l=child.length;i<l;i++){
        data =  await child[i].checkChange();
        console.log("data=" + data);
        ischeck = (ischeck && data);
      }
      console.log(ischeck);
      return ischeck;
    }
  },
  components: {}
}
</script>

<style lang="scss">
 @import "./form.scss";
</style>
