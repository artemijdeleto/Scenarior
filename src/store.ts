import { createStore } from "vuex";

export default createStore({
	state: {
		user: {
			id: null,
			username: null
		}
	},
	getters: {
		isLogged: state => state.user.id !== null,
		user: state => state.user
	},
	actions: {
		authenticate({ state }, payload) {
			localStorage.setItem('sc.auth.token', payload.token);
			state.user.id = payload.user.userIdentifier;
			state.user.username = payload.user.username;
		},
		logout({ state }) {
			localStorage.removeItem('sc.auth.token');
			state.user.id = null;
		}
	}
});
