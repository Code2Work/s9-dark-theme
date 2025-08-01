import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Reporter from "./src/tests/reporter.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test.setup.js",
    reporters: [[
      "default",
      {
        "summary": false,
      },
    ], new Reporter()],
  },
});
