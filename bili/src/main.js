import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import {createPinia} from "pinia";
import './assets/styles/main.scss';
// import store  from './stores/index.js'
const app = createApp(App)

//use the router
app.use(router)
app.use(Antd)
//use the videoPlay
// 使用 Pinia
app.use(createPinia());
//使用vuex
// app.use(store)
app.mount('#app')
