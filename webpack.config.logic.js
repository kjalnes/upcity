const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paradigm = process.env.PARADIGM;

module.exports = {
    entry: `./logic_exercise/${paradigm}/index.js`,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'distLogic')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'distLogic')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
