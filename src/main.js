import { createApp } from 'vue';
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import './style.css'
import App from './App.vue'
import CodeHighlight from 'primevue/codehighlight';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: false
        }
    }
});
app.directive('code', CodeHighlight);

app.mount("#app")