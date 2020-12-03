const { merge } = require("webpack-merge");
const cssnano = require("cssnano");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");
const baseConfig = require("./webpack.base");

const prodConfig = {
  mode: "production",
  moduel: {
    rules: [
      {
        test: /\.css$/,
        use: "ignore-loader",
      },
      {
        test: /\.less$/,
        use: "ignore-loader",
      },
    ],
  },
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: "react",
          entry:
            "https://11.url.cn/now/lib/15.1.0/react-with-addons.min.js?_bid-3123",
          global: "React",
        },
        {
          module: "react-dom",
          entry: "https://11.url.cn/now/lib/15.1.0/react-dom.min.js?_bid-3123",
          global: "ReactDOM",
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "all",
          minChunks: 2,
        },
      },
    },
  },
};
module.exports = merge(baseConfig, prodConfig);
