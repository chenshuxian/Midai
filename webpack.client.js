const path = require("path");


module.exports = {
  target: "node",
  entry: "./src/client/client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },   {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  }
};
