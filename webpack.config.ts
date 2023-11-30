import {buildPlugins} from "./config/build/buildPlugins";

const HtmlWebpackPlugin = require("html-webpack-plugin");
import webpack from "webpack";
import path from "path";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
  paths,
  mode,
  isDev,
});

export default config;
