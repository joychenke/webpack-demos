// 用npx webpack --config webpack.config.joy.js运行
const path = require('path')
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'otherDist')
    }
}