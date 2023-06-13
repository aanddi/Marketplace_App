export default {
	state: {
	    ads:[
				{
					title:"First",
					desc:"First Desc",
					promo: true,
					src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
					id:"1",
					userId: "1"
				},
				{
					title:"Second",
					desc:"Second Desc",
					promo: true,
					src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
					id:"2",
					userId: "1"
				},
				{
					title:"Third",
					desc:"Thitd Desc",
					promo: true,
					src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
					id:"3",
					userId: "1"
				},
				{
					title:"Fouth",
					desc:"Fouth Desc",
					promo: true,
					src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
					id:"4",
					userId: "1"
				}
		]
	},
	mutations: {
	    createAd(state, payload){
			state.ads.push(payload)
		}
	},
	actions: {
	    async createAd({commit, getters},payload){
	payload.id = Math.random()
	payload.userId = getters.user != null ? getters.user.id : '1'
	commit('clearError')
	commit('setLoading', true)
	//Заглушка запроса
	let isRequestOk = true
	let promise = new Promise(function(resolve) {
	setTimeout(() => resolve('Done')
	, 3000);
	});
	if (isRequestOk) {
	await promise.then(()=> {
	commit('createAd', payload)
	commit('setLoading', false)
	})
	} else {
	await promise.then(()=> {
	commit('setLoading', false)
	commit('setError', 'Ошибка создания объявления')
	throw 'Упс... Ошибка создания объявления'
	})
	}
		}
	
	},
	getters: {
	    ads(state) {
				return state.ads
			},
			promoAds(state) {
				return state.ads.filter(ad => {
					return ad.promo
				})
			},
			myAds(state) {
				return state.ads
		},
	    adById(state) {
		return id => {
		return state.ads.find(ad => ad.id == id)
		}
	}
	}
	}