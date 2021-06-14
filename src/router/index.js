import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import Layout from '@/components/Layout'
import Homepage from '@/components/Homepage'
import ProjectsPage from "../components/projects/ProjectsPage";
import Details from "../components/projects/Details";
import About from "../components/infos/About";
import Contact from "../components/infos/Contact";
import VueBodyClass from 'vue-body-class';

Vue.use(Router);
Vue.use(VueMeta);

const routes = [
	{
		path: '/',
		component: Layout,
		children: [
			{
				path: '/',
				name: 'Homepage',
				component: Homepage,
				meta: {
					bodyClass: 'home'
				}
			},
			{
				path: '/apropos',
				component: About
			},
			{
				path: '/projects',
				component: ProjectsPage,
				meta: {
					bodyClass: 'projects'
				}
			},
			{
				path: '/projects/:id',
				component: Details,
				meta: {
					bodyClass: 'details-'
				}
			},
			{
				path: '/contact/',
				component: Contact
			}
		]
	}
];

const router = new Router({
	mode: 'history',
	routes // short for `routes: routes`
});

// export default new Router({
// 	mode: 'history',
// 	routes
// })

const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });

// const app = new Vue({
// 	router
// }).$mount('#app');

export default router;
