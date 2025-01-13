import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  base: '/sumaiyakawsar.github.io/',
  css: {
    modules:{
      localConvention: "camelCase",
    },
  },
});
