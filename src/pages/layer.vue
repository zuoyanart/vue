<template lang="html">
  <div>
    <h2>表单</h2>
    <pzbutton  @click.native="submitHandle">提交</pzbutton>
    <br><br>
  </div>
</template>

<script>
import pzbutton from '../components/button/index';

export default {
  data(){
    return { }
  },
    components: {
        pzbutton
    },
    methods:{
      submitHandle: async function() {
          let id = this.$layer.alert("this is demo", {
            title: "警告"
          },function() {
            this.$layer.close(id);
          });
      }
    }
}
</script>

<style lang="css">
</style>
