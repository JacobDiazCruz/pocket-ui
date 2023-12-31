const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader',
            },
        },
        // ...other rules
    ],
  },
};