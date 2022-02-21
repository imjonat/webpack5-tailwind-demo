import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import WebpackBar from 'webpackbar'
import CopyPlugin from 'copy-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { cssprefix, jsprefix, rules } from './webpack.common.config'

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: `${jsprefix}/[name].[contenthash:8].js`,
    chunkFilename: `${jsprefix}/[name].[contenthash:8].chunk.js`,
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
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
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${cssprefix}/[contenthash:8].css`,
      chunkFilename: `${cssprefix}/[contenthash:8].css`,
    }),
    new UglifyJsPlugin(),
    new CompressionPlugin({
      test: /\.js$|\.css$/,
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8,
    }),
    process.env.STATS_MODE &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 8889,
        reportFilename: 'report.html',
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: 'stats.json',
        statsOptions: null,
        logLevel: 'info',
      }),
    new WebpackBar({}),
    new CopyPlugin({
      patterns: [{ from: 'public', to: '' }],
    }),
  ].filter(Boolean),
  devtool: false,
}

export default config
