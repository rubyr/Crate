// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'
import ProfileEditor from '../../modules/user/ProfileEditor'
import Shipments from '../../modules/user/Shipments'

// User routes
export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
  },

  edit: {
    path: '/user/profile/edit',
    component: ProfileEditor,
    auth: true
  },

  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },

  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
  },

  shipments: {
    path: '/user/shipments',
    component: Shipments,
    auth: true
  }
}
