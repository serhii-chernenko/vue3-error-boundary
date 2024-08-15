import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/main.css'
import terminal from 'virtual:terminal'
globalThis.console = terminal

const app = createApp(App)
app.mount('#app')

app.config.errorHandler = (err) => {
    // @eslint-ignore-next-line prettier-ignore
    console.log('Error reached top level of the app', err)
}
