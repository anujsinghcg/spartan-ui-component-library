const StyleDictionary = require('style-dictionary');

const config = {
  source: ['src/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables'
        }
      ]
    }
  }
};

StyleDictionary.extend(config).buildAllPlatforms();
    const transformTokens = (tokens) => {
      return tokens.reduce((acc, token) => {
        let current = acc;
        const paths = token.path;
        paths.slice(0, -1).forEach(path => {
          if (!current[path]) current[path] = {};
          current = current[path];
        });
        current[paths[paths.length - 1]] = `var(${token.name}, ${token.value})`;
        return acc;
      }, {});
    };

    return `/**
 * Generated Tailwind Theme
 * Do not edit directly
 */
module.exports = ${JSON.stringify(transformTokens(dictionary.allTokens), null, 2)};`;
  }
});

// Build configurations
module.exports = {
  source: ['src/**/*.json'],
  platforms: {
    css: {
      transforms: ['name/css-variable', 'size/rem'],
      buildPath: '../projects/spartan-ui-component-lib/src/styles/',
      files: [{
        destination: '_variables.css',
        format: 'css/variables'
      }]
    },
    js: {
      transforms: ['name/tailwind', 'size/rem'],
      buildPath: '../',
      files: [{
        destination: 'projects/spartan-ui-component-lib/tailwind-theme.cjs',
        format: 'javascript/tailwind-theme'
      }]
    }
  }
};