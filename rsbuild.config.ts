import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html:{
    template:"./static/main.html"
  },
  plugins: [pluginReact()],
  resolve: {
    alias: {
      '@': './src'
    }
  }
});
