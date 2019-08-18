import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);


// import Home from "@/components/Home";
// import Aboutme from "@/components/Aboutme";
// import User from "@/components/User";

/*
 懒加载导入：webpack 在打包时，会将项目 dist 目录下生成
    app.xxxx.js (你写的所有业务代码)
    manifest.xxx.js(运行支持库)
    verdor.xxxx.js(依赖第三方库)
    使用懒加载后，会在 dist 中为每个使用懒加载的生成对应的 js 文件
 */
const Home = () => import("@/components/Home");
const Message = () => import("@/components/Message");
const News = () => import("@/components/News");

const Aboutme = () => import("@/components/Aboutme");
const User = () => import("@/components/User");
const Profile = () => import("@/components/Profile");

const router = new VueRouter({
    mode: "history", //使用浏览器的 history，在地址栏不会出现 # ，默认为 hash 模式
    linkActiveClass: "active", // 当 router-link 组件 点击时的样式
    routes: [
        /*
         * 重定向
         */
        {
            path: "",
            redirect: "home",
        },
        {
            path: "/home",
            component: Home,
            //子组件
            children: [
                {
                    path: "",
                    redirect: "message",
                },
                {
                    path: "message",
                    meta: {
                        title: "消息"
                    },
                    component: Message
                },
                {
                    path: "news",
                    meta: {
                        title: "新闻"
                    },
                    component: News
                }
            ]
        },
        {
            path: "/aboutme",
            meta: {
                title: "我的"
            },
            component: Aboutme
        },
        /*
         * 动态路由 :id 为动态参数，相当于 Spring 中的 @PathVariable，
         *  应用该组件中可以使用 （$route.params.变量名） 获取，如这里的变量名为 id，则可以通过  $route.params.id 获取 id 的值
          */
        {
            path: "/user/:id",
            meta: {
                title: "用户"
            },
            component: User
        },
        {
            path: "/profile",
            meta: {
                title: "档案"
            },
            component: Profile
        }
    ]
});

/*
    vue 全局导航守卫：
        需求：当进入指定的 route 后，需要将 浏览器的 title 改为指定的功能的名称
            方法一:
                可以在每个 vue 组件中声明  created 属性，然后再 使用 document.title = "xxx"，
                但这种方式需要修改好多个组件，维护起来不方便
            方法二:
                在 routes 为每个 route 声明 meta 属性，如 title,然后调用 beforeEach() 方法，跳转之前的回调(钩子)，如下.
                这里可以做登陆认证，官网: https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB
 */
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "vuecli 学习";
    console.log(to);
    next();// 重写beforeEach 后，必须调用 next()方法，否则所有的路由无法调用， vue router 默认就是调用了 next()
});

/*
 * 在路由跳转完后的守卫(回调，也叫钩子)，只有两个参数,后置 守卫 不需要调用  next()
 * 更多文档查看: https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB
 */
router.afterEach((to, form) => {
    console.log("after...", to);
});

export default router;