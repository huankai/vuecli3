import {ADDSTUDENT, DECREMENT, INCREMENT, UPDATEINFO} from "@/store/mutations-types";

export default {
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

}