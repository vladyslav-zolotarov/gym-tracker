import * as path from 'path';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    server: {
      watch: {
        usePolling: true,
      },
    },
    define: {
      'process.env.PB_TYPEGEN_URL': JSON.stringify(env.PB_TYPEGEN_URL),
      'process.env.PB_TYPEGEN_EMAIL': JSON.stringify(env.PB_TYPEGEN_EMAIL),
      'process.env.PB_TYPEGEN_PASSWORD': JSON.stringify(
        env.PB_TYPEGEN_PASSWORD
      ),
    },
    plugins: [react(), TanStackRouterVite()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@types': path.resolve(__dirname, './src/types'),
        '@helpers': path.resolve(__dirname, './src/helpers'),
        '@services': path.resolve(__dirname, './src/services'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
      },
    },
  };
});
