module.exports = {
  'env': {
    browser: true,
    es2021: true,
    node: true,
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'overrides': [],
  'parserOptions': {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  'plugins': ['react', 'unused-imports'],
  'rules': {
    'react/prop-types': 'off',    
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    'no-unused-vars': 'off', // or '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}
