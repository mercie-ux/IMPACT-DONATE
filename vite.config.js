import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  const themeVariables = {
    'primary-color': '#d4f674',
    'link-color': '#4a90e2',
    'success-color': '#52c41a',
    'warning-color': '#faad14',
    'error-color': '#f5222d',
    'font-size-base': '16px',
    'border-radius-base': '4px',
  };

  return {
    plugins: [react()],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: themeVariables, // Apply custom theme variables
        },
      },
    },
    // server: {
    //   port: 7001, // Set a default port
    // },
  };
});
