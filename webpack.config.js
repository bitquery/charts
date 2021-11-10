const path = require('path')
const webpack = require('webpack')

// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
//
// const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',

    entry: {
        index: './src/index.js',
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'charts',
        libraryTarget: 'umd',
        globalObject: 'this',
    },

    externals: {
        jquery: {
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            var: '$',
        },
    },

    // plugins: [
    //   new webpack.ProgressPlugin(),
    //   new MiniCssExtractPlugin({ filename: 'graphs.min.css' }),
    // ],

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                // exclude: path.resolve(__dirname, 'src/reactComponents/timeChartRenderer.js'),
                loader: 'babel-loader',
            },
            {
                test: /.(scss|css)$/,

                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',

                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',

                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            // {
            //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            //   use: [
            //     {
            //       loader: 'file-loader',
            //       options: {
            //         name: '[name].[ext]',
            //         outputPath: 'fonts/',
            //       },
            //     },
            //   ],
            // },
        ],
    },

    optimization: {
        minimize: false,
        // minimize: true,
        // minimizer: [
        //   new TerserPlugin({
        //     parallel: true,
        //     cache: true,
        //     sourceMap: true,
        //     terserOptions: {
        //       format: {
        //         comments: false,
        //       },
        //     },
        //     extractComments: false,
        //   }),
        //   new CssMinimizerPlugin({
        //     sourceMap: true,
        //   }),
        // ],
    },
}
