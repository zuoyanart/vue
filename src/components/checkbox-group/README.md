## vue-checkbox
install
```shell
npm install pzvue-checkbox-group
```
## Demo
http://vue.zuoyan.space/#/component/checkbox

## Quick Start

```js
import checkboxgroup from 'pzvue-checkbox-group'

```
in component
```js
components: {
    checkboxgroup
}
```
in template
checkbox-group
```js
  <checkboxgroup v-model="check">
    <pzcheckbox name="c1" value="1" :checked="true">选项1</pzcheckbox>
    <pzcheckbox name="c1" value="2">选项2</pzcheckbox>
    <pzcheckbox name="c1" value="3">选项3</pzcheckbox>
    <pzcheckbox name="c1" value="4" :disabled="true" :checked="true">不可用</pzcheckbox>
  </checkboxgroup>
```
