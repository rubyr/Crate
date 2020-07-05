// App Imports
import Login from '../../modules/user/Login' // user login page
import Signup from '../../modules/user/Signup' // signup page
import Profile from '../../modules/user/Profile' // user profile page
import Subscriptions from '../../modules/user/Subscriptions' // user subscriptions page

// User routes
// each route has a path and a component 
// - the path is the absolute url (from the homepage)
// - the component is the thing to render on the page
export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
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
  }
}
