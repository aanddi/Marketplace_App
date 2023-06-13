class Order {
    constructor(name, phone, adId, userId, done = false, id = null) {
    this.name = name
    this.phone = phone
    this.adId = adId
    this.userId = userId
    this.done = done
    this.id = id
    }
    }
    
    export default {
        state: {
            orders: []
        },
        mutations: {
            createOrder(state, payload){
            state.orders.push(payload)
            },
        },
        actions: {
            async createOrder({commit},{name, phone, adId, userId}) {
                let payload = new Order(name, phone, adId, userId, false, Math.random())
            commit('clearError')
            //Заглушка запроса
            let isRequestOk = true
            let promise = new Promise(function(resolve) {
            setTimeout(() => resolve('Done'), 3000);
            });
            if (isRequestOk) {
            await promise.then(()=> {
            //Здесь вызовем commit для добавления заказа
            commit('createOrder', payload)
            })
            } else {
            await promise.then(()=> {
            commit('setError', 'Ошибка создания заказа')
            throw 'Упс... Ошибка создания заказа'
            })
            }
        }
    },
        getters: {
            orders (state, getters) {
            if (getters.user == null) return []
            return state.orders.filter(order => order.userId == getters.user.id)
            }
        }
    }