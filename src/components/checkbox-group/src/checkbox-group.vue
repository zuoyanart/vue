

<template lang="html">

<div class="checkbox-group">
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
            console.log(msg);
            if (ischecked) { //true
                if (index === -1) {
                    this.value.push(msg);
                }
            } else {
                this.value.splice(index, 1);
            }
            console.log(this.value);
             this.$emit('input', this.value);
        }
    },
    components: {}
}

</script>
