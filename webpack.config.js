const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const WebpackBar = require('webpackbar')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: isDev
    ? path.resolve(__dirname, 'sample/demo.js')
    : {
      index:path.resolve(__dirname,
        'src/index.js'),
      verifyRules:path.resolve(__dirname, 'src/verifyRules.js')
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'CreateValidateForm',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js'],
  },
  devtool: isDev ? 'cheap-module-eval-source-map' : false,
  plugins: [
    !isDev && new CleanWebpackPlugin(),
    new WebpackBar(),
    !isDev && new BundleAnalyzerPlugin({
      analyzerMode: isDev ? 'disabled' : 'static'
    }),
    isDev && new HtmlWebpackPlugin({
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
    minimize: !isDev,
    minimizer: [new TerserJSPlugin({
      cache: true,
      parallel: true,
      terserOptions: {
        parse: {
          ecma: 5,
        },
        compress: isDev
          ? false
          : {
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
            test: /\.scss$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              {
                loader: 'css-loader',
                options: {
                  // 开启css中的图片打包功能
                  url: true,
                  importLoaders: 2,
                  sourceMap: isDev,
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
            test: /\.png$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'image/[name]-[contenthash:8].[ext]',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  stats:isDev ? {} : {
    all:false
  },

  devServer: isDev ? {
    quiet:true,
    hot: true,
    port: 3000,
    host: getIP(),
  } : {},
}

function getIP(force) {
  if (force) return force
  const os = require('os')
  const ifaces = os.networkInterfaces()
  for (const key in ifaces) {
    for (const details of ifaces[key]) {
      if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
        return details.address
      }
    }
  }
  return '127.0.0.1'
}
