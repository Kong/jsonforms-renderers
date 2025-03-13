import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    vue(),
    ...(process.env.ANALYZE ? [visualizer({
      template: 'treemap',
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'analyze.html',
    })] : []),
  ],
  build: {
    outDir: 'lib',
    lib: {
      entry: 'src/index.ts',
      name: 'jsonforms-kong-renderers',
      fileName: 'jsonforms-kong-renderers',
    },
    rollupOptions: {
      external: [
        'vue',
        '@jsonforms/core',
        '@jsonforms/vue',
        '@kong/kongponents',
        '@kong/kongponents/dist/style.css',
      ],
      output: {
        globals: {
          vue: 'Vue',
          '@jsonforms/core': 'JsonFormsCore',
          '@jsonforms/vue': 'JsonFormsVue',
          '@kong/kongponents': 'Kongponents',
        },
      },
    },
  },
})
