import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import News from '../views/News'
import Messages from '../views/Messages'
import Detail from '../views/Detail'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'messages',
                    component: Messages,
                    children: [
                        {
                            path: 'detail/:id',
                            component: Detail
                        }
                    ]
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/',
            redirect: '/about'
        }
    ]
})
