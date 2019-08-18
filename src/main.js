import Vue from 'vue'
import App from './App.vue'

// 这里导入的是 router目录下的index.js ，如果只写目录名，则会在此目录下找 index.js
import router from "@/router";

import store from "@/store";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
