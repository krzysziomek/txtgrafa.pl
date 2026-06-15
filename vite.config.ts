import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { generatePacksList } from "./scripts/generate-packs.js";

function generatePacksPlugin() {
  return {
    name: "vite-plugin-generate-packs",
    buildStart() {
      generatePacksList();
    },
    configureServer(server: any) {
      const targetDirs = [
        path.resolve(__dirname, "public/pliki/overlay"),
        path.resolve(__dirname, "public/pliki/ramki"),
        path.resolve(__dirname, "public/pliki/pozostale")
      ];
      server.watcher.add(targetDirs);
      server.watcher.on("all", (event: string, filePath: string) => {
        if (targetDirs.some(dir => filePath.startsWith(dir))) {
          generatePacksList();
        }
      });
    }
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), generatePacksPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});