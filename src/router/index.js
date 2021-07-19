import Vue from 'vue'
import Router from 'vue-router'

// Views - Master
import MasterVoters from '../views/master/MasterVoter'
import MasterKandidat from '../views/master/MasterKandidat'
import FormMasterVoters from '../views/master/form/FormMasterVoter'
import FormMasterKandidat from '../views/master/form/FormMasterKandidat'

// Views Verifikasi
import VFHApproval from '../views/verifikasi/VFHApproval'
import DetailVFHApproval from '../views/verifikasi/details/DetailVFHApproval'
import VoterDataVerifikasi from '../views/verifikasi/VoterDataVerifikasi'
import DetailVoterDataVerifikasi from '../views/verifikasi/details/DetailVotersDataVerifikasi'

// Views - Election
import Jadwal from '../views/election/Jadwal'
import Booth from '../views/election/Booth'
import FormJadwal from '../views/election/form/FormJadwal'
import FormBooth from '../views/election/form/FormBooth'

// Views - UserManagement
import UserManagement from '../views/user/UserManagement'
import FormUserManagement from '../views/user/form/FormUserManagement'

// Views - Security, Report, Log Activity
import Security from '../views/Security'
import Report from '../views/Report'
import LogActivity from '../views/LogActivity'

import LupaPassword from '../views/LupaPassword'
import Login from '../views/Login'
import VerifikasiKode from '../views/VerifikasiKode'
import PasswordBaru from '../views/PasswordBaru'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Register = () => import('@/views/pages/Register')
// const Login = () => import('@/views/pages/Login')

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
            }
          ]
        },
        {
          path: 'vfh-approval',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'VFH Approval',
              component: VFHApproval
            },
            {
              path: 'detail',
              name: 'Voters',
              component: DetailVFHApproval
            }
          ]
        },
        {
          path: 'verifikasi-data',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Verifikasi Data',
              component: VoterDataVerifikasi
            },
            {
              path: 'detail',
              name: 'Verifikasi',
              component: DetailVoterDataVerifikasi
            }
          ]
        },
        // {
        //   path: 'verifikasi',
        //   name: 'Verifikasi',
        //   redirect: '/verifikasi/vfh-approval',
        //   component: {
        //     render (c) { return c('router-view') }
        //   },
        //   children: [
        //     // {
        //     //   path: 'vfh-approval',
        //     //   component: VFHApproval,
        //     // },
            
        //   ]
        // },
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
    },
    {
      path: '/lupa-password',
      component: LupaPassword
    },
    {
      path: '/verifikasi-kode',
      component: VerifikasiKode
    },
    {
      path: '/password-baru',
      component: PasswordBaru
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
  ]
}

