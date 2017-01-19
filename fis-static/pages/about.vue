<template lang="html">
  <div style="width:800px;margin:100px auto;">
      <timeline>
        <timeline-item color="red">
          <h2 class="tl-time">Top Now</h2>
          <div class="tl-content">
            花名：左盐<br/>
            E-mail：<a href="mailto:huabinglan@163.com">huabinglan@163.com</a><br/>
            QQ：490526801<br/>
            网站：<a href="http://www.zuoyan.space" target="_blank">zuoyan.space</a><br/>
            前端主技术流：jQuery，vue，nodejs等<br/>
            后端主技术流： golang，C#，mysql，mongodb，redis等
          </div>
        </timeline-item>
        <timeline-item color="green">
          <h2 class="tl-time">2016/12/8</h2>
          <div class="tl-content">
            自主创业
          </div>
        </timeline-item>
        <timeline-item color="green"></timeline-item>
        <timeline-item color="green"></timeline-item>
        <timeline-item color="green"></timeline-item>
        <timeline-item color="green"></timeline-item>
        <timeline-item color="green"></timeline-item>
        <timeline-item color="green"></timeline-item>
        <timeline-item color="green">
          <h2 class="tl-time">2008/2</h2>
          <div class="tl-content">
            打工一族
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
