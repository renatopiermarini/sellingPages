import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import { readdirSync } from 'fs';

const absolutePathAliases = {};
// Root resources folder
const srcPath = path.resolve('./src/');
// Ajust the regex here to include .vue, .js, .jsx, etc.. files from the resources/ folder
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map(
  (dirent) => dirent.name.replace(/(\.jsx){1}(x?)/, '')
);

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});

export default defineConfig({
  plugins: [react()],

  root: './',
  resolve: {
    alias: {
      ...absolutePathAliases,
    },
  },

  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
});
