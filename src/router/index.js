// 1.引入vue
import Vue from 'vue'
// 2.引入vue-router
import VueRouter from 'vue-router'

// 引入组件
import Login from '@/views/Login.vue'
import Index from '@/views/Index.vue'
import Welcome from '@/views/Welcome.vue'
import ArticleList from '@/views/ArticleList.vue'
import ArticlePublish from '@/views/ArticlePublish.vue'

// 3.挂载
Vue.use(VueRouter)
// 4.创建router对象
let router = new VueRouter({
  // 配置路由
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'index',
      path: '/index',
      component: Index,
      redirect: { name: 'welcome' },
      children: [
        {
          name: 'welcome',
          path: 'welcome',
          component: Welcome
        },
        {
          name: 'articleList',
          path: 'articleList',
          component: ArticleList
        },
        {
          name: 'articlePublish',
          path: 'articlePublish',
          component: ArticlePublish
        }
      ]
    }
  ]
})

// 添加导航守卫
router.beforeEach((to, from, next) => {
  // to and from are Route Object,next() must be called to resolve the hook}
  // 判断跳转的目标否要进行token验证，除了登录页面都需要进行验证
  if (to.path === '/login') {
    next()
  } else {
    // 获取token，进行验证
    let token = window.localStorage.getItem('dailyNews_back_user')
    // 需要验证，如果有token则跳转，如果没有则返回登录页面
    if (token) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})
// 5.暴露router
export default router
