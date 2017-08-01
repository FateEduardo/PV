var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VersionFile = require('webpack-version-file-plugin');
var outputFilePath = "/generated"

module.exports = {
    context: __dirname,
    entry: {
        'app': './src/main.ts',
        'polyfills': [
          'core-js/es6',
          'core-js/es7/reflect',
          'zone.js/dist/zone'
        ]
    },
    output: {
        path: __dirname + outputFilePath,
        filename: '[name].[hash].js',
        publicPath: "/pv-app/"
    },
    module: {
        loaders: [
          { test: /\.component.ts$/, loader: 'ts!angular2-template' },
          { test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts' },
          { test: /\.html$/, loader: 'raw' },
          {
              test: /\.css$/,
              loader: 'style!css'
          },
          {
              test: /\.(png|jpe?g|gif|ico)$/,
              loader: 'file?name=[name].[hash].[ext]'
          },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=100000' }

        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html', '.css'],
        alias: {
            bootstrap_css: __dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css',
            my_css: __dirname + '/src/asset/css/pv.css'
        }
    },
    devServer: {
        inline: true,
        port: 8484,
        historyApiFallback: {
            index: '/pv-app/'
        }
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
          name: 'polyfills'
      }),
      new HtmlWebpackPlugin({
          template: __dirname + '/src/index.html'
      }),
      new webpack.DefinePlugin({
          app: {
              environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'production')
          }
      }),
      //generate version information when build
      new VersionFile({
          packageFile: __dirname + '/package.json',
          template: __dirname + '/node_modules/webpack-version-file-plugin/version.ejs',
          outputFile: __dirname + outputFilePath + '/version.json'
      })
    ]

};
