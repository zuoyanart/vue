<style lang="scss">

@import "../../assets/scss/pizza.scss";
@import "../../assets/scss/font-awesome.scss";
#app {
    margin: 100px;
    h2 {
        font-size: 16px;
        margin: 10px;
    }
}

</style>

<template>

<div id="app">
    <h2>普通样式</h2>
    <pzbutton>默认</pzbutton>
    <pzbutton btn="success">成功</pzbutton>
    <pzbutton btn="info">一般信息</pzbutton>
    <pzbutton btn="warning">警告</pzbutton>
    <pzbutton btn="danger">危险</pzbutton>
    <pzbutton btn="danger" :disabled="true">禁用</pzbutton>
    <br>
    <br>
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
    <h2>复选</h2>
    <pzcheckbox name="c1" value="1" checked="true">好吧</pzcheckbox>
    <pzcheckbox name="c1" value="2">sdf</pzcheckbox>
    <pzcheckbox name="c1" value="3">sdf</pzcheckbox>
    <pzcheckbox name="c1" value="4" :disabled="true">不可用</pzcheckbox>
    <h2>输入框</h2>
    <pzinput placeholder="请输入内容" id="input1"></pzinput>
    <br><br>
    <pzinput placeholder="请输入内容" id="input2" value="value"></pzinput>
    <br><br>
    <pzinput placeholder="数字" type="number" id="input3" value="0.0"></pzinput>
    <br><br>
    <pzinput placeholder="@163.com" type="email" id="input4" value="">
      <template slot="prepend">email</template>
    </pzinput>
    <br><br>
    <pzinput placeholder="请输入网址" type="email" id="input5" value="">
      <template slot="prepend">http:\\</template>
      <template slot="append">.com</template>
    </pzinput>
    <br><br>
    <pzinput placeholder="请输入网址" type="email" id="input5" value="" icon="user-md"></pzinput>
    <br><br>
    <pzinput placeholder="请输入网址" type="email" id="input5" value="不可用" icon="user-md" :disabled="true"></pzinput>
    <h2>数字按钮</h2>
    <!-- <pzinputnumber></pzinputnumber> -->
    <br><br>
    <!-- <pzinputnumber :disabled="true"></pzinputnumber> -->
    <h2>单选</h2>
    <pzradio name="t1" value="0" checked="true">选项1</pzradio>
    <pzradio name="t1" value="1">选项2</pzradio>
    <pzradio name="t1" value="2">选项3</pzradio>
    <pzradio name="t1" value="3" :disabled="true">禁用</pzradio>

    <br><br><hr><br><br>
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
      <pz-formitem label="活动性质">
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
      {{form}}
    </pz-form>
</div>

</template>

<script>

import validate from './tools/validate.js';
import pzbutton from '../../components/button/index';
import pzcheckbox from '../../components/checkbox/index';
import pzinput from '../../components/input/index';
import pzinputnumber from '../../components/input-number/index';
import pzradio from '../../components/radio/index';
import pzform from '../../components/form/index';
import pzformitem from '../../components/form-item/index';
import pzcheckboxgroup from '../../components/checkbox-group/index';
import pzradiogroup from '../../components/radio-group/index';

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
        name:{min:10,max:20,message:"请填写10-20位的名称"},
        area:{ min:1,max:30,message:"请填写1-20位的名称"},
        time:{required: false, reg:'time',message:"请填写10-20位的名称,非必填"},
        xz:{type:'array', min:10,max:20,message:"请填写10-20位的名称"},
        zy:{ min:10,max:20,message:"请填写10-20位的名称"},
        ps:{ min:10,max:20,message:"请填写10-20位的名称"},
        xs:{ min:10,max:20,message:"请填写10-20位的名称"},
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
        console.log("ischeck=" + ischeck);
        if(ischeck) {//通过验证
          //TODO: submit or ajax
        } else{
          alert("数据验证失败");
        }
      }
    }
}

</script>
