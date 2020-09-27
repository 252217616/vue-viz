module.exports = {
    // css的处理
    css: {
      // 向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-pxtorem')({ // eslint-disable-line
              rootValue: 100, // 换算的基数
              propList: ['*'],
            })
          ],
        },
      },
    },
    // 所有 webpack-dev-server 的选项都支持
    // devServer: {
    //   host: 'localhost',
    //   proxy: {
    //     '/px': {
    //       target: 'http://gp.retire.li',
    //       changeOrigin: true,
    //     },
    //   },
    //   overlay: {
    //     warnings: true,
    //     errors: true
    //   },
    //   disableHostCheck: true,
    // }
  };