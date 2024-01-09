const path = require('path');

module.exports = {
  entry: './src/index.js', // Specify your entry file
  output: {
    filename: 'bundle.js', // Specify the output bundle file
    path: path.resolve(__dirname, 'dist'),
  },
};
