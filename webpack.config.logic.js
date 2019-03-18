const path = require('path')

const paradigm = process.env.PARADIGM;
console.log('paradigm', paradigm)
module.exports = {
    entry: `./logic_exercise/${paradigm}/index.js`,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
