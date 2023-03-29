// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";

export default {
  // ... other configuration
  plugins: [
    // ... other plugins
    resolve({
      browser: true,
    }),
  ],
};
