import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import moduleA from "@/store/modules/moduleA";

const state = {
    counter: 1000,
    students: [
        {id: 1, name: "name1", age: 10},
        {id: 2, name: "name2", age: 36},
        {id: 3, name: "name3", age: 8},
        {id: 4, name: "name4", age: 27}
    ],
    info: {
        name: "admin",
        age: 10
    }
};
/*
vuex 使用单一状态树管理 ，这里不需要new 多个 Store,所有的存储都使用同一个 Store
 */
export default new Vuex.Store({
    /*
        保存共享状态的地方
     */
    state,
    /*
        vuex 不建议使用 $store.变量名 来修改值，这样无法跟踪是哪个组件修改了值
            可以在 mutations 中定义方法，然后使用 $store.方法名来调用
     */
    mutations,
    /*
        异步操作
        在使用 mutations 中修改 state 中的数据只能是同步的，如果要使用异步操作，必须使用 actions
     */
    actions,
    /*
        与 计算属性类型，当在 state 中定义的数据需要使用计算后返回时，可以在这里定义
     */
    getters,
    /*
        模块：
           vuex 不建议创建多个 store ,当你不想将所有的数据保存在同一个 store 中的 state中时，可以使用 modules
           modules 中也可以有 state、 getters 、actions 、mutations modules
     */
    modules: {
        moduleA: moduleA
    }
});