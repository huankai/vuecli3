export default {
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