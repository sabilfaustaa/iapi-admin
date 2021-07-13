import Vue from 'vue'
import Router from 'vue-router'
import Jadwal from '../views/election/Jadwal'
import Booth from '../views/election/Booth'
import FormJadwal from '../views/election/form/FormJadwal'
import FormBooth from '../views/election/form/FormBooth'
import FormMasterVoters from '../views/master/form/FormMasterVoter'
import FormMasterKandidat from '../views/master/form/FormMasterKandidat'
import MasterVoters from '../views/master/MasterVoter'
import MasterKandidat from '../views/master/MasterKandidat'
import UserManagement from '../views/user/UserManagement'
import FormUserManagement from '../views/user/form/FormUserManagement'
import Security from '../views/Security'
import Report from '../views/Report'
import LogActivity from '../views/LogActivity'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

// Views - Master
const ListApproval = () => import('@/views/master/ListApproval')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Register = () => import('@/views/pages/Register')
const Login = () => import('@/views/pages/Login')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      component: TheContainer,
      children: [
        {
          name: 'Dashboard',
          path: 'dashboard',
          component: Dashboard
        },
        {
          path: 'data-master',
          name: 'Data Master',
          redirect: '/data-master/master-voters',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'master-voters',
              component: MasterVoters,
            },
            {
              path: 'tambah-voters',
              component: FormMasterVoters,
            },
            {
              path: 'tambah-kandidat',
              component: FormMasterKandidat,
            },
            {
              path: 'master-kandidat',
              component: MasterKandidat
            },
            {
              path: 'list-approval',
              component: ListApproval
            }, 
          ]
        },
        {
          path: 'election',
          name: 'Election Management',
          redirect: '/election/jadwal',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'jadwal',
              component: Jadwal,
            },
            {
              path: 'form-jadwal',
              component: FormJadwal,
            },
            {
              path: 'form-booth',
              component: FormBooth,
            },
            {
              path: 'booth',
              component: Booth
            }
          ]
        },
        {
          path: 'user',
          name: 'User Management',
          redirect: '/user/user-management',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'user-management',
              component: UserManagement,
            },
            {
              path: 'form-user',
              component: FormUserManagement,
            }
          ]
        },
        {
          name: 'Security',
          path: 'security',
          component: Security
        },
        {
          name: 'Report',
          path: 'report',
          component: Report
        },
        {
          name: 'Log Activity',
          path: 'log-activity',
          component: LogActivity
        },
      ]
    },
    {
      path: '/login',
      component: Login
    }
  
    // {
    //   path: '/',
    //   redirect: '/dashboard',
    //   name: 'Home',
    //   component: TheContainer,
    //   children: [
    //     {
    //       path: 'dashboard',
    //       name: 'Dashboard',
    //       component: Dashboard
    //     },
    //     {
    //       path: 'theme',
    //       redirect: '/theme/colors',
    //       name: 'Theme',
    //       component: {
    //         render (c) { return c('router-view') }
    //       },
    //       children: [
    //         {
    //           path: 'colors',
    //           name: 'Colors',
    //           component: Colors
    //         },
    //         {
    //           path: 'typography',
    //           name: 'Typography',
    //           component: Typography
    //         }
    //       ]
    //     },
    //     {
    //       path: 'charts',
    //       name: 'Charts',
    //       component: Charts
    //     },
    //     {
    //       path: 'widgets',
    //       name: 'Widgets',
    //       component: Widgets
    //     },
    //     {
    //       path: 'users',
    //       meta: {
    //         label: 'Users'
    //       },
    //       component: {
    //         render(c) {
    //           return c('router-view')
    //         }
    //       },
    //       children: [
    //         {
    //           path: '',
    //           name: 'Users',
    //           component: Users
    //         },
    //         {
    //           path: ':id',
    //           meta: {
    //             label: 'User Details'
    //           },
    //           name: 'User',
    //           component: User
    //         }
    //       ]
    //     },
    //     {
    //       path: 'base',
    //       redirect: '/base/cards',
    //       name: 'Base',
    //       component: {
    //         render (c) { return c('router-view') }
    //       },
    //       children: [
    //         {
    //           path: 'cards',
    //           name: 'Cards',
    //           component: Cards
    //         },
    //         {
    //           path: 'forms',
    //           name: 'Forms',
    //           component: Forms
    //         },
    //         {
    //           path: 'switches',
    //           name: 'Switches',
    //           component: Switches
    //         },
    //         {
    //           path: 'tables',
    //           name: 'Tables',
    //           component: Tables
    //         },
    //         {
    //           path: 'tabs',
    //           name: 'Tabs',
    //           component: Tabs
    //         },
    //         {
    //           path: 'breadcrumbs',
    //           name: 'Breadcrumbs',
    //           component: Breadcrumbs
    //         },
    //         {
    //           path: 'carousels',
    //           name: 'Carousels',
    //           component: Carousels
    //         },
    //         {
    //           path: 'collapses',
    //           name: 'Collapses',
    //           component: Collapses
    //         },
    //         {
    //           path: 'jumbotrons',
    //           name: 'Jumbotrons',
    //           component: Jumbotrons
    //         },
    //         {
    //           path: 'list-groups',
    //           name: 'List Groups',
    //           component: ListGroups
    //         },
    //         {
    //           path: 'navs',
    //           name: 'Navs',
    //           component: Navs
    //         },
    //         {
    //           path: 'navbars',
    //           name: 'Navbars',
    //           component: Navbars
    //         },
    //         {
    //           path: 'paginations',
    //           name: 'Paginations',
    //           component: Paginations
    //         },
    //         {
    //           path: 'popovers',
    //           name: 'Popovers',
    //           component: Popovers
    //         },
    //         {
    //           path: 'progress-bars',
    //           name: 'Progress Bars',
    //           component: ProgressBars
    //         },
    //         {
    //           path: 'tooltips',
    //           name: 'Tooltips',
    //           component: Tooltips
    //         }
    //       ]
    //     },
    //     {
    //       path: 'master',
    //       redirect: '/master/master-voters',
    //       name: 'Master',
    //       component: {
    //         render (c) { return c('router-view') }
    //       },
    //       children: [
    //         {
    //           path: 'master-voters',
    //           name: 'Master Voters',
    //           component: MasterVoters,
    //         },
    //         {
    //           path: 'tambah-voters',
    //           name: 'Tambah Voters',
    //           component: TambahVoters,
    //         },
    //         {
    //           path: 'master-kandidat',
    //           name: 'Master Kandidat',
    //           component: MasterKandidat
    //         },
    //         {
    //           path: 'list-approval',
    //           name: 'List Approval',
    //           component: ListApproval
    //         },
            
    //       ]
    //     },
    //     {
    //       path: 'icons',
    //       redirect: '/icons/coreui-icons',
    //       name: 'CoreUI Icons',
    //       component: {
    //         render (c) { return c('router-view') }
    //       },
    //       children: [
    //         {
    //           path: 'coreui-icons',
    //           name: 'Icons library',
    //           component: CoreUIIcons
    //         },
    //         {
    //           path: 'brands',
    //           name: 'Brands',
    //           component: Brands
    //         },
    //         {
    //           path: 'flags',
    //           name: 'Flags',
    //           component: Flags
    //         }
    //       ]
    //     },
    //     {
    //       path: 'notifications',
    //       redirect: '/notifications/alerts',
    //       name: 'Notifications',
    //       component: {
    //         render (c) { return c('router-view') }
    //       },
    //       children: [
    //         {
    //           path: 'alerts',
    //           name: 'Alerts',
    //           component: Alerts
    //         },
    //         {
    //           path: 'badges',
    //           name: 'Badges',
    //           component: Badges
    //         },
    //         {
    //           path: 'modals',
    //           name: 'Modals',
    //           component: Modals
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   path: '/pages',
    //   redirect: '/pages/404',
    //   name: 'Pages',
    //   component: {
    //     render (c) { return c('router-view') }
    //   },
    //   children: [
    //     {
    //       path: '404',
    //       name: 'Page404',
    //       component: Page404
    //     },
    //     {
    //       path: '500',
    //       name: 'Page500',
    //       component: Page500
    //     },
    //     {
    //       path: 'login',
    //       name: 'Login',
    //       component: Login
    //     },
    //     {
    //       path: 'register',
    //       name: 'Register',
    //       component: Register
    //     }
    //   ]
    // }
  ]
}

