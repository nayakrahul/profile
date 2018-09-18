var config = {
    entry: './src/App.js',
    output: {
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /(\.css$)/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    }
}
module.exports = config;
