import { sveltekit } from "@sveltejs/kit/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

const config = {
  plugins: [
    nodePolyfills({
      globals: {
        Buffer: true,
        process: true,
      },
      include: ["crypto"],
    }),
    sveltekit(),
  ],
};

export default config;
