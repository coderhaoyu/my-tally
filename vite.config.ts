import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

const resolve = (pathname) => path.resolve(__dirname, pathname)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      react(),
      legacy({
        targets: ['chrome < 60', 'edge < 15', 'firefox<59'],
        renderLegacyChunks: true
      })
    ],

    resolve: {
      alias: {
        '@': resolve('src'),
        components: resolve('src/components'),
        assets: resolve('src/assets')
      }
    }
  }
})
