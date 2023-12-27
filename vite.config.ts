import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  /* Config Alias */
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "./src/"),
      "@components":`${path.resolve(__dirname, "./src/home/components/")}`,
      "@pages":`${path.resolve(__dirname, "./src/pages/")}`,
      "@scss":`${path.resolve(__dirname, "./src/scss/")}`,
      "@routes":`${path.resolve(__dirname, "./src/routes/")}`,
      "@service":`${path.resolve(__dirname, "./src/service/")}`,
    }
  },

  /* Config Css global variable */
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "src/scss/index.scss";` },
    }
  }
})
