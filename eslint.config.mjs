import eslintKongUiConfig from '@kong/eslint-config-kong-ui'

export default [
  ...eslintKongUiConfig,
  {
    ignores: [
      '**/lib/',
      'storybook-static/',
    ],
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    rules: {
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
]
