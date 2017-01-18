const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
      },
    ],
  },
  postcss: [
    autoprefixer({
      browsers: [
        'ie >= 10',
        'last 2 versions',
        'last 2 android versions',
        'last 2 and_chr versions',
        'iOS >= 8',
      ],
    }),
  ],
};
