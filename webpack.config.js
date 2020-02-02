const path = require('path');

// let webpackConfig ={
//     stats: {
//         errors: true,
//         errorDetails: true,
//     }
// };

module.exports = {
    mode: 'development',
    entry: [ './src/app.js' ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/   
        }]
    }   
};