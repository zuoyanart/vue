

<template lang="html">

<div class="checkbox" :class="{disabled: disabled}">
    <input type="checkbox" :id="name + value" :name="name" :value="value"  :disabled="disabled" @change="chanegHandel" v-if="checked === 'true'"  checked="checked"/>
    <input type="checkbox" :id="name + value" :name="name" :value="value"  :disabled="disabled" @change="chanegHandel" v-if="checked === 'false'"/>
    <label :for="name + value"></label>
    <label :for="name+value">
        <slot></slot>
    </label>
</div>

</template>

<script>

export default {
    data() {
            return {
                _value: "",
                check: false
            }
        },
        props: {
            id: {
                type: String,
                default: 'id'
            },
            name: {
                type: String,
                default: "name"
            },
            value: {
                default: 0
            },
            checked: {
                type: String,
                default: "false"
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {},
        mounted() {
          if(this.checked == 'true'){
            this.check = true;
          }
        },
        methods: {
            chanegHandel: function(event) {
              console.log(this.$parent._events);
              console.log(this.$parent._events['b']);
                this._value = event.target.value;
                this.$parent.$emit('checkChange', this._value, event.target.checked);
            }
        },
        components: {},
        watch: {
          check:function(){
              this.$parent.$emit('checkChange', this.value, true);
            }
        }
}

</script>
