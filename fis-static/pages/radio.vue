<template lang="html">
  <div>
    <h2>单选</h2>
    <pzradio name="t1" value="0" checked="true">选项1</pzradio>
    <pzradio name="t1" value="1">选项2</pzradio>
    <pzradio name="t1" value="2">选项3</pzradio>
    <pzradio name="t1" value="3" :disabled="true">禁用</pzradio>
    <div class="markdown">
      <link rel="import" href="/md/radio/1.md?__inline">
    </div>
  </div>
</template>

<script>
import pzradio from 'pzvue-radio';
import pzradiogroup from 'pzvue-radio-group';

export default {
  data(){
    return {

    }
  },
    components: {
        pzradio,
        pzradiogroup,
    },
    methods:{

    }
}
</script>

<style lang="css">
</style>
