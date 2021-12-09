require("dotenv").config({
  path: "./.env",
});

const path = require("path");
const { DefinePlugin } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new DefinePlugin({
      "process.env.GCP_API_KEY": JSON.stringify(process.env.GCP_API_KEY),
    }),
  ],
};
