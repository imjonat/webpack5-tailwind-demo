import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import config, { outputDir } from '../webpack.config'

// @ts-ignore
const options = config.chromeExtensionBoilerplate || {}
const excludeEntriesToHotReload = options.notHotReload || []

const PORT = process.env.PORT || 3000

if (typeof config.entry === 'object') {
  for (const entryName in config.entry) {
    if (excludeEntriesToHotReload.indexOf(entryName) === -1) {
      config.entry[entryName] = [
        'webpack/hot/dev-server',
        `webpack-dev-server/client?hot=true&hostname=localhost&port=${PORT}`,
      ].concat(config.entry[entryName])
    }
  }
}

config.plugins = [new webpack.HotModuleReplacementPlugin(), ...(config.plugins || [])]

// @ts-ignore
delete config.chromeExtensionBoilerplate

const compiler = webpack(config)

const server = new WebpackDevServer(
  {
    // @ts-ignore
    https: false,
    hot: false,
    client: false,
    host: 'localhost',
    port: PORT,
    static: {
      directory: outputDir,
    },
    devMiddleware: {
      publicPath: `http://localhost:${PORT}/`,
      writeToDisk: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: 'all',
  },
  compiler,
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept()
}

;(async () => {
  // @ts-ignore
  await server.start()
})()
