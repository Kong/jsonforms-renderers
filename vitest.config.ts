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
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
      },
    },
    globals: true,
    include: ['tests/**/*.test.ts'],
    environment: 'jsdom',
  },
})
