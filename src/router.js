import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import UserProjects from '@/views/UserProjects'

Vue.use(Router)

export default new Router({
	// mode: 'history',
	base: process.env.BASE_URL,
	linkActiveClass: '',
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/projects',
			component: UserProjects
		},
		{
			path: '*',
			component: Home
		},
	]
})