import './style.css'
import './custome-timeline.scss'
import 'highlight.js';
import 'primeicons/primeicons.css'
import { createApp } from 'vue';
import App from './app.vue'
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import router from "./router/index.js";
import VueDOMPurifyHTML from 'vue-dompurify-html';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: false
        }
    }
});
app.use(VueDOMPurifyHTML);
app.use(router)
app.mount("#app")