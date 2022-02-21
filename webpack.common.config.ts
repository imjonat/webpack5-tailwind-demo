import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const isProd = process.env.NODE_ENV === 'production'
const DEBUG = !isProd

const cssModuleRegex = /\.module\.less$/

const uniformUrlLoader = {
  loader: 'url-loader',
  options: {
    limit: 8192,
    name: 'imgs/[name]@[hash:8].[ext]',
    publicPath: DEBUG ? '' : '',
  },
}

export const jsprefix = 'scripts'
export const cssprefix = 'styles'
export const imgprefix = 'images'
export const fontprefix = 'fonts'
export const fileprefix = 'files'

const genUniformFileLoader = (folder: string) => {
  const base: {
    loader: string
    options: any
  } = {
    loader: 'file-loader',
    options: {
      name: `${folder}/[name]@[hash:8].[ext]`,
    },
  }
  if (DEBUG) {
    base.options.publicPath = ''
  } else {
    // base.options.postTransformPublicPath = postTransformPublicPath
  }
  return base
}

const rules = [
  {
    test: /\.(ts|js)x?$/i,
    exclude: /node_modules/,
    use: 'babel-loader',
  },
  {
    test: /\.(woff|woff2|eot|ttf)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    ],
  },
  {
    test: /\.svg$/,
    oneOf: [
      {
        issuer: /\.[jt]sx?$/,
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
            options: {
              name: `${imgprefix}/[contenthash:9].[ext]`,
            },
          },
        ],
      },
      {
        issuer: /\.(css|less)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: `${imgprefix}/[contenthash:8].[ext]`,
          },
        },
      },
    ],
  },
  {
    test: /.*\.(gif|png|jpe?g)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: `${imgprefix}/[contenthash:9].[ext]`,
        },
      },
    ],
  },
  {
    test: cssModuleRegex,
    use: [
      'css-hot-loader',
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: true,
          import: true,
          modules: {
            localIdentName: isProd ? '[hash:base64:8]' : '[path][name]__[local]',
            exportLocalsConvention: 'camelCase',
          },
        },
      },
      'postcss-loader',
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
  {
    test: /\.(less|css)$/,
    exclude: [/node_modules/, cssModuleRegex],
    use: [
      'css-hot-loader',
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: true,
          import: true,
          modules: false,
        },
      },
      'postcss-loader',
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
  {
    test: /\.(less|css)$/,
    include: /node_modules/,
    use: [
      'css-hot-loader',
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          sourceMap: true,
          import: true,
          modules: false,
        },
      },
      'postcss-loader',
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              'arcoblue-6':'#3F9CF2',
              'border-radius-small': '8px',
              'border-radius-medium': '10px',
            },
          },
        },
      },
    ],
  },
]

export { rules }
