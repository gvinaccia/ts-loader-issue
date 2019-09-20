const path = require("path");

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: { projectReferences: true }
      }
    ]
  }
};
