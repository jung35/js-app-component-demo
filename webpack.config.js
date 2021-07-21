require("dotenv").config();

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  watchOptions: {
    aggregateTimeout: 500, // delay before reloading
    poll: 1000, // enable polling since fsevents are not supported in docker
  },
  entry: "src/app.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "[contenthash].js",
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom"),
      "react-jss": path.resolve("./node_modules/react-jss"),
      moment: path.resolve("./node_modules/moment"),
      "@babel": path.resolve("./node_modules/@babel"),
      // "@levelcredit/js-lib-api": path.resolve("./node_modules/@levelcredit/js-lib-api/index.js"),
    },
  },
  devServer: {
    port: 9000,
    host: "0.0.0.0",
    public: "0.0.0.0:443",
    allowedHosts: [".rt-devel.com"],
    liveReload: true,
    watchContentBase: true,
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "src/html.ejs",
      title: "[DEV] RentTrack",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  target: "web", // Cannot use ['web', 'es5']
  // https://github.com/webpack/webpack-dev-server/issues/2758 seems to be still problem
};
