import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        createAccount: './create-account.html',
        supplierDashboard: './supplier-dashboard.html'
        // add more pages here
      }
    }
  }
})