// next.config.js
const withStylus = require('@zeit/next-stylus')
const postcssNormalize = require('postcss-normalize');
module.exports = {
    webpack(config, ...args){
      config = withStylus().webpack(config, ...args);

      return config;
    },
    const getStyleLoaders = (cssOptions, preProcessor) => {
        const loaders = [
            
        ]
    }
    devIndicators: {
        autoPrerender: false,
    },

}