const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //cssをファイルに出力するためのもの
const HtmlWebpackPlugin = require('html-webpack-plugin'); //htmlを出力するためのもの
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin'); //distの中の不用なファイルの削除
const {
    loader
} = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/main.js',
    },
    module: {
        rules: [{
                test: /\.css/,
                use: [ //ローダーは下から適用される
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
            {
                test: /\.(jpe?g|png|svg|gif)$/i,
                use: [//画像
                    {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name: 'images/[name].[ext]',
                    }
                }, ]
            },
            {
                test: /\.pug/,
                use: [//テンプレートエンジン
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true,
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/main.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/index.pug',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/access.pug',
            filename: 'access.html',
        }),
        new CleanWebpackPlugin(),
    ],
}
