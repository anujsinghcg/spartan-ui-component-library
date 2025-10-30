/** @type {import('tailwindcss').Config} */
const theme = require('./tailwind-theme.cjs');

module.exports = {
  theme: {
    extend: {
      // Generated theme from Style Dictionary
      ...theme,
      // Additional theme extensions if needed
      colors: {
        spartan: theme.colors.primary,
        ...theme.colors.semantic,
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        // Additional spacings matching 8pt grid
        '4.5': '1.125rem',  // 18px
        '13': '3.25rem',    // 52px
        '15': '3.75rem',    // 60px
      },
      fontFamily: {
        'spartan': ['Inter', 'system-ui', 'sans-serif'],
        'spartan-mono': ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      },
      borderRadius: {
        'spartan-sm': '0.25rem',
        'spartan': '0.375rem',
        'spartan-md': '0.5rem',
        'spartan-lg': '0.75rem',
        'spartan-xl': '1rem',
      },
      boxShadow: {
        'spartan-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'spartan': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'spartan-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'spartan-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      }
    }
  },
  plugins: [],
  // Component class definitions using the design tokens above
  theme: {
    extend: {
      // Example button variants using the Spartan design system
      '.btn-spartan': {
        '@apply rounded-spartan px-4 py-2 font-spartan font-medium transition-colors duration-200': {},
        '&-primary': {
          '@apply bg-spartan-500 text-white hover:bg-spartan-600': {},
        },
        '&-secondary': {
          '@apply bg-spartan-100 text-spartan-700 hover:bg-spartan-200': {},
        },
        '&-outline': {
          '@apply border border-spartan-500 text-spartan-500 hover:bg-spartan-50': {},
        }
      },
      // Input styles
      '.input-spartan': {
        '@apply rounded-spartan border border-gray-300 px-3 py-2 font-spartan': {},
        '@apply focus:border-spartan-500 focus:ring-1 focus:ring-spartan-500': {},
        '@apply disabled:bg-gray-50 disabled:text-gray-500': {},
      },
      // Card styles
      '.card-spartan': {
        '@apply rounded-spartan-lg bg-white p-6 shadow-spartan': {},
        '@apply hover:shadow-spartan-md transition-shadow duration-200': {},
      }
    }
  }
};
