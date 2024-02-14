import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import 'primevue/resources/themes/aura-dark-purple/theme.css'
import "primeflex/primeflex.css"
import 'primeicons/primeicons.css'
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import MeterGroup from "primevue/metergroup";
import Card from "primevue/card";
import Ripple from "primevue/ripple";
import AnimateOnScroll from "primevue/animateonscroll";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Image from "primevue/image";
import Timeline from "primevue/timeline";



const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true })
app.directive('Ripple', Ripple)
app.component('Toolbar',Toolbar)
app.component('Button', Button)
app.component('Avatar', Avatar)
app.component('MeterGroup', MeterGroup)
app.component('Card', Card)
app.directive('AnimationOnScroll',AnimateOnScroll)
app.component('Splitter',Splitter)
app.component('SplitterPanel',SplitterPanel)
app.component('Image', Image)
app.component('Timeline', Timeline)


app.mount('#app')
