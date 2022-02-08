const path = require('path');

module.exports = {
  entry: './client/compile/app.js',
  mode:'development',
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
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env','@babel/preset-react', {
              targets: {
                node: 'current',
              },
            }]
          }
        }
      }
    ],
  },
};