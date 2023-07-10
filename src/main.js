import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment';
import VueMoment from "vue-momentjs";
// import '@/plugins/lodash';
import i18n from '@/plugins/i18n';
import mitt from 'mitt'

/** @request */
import request from '@/core/request';
window.$api = request

const emitter = mitt();
const app = createApp(App)
app.use(router)
app.use(BootstrapVue)
app.use(VueMoment, moment);
app.use(i18n);
app.use(store);

app.config.globalProperties.emitter = emitter


app.mount('#app')