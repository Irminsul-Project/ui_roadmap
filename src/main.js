import './custome-timeline.scss'
import './style.css'
import 'highlight.js';
import 'primeicons/primeicons.css'
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './app.vue'
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import router from "./router/index.js";
import VueDOMPurifyHTML from 'vue-dompurify-html';
import ToastService from 'primevue/toastservice';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: false
        }
    }
});
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

app.use(pinia)
app.use(VueDOMPurifyHTML);
app.use(ToastService);
app.use(router)
app.mount("#app")