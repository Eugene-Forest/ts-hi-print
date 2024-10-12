import { createApp } from 'vue'
import App from '../examples-hiprint/App.vue'
// 引入组件样式
import '@sv-print/hiprint/dist/style.css';

import TSHIPRINT from 'ts-hi-print';

createApp(App)
    .use(TSHIPRINT)
    .mount('#app')
