// const baseUrl = 'http://95.179.211.152';
const baseUrl = 'http://95.179.211.152:9393';

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/': {
        target: baseUrl,
        changeOrigin: true,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        ws: false,
        pathRewrite: {
          // '^/meiju-center': '/meiju-center'
        },
      },
    },
  },
};
