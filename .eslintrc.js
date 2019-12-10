module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint-config-ts', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-inferrable-types': 'off',
    'comma-dangle': ['error', 'never']
  }
};
