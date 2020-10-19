module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'app.min.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        // query: {
        //   presets: [
        //     ['latest', { modules: false }],
        //   ],
        // },
      },
    ],
  },
};