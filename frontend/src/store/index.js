import { createStore } from 'vuex'
import ads from './ads'
import user from './user'
import shared from './shared'
import order from './orders'

const store = createStore({
modules:{
    ads, user, shared, order
}
})

export default store