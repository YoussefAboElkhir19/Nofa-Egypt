import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/nofa-egypt/", // Your repo name here
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  server: {
    historyApiFallback: true, // Important for React Router to work
  },
});
