/// <reference types="vitest" />
import { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@layouts": resolve(__dirname, "./src/layouts"),
			"@components": resolve(__dirname, "./src/components/index.tsx"),
			"@types": resolve(__dirname, "./src/types/index.ts"),
			"@styles": resolve(__dirname, "./src/styles/index.css"),
			"@db": resolve(__dirname, "./src/db"),
			"@providers": resolve(__dirname, "./src/providers/index.tsx"),
			"@contexts": resolve(__dirname, "./src/contexts/index.tsx"),
			"@constants": resolve(__dirname, "./src/constants/index.ts"),
			"@mocks": resolve(__dirname, "./src/mocks/index.ts"),
		},
	},
	test: {
		environment: "happy-dom",
		setupFiles: ["./vitest.setup.ts"],
	},
});
