// postcss.config.js
export default {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': false 
      }
    },
    autoprefixer: {}
  }
};
