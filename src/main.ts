import { createApp } from 'vue'
import App from './App.vue'
import "./style.css";
// 引入组件样式
import '@sv-print/hiprint/dist/style.css';

import router from './route/router';

createApp(App)
    .use(router)
    .mount('#app')
