/**
 * Tailwind configuration — created manually because `npx tailwindcss init -p` failed.
 * Adjust the `content` paths to match your app and library source files if needed.
 */
// Try to load the Spartan preset from the local library. If it isn't available,
// the require will throw and we'll fallback to an empty array.
let spartanPreset;
try {
  spartanPreset = require('./projects/spartan-ui-component-lib/tailwind-preset.cjs');
} catch (e) {
  spartanPreset = undefined;
}

module.exports = {
  presets: spartanPreset ? [spartanPreset] : [],
  content: [
    './src/**/*.{html,ts}',
    './projects/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
