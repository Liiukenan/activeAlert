// next.config.js
const withStylus = require('@zeit/next-stylus')
module.exports = {
    webpack(config, ...args){
      config = withStylus().webpack(config, ...args);

      return config;
    },
    devIndicators: {
        autoPrerender: false
    },
    assetPrefix: "./"

}