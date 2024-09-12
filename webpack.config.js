const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modulesDir = path.resolve(__dirname, "node_modules");
module.exports = (env) => {
  return {
    mode: env.mode ?? "development",

    devServer: {
      port: 3000,
      open: true,
    },

    entry: path.resolve(__dirname, "src", "App.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [new HtmlWebpackPlugin({ template: "index.html" })],

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: modulesDir,
        },

        {
          test: /\.css$/,
          exclude: modulesDir,
          use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".css"],
    },
  };
};
