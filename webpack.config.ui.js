const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './ui_exercise/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'distUI')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(png|jpg|)$/,
                loader: 'url-loader?limit=200000'
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'distUI')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
