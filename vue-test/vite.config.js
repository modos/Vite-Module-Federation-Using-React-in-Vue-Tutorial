import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      federation({
        name: 'vue',
        remotes: {
          react: 'http://127.0.0.1:5500/react-test/dist/assets/remoteEntry.js'
        }
      })
  ]
})
