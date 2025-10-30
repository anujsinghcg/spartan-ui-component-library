const fs = require('fs');
const path = require('path');

// Load design tokens
const tokens = require('./src/design-tokens.json');

// Function to flatten token object
function flattenTokens(obj, prefix = '') {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newPrefix = prefix ? `${prefix}-${key}` : key;
    
    if (value.value) {
      acc[`--${newPrefix}`] = value.value;
    } else {
      Object.assign(acc, flattenTokens(value, newPrefix));
    }
    
    return acc;
  }, {});
}

// Generate CSS variables
const flatTokens = flattenTokens(tokens);
const cssContent = `:root {\n${Object.entries(flatTokens)
  .map(([key, value]) => `  ${key}: ${value};`)
  .join('\n')}\n}`;

// Ensure build directory exists
const buildDir = path.join(__dirname, 'build', 'css');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Write CSS file
fs.writeFileSync(path.join(buildDir, 'variables.css'), cssContent);
console.log('CSS variables generated successfully!');