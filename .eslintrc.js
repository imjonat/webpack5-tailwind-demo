module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['import', '@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  globals: {
    // Your global variables (setting to false means it"s not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
      },
    ],

    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',

    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-shadow': ['warn', { builtinGlobals: false }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unused-expressions': 'warn',
    // https://github.com/typescript-eslint/typescript-eslint/issues/1824
    '@typescript-eslint/indent': 'off',

    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'no-param-reassign': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'no-eval': 'off',
    'no-useless-constructor': 'off',
    'no-unused-expressions': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-useless-escape': 'off',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-return-assign': ['error', 'except-parens'],
    'no-redeclare': 'off',
    'no-script-url': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-alert': 'off',
    'no-restricted-globals': 'off',

    indent: 'off',
    'arrow-parens': 'off',
    'linebreak-style': 'off',
    'lines-between-class-members': 'off',
    radix: ['error', 'as-needed'],
    'max-len': 'off',
    'max-classes-per-file': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    curly: ['error', 'all'],
    'arrow-body-style': 'off',
    camelcase: 'off',

    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['warn', 'always-multiline'],
    'eol-last': 'off',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    'id-match': 'error',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-extra-semi': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'no-trailing-spaces': 'error',
    'no-unsafe-finally': 'error',
    'no-var': 'error',
    'quote-props': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': ['off', 'never'],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'prefer-promise-reject-errors': 'off',
    'max-nested-callbacks': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    'no-unreachable': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-implied-eval': 'off',

    'react/self-closing-comp': 'warn',
    'prefer-template': 'warn',
  },
}
