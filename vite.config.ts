import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.PB_TYPEGEN_URL': JSON.stringify(env.PB_TYPEGEN_URL),
      'process.env.PB_TYPEGEN_EMAIL': JSON.stringify(env.PB_TYPEGEN_EMAIL),
      'process.env.PB_TYPEGEN_PASSWORD': JSON.stringify(
        env.PB_TYPEGEN_PASSWORD
      ),
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@types': path.resolve(__dirname, './src/types'),
        '@context': path.resolve(__dirname, './src/context'),
        '@reducer': path.resolve(__dirname, './src/reducer'),
      },
    },
  };
});
