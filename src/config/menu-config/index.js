export const topMenu =
{ 'task':
    {
      showTopMenu: true,
      topMenuBackLink: false,
      topMenuTitle: 'menu_title_myTask',
      topMenuApprovalButton: false,
      topMenuMoreButton: false
    },
  'task/sign':
    {
      showTopMenu: true,
      topMenuBackLink: '/task/detail',
      topMenuTitle: false,
      topMenuApprovalButton: false,
      topMenuMoreButton: true
    },
  'task/detail':
    {
      showTopMenu: true,
      topMenuBackLink: '/task',
      topMenuTitle: false,
      topMenuApprovalButton: true,
      topMenuMoreButton: true
    },
  'deal':
    {
      showTopMenu: true,
      topMenuBackLink: false,
      topMenuTitle: 'menu_title_myDeal',
      topMenuApprovalButton: false,
      topMenuMoreButton: false
    },
  'deal/detail':
    {
      showTopMenu: true,
      topMenuBackLink: '/task',
      topMenuTitle: false,
      topMenuApprovalButton: true,
      topMenuMoreButton: true
    },
  'invite':
    {
      showTopMenu: true,
      topMenuBackLink: '/task',
      topMenuTitle: false,
      topMenuApprovalButton: true,
      topMenuMoreButton: true
    },
  'file':
    {
      showTopMenu: true,
      topMenuBackLink: '/task',
      topMenuTitle: false,
      topMenuApprovalButton: true,
      topMenuMoreButton: true
    },
  'archive':
    {
      showTopMenu: true,
      topMenuBackLink: '/task',
      topMenuTitle: false,
      topMenuApprovalButton: true,
      topMenuMoreButton: true
    }
}
export const bottomMenu =
{ 'task':
    {
      showBottomMenu: true,
      bottomMenuEditButton: false,
      bottomMenuBigButton: true,
      bottomMenuFindButton: true
    },
  'task/sign':
    {
      showBottomMenu: true,
      bottomMenuEditButton: false,
      bottomMenuBigButton: true,
      bottomMenuFindButton: false
    },
  'task/detail':
    {
      showBottomMenu: true,
      bottomMenuEditButton: true,
      bottomMenuBigButton: true,
      bottomMenuFindButton: false
    },
  'deal':
    {
      showBottomMenu: true,
      bottomMenuEditButton: false,
      bottomMenuBigButton: true,
      bottomMenuFindButton: true
    },
  'invite':
    {
      showBottomMenu: true,
      bottomMenuEditButton: true,
      bottomMenuBigButton: true,
      bottomMenuFindButton: false
    },
  'file':
    {
      showBottomMenu: true,
      bottomMenuEditButton: true,
      bottomMenuBigButton: true,
      bottomMenuFindButton: false
    },
  'archive':
    {
      showBottomMenu: true,
      bottomMenuEditButton: true,
      bottomMenuBigButton: true,
      bottomMenuFindButton: false
    }
}
