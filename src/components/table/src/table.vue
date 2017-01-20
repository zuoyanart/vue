<style lang="scss">
 @import "./table.scss";
</style>

<template lang="html">
  <table cellspacing="0" cellpadding="0" class="pz-table">
    <thead>
      <tr>
      <template v-for="c in column">
        <th>
          {{c.title}}
        </th>
      </template>
      <th v-if="action.length > 0">&nbsp;</th>
    </tr>
    </thead>
    <tbody>
        <tr v-for="(row,index) in rows">
           <td v-for="c in column">{{row[c.key]}}</td>
           <td class="pz-table-action">
             <template v-for="a in action">
                <router-link :to="a.link" v-if="a.link && a.link != ''">{{a.text}}</router-link>
                <pzbutton :btn="a.btn" :size="a.size" :icon="a.icon" @click="a.action(row[pk], index)" v-else>{{a.text}}</pzbutton>
             </template>
           </td>
        </tr>
    </tbody>

  </table>
</template>

<script>
import pzbutton from 'pzvue-button';

export default {
  data () {
    return {

    }
  },
  props: {
    pk: {
      type: String,
      default:"id"
    },
    column: {//列数据
      type: Array,
      default: function() {
        return [];
      }
    },
    rows: {
      type:Array,
      default: function(){
        return [];
      }
    },
    action:{//动作
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  },
  components: {
    pzbutton
  }
}
</script>
