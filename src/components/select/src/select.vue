<template lang="html">
  <div class="btn-select" @blur="isshow=false" tabindex="1">
    <i class="select-down icon-caret-down"></i>
    <input type="text" class="input" :value="inputValue" :placeholder="placeholder" readonly="readonly">
    <label class="select-button" @click="selectClick" v-html="text == placeholder ? '': text"></label>
    <div class="select-list" v-show="isshow">
      <ul >
        <li @click.capture="optionsClick" v-for="item in options" :value="item.value" v-html="item.text"></li>
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
          default: ''
      },
      disabled:{
        type: Boolean,
        default: false
      },
      default: {
        type: null,
        default: false
      },
      options:{
        type: Array,
        default: function() {
          return [{
            text: "不限",
            value: 0,
            default:true
          }]
        }
      },
      change: {
        type: Function,
        default: function() {}
      }
  },
  computed: {},
  mounted () {
    this.setValue();
  },
  methods: {
    'selectClick': function() {
      this.isshow =  !this.isshow;
    },
    'optionsClick': function(event) {
      let t = event.currentTarget;
      let val = t.getAttribute("value");

      if(val != this.value) {
        this.change(val);
      }

      this.text = t.innerHTML;
      this.value = val;

      if(this.text !== this.placeholder) {
        this.inputValue = ' ';
      } else {
        this.inputValue = '';
      }
      this.isshow = false;
      this.$emit('input', this.value);
    },
    setValue: function() {
      let options = this.options;
      let ischeck = false;
      for(let i=0,l=options.length;i<l;i++) {
        if(options[i].value === this.default) {
          this.value = options[i].value;
          this.text = options[i].text;
          if(this.text != this.placeholder) {
            this.inputValue = ' ';
          }
          ischeck = true;
          break;
        }
      }
      if(!ischeck) {
        this.value = options[0].value;
        this.text = options[0].text;
        console.log(this.placeholder);
        this.inputValue = (this.placeholder == '' ? ' ' : '') ;
      }
      this.$emit('input', this.value);
      this.change(this.value);
    }
  },
  watch:{
    'default': function() {
      this.setValue();
    }
  },
  components: {}
}
</script>
