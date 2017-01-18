<style lang="scss">
@import "../../../assets/scss/pizza.scss";
@import "../../../assets/site.scss";
   #app{
     margin:100px;
   }
</style>

<template>

<div id="app">
  <h2 class="title">普通</h2>
  <pztimeline>
    <pztimelineitem>
      <h2>asd</h2>
      <p>asdasd</p>
    </pztimelineitem>
    <pztimelineitem>
      <h2>asd</h2>
      <p>asdasd</p>
    </pztimelineitem>
    <pztimelineitem>
      <h2>asd</h2>
      <p>asdasd</p>
    </pztimelineitem>
  </pztimeline>
</div>

</template>

<script>
import pztimeline from '../src/timeline.vue';
import pztimelineitem from '../src/timeline-item.vue';

export default {
  data(){
    return {
      check:"",
    }
  },
    components: {
        pztimeline,
        pztimelineitem
    },
    methods:{
      change: function(checked) {
          console.log("是否选中：" + checked);
      }
    }
}

</script>
