import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ tsconfigPath: resolve(__dirname, "tsconfig.lib.json") }),
    libInjectCss(),
  ],
  build: {
    copyPublicDir: false,
    rollupOptions: { external: ["react", "react/jsx-runtime"] },
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
      fileName: "main",
    },
  },
});
