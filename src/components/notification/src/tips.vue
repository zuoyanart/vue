

<template lang="html">

<label class="notify-tips" :class="'notify-tips-'+ this.options.tips">
    {{options.content}}
    <em></em>
</label>

</template>

<script>

export default {
    data() {
            return {
                timeout: ''
            }
        },
        props: {
            options: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        computed: {
          'offset': async function() {
            return await this.getOffset();
          }
        },
        async mounted() {
            let self = this;
            if (this.options.time == 0) {
                this.options.time = 2;
            }

            setTimeout(function() {
                self.btnyes();
            }, self.options.time * 80000);
              await this.getOffset();

        },
        methods: {
            'btnyes': function(event) {
                let o = document.getElementById(this.options.id);
                if (o) {
                    if (typeof(this.options.yes) == "function") {
                        this.options.yes();
                    }
                    delete this.$layer.instances[this.options.id];
                    o.remove();
                }
            },
            sleep: function(ms) {
                return new Promise((resolve, reject) => {
                    setTimeout(resolve, ms);
                });
            },
            "getOffset": async function() {
                await this.sleep(1);
                let o = document.querySelector(this.options.title); //用title传递that元素
                let bound = o.getBoundingClientRect();
                let oTips = document.querySelector("#" + this.options.id + ">label");
                let boundTips = oTips.getBoundingClientRect();

                let left = o.offsetLeft;
                let top = o.offsetTop;
                let windowWidth = document.body.clientWidth;
                let windowHeight = document.body.clientHeight;
                let tipsHeight = 32;
                let tipsWidth = 0;
                let jiantou = 8 + 1;

                let offset = {};
                switch (this.options.tips) {
                    case 0:
                        offset = {
                            left: left + "px",
                            top: top - tipsHeight - jiantou + "px"
                        }
                        break;
                    case 1:
                        offset = {
                            left: (left + bound.width + jiantou) + "px",
                            top: top + "px"
                        }
                        break;
                    case 2:
                        offset = {
                            left: left + "px",
                            top: (top + bound.height + jiantou) + "px"
                        }
                        break;
                    case 3:
                        offset = {
                            left: (left - boundTips.width - jiantou) + "px",
                            top: top + "px"
                        }
                        break;
                }
                oTips.style.left = offset.left;
                oTips.style.top = offset.top;
                // return offset;
            },
        },
        watch: {

        },
        components: {

        }
}

</script>
