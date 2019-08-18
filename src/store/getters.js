export default {
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
}