import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

// const routes = [
//   {
//     path: '/user',
//     // We point it to our component
//     // where we defined our QLayout
//     component: load('user/layout'),
//     // Now we define the sub-routes.
//     // These are getting injected into
//     // layout (from above) automatically
//     // by using <router-view> placeholder
//     // (need to specify it in layout)
//     children: [
//       {
//         path: '/Hello',
//         component: load('Hello')
//       }
//     ]
//   }
// ]

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    {
      path: '/',
      // We point it to our component
      // where we defined our QLayout
      component: load('layout'),
      // Now we define the sub-routes.
      // These are getting injected into
      // layout (from above) automatically
      // by using <router-view> placeholder
      // (need to specify it in layout)
      children: [
        {
          path: '/Wallet',
          component: load('Wallet')
        },
        {
          path: '/Map',
          component: load('Wallet')
        },
        {
          path: '/Setting',
          component: load('Wallet')
        },
        {
          path: '/Brand',
          component: load('brand')
        }
      ]
    },
    { path: '*', component: load('Error404') } // Not found
  ]
})
