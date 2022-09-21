const { defineConfig } = require('@vue/cli-service');
const { chainWebpack, configureWebpack } = require('./build')

module.exports = defineConfig({
  // 关闭eslint
  lintOnSave: false,
  transpileDependencies: true,
  chainWebpack,
  configureWebpack
})
