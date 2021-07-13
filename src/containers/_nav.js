export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Data Master',
        route: '/data-master',
        icon: 'cil-chart-line',
        items: [
          {
            name: 'Master Voters',
            to: '/data-master/master-voters'
          },
          {
            name: 'Master Kandidat',
            to: '/data-master/master-kandidat'
          },
          {
            name: 'List Approval',
            to: '/data-master/list-approval'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Election Management',
        route: '/election',
        icon: 'cil-chart',
        items: [
          {
            name: 'Jadwal',
            to: '/election/jadwal'
          },
          {
            name: 'Booth',
            to: '/election/booth'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'User Management',
        to: '/user',
        icon: 'cil-people',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Security',
        to: '/security',
        icon: 'cil-lock-locked',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Report',
        to: '/report',
        icon: 'cil-description',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Log Activity',
        to: '/log-activity',
        icon: 'cil-laptop',
      },
      // {
      //   _name: 'CSidebarNavItem',
      //   // name: 'Colors',
      //   name: 'Security',
      //   to: '/theme/colors',
      //   icon: 'cil-drop'
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   // name: 'Typography',
      //   name: 'Report',
      //   to: '/theme/typography',
      //   icon: 'cil-pencil'
      // },
      
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Charts',
      //   to: '/charts',
      //   icon: 'cil-chart-pie'
      // },
      // {
      //   _name: 'CSidebarNavDropdown',
      //   name: 'Notifications',
      //   route: '/notifications',
      //   icon: 'cil-bell',
      //   items: [
      //     {
      //       name: 'Alerts',
      //       to: '/notifications/alerts'
      //     },
      //     {
      //       name: 'Badges',
      //       to: '/notifications/badges'
      //     },
      //     {
      //       name: 'Modals',
      //       to: '/notifications/modals'
      //     }
      //   ]
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Widgets',
      //   to: '/widgets',
      //   icon: 'cil-calculator',
      //   badge: {
      //     color: 'primary',
      //     text: 'NEW',
      //     shape: 'pill'
      //   }
      // },
      // {
      //   _name: 'CSidebarNavDivider',
      //   _class: 'm-2'
      // },
      // {
      //   _name: 'CSidebarNavTitle',
      //   _children: ['Extras']
      // },
      // {
      //   _name: 'CSidebarNavDropdown',
      //   name: 'Pages',
      //   route: '/pages',
      //   icon: 'cil-star',
      //   items: [
      //     {
      //       name: 'Login',
      //       to: '/pages/login'
      //     },
      //     {
      //       name: 'Register',
      //       to: '/pages/register'
      //     },
      //     {
      //       name: 'Error 404',
      //       to: '/pages/404'
      //     },
      //     {
      //       name: 'Error 500',
      //       to: '/pages/500'
      //     }
      //   ]
      // }
    ]
  }
]