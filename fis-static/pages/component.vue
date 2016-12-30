<template lang="html">
  <div class="main">
    <div class="left">
      <router-link to="button">button</router-link>
      <router-link to="input">input</router-link>
      <router-link to="checkbox">checkbox</router-link>
      <router-link to="radio">radio</router-link>
      <router-link to="select">select</router-link>
      <router-link to="form">表单</router-link>
      <router-link to="layer">layer</router-link>
    </div>
    <div class="right">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import pzbutton from 'pzvue-button';
import pzcheckbox from 'pzvue-checkbox';
import pzinput from 'pzvue-input';
import pzform from 'pzvue-form';
import pzformitem from 'pzvue-formitem';
import pzselect from 'pzvue-select';

export default {
  data(){
    return {}

  },
    components: {

    },
    methods:{

    }
}
</script>

<style lang="scss">
  .main{
    width:1200px;
    min-height: 800px;
    clear: both;
    margin:20px auto;
    .left{
      width:200px;
      float:left;
      margin-top:10px;
      a{
        display: block;
        margin:10px;
        font-size: 16px;
      }
    }
    .right{
      width:502px;
      float:left;
      h2{
        margin:20px 0 22px 0;
        color: #00a0e9;
        font-weight: normal;
        font-size: 18px;
      }
    }
  }
</style>
