module.exports = {
    entry: {
      index: './index.js',
       vendor: ['vue']
    },
    output: {
        path: './dist',
        library: 'vue-layer',
        filename: 'vue-layer.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
              test: /\.vue$/,
               loaders: ['vue']
            },{
                test: /\.js$/,
                loader: 'babel',
                // include: projectRoot,
                exclude: /node_modules/,
                query: {
                //  cacheDirectory:  path.resolve(__dirname, '../temp'),
                 plugins: ['transform-runtime'],
                 presets: ['es2015', 'stage-0']
               }
            },{
               test: /\.scss$/,
                loader: "style!css!sass"
           }]
    }
}
