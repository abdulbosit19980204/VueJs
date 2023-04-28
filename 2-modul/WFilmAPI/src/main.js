import { createApp } from 'vue'
import App from '@/components/app/App.vue'
import uicompanents from './uicompanents'


const app = createApp(App)
uicompanents.map(component => { app.component(component.name, component) })


app.mount('#app')