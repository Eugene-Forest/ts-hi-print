import { createApp } from 'vue'
import App from './App.vue'

import "ts-hiprint/dist/style.css";
import TsHiprint from "ts-hiprint";

createApp(App)
    .use(TsHiprint)
    .mount('#app')
