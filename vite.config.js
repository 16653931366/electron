import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import electron from 'vite-plugin-electron/simple'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
      electron({
        main: {
          entry: 'electron/index.js',
          vite: {
            build: {
              outDir: './dist',
            },
          }
        },
        preload:{
          input: "electron/preload.js",
          vite: {
            build: {
              outDir: './dist',
            },
          }
        }
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
