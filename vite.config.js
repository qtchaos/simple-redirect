import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      __REDIRECT_TO__: JSON.stringify(env.REDIRECT),
    },
  };
});
