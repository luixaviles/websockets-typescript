const path = require("path");

module.exports = {
    entry: './src/index.ts',
    target: 'node',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build')
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
    }
};