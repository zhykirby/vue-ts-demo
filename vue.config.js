let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    publicPath: "",
    //当运行vue-cli-service build时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除（构建时传入 --no-clean 可关闭该行为）
    outputDir: "webApp",
    //放置生成的静态资源（js、css、img、fonts）的（相对于outputDir）目录
    assetsDir: "assets",
    //指定生成的index.html的输出路径（相对于outputDir）。也可以是一个绝对路径。
    indexPath: "index.html",
    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
    filenameHashing: true,
    //多页面
    pages: undefined,
    //编译警告
    lintOnSave: false,
    //编译模式：是否runtime+compiler，设置true可以使用template（源码构建时会将template转成render，因此会增加开销）
    runtimeCompiler: true,
    //默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies: [],
    //生产环境的source map，取消可以加速生产环境构建
    //productionSouceMap: false,
    //设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
    //crossorgin: undefined,
    //在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次。
    integrity: false,
    //反向代理
    devServer: {
        //proxy: {
        //  '/api': {
        //      target: '1',
        //      ws: true,
        //      changeOrigin: true
        //  }
        //}
    },
    chainWebpack: config => {
        config.resolve.alias
          .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      }
}