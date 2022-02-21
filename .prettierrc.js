module.exports = {
  singleQuote: true,
  tabWidth: 2,
  bracketSpacing: true,
  trailingComma: 'none',
  printWidth: 100,
  semi: false,
  overrides: [
    {
      files: '.prettierrc.js',
      options: { parser: 'typescript' }
    }
  ],
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  quoteProps: 'as-needed',
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'auto'
}
