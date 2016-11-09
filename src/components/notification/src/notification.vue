

<template lang="html">
  <div class="notify" :id="id" :class="{'notify-msg-p':isMsg}">
    <pzalert :options="this.$data" v-if="this.$data.type==0"></pzalert>
    <pzalert :options="this.$data" v-if="this.$data.type==1"></pzalert>
    <pzalert :options="this.$data" v-if="this.$data.type==2"></pzalert>
    <pzloading :options="this.$data" v-if="this.$data.type==3"></pzloading>
    <pzalert :options="this.$data" v-if="this.$data.type==4"></pzalert>
    <pzmsg :options="this.$data" v-if="this.$data.type==5"></pzmsg>
</div>
</template>

<script>

import pzbutton from '../../button/index';
import pzalert from './alert.vue';
import pzloading from './loading.vue';
import pzmsg from './msg.vue';

export default {
    data() {
            return {
                id: '',
                type: 0, //0（alert默认）1（页面层）2（iframe层）3（loading）4（tips层）,5(msg)
                title: '信息',
                content: '',
                area: 'auto',
                offset: 'auto',
                icon: -1,
                btn: '确定',
                time: 0,
                shade: true,
                yes: '',
                cancel: '',
                ismsg: false,

            }
        },
        computed: {
          "isMsg": function() {
            return this.type == 5 ? true :false;
          }
        },
        mounted() {},
        methods: {

        },
        watch: {

        },
        components: {
            pzbutton,
            pzalert,
            pzloading,
            pzmsg,
        }
}

</script>
