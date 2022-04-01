import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import WebpackBar from 'webpackbar'
import { rules } from './webpack.common.config'
import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
  mode: 'development',
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  entry: './src/index.tsx',
  module: {
    rules,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '~': path.resolve(__dirname, './'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new WebpackBar({}),
  ],
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    historyApiFallback: {
      index: '/',
    },
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    compress: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
}

export default config
