module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      }
    ]
  }
<<<<<<< HEAD
};
=======
}
>>>>>>> 5da7fa05f6ee8cf5a7087c21a7cf45b95b602000
