import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Better chunking for faster initial load
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    // Compress assets
    assetsInlineLimit: 4096,
    // Enable source map for debugging but keep builds small
    sourcemap: false,
    // Minify
    minify: "esbuild",
    target: "esnext",
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
