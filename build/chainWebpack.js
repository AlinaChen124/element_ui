const path = require('path');

// loaders文件夹下是自己定义的一些webpack的loader，在vue.config.js中一般那会通过chainWebpack这个字段进行处理
module.exports = config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      // 使用 vue-loader
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      // 使用 vue-md-loader
      .use('vue3-md-loader')
      .loader(path.resolve(__dirname, './loaders/vue3-md-loader.js'))
      .end()
  }