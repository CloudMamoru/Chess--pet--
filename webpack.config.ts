import path from "path";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from "webpack";

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].[contenthash].ts',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  mode: 'development',
  plugins: [new HTMLWebpackPlugin({
    template: path.resolve(__dirname, 'public', 'index.html'),
  }), new webpack.ProgressPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};

export default config;