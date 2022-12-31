import {defineConfig} from 'vite'
import federation from "@originjs/vite-plugin-federation"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'react',
            filename: "remoteEntry.js",
            exposes: {
                './Button': './src/Button.jsx'
            },
            shared: ['react']
        })
    ],
    build: {
        target: 'esnext',
        minify: true,
        cssCodeSplit: false
    }
})
