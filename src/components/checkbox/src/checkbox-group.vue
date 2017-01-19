

<template lang="html">

<div class="checkbox-group" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <slot></slot>
</div>

</template>

<script>

export default {
    name: "PZCheckboxGroup",
    data() {
        return {
            value: []
        }
    },
    watch: {},
    computed: {},
    mounted() {
        this.$on('checkChange', this.checkChange);
    },
    methods: {
        'checkChange': function(msg, ischecked) {
            var index = this.value.indexOf(msg);
            // console.log("msg=" + msg);
            if (ischecked) { //true
                if (index === -1) {
                    this.value.push(msg);
                }
            } else {
                this.value.splice(index, 1);
            }
            this.$emit('input', this.value);
            this.$parent.$emit('pz.form.change', this.value, false);
        },
        'mouseenter': function() {
            this.$parent.$emit('pz.form.focus');
        },
        'mouseleave': function() {
            this.$parent.$emit('pz.form.change', this.value);
        }
    },
    components: {}
}

</script>
