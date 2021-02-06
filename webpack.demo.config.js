const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const WebpackBar = require('webpackbar')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'sample/demo.js'),
  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: '[name].js',
    library: 'createValidateForm',
    libraryTarget: 'window',
  },
  resolve: {
    extensions: ['.js'],
  },
  externals: {
    jquery: 'jQuery',
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'sample/index.html'),
      inject: true,
      cache: true,
    }),
    new FriendlyErrorsWebpackPlugin(),
    new ErrorOverlayPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/CreateValidateForm.css',
      chunkFilename: 'css/CreateValidateForm.css',
    }),
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({
      cache: true,
      parallel: true,
      terserOptions: {
        parse: {
          ecma: 5,
        },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 2,
        },
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
        ie8: true,
        safari10: true,
      },
    })],
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                babelrc: true,
              },
            },
          },
          {
            test: /\.css$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              {
                loader: 'css-loader',
                options: {
                  // 开启css中的图片打包功能
                  url: true,
                  importLoaders: 1,
                  sourceMap: true,
                },
              },
              // All the rules in postcss.config.js
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  config: {
                    ctx: {
                      'postcss-preset-env': {
                        autoprefixer: {
                          flexbox: 'no-2009',
                        },
                        stage: 3,
                      },
                      'postcss-flexbugs-fixes': {},
                      cssnano: {},
                    },
                  },
                },
              },
            ],
          },
          {
            test: /\.scss$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              {
                loader: 'css-loader',
                options: {
                  // 开启css中的图片打包功能
                  url: true,
                  importLoaders: 2,
                  sourceMap: true,
                },
              },
              // All the rules in postcss.config.js
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  config: {
                    ctx: {
                      'postcss-preset-env': {
                        autoprefixer: {
                          flexbox: 'no-2009',
                        },
                        stage: 3,
                      },
                      'postcss-flexbugs-fixes': {},
                      cssnano: {},
                    },
                  },
                },
              },
              {
                loader: 'sass-loader',
              },
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'image/[name]-[contenthash:8].[ext]',
                  publicPath:'/'
                },
              },
            ],
          },
        ],
      },
    ],
  },
}
