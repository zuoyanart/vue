<template lang="html">
<div class="radio-group">
    <slot></slot>
</div>

</template>

<script>

export default {
    name: "PZCheckboxGroup",
    data() {
        return {
            value: ''
        }
    },
    watch: {
      value(value){

      }
    },
    computed: {},
    mounted() {
        this.$on('checkChange', this.checkChange);
    },
    methods: {
        'checkChange': function(msg, ischecked) {
          this.value = msg;
            this.$emit('input', this.value, false);
        }
    },
    components: {}
}

</script>
