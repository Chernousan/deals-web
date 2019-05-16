export default {
	namespaced: true,
  state: () => ({
    isLoading: true,
		showTopMenu: false,
		topMenuBackLink: false,
    topMenuTitle: false,
		topMenuApprovalButton: false,
		topMenuMoreButton: false,
		showBottomMenu: false,
		bottomMenuEditButton: false,
		bottomMenuBigButton: false,
		bottomMenuFindButton: false,
		userName: "Petro Petrenko",
		userOrganisation: "Some Organisation"

  }),
	mutations: {
		value(state, payload) {
			const {type, value} = payload;
			state[type] = value;
		},
		setState(state, route) {
			state.showTopMenu = route.meta.showTopMenu;
			state.topMenuBackLink = route.meta.topMenuBackLink;
			state.topMenuTitle = route.meta.topMenuTitle;
			state.topMenuApprovalButton = route.meta.topMenuApprovalButton;
			state.topMenuMoreButton = route.meta.topMenuMoreButton;
			state.showBottomMenu = route.meta.showBottomMenu;
      state.bottomMenuEditButton = route.meta.bottomMenuEditButton;
      state.bottomMenuBigButton = route.meta.bottomMenuBigButton;
      state.bottomMenuFindButton = route.meta.bottomMenuFindButton;
		}
	}
};
