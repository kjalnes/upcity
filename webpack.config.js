const path = require('path')

module.exports = {
    entry: './src/composition/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
