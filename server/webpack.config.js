const path = require("path");
const glob = require("glob");

module.exports = {
    entry: glob.sync("./src/**/*.ts"),
    target: 'node',
    externals: /^(?!^\.\/)/,
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'commonjs2'
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
    ]
};