const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //cssをファイルに出力するためのもの
const HtmlWebpackPlugin = require('html-webpack-plugin'); //htmlを出力するためのもの
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //distの中の不用なファイルの削除
const { loader } = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',//production
    devtool: 'source-map',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[hash].js',
    },
    devServer: {
        open: true,
    },
    module: {
        rules: [
            {
                test:  /\.(ts|tsx)/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: { appendTsSuffixTo: [/\.vue$/] },
                    },
                ]
            },
            {//js
                test: /\.(js|jsx)/,
                exclude: /node_modules/, //node_modulesは除外する
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: ' > .25%, not dead'
                            }],
                            '@babel/preset-react',
                        ],
                    }
                }]
            },
            {//css
                test: /\.(css|scss|sass)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                    //   {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //       postcssOptions: {
                    //         plugins: [
                    //           [
                    //             "autoprefixer",
                    //           ],
                    //         ],
                    //       },
                    //     },
                    //   },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {//img
                test: /\.(jpe?g|png|svg|gif)$/i,
                use: [ //画像
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'images/[name]-[hash].[ext]',
                            publickPath: '/',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 80,
                            }
                        }
                    },
                ]
            },
            {//テンプレートエンジン
                test: /\.pug/,
                use: [
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
            filename: './css/[name]-[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/index.pug',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/access.pug',
            filename: 'access.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/members/index.pug',
            filename: 'members/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
}
