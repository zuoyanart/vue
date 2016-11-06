<template lang="html">
  <div>
    <h2>复选</h2>
    <pzcheckbox name="c1" value="1" checked="true">好吧</pzcheckbox>
    <pzcheckbox name="c1" value="2">sdf</pzcheckbox>
    <pzcheckbox name="c1" value="3">sdf</pzcheckbox>
    <pzcheckbox name="c1" value="4" :disabled="true">不可用</pzcheckbox>
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
