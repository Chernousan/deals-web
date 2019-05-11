import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../components/layout';
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
			component: Layout,
			redirect: 'tasks',
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
		}
	],
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
});

export default router;
