import {AUPDATEINFO, UPDATEINFO} from "@/store/mutations-types";

export default {
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
}