const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      primary: {
        50: 'var(--colors-primary-50)',
        100: 'var(--colors-primary-100)',
        200: 'var(--colors-primary-200)',
        300: 'var(--colors-primary-300)',
        400: 'var(--colors-primary-400)',
        500: 'var(--colors-primary-500)',
        600: 'var(--colors-primary-600)',
        700: 'var(--colors-primary-700)',
        800: 'var(--colors-primary-800)',
        900: 'var(--colors-primary-900)',
      },
      semantic: {
        error: 'var(--colors-semantic-error)',
        warning: 'var(--colors-semantic-warning)',
        success: 'var(--colors-semantic-success)',
        info: 'var(--colors-semantic-info)',
      },
    },
    fontFamily: {
      sans: ['var(--typography-fontFamilies-primary)'],
      mono: ['var(--typography-fontFamilies-mono)'],
    },
    fontSize: {
      xs: ['var(--typography-fontSizes-xs)'],
      sm: ['var(--typography-fontSizes-sm)'],
      base: ['var(--typography-fontSizes-base)'],
      lg: ['var(--typography-fontSizes-lg)'],
      xl: ['var(--typography-fontSizes-xl)'],
      '2xl': ['var(--typography-fontSizes-2xl)'],
      '3xl': ['var(--typography-fontSizes-3xl)'],
    },
    lineHeight: {
      none: 'var(--typography-lineHeights-none)',
      tight: 'var(--typography-lineHeights-tight)',
      normal: 'var(--typography-lineHeights-normal)',
      relaxed: 'var(--typography-lineHeights-relaxed)',
    },
    spacing: {
      0: 'var(--spacing-0)',
      1: 'var(--spacing-1)',
      2: 'var(--spacing-2)',
      3: 'var(--spacing-3)',
      4: 'var(--spacing-4)',
      5: 'var(--spacing-5)',
      6: 'var(--spacing-6)',
    },
    borderRadius: {
      none: 'var(--radii-none)',
      sm: 'var(--radii-sm)',
      md: 'var(--radii-md)',
      lg: 'var(--radii-lg)',
      xl: 'var(--radii-xl)',
    },
    boxShadow: {
      sm: 'var(--shadows-sm)',
      md: 'var(--shadows-md)',
      lg: 'var(--shadows-lg)',
    },
  },
}