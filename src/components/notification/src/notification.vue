<template lang="html">
  <div class="notify-mask" :id="id" @click="close">
     <div class="notify-main">
       <h2>{{title}}</h2>
       <div>
         {{content}}
       </div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      type:0, //0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
      title: '信息',
      content:'',
      area: 'auto',
      offset: 'auto',
      icon: -1,
      btn: '确定',
      time:0,
      shade: true
    }
  },
  computed: {},
  mounted () {},
  methods: {
    'close': function(event) {
      let mask = event.target.getAttribute("class");
      if(mask && mask.indexOf("notify-mask") > -1) {
        delete this.$layer.instances[this.id];
        document.getElementById(this.id).remove();
      }
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
