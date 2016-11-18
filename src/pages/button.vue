<template lang="html">
  <div>
    <h2>普通样式</h2>
    <pzbutton>默认</pzbutton>
    <pzbutton btn="success">成功</pzbutton>
    <pzbutton btn="info">一般信息</pzbutton>
    <pzbutton btn="warning">警告</pzbutton>
    <pzbutton btn="danger">危险</pzbutton>
    <pzbutton btn="danger" :disabled="true">禁用</pzbutton>
    <h2>图标样式</h2>
    <pzbutton icon="user-md">默认</pzbutton>
    <pzbutton icon="user-md" btn="success">成功</pzbutton>
    <pzbutton icon="user-md" btn="info">一般信息</pzbutton>
    <pzbutton btn="danger" :loading="true">危险</pzbutton>
    <h2>块级样式</h2>
    <pzbutton icon="user-md" size="block">默认</pzbutton>
    <pzbutton icon="user-md" btn="success" size="block">成功</pzbutton>
    <pzbutton icon="user-md" btn="info" size="block">一般信息</pzbutton>
    <pzbutton btn="danger" :loading="true" size="block">危险</pzbutton>
  </div>
</template>

<script>
import validate from '../tools/validate.js';
import pzbutton from 'pzvue-button';
import pzcheckbox from '../components/checkbox/index';
import pzinput from '../components/input/index';
import pzinputnumber from '../components/input-number/index';
import pzradio from '../components/radio/index';
import pzform from '../components/form/index';
import pzformitem from '../components/form-item/index';
import pzcheckboxgroup from '../components/checkbox-group/index';
import pzradiogroup from '../components/radio-group/index';

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

<style lang="css">
</style>
