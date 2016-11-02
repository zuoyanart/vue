<template lang="html">
  <div class="btn-select">
    <i class="select-down icon-caret-down"></i>
    <input type="text" class="input" :value="inputValue" :placeholder="placeholder" readonly="readonly">
    <label class="select-button" @click="selectClick">{{text == placeholder ? '': text }}</label>
    <div class="select-list" v-show="isshow">
      <ul @click="optionsClick">
        <li v-for="item in options" :value="item.value">{{item.text}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value : '',//对外输出的value
      text: '',//对外输出的text
      inputValue:'',
      isshow: false
    }
  },
  props: {
      placeholder: {
          type: String,
          default: '请选择'
      },
      disabled:{
        type: Boolean,
        default: false
      },
      options:{
        type: Array,
        default: function() {
          return [{
            text: "请选择",
            value: 0,
            default:true
          }]
        }
      }
  },
  computed: {},
  mounted () {
    let options = this.options;
    for(let i=0,l=options.length;i<l;i++) {
      if(options[i].default) {
        this.value = options[i].value;
        this.text = options[i].text;
        if(this.text != this.placeholder) {
          this.inputValue = ' ';
        }
      }
    }
  },
  methods: {
    'selectClick': function() {
      this.isshow = !this.isshow;
    },
    'optionsClick': function(event) {
      this.text = event.target.innerText;
      this.value = event.target.getAttribute("value");
      if(this.text !== this.placeholder) {
        this.inputValue = ' ';
      } else {
        this.inputValue = '';
      }
      this.isshow = false;
    }
  },
  components: {}
}
</script>
