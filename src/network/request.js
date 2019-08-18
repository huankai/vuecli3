import axios from "axios"

export function defaultRequest(options) {
    let instance = axios.create({
        baseURL: "",
        timeout: 5000
    });
    // 请求拦截器
    instance.interceptors.request.use(config => {
        console.log(config);
        // 可对登陆认证
        return config;
    }, err => {
        console.log(err);
    });
    //响应拦截器
    instance.interceptors.response.use(response => {
        console.log(response);
        return response.data;
    }, err => {
        console.log(err);
    });
    return instance(options);
}