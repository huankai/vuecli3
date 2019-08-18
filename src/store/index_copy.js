import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

/*
 使用 export const 导出的变量需要使用 {} 包裹,
 使用 export default 则不需要使用 {} 包裹
 */
import {INCREMENT, DECREMENT, ADDSTUDENT, UPDATEINFO, AUPDATEINFO} from "@/store/mutations-types"

/*
vuex 使用单一状态树管理 ，这里不需要new 多个 Store,所有的存储都使用同一个 Store
 */
const store = new Vuex.Store({
    /*
        保存共享状态的地方
     */
    state: {
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
    },
    /*
        vuex 不建议使用 $store.变量名 来修改值，这样无法跟踪是哪个组件修改了值
            可以在 mutations 中定义方法，然后使用 $store.方法名来调用
     */
    mutations: {
        /*
        [INCREMENT]也是一个方法，INCREMENT 是一个常量
            第一个参数固定为  state ，不会传入
         */
        [INCREMENT](state) {
            state.counter++;
        },
        [DECREMENT](state) {
            state.counter--;
        },
        /*
            可接受其它参数， 参数被称为  mutations 的负载(PayLoad)

            如果调用者使用的是这种方式提交到 mutations 时，则这里第二个参数是  payload 则是一个对象，需要通过 payload.属性名获取
            // this.$store.commit({
            //     "type": "addStudent",
            //     student
            // });

            addStudent(state, payload) {
                state.students.push(payload.student);
            }
         */
        [ADDSTUDENT](state, student) {
            state.students.push(student);
        },
        [UPDATEINFO](state) {
            /*
                上面在 state 定义 了 info 对象,info 只有 name 与 age 两个属性，
                当修改 info 中的name 或 age 值时，Vue 会在 DOM 中修改所有使用到这个引用的值，
                但是，当在 info 中添加 不存在 的属性时， 如 state.info.address = 'xxx' ，这里添加了 address 属性，
                vuex 是不会自动响应式的，可以使用 Vue.set(state.info,"address","xxxx") 的方式来设置
                同理，如果要删除指定属性，js 中可以使用 delete state.info.age 来删除，也不会自动响应式，可以使用 Vue.delete(state.info,"age") 来响应式删除
             */
            state.info.age = 20;
        }

    },
    /*
        异步操作
        在使用 mutations 中修改 state 中的数据只能是同步的，如果要使用异步操作，必须使用 actions
     */
    actions: {
        /*
            context: 是 store 对象
         */
        // aupdateInfo(context) {
        //     setTimeout(() => {// 模拟异步调用
        //         context.commit(UPDATEINFO);//注意：这里不能直接修改 state中的值，需要提交到 mutations 中去修改
        //     }, 1000);
        // }

        /*
         *  也可以返回 一个 Promise 对象，通知调用者执行成功
         */
        [AUPDATEINFO](context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit(UPDATEINFO);
                    console.log("---------", payload);
                    resolve("111111111");
                }, 1000);
            });
        }
    },
    /*
        与 计算属性类型，当在 state 中定义的数据需要使用计算后返回时，可以在这里定义
     */
    getters: {
        // 获取大于 20 岁的学生
        more20Age(state) {
            return state.students.filter(item => item.age > 20);
        },
        /*
            第一个参数 为 state,
            第二个参数为 getters: 也就是 store中的 getters，可以直接调用 getters 中声明的其它方法，
            第三个参数为 rootState，当该 getters 为 子模块时，可以获取 rootState
         */
        more20AgeLength(state, getters) {
            return getters.more20Age.length;
        },
        /*
            如果需要 传入参数，可以返回 一个函数，通过函数的方法来获取指定范围的数据
         */
        moreAge(state) {
            return function (age) {
                return state.students.filter(item => item.age > age);
            }
        }
    },
    /*
        模块：
           vuex 不建议创建多个 store ,当你不想将所有的数据保存在同一个 store 中的 state中时，可以使用 modules
           modules 中也可以有 state、 getters 、actions 、mutations modules
     */
    modules: {
        moduleA: {
            state: {
                name: "haha"
            },
            getters: {
                fullName(state, getters, rootState) {
                    return "haah" + state.name;
                },
                // 调用本模块中的其它 getters 定义的方法
                fullName2(state, getters, rootState) {
                    return getters.fullName + "fullName2";
                },
                // 调用 父类中的属性
                fullName3(state, getters, rootState) {
                    return getters.fullName2 + rootState.counter;
                }

            },
            actions: {
                updateAmoduleName(context){
                    console.log(context);
                    setTimeout(() => {
                        context.commit("updateName");  // 这里的 context调用  commit时是调用 自己的 mutations 中的 updateName,context 表示当前module 上下文
                        // console.log("---------", payload);
                    }, 1000);
                }
            },
            mutations: {
                // 注意，这里的名称不要和 rootState中的名称定义为一样的了
                updateName(state) {
                    state.name = "update" + state.name;
                }
            }

        }
    }
});
export default store;