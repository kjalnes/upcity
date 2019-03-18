const path = require('path')

module.exports = {
    entry: './ui_exercise/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
