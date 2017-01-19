var utils = require('./utils');
var webpack = require("webpack");
module.exports = {
    entry: {
      index: './index.js',
      //  vendor: 'vue'
    },
    output: {
        path: './dist',
        library: 'pz-formitem',
        filename: 'pz-formitem.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue'
        }
    },
    module: {
        loaders: [{
              test: /\.vue$/,
               loaders: ['vue']
            },{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },{
               test: /\.scss$/,
                loader: "style!css!sass"
           },{
               test: /\.less$/,
               loader: "style!css!less"
           }]
    },
    vue: {
        loaders: utils.cssLoaders(),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ],
}
