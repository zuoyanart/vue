<style lang="scss">

@import "./assets/scss/pizza.scss";
@import "./assets/scss/font-awesome.scss";
@import "./assets/site.scss";
@import "./assets/markdown.css";

#app {
}

</style>

<template>

<div id="app">
  <div class="head">
    <div class="head-c">
      <h1><router-link to="/">Pizza Vue<em>1.0.0</em></router-link></h1>
      <span>
        <router-link to="/guid">指南</router-link>
        <router-link to="/component">组件</router-link>
        <router-link to="/resource">资源</router-link>
      </span>
    </div>
  </div>
  <router-view></router-view>
  <div class="footer">

  </div>
</div>

</template>

<script>

import validate from './tools/validate.js';
import pzbutton from './components/button/index';
import pzcheckbox from './components/checkbox/index';
import pzinput from './components/input/index';
import pzinputnumber from './components/input-number/index';
import pzradio from './components/radio/index';
import pzform from './components/form/index';
import pzformitem from './components/form-item/index';
import pzcheckboxgroup from './components/checkbox-group/index';
import pzradiogroup from './components/radio-group/index';

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
