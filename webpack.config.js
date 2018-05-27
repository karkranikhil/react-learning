const path = require('path')
const webpack = require('webpack');
module.exports={
  context: __dirname, // it tells we are running from root directory
  entry:[
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://locahost:8080",
    "webpack/hot/only-dev-server",
    "./js/ClientApp.jsx"],
  devtool: "cheap-eval-source-map", //inline all my source map
  output: {
    path: path.join(__dirname,'public'),
    filename: "bundle.js",
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js','.jsx','json'] // order by which it search file extension
  },
  stats: {
    colors:true,
    reasons: true,
    chunks:true
  },
  devServer: {
    publicPath:'/public/', //from where our bundle is serve from
    historyApiFallback:true //something send it to client, client will worried about routing
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
  module: {
    rules: [  //rules that webpack use for the loaders(tools used by webpack)
      {
        enforce: "pre", // it ensure eslint run before babel
        test:/\.jsx?$/,
        loader: "eslint-loader",
        exclude:/node_module/
      },
      {
        test:/\.jsx?$/, //js or jsx
        loader: "babel-loader"
      }
    ]
  }
}