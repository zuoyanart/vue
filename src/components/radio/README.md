# vue-radio

install

```shell
npm install pzvue-radio
```

# Quick Start

```javascript
import pzradio from 'pzvue-radio'
```

in component

```javascript
components: {
    pzradio
}
```

in template

```javascript
<pzradio name="t1" value="0" checked="true">选项1</pzradio>
<pzradio name="t1" value="1">选项2</pzradio>
<pzradio name="t1" value="2">选项3</pzradio>
<pzradio name="t1" value="3" :disabled="true">禁用</pzradio>
```

# Attribute

参数       | 说明           | 类型      | 可选值         | 默认值
-------- | ------------ | ------- | ----------- | -----
id       | radio的原生id   | string  |             |
name     | radio原生name  | string  |             |
value    | radio的value值 | string  |             | 0
disabled | 禁用           | boolean | true, false | false
checked  | 是否选中      | string  | true,false     | 'false'

# Demo

<http://vue.zuoyan.space/#/component/radio>
