var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'babel-polyfill',
      './app/main.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'eval-source-map',
};
