var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + "./../back/dist")
    },
    devServer: {
        open: true,
        openPage: "http://localhost:3000",
        port: 8080,

    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './gra.html',
            title: "page title",
            template: './src/index.html',


        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(md2)$/i,
                type: 'asset/resource',
            }
        ]
    },
    mode: 'development', // none, development, production

};