# vue-switch

install

```shell
npm install pzvue-switch
```

# Demo

<http://vue.zuoyan.space/#/component/switch>

# Quick Start

```javascript
import pzswitch from 'pzvue-switch'
```

in component

```javascript
components: {
    pzswitch
}
```

in template

```html
<h2 class="title">普通</h2>
<pzswitch @change="change">
  <i slot="open">开</i>
  <i slot="close">关</i>
</pzswitch>
<h2 class="title">大小</h2>
<pzswitch @change="change" size="larger" :checked="true">
  <i slot="open">开启</i>
  <i slot="close">关闭</i>
</pzswitch>
<h2 class="title">不可用</h2>
<pzswitch @change="change" size="larger" :disabled="true" :checked="true">
  <i slot="open">开启</i>
  <i slot="close">关闭</i>
</pzswitch>
```

# Attribute

参数       | 说明       | 类型       | 可选值         | 默认值
-------- | -------- | -------- | ----------- | ----------------------------
size     |          | string   | larger      |
disabled | 禁用       | boolean  | true, false | false
checked  | 是否选中     | bool     | true, false | false
change   | change事件 | function |             | function(value, ischecked){}

# Event

事件名    | 说明              | 原型
------ | --------------- | ---------------------
change | 开关变化时触发，返回当前的状态 | function(ischecked){}

# Slot

名称    | 说明
----- | -----------
open  | 自定义显示打开时的内容
close | 自定义显示关闭时的内容
