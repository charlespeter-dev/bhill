import path from "path";

export default {
  base: './',
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  build: {
    outDir: path.join(__dirname, "build"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.html'),
        ty: path.resolve(__dirname, 'src/ty.html')
      }
    },
  },
};