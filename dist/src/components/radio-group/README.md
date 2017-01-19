# vue-radio-group

install

```shell
npm install pzvue-radio-group
```

# Quick Start

```javascript
import pzradiogroup from 'pzvue-radio-group'
```

in component

```javascript
components: {
    pzradio,
    pzradiogroup
}
```

in template

```javascript
<pzradiogroup v-model="check">
  <pzradio name="c1" value="1" :checked="true">选项1</pzradio>
  <pzradio name="c1" value="2">选项2</pzradio>
  <pzradio name="c1" value="3">选项3</pzradio>
  <pzradio name="c1" value="4" :disabled="true" :checked="true">不可用</pzradio>
</pzradiogroup>
```

# Demo

<http://vue.zuoyan.space/#/component/radio>
