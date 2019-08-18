/*
 vue cli 配置，会与 webpack 中的配置合并
 */
module.exports = {
    devServer: {
        // 配置项目启动后自动打开浏览器
        open: true,
        // 配置使用的端口号，默认为 8080
        port: 9999,
        // 配置是否使用 https，默认为false
        https: false
    }
};