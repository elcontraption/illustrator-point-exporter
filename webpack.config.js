module.exports = {
    entry: './src/exporter.js',
    output: {
        path: './dist',
        filename: 'exporter.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel!eslint',
                exclude: /node_modules/
            }
        ]
    }
};
