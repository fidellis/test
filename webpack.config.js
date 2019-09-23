var path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: "bundle.js"
//   },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: { loader: "babel-loader" }
          },
          {
            test: /\.html$/,
            use: [{ loader: "html-loader" }]
          },      
          {
            test: /\.s?css$/,
            use: [{ loader: 'style-loader'}, { loader: 'css-loader'}],
            // include: /(node_modules\/src)/,
            // exclude: /node_modules/,
          }
        ]
      },     
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  watch: true,
};