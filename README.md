# ts-hiprint

`@sv-print/hiprint` 核心包的Type类型封装，基于 `@sv-print/hiprint` 的自定义报表Vue组件


## 用例

`npm i ts-hiprint` 安装依赖，然后 vue 安装插件的形式使用。

```ts

import "ts-hiprint/dist/style.css";//全局引入样式
import TsHiprint from "ts-hiprint";

createApp(App)
    .use(TsHiprint)
    .mount('#app')

```

样式文件最好不要使用全局引入的形式使用（这里写是为了方便）；最好在使用的 Vue 组件中引入。

> 需要注意， `ts-hiprint` 包体中存在 `print-lock.css` 文件, 需要在 `index.html` 引入打印样式。


```html

    <!-- 打印所需要的 hiprint 的 css -->
    <link rel="stylesheet" type="text/css" media="print" href="./public/css/print-lock.css">
```