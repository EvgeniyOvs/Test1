import react from '@vitejs/plugin-react';
import {defineConfig} from "vite";
import sass from 'vite-plugin-sass';
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(
    ), sass],
  };
});