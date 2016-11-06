<template lang="html">
  <div class="main">
    <div class="left">
      <router-link to="button">button</router-link>
      <router-link to="input">input</router-link>
      <router-link to="checkbox">checkbox</router-link>
      <router-link to="radio">radio</router-link>
      <router-link to="select1">select</router-link>
      <router-link to="form">表单</router-link>
    </div>
    <div class="right">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import validate from '../tools/validate.js';
import pzbutton from '../components/button/index';
import pzcheckbox from '../components/checkbox/index';
import pzinput from '../components/input/index';
import pzinputnumber from '../components/input-number/index';
import pzradio from '../components/radio/index';
import pzform from '../components/form/index';
import pzformitem from '../components/form-item/index';
import pzcheckboxgroup from '../components/checkbox-group/index';
import pzradiogroup from '../components/radio-group/index';
import pzselect from '../components/select/index';

export default {
  data(){
    return {
      form:{
        name:'',
        area:"",
        time:"",
        xz:[],
        zy:"",
        ps:"",
        xs:""
      },
      rules: {
        name:{min:1,max:20,message:"请填写1-20位的名称"},
        area:{ min:1,max:30,message:"请填写1-20位的名称"},
        time:{required: false, reg:'time',message:"请填写1-20位的名称,非必填"},
        xz:{type:'array', min:3,max:4,message:"请至少选择一项"},
        ps:{ min:1,max:20,message:"请填写1-20位的名称"},
        xs:{ min:1,max:20,message:"请填写1-20位的名称"},
      }
    }
  },
    components: {
        pzbutton,
        pzcheckbox,
        pzinput,
        pzinputnumber,
        pzradio,
        "pz-form":pzform,
        "pz-formitem":pzformitem,
        "pz-checkboxgroup":pzcheckboxgroup,
        "pz-radiogroup":pzradiogroup,
    },
    methods:{
      submitHandle: async function() {
        let ischeck =  await this.$refs.form.validate();
        if(ischeck) {//通过验证
          //TODO: submit or ajax
        } else{
          console.log("数据验证失败");
        }
      }
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
