import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import MainLayout from '../layout/main';
import LoginLayout from '../layout/login';
import Task from '../components/task';
import Deal from '../components/deal';
import Sign from '../components/sign';
import Detail from '../components/detail';
import { topMenu, bottomMenu } from '../config/menu-config';


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
				component: Task,
				meta:  Object.assign(topMenu.task, bottomMenu.task)
			},{
				path: 'task/sign',
				component: Sign,
				meta: Object.assign(topMenu['task/sign'], bottomMenu['task/sign'])
			},{
				path: 'task/detail',
				component: Detail,
				meta: Object.assign(topMenu['task/detail'], bottomMenu['task/detail'])
			},{
				path: 'deal',
				component: Deal,
				meta: Object.assign(topMenu.deal, bottomMenu.deal)
			},{
				path: 'invite',
				component: Detail,
				meta: Object.assign(topMenu.invite, bottomMenu.invite)
			},{
				path: 'file',
				component: Detail,
				meta: Object.assign(topMenu.file, bottomMenu.file)
			},{
				path: 'archive',
				component: Detail,
				meta: Object.assign(topMenu.archive, bottomMenu.archive)
			}]
		},{
			path: '/login',
			component: LoginLayout
		}
	],
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
	store.commit('navigation/setState', to);
	next();
});

export default router;
