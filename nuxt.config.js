const path = require('path');
const themeDir = '/themes/'+__dirname.split(path.sep).pop();
module.exports = {
  srcDir: 'src/',
  modules: [
    '~/modules/october',
    '@nuxtjs/axios',
  ],
  head: {
    htmlAttrs: {
      lang: 'en-US'
    }
  },
  build: {
    publicPath: themeDir +'/assets/',
  },
  generate: {
    fallback: '404.htm', 
    dir: 'pages'
  },
  
}
