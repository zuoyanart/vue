

<template lang="html">
<div class="checkbox" :class="{'disabled': disabled}">
    <input type="checkbox" :id="trueid" :name="name" :value="value"  :disabled="disabled" @change="chanegHandel" v-if="checked"  checked="checked"/>
    <input type="checkbox" :id="trueid" :name="name" :value="value"  :disabled="disabled" @change="chanegHandel" v-else/>
    <label :for="trueid"></label>
    <label :for="trueid">
        <slot></slot>
    </label>
</div>
</template>

<script>
export default {
    data() {
        return {
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
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        change: {
            type: Function,
            default: function(value, ischecked) {}
        }
    },
    computed: {
      trueid: function() {
        return this.id =='id' ? this.getUuid() : this.id;
      },
    },
    mounted() {
        if (this.checked) {
            this.check = true;
        }
    },
    methods: {
        chanegHandel: function(event) {
            if (!this.disabled) {
                this.change(this.value, event.target.checked);
                this.$parent.$emit('checkChange', this.value, event.target.checked);
            }
        },
        getUuid: function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
    },
    components: {},
    watch: {
        check: function() {
            this.$parent.$emit('checkChange', this.value, true);
        },
        checked: function() {
            if (!this.disabled) {
                this.change(this.value, this.checked);
                this.$parent.$emit('checkChange', this.value, this.checked);
            }
        }
    }
}
</script>

<style lang="scss">@import "./css/checkbox.scss";</style>
