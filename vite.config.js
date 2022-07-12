import vue from '@vitejs/plugin-vue'

export default {
  // base: './',
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
  }
}

