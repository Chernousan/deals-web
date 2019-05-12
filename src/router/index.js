import Vue from 'vue';
import Router from 'vue-router';
import MainLayout from '../layout/main';
import LoginLayout from '../layout/login';
import Task from '../components/task';
import Deal from '../components/deal';
import Sign from '../components/sign';
import Detail from '../components/detail';


Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: MainLayout,
			redirect: 'task',
			children: [{
				path: 'task',
				component: Task
			},{
				path: 'task/sign',
				component: Sign
			},{
				path: 'task/detail',
				component: Detail
			},{
				path: 'deal',
				component: Deal
			},{
				path: 'deal/detail',
				component: Detail
			}]
		},{
			path: '/login',
			component: LoginLayout
		}
	],
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
});

export default router;
