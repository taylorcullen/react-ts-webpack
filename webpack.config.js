const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: ['./src/app/App.tsx', 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },  // to inject the result into the DOM as a style block
                    { loader: "css-loader", options: { modules: true, sourceMap: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
                ]
            },
            {
                test: /\.scss$/, use: [ 
                    { loader: "style-loader" },  // to inject the result into the DOM as a style block
                    { loader: "css-loader", options: { modules: true, sourceMap: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
                    { loader: "sass-loader", options: { sourceMap: true } },  // to convert SASS to CSS
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'app', 'index.html') }),
        new webpack.HotModuleReplacementPlugin()
    ]
}