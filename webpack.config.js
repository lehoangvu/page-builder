var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    cache: true,
    devtool: "source-map",
    entry: {
        server: 'webpack-dev-server/client?http://localhost:9000',
        hotReload: 'webpack/hot/dev-server',
        index: './index.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        { 
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: [{
                loader: 'url-loader?limit=100000'
            }]
        }]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve('./src/components')
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        },
    },
    plugins: [
  //    new HtmlWebpackPlugin({
        //  title: 'My App',
        //  filename: 'index.html'
        // })
    ]
}