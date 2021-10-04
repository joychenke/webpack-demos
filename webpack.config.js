const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        // path是绝对路径
        path: path.resolve(__dirname, 'adviser_optimize_js')
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true
        // compress: true
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true
        },
        hash: true
    }), 
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/, //匹配js文件
                use: ['babel-loader', 
                    {
                        loader: 'eslint-loader',
                        options: {
                            enforce: 'pre'  // 前置loader，webpack会优先处理
                        }
                    }
                ],
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.css$/,   // 针对css后缀的文件，用use中的loader
                use: [  // 从后向前依次使用下面列出的两个loader
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }, {
                test: /\.less$/, //针对less后缀的文件，用use中的loader
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ]
    }
}