 const config = require('../blue-sea-csse-recover/webpack.config')
 // webpack-dev-server
 const path = require('path');
 config.devServer = {
     contentBase: path.join(__dirname, "src"),
     compress: true, // 使用gzip压缩 更快
     port: 3000,
     hot: true, // 热更新
     inline: true, //着一段处理实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台
     open: true
 }