import {
	createRouter,
	createWebHistory,
	NavigationGuardNext,
	RouteLocationNormalized,
	RouteRecordRaw
} from 'vue-router'
import Home from './views/Home.vue'
import UserProjects from './views/UserProjects.vue'
import {
  authenticate,
  canBeAuthenticated,
  getAuthenticationToken,
  getUserInformationUsingToken
} from "./service/AuthenticationService";
import store from "./store";
import axios, {clearAuthorization, setAuthorization} from "./axios";

const history = createWebHistory();
const router = createRouter({
	history: history,
	linkActiveClass: '',
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/',
			meta: {
				allow: 'guest'
			},
			component: Home
		},
		{
			path: '/projects',
			component: UserProjects
		},
		{
			path: '/edit/:id',
			component: () => import(/* webpackChunkName: "editor" */ './views/Editor.vue')
		},
		({
			path: '/oauth/adsr/callback',
			meta: {
				allow: 'all'
			},
			async beforeEnter(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
				try {
					if (!to.query.hasOwnProperty('code')) {
						return next();
					}

					const token = await getAuthenticationToken(to.query.code as string);
					const user = await getUserInformationUsingToken(token);

					setAuthorization(token);
					await store.dispatch('authenticate', {
						token,
						user
					});

					next('/');
				} catch (e) {
					console.error(e);
					next('/');
				}
			},
		} as any) as RouteRecordRaw,
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			meta: {
				allow: 'all'
			},
			component: Home
		},
	]
});

const navigate = ({ meta: { allow } }: RouteLocationNormalized, next: NavigationGuardNext) => {
	if (allow === 'all') {  // available for all
		next();
	} else {
		const logged = store.getters['isLogged'];
		console.info('logged', logged)
		if (allow === 'guest') {  // only for unauthenticated users
			logged ? next('/projects') : next();
		} else { // only for authenticated users
			logged ? next() : next('/');
		}
	}

	// store.state.loading = false;
}

router.beforeEach((to, from, next) => {

	if (store.getters.isLogged) {
		return navigate(to, next);
	}

	if (!canBeAuthenticated()) {
		return navigate(to, next);
	}

  authenticate().finally(() => navigate(to, next));

});

export default router;
