<template>
    <div id="app">
        <h1>Vue Cli3 学习</h1>
        <!--
            to: 目标地址
            tag: 目标元素类型，默认为 <a> 标签
            replace: 使用此属性 后浏览器不能点击返回
            active-class: 当此 router-link 点击后的样式，也可以 index.js 文件中的 VueRouter 中 配置 linkActiveClass 属性
          -->
        <!--        <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
        <router-link to="/home" tag="button" replace>首页</router-link>
        <router-link to="/aboutme">关于我</router-link>

        <button @click="homeBtn">首页按键点击</button>
        <router-link to="/aboutme">关于我</router-link>

        <router-link :to="'/user/'+userId">用户</router-link>

        <!--   传参：会在 url 传入参数: profile?name=zangsan&age=12    -->
        <router-link :to="{path:'/profile',query:{name:'zangsan',age: 12}}">用户档案</router-link>
        <button @click="queryBtn">Button 传递参数</button>

        <!--
              keep-alive 缓存：
                被 keep-alive 包裹的 router-view 组件会被缓存，组件创建后不会被销毁
                    创建的时候会调用 该组件的 created 方法，当组件激活的时候会调用组件的 activated 方法，未激活的时候会调用组件的 deactivated 方法

                相反的 ，未被 keep-alive 包裹的 router-view 组件不会被缓存，组件创建后会被销毁
                        创建的时候会调用 该组件的 created 方法，销毁的时候会调用组件的 destroyed 方法，而 activated 与 deactivated 方法不会被调用

                 如果想在包裹的 keep-alive 中指定一些组件不被缓存(keep-alive) ，则可以使用 exclude 排除，
                        exclude 可以指定多个组件名，用 , 分隔，不能有空格号，如 exclude="Aboutme,User"
        -->
        <keep-alive exclude="Aboutme">
            <router-view/>
        </keep-alive>

        <hr/>
        <div>{{ $store.state.counter }}</div>
        <!--  获取数据      -->
        <div>{{ $store.getters.more20Age }}</div>
        <vuex-hello/>

        <hr/>
        <h1>Axios 测试</h1>
        <axios-test />
    </div>
</template>

<script>
    import VuexHello from "@/components/vuex/VuexHello";
    import AxiosTest from "@/components/axios/AxiosTest";

    export default {
        name: 'app',
        components: {VuexHello, AxiosTest},
        data() {
            return {
                userId: 2
            }
        },
        methods: {
            homeBtn() {
                /*
                $router 是 vue router 全局属性，可使用 this.$router 来使用
                    replace 方法会将 url地址栏中的 path 替换，且不能点击浏览器的返回 按钮
                 */
                this.$router.replace("/home");
                console.log("homeBtn...");
            },
            aboutmeBtn() {
                this.$router.replace("/aboutme");
                console.log("aboutme...");
            },
            queryBtn() {
                //push 方法会将 url地址栏中的 path 替换，但能点击浏览器的返回 按钮
                this.$router.push({
                    path: "/profile",
                    query: {
                        name: 'zangsan',
                        age: 19
                    }
                });
            }
        }
    }
</script>

<style>
    /*#app {*/
    /*    font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*    -webkit-font-smoothing: antialiased;*/
    /*    -moz-osx-font-smoothing: grayscale;*/
    /*    text-align: center;*/
    /*    color: #2c3e50;*/
    /*    margin-top: 60px;*/
    /*}*/
    /* 导入样式， 使用 @import 语法 */
    @import "assets/css/base.css";


</style>
