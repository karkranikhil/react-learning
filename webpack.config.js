const path = require('path')

module.exports={
  context: __dirname, // it tells we are running from root directory
  entry:"./js/ClientApp.jsx",
  devtool: "cheap-eval-source-map", //inline all my source map
  output: {
    path: path.join(__dirname,'public'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js','.jsx','json'] // order by which it search file extension
  },
  stats: {
    colors:true,
    reasons: true,
    chunks:true
  },
  module: {
    rules: [  //rules that webpack use for the loaders(tools used by webpack)
      {
        test:/\.jsx?$/, //js or jsx
        loader: "babel-loader"
      }
    ]
  }
}