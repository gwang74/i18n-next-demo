import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/font/iconfont';
import 'normalize.css';
import i18n from './i18n';

const app = createApp(App)
    .use(i18n)
    .use(ElementPlus)
    .use(store);

app.mount('#app');
