# vue-inputnumber

install

```shell
npm install pzvue-inputnumber
```

# Demo

<http://vue.zuoyan.space/#/component/inputnumber>

# Quick Start

```javascript
import pzinputnumber from 'pzvue-inputnumber'
```

in component

```javascript
components: {
    pzinputnumber
}
```

in template

```html
<h2 class="title">普通</h2>
<h2 class="title">普通</h2>
<pzinputnumber :max="10"></pzinputnumber> max:10<br><br/>
<pzinputnumber :max="10" :min="-10" :step="0.2"></pzinputnumber> max:10, min:-10,step:0.2
<h2 class="title">尺寸</h2>
<pzinputnumber :max="10" size="larger"></pzinputnumber> max:10<br><br/>
<pzinputnumber :max="10" :min="-10" :step="0.2" size="larger"></pzinputnumber> max:10, min:-10,step:0.2
<h2 class="title">禁用</h2>
<pzinputnumber :max="10" :disabled="true"></pzinputnumber> max:10<br><br/>
<pzinputnumber :max="10" :min="-10" :step="0.2" :disabled="true"></pzinputnumber> max:10, min:-10,step:0.2
```

# Attribute

参数       | 说明  | 类型      | 可选值         | 默认值
-------- | --- | ------- | ----------- | -----
size     |     | string  | larger      |
disabled | 禁用  | boolean | true, false | false
value    | 当前值 | number  |             | 1
min    | 最小值 | number  |             | 1
max    | 当大值 | number  |             | 1
step    | 步长 | number  |             | 1

# Event

事件名    | 说明              | 原型
------ | --------------- | ---------------------
onchange | 值变化时触发，返回当前的值 | function(value){}
