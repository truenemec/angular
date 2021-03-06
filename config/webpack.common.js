const webpack = require('webpack');
const helpers = require('./helpers');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlElementsPlugin = require('./html-elements-plugin');

/*
 * Webpack Constants
 */
const METADATA = {
  title: 'Angular2',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

module.exports = {
  metadata: METADATA,
  entry: {
    'polyfills': './src/polyfills.browser.ts',
    'vendor':    './src/vendor.browser.ts',
    'main':      './src/main.browser.ts'
  },
  
  resolve: {    
    extensions: ['', '.ts', '.js', '.json'],    
    root: helpers.root('src'),
    modulesDirectories: ['node_modules'],
  },  
  module: {    
    preLoaders: [      
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular'),
          helpers.root('node_modules/@ngrx'),
          helpers.root('node_modules/@angular2-material'),
        ]
      }
    ],    
    loaders: [      
      {
        test: /\.ts$/,
        loaders: ['ts-loader', 'angular2-template-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },      
      {
        test: /\.json$/,
        loader: 'json-loader'
      },      
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },
      {
        test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/,
        loader: 'imports?jQuery=jquery'
      },
      {
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports?jQuery=jquery'
      }
    ]
  },
  
  plugins: [    
    new ForkCheckerPlugin(),    
    new webpack.optimize.OccurenceOrderPlugin(true),    
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
    
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),    
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),    
    new HtmlElementsPlugin({
      headTags: require('./head-config.common')
    }),
      //bootstrap loader
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      'Tether': 'tether',
      'window.Tether': 'tether'
    })
  ],  
  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
