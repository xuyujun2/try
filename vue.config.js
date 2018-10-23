module.exports = {
  devServer: {
    proxy: {
      '/v2': {
        target: 'https://api.awesomes.cn',
        changeOrigin: true,
         pathRewrite: {
            '^/v2': ''
          }
      }
         
    }
  }
}
