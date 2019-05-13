export default {
	namespaced: true,
  state: () => ({
    isLoading: true,
		showTopMenu: false,
		backLink: null,
    menuTitle: null,
		approvalButton: false,
		moreButton: false
  }),
	mutations: {
		value(state, payload) {
			const {type, value} = payload;
			state[type] = value;
		},
		setState(state, route) {
			state.showTopMenu = route.meta.showTopMenu;
			state.backLink = route.meta.backLink;
			state.menuTitle = route.meta.menuTitle;
			state.approvalButton = route.meta.approvalButton;
			state.moreButton = route.meta.moreButton;
		}
	}
};
