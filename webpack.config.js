var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/App.js',
    vendor: ['react','react-dom'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015'],
        }
      },
    ]
  },
};
