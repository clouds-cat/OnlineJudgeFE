import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

export default {
  base: './',
  plugins: [vue()],
  optimizeDeps: {
    include: []
  },
  server: {
    port: 8009,
    proxy: {
      '/api': {
        target: 'http://localhost:8008',
        changeOrigin: true,              //是否设置同源
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  alias: {
    '@': resolve(__dirname, '/src'),
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output:{
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
}

