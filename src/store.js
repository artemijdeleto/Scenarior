import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {
			id: 0
		}
	},
	mutations: {

	},
	actions: {

	},
	getters: {
		isLogged(state) {
			if (state.user.id > 0) return true;
			return false;
		}
	}
})