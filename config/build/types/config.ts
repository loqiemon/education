export type BuildMode = "production" | "development" | "none";
export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}
export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
