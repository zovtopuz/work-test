import VueRouter from 'vue-router'

import UserPage from '/Users/zovtopuz/Documents/vue/vue-test/test-work/src/pages/UserPage.vue'
import Login from '/Users/zovtopuz/Documents/vue/vue-test/test-work/src/components/Login.vue'

export default new VueRouter({
    routes: [
        {
            path:'/user',
            component: UserPage
        },
        {
            path: '/login',
            component: Login
        }
    ]
  })