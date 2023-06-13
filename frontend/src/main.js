import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'
import BuyAdModal from './views/Shared/BuyAdModal'

loadFonts()

createApp(App).use(router).use(store)
  .use(vuetify)
  .component("buy-ad-modal",BuyAdModal)
  .mount('#app')