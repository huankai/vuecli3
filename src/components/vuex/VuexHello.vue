<template>
    <div>
        <h2>Vuex 测试</h2>
        <h5>1、 vuex state 与 mutations使用</h5>
        <div>{{ $store.state.counter }}</div>
        <!--        <button @click="$store.state.counter++">+</button>-->
        <!--        <button @click="$store.state.counter&#45;&#45;">-</button>-->
        <!--
            上面使用 $store.state.counter 这种方式也能修改 vuex 中的值，但不会跟踪（无法使用 vue 浏览器插件查看修改的记录），
            建议使用 mutations 的 commit方法
         -->
        <button @click="counterIncrement">+</button>
        <button @click="counterDecrement">-</button>
        <h5>2、 vuex getters 使用</h5>
        <div>{{ $store.getters.more20Age }}</div>
        <div>{{ $store.getters.more20AgeLength }}</div>
        <div>传入参数获取指定 age 的数据 --- > {{ $store.getters.moreAge(30) }}</div>
        <h5>3、 vuex mutations 传递参数</h5>
        <button @click="addStudent">添加学生</button>
        <H5>4、 actions 异步调用</H5>
        <button @click="aupdateInfo">异步调用</button>
        <div>{{ $store.state.info }}</div>
        <H5>5、 vuex 模块化</H5>
        <div>{{ $store.state.moduleA.name }}</div>
        <div>{{ $store.getters.fullName }}</div> <!-- 可以直接调用，不需要加模块名 -->
        <div>{{ $store.getters.fullName2 }}</div>
        <div>{{ $store.getters.fullName3 }}</div>
        <button @click="updateName">更新名称</button>
        <button @click="updateAmoduleName">模块异步更新名称</button>
    </div>
</template>

<script>
    import {INCREMENT, DECREMENT, ADDSTUDENT, AUPDATEINFO} from "@/store/mutations-types"

    export default {
        name: "VuexHello",
        methods: {
            counterIncrement() {
                this.$store.commit(INCREMENT); // 查看 store/index.js 中定义的 mutations 中的方法 第一个参数为 在 mutations 中定义的 方法名
            },
            counterDecrement() {
                this.$store.commit(DECREMENT);
            },
            addStudent() {
                const student = {id: 10, name: "name10", age: 29};
                this.$store.commit(ADDSTUDENT, student);

                // this.$store.commit({
                //     "type": "addStudent",
                //     student
                // });

            },
            aupdateInfo() {
                // 异步调用要使用 dispatch
                this.$store.dispatch(AUPDATEINFO, "携带参数信息")
                    .then((res) => {
                        console.log(res);
                    })
            },
            updateName() {
                this.$store.commit("updateName");
            },
            updateAmoduleName(){
                this.$store.dispatch("updateAmoduleName");
            }
        }
    }
</script>

<style scoped>

</style>