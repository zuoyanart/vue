<template lang="html">
  <div style="width:800px;margin:100px auto;">
      <timeline>
        <timeline-item color="green">
          <h2 class="tl-time">2017/1/19</h2>
          <div class="tl-content">
            增加switch组件<br/>
            增加input-number组件<br/>
            增加timeline组件<br/>
            修复layer的loading自动关闭时间为默认100s<br/>
            去除layer组件的打包vue依赖<br/>
          </div>
        </timeline-item>
        <timeline-item color="green">
          <h2 class="tl-time">2016/12/8</h2>
          <div class="tl-content">
            增加vue-layer组件,包含aliert,msg,loading,confirm,tip等
          </div>
        </timeline-item>
        <timeline-item color="green">
          <h2 class="tl-time">2016/11/4</h2>
          <div class="tl-content">
            增加checkbox组件<br/>
            增加select组件<br/>
            添加表单验证对checkbox和select的支持<br/>
          </div>
        </timeline-item>

        <timeline-item color="green">
          <h2 class="tl-time">2016/10/17</h2>
          <div class="tl-content">
            增加表单组件<br/>
            表单组件自带表单验证<br/>
          </div>
        </timeline-item>

        <timeline-item color="green">
          <h2 class="tl-time">2016/10/14</h2>
          <div class="tl-content">
            增加button组件<br/>
            增加input组件<br/>
          </div>
        </timeline-item>
        <timeline-item color="green">
          <h2 class="tl-time">2016/10/13</h2>
          <div class="tl-content">
            项目立项
          </div>
        </timeline-item>
      </timeline>
  </div>
</template>

<script>
import timeline from 'pzvue-timeline';

export default {
  data(){
    return {
    }
  },
    components: {
        "timeline": timeline,
        "timeline-item": timeline.item
    },
    methods:{
    }
}
</script>

<style lang="css">
</style>
