var utils = require('./utils');
var webpack = require("webpack");
module.exports = {
    entry: {
      index: './src/input.vue',
      //  vendor: 'vue'
    },
    output: {
        path: 'dist',
        library: 'pz-input',
        filename: 'pz-input.js',
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
      }),
      // new webpack.ProvidePlugin({//打包第三方库
            // vue: 'vue'
        // }),
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    ],
}
