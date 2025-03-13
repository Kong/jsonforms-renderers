import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      reporter: ['lcov', 'text', 'json-summary', 'json'],
      include: ['src/**/*'],
      exclude: ['src/stories'],
      reportOnFailure: true,
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
    globals: true,
    include: ['tests/**/*.test.ts'],
    environment: 'jsdom',
  },
})
