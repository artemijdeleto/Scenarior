import Vue from 'vue'
import App from '@/App'
import i18n from '@/i18n'
import store from '@/store'
import router from '@/router'
import cookie from '@/cookie'
import './registerServiceWorker'
import '@/assets/css/style.scss'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	if (router.app.$store.getters.isLogged === true) {
		if (to.path === '/') next('/projects');
		else next()
	} else {
		if (to.path !== '/') next('/');
		else next();
	}
});

new Vue({
	i18n,
	store,
	router,
	mounted() {
		document.body.style.opacity = '1';
	},
	render(h) { return h(App) }
}).$mount('#app')
