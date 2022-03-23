const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          stream: require.resolve("stream-browserify"),
          assert: require.resolve("assert"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          crypto: require.resolve("crypto-browserify"),
          os: require.resolve("os-browserify"),
          url: require.resolve("url"),
          path: require.resolve("path-browserify"),
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser",
        }),
      ],
    },
  },
};
