const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          emitErrors: true,
        },
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              camelCase: true,
            },
          },
          { loader: 'sass-loader' },
        ],
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(json)$/,
        use: ['json-loader'],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
