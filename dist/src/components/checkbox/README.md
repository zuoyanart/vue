## vue-checkbox
install
```shell
npm install pzvue-checkbox
```
## Demo
http://vue.zuoyan.space/#/component/checkbox

## Quick Start

```js
import pzcheckbox from 'pzvue-checkbox'

```
in component
```js
components: {
    pzcheckbox
}
```
in template
```js
<pzcheckbox name="c1" value="1" :checked="true">选项1</pzcheckbox>
<pzcheckbox name="c1" value="2">选项2</pzcheckbox>
<pzcheckbox name="c1" value="3">选项3</pzcheckbox>
<pzcheckbox name="c1" value="4" :disabled="true">不可用</pzcheckbox>
```
checkbox-group
```js
  <checkboxgroup v-model="check">
    <pzcheckbox name="c1" value="1" :checked="true">选项1</pzcheckbox>
    <pzcheckbox name="c1" value="2">选项2</pzcheckbox>
    <pzcheckbox name="c1" value="3">选项3</pzcheckbox>
    <pzcheckbox name="c1" value="4" :disabled="true" :checked="true">不可用</pzcheckbox>
  </checkboxgroup>
```


## Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| id     | checkbox的id   | string  |               |  uuid       |
| value     |    | all    |               |       0  |
| name     |    | string    |               |         |
| disabled  | 禁用    | boolean   | true, false   | false   |
| checked  | 是否选中    | bool   | true, false   | false   |
| change  | change事件    | function   |    | function(value, ischecked){}   |
