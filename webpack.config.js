const path = require('path');
const fs = require("fs");

const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');


module.exports = {
  entry: ['./server.js'],
  //entry can be an object. 
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  resolve:
  {
    extensions: ['.js'],
    alias: {
      'handlebars': 'handlebars/dist/handlebars.js'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new NodemonPlugin()
  ],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /my_client\/.*\.js$/,
        use: 'imports-loader?define=>false'
      },
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          babelrc: true
        }
      }
    ]

  },
  node: {
    fs:'empty',
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },

  devServer: {
    contentBase: './dist/server.js',
    hot: true,
    compress: true,
    inline: true,

    host: 'localhost', // Defaults to `localhost`
    port: 3000, // Defaults to 8080
    proxy: {
      '^/api/*': {
        target: 'http://localhost:8080/',
        secure: false
      }

    }
  }

}