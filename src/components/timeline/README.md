# vue-timeline

install

```shell
npm install pzvue-timeline
```

# Demo

<http://vue.zuoyan.space/#/component/timeline>

# Quick Start

```javascript
import timeline from 'pzvue-timeline'
```

in component

```javascript
components: {
    "timeline": timeline,
    "timeline-item": timeline.item,
}

or
timeline.install(vue);//全局安装
```

in template

```html
<h2 class="title">普通</h2>
<timeline>
    <timeline-item color="green">
        <h2 class="tl-time">2016.12.01</h2>
        <p class="tl-content">
            修复 PREVENT_NEXT_PROCESS 错误日志的问题 <br> 资源请求时支持设置 CORS 头信息<br> 缓存操作时支持设置 timeout<br> 将 babel 编译参数提取到 .babelrc 中</p>
    </timeline-item>
    <timeline-item color="blue">
        <h2 class="tl-time">2.2.14</h2>
        <p class="tl-content">创建项目时，typescript 的依赖版本修改为 2.0.3<br> 修复获取 relation model 的问题<br> 修复 swig 模板下配置问题<br> 请求超时时显示错误页面，错误信息为 REQUEST_TIMEOUT<br> 修复 URL 中含有不合法字符导致 decodeURIComponent 报错的问题<br> 修复 addMany 方法返回值错误的问题<br> 修复文件 Session 有时候获取不到内容的问题<br> Mysql 支持请求前发送
            set names</p>
    </timeline-item>
    <timeline-item color="red">
        <h2 class="tl-time">2.2.13</h2>
        <p class="tl-content">创建项目默认回滚为多模块项目<br> 修复 PostgreSQL 的部分问题<br> 默认将数据库配置 prefix 设置为空<br> 修复关联模型中 BELONG_TO 里 model 被删除的问题<br> 模型 buildSql 方法添加参数可以控制是否加小括号<br> 完善 d.ts<br> 修复 parseType 时有 enum, set 类型的问题<br> CSRF 校验时可以从 header 里取值</p>
    </timeline-item>
</timeline>
<h2 class="title">普通</h2>
<timeline>
    <timeline-item color="green">发布1.0版本</timeline-item>
    <timeline-item color="blue">发布2.0版本</timeline-item>
    <timeline-item color="red">发布3.0版本</timeline-item>
</timeline>
```

# timeline-item arttribute

参数    | 说明          | 类型     | 可选值 | 默认值
----- | ----------- | ------ | --- | ----
color | 原点的border颜色 | string |     | blue
