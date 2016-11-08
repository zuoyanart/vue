<template lang="html">
  <div>
    <h2>表单</h2>
    <pz-form ref="form">
      <pz-formitem label="活动名称" :validate="rules.name">
        <pzinput v-model="form.name" placeholder="请输入活动名称"></pzinput>
      </pz-formitem>
      <pz-formitem label="活动区域" :validate="rules.area">
        <pzinput v-model="form.area" placeholder="请输入活动区域"></pzinput>
      </pz-formitem>
      <pz-formitem label="活动时间" :validate="rules.time">
        <pzinput v-model="form.time"></pzinput>
      </pz-formitem>
      <pz-formitem label="及时配送" :validate="rules.ps">
        <pzinput v-model="form.ps"></pzinput>
      </pz-formitem>
      <pz-formitem label="活动性质" :validate="rules.xz">
        <pz-checkboxgroup v-model="form.xz">
          <pzcheckbox name="form1" value="1" checked="true">美食</pzcheckbox>
          <pzcheckbox name="form1" value="2" checked="true">地推活动</pzcheckbox>
          <pzcheckbox name="form1" value="3" checked="true">线下活动</pzcheckbox>
          <pzcheckbox name="form1" value="4" checked="true">品牌活动</pzcheckbox>
        </pz-checkboxgroup>
      </pz-formitem>
      <pz-formitem label="特殊资源">
        <pz-radiogroup v-model="form.zy">
          <pzradio name="formradio" value="1" checked="true" v-model="form.time">线上品牌商赞助</pzradio>
          <pzradio name="formradio" value="2">线上品牌商赞助</pzradio>
        </pz-radiogroup>
      </pz-formitem>
      <pz-formitem label="活动形式" :validate="rules.xs">
        <pzinput v-model="form.xs"></pzinput>
      </pz-formitem>
      <pz-formitem><pzbutton  @click.native="submitHandle">提交</pzbutton></pz-formitem>
    </pz-form>
    <br><br>
    result11d:  {{form}}
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
          let id = this.$layer.alert("this is demo", {
            title: "警告"
          },function() {
            this.$layer.close(id);
          });
        }
      }
    }
}
</script>

<style lang="css">
</style>
