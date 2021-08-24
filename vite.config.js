import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.js"),
            name: "vue3ganttastic",
            fileName: (format) => `vue-3-ganttastic.${format}.js`,
        },
    },
    plugins: [vue()],
    rollupOptions: {
        external: ["vue", "moment"],
        output: {
            globals: {
                vue: "Vue",
                moment: "moment"
            },
        },
    },
});
