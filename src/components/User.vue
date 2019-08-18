<template>
    <div>
        我是用户页面，用户id 为：{{ userId }}
    </div>
</template>

<script>
    export default {
        name: "User",
        created() {
            console.log("User created");
        },
        activated() {
            console.log("User activated");
        },
        deactivated() {
            console.log("User deactivated");
        },
        destroyed() {
            console.log("User destoryed");
        },
        computed: {
            userId() {
                /*
                    $route 和 $router 一样，也是 vue-router 中的全局组件，不同的是， $route 指的是当前 url 的路由
                    下面的 $route.params.id 是获取 当前 url 路由中的参数名为 id 的值，
                    在 index.js 中配置了 /user/:id 路由，并指定了一个参数 ，参数名为 id， 所以这里的参数名一定要一致

                 */
                return this.$route.params.id
            }
        }
    }
</script>

<style scoped>

</style>