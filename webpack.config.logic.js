const path = require('path')
const paradigm = process.env.PARADIGM;

module.exports = {
    entry: `./logic_exercise/${paradigm}/index.js`,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'distLogic')
    }
};
