// remix.config.js
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/trading/build/",
  serverBuildPath: "build/index.js",
  serverBuildDirectory: "build",
  serverModuleFormat: "esm",
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_routeConvention: true,
  },
  // 정적 export 가능하도록 설정
  output: "static",
};
