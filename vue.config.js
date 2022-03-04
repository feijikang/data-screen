const path = require('path');

const resolve = dir => {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: config => { config.entry.app = ["babel-polyfill", "./src/main.js"]; },

  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  //去除开发环境的productionSourceMap
  productionSourceMap: false,
  transpileDependencies:["resize-detector"]
}