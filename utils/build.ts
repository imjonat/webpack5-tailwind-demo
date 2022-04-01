import webpack from 'webpack'
import config from '../webpack.config'

// @ts-ignore
delete config.chromeExtensionBoilerplate

config.mode = 'production'

webpack(config, function (err) {
  if (err) {
    throw err
  }
})
