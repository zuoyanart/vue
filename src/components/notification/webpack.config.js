module.exports = {
    entry: {
      index: './index.js',
      //  vendor: 'vue'
    },
    output: {
        path: './dist',
        library: 'vue-layer',
        filename: 'vue-layer.js',
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
    }
}
