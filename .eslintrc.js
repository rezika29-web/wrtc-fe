module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'zustand/dependency-warning': 'off',
    'no-unused-vars': 'off',
    'no-restricted-exports': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-param-reassign': 1,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': [
      2,
      {
        ignore: [
          '^swiper/',
          '@nexys',
          'components',
          'css',
          'containers',
          'contexts',
          'fields',
          'stores',
          'styles',
          'utils',
          'views',
          'pages',
          'models',
          'icons',
          'hooks',
          'data',
          'routes',
          'constant',
          'constants',
          'svgs',
          'validations',
          'shortcuts',
          'library',
          'proptypes',
          'services',
          'layouts',
          'helpers',
          'images',
          'HOC',
          'assets',
        ],
      },
    ],
  },
  settings: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
