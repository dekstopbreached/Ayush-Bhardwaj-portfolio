/// <reference path="./vite.config.d.ts" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "gsap-trial/ScrollSmoother": "/src/shims/gsap-trial/ScrollSmoother.ts",
      "gsap-trial/SplitText": "/src/shims/gsap-trial/SplitText.ts",
    },
  },
  plugins: [react()],
});
