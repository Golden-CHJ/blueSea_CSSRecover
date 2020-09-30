// 安装 // webpack-dev-server webpack-cli
const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {
    entry: 'main.js',

    output: {
        filename: 'main.[contenthash:8].js',
        path: path.resolve(__dirname, 'dist')

    },
    module: {
        rules: [{
                test: /\.vue$/, // vue-loader
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(png)|(jpg)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024 * 30,
                        fallback: 'file-loader'
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}