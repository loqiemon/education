import webpack from "webpack";
import path from "path";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    // mainFiles: ["index"],
    alias: {
      "@app": path.join(__dirname, "../..", "src/app"),
      "@pages": path.join(__dirname, "../..", "src/pages"),
      "@entities": path.join(__dirname, "../..", "src/entities"),
      "@features": path.join(__dirname, "../..", "src/features"),
      "@shared": path.join(__dirname, "../..", "src/shared"),
      "@widgets": path.join(__dirname, "../..", "src/widgets"),
    },
  };
}
