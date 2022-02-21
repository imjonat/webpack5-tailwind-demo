module.exports = {
  babelrc: false,
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      require.resolve('babel-plugin-named-asset-import'),
      {
        loaderMap: {
          svg: {
            ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
          },
        },
      },
    ],
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    // [
    //   'babel-plugin-import',
    //   {
    //     libraryName: '@arco-design/web-react',
    //     libraryDirectory: 'es',
    //     camel2DashComponentName: false,
    //     style: true, // 样式按需加载
    //   },
    // ],
    // [
    //   'babel-plugin-import',
    //   {
    //     libraryName: '@arco-design/web-react/icon',
    //     libraryDirectory: 'react-icon',
    //     camel2DashComponentName: false,
    //   },
    // ],
  ],
}
