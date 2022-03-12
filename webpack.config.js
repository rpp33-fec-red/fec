const path = require('path');

module.exports = {
  entry: './client/compile/app.js',
  mode:'production',
  output: {
    path: path.resolve(__dirname, 'client/public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'client/public'),
    },
    port: 4000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "url-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      }
    ],
  },
};