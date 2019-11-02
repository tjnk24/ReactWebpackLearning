const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const development = 'development';

const cssLoaders = [
    {
        loader: 'style-loader',
    },
    {
        loader: 'css-loader',
        options: {
            sourceMap: true
        }
    },
];
const config = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'js/main.[hash].js',
        path: path.resolve(__dirname, 'build')
    },
    mode: development ? 'development' : 'production',
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: cssLoaders
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

module.exports = config;