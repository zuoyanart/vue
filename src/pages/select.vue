<template lang="html">
  <div>
    <h2>普通样式</h2>
    <pz-select :options="options" v-model="form.name" placeholder="不限">默认</pz-select>
    <h2>图标样式</h2>
    
    <h2>块级样式</h2>

  </div>
</template>

<script>
import pzselect from '../components/select/index.js';

export default {
  data(){
    return {
      form:{
        name:''
      },
      options:[{
         text:"不限",
         value:-1
      },{
          text: "高中",
          value:0
        },
        {
          text: "中专",
          value:1
        },
        {
          text: "大专",
          value:2
        },
        {
          text: "学士",
          value:3
        },
        {
          text: "硕士",
          value:4
        }]
    }
  },
    components: {
        "pz-select":pzselect
    }
}
</script>

<style lang="css">
</style>
