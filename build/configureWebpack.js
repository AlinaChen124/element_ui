const PlatformInfoPlugin = require('./plugins/platform-info-plugin');

// plugins文件夹下是自己定义的一些webpack的plugin，在vue.config.js中一般那会通过configureWebpack这个字段进行处理
module.exports = config => {
    // 自己写的插件可以在这里引入
    config.plugins.push(new PlatformInfoPlugin())
}