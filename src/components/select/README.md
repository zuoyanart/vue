## vue-select
install
```shell
npm install pzvue-select
```

## Quick Start

```js
import pzselect from 'pzvue-select'

```
in component
```js
components: {
    pzselect
}
```
in template
```js
<h2>普通样式</h2>
<pz-select :options="options" v-model="form.name" placeholder="不限">默认</pz-select>

<h2>自定义样式</h2>
<pz-select :options="options1" v-model="form.select1">默认</pz-select>

<h2>带change事件</h2>
<pz-select :options="options1" :change="change" :default="3">默认</pz-select>

<h2>带change事件并动态改变选中的值</h2>
<pz-select :options="options1" :change="change1" :default="defvalue">默认</pz-select>
<pz-button @click.native="changeValue">改变value(每秒点一次)</pz-button>

```

in js
```js
import pzselect from 'pzvue-select';
import pzbutton from 'pzvue-button';

export default {
    data() {
        return {
          defvalue: 3,
            form: {
                name: '',
                select1: ''
            },
            options: [{
                text: "不限",
                value: -1
            }, {
                text: "高中",
                value: 0
            }, {
                text: "中专",
                value: 1
            }, {
                text: "大专",
                value: 2
            }, {
                text: "学士",
                value: 3,
                default: true
            }, {
                text: "硕士",
                value: 4
            }],
            options1: [{
                text: '<i class="icon-star"></i>',
                value: 0
            }, {
                text: '<i class="icon-star"></i><i class="icon-star"></i>',
                value: 1
            }, {
                text: '<i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i>',
                value: 2
            }, {
                text: '<i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i>',
                value: 3
            }, {
                text: '<i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i>',
                value: 4,
                default: true
            }]
        }
    },
    components: {
        "pz-select": pzselect,
        "pz-button": pzbutton,
    },
    methods: {
      change: function(val) {
        document.getElementById("change").innerHTML = '您选中的值为：' + val;
        console.log("已执行");
      },
      change1: function(val) {
        document.getElementById("change1").innerHTML = '您选中的值为：' + val;
        console.log("已执行");
      },
      changeValue: function() {
        this.defvalue = (Date.parse(new Date()) / 1000) % 4;
      }
    }
}
```

## Demo
http://vue.zuoyan.space/#/component/select
