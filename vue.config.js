const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { VantResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  publicPath: "./",
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [VantResolver()],
      }),
      Components({
        // 要搜索组件的目录的相对路径
        dirs: ["src/components", "src/views"],
        // 搜索子目录
        deep: true,
        extensions: ["vue", "js", "jsx", "ts", "tsx"],
        // include: [/\.vue$/, /\.vue\?vue/, /\.js$/, /\.jsx$/, /\.ts$/, /\.tsx$/],
        resolvers: [VantResolver()],
      }),
    ],
  },
};
