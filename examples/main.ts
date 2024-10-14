import { createApp } from 'vue'
import App from './App.vue'
// 引入组件样式
import '@sv-print/hiprint/dist/style.css';

import TSHIPRINT from 'ts-hiprint';

createApp(App)
    .use(TSHIPRINT)
    .mount('#app')
