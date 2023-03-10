import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    viewportWidth: 1366,
    viewportHeight: 768,
  },

  e2e: {
    baseUrl: 'http://localhost:5173'
  },
});
