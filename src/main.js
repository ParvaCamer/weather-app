import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import CardInformation from './components/ui/CardInformation.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('card-info', CardInformation)

app.mount('#app')
