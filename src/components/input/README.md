# vue-input

install

```shell
npm install pzvue-input
```

# Quick Start

```javascript
import pzinput from 'pzvue-input'
```

in component

```javascript
components: {
    pzinput
}
```

in template

```javascript
<pzinput placeholder="@163.com" type="email" id="input4" value="">
     <template slot="prepend">email</template>
</pzinput>

<pzinput placeholder="请输入网址" type="email" id="input5" value="" size="larger">
     <template slot="prepend">http://</template>
     <template slot="append">.com</template>
</pzinput>

 <pzinput placeholder="请输入网址" type="email" id="input5" value="" icon="user-md"></pzinput>

  <pzinput placeholder="请输入网址" type="email" id="input5" value="不可用" icon="user-md" :disabled="true"></pzinput>
```

# Attribute

参数          | 说明           | 类型      | 可选值               | 默认值
----------- | ------------ | ------- | ----------------- | -----
id          | input的原生id   | string  |                   |
placeholder | 占位符          | string  |                   |
value       | input的value值 | string  |                   | 0
type        | input的类型     | string  | text,email,number | text
disabled    | 禁用           | boolean | true, false       | false
size        | input大小      | string  | larget,           | ''
icon        | 图标           | string  |                   | ''

# Demo

<http://vue.zuoyan.space/#/component/input>
