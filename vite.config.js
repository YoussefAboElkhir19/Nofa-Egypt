import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  base: "/nofa-egypt/", // Your repo name here
  server: {
    historyApiFallback: true, // Important for React Router to work
  },
});
