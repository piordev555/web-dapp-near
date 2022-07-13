const plugin = require('tailwindcss/plugin');
const theme = require('./theme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...theme,
    extend: {
      width: {
        22: '90px',
        64: '264px',
        70: '80vw',
        72: '72px',
        80: '360px',
        312: '312px',
        308: '308px',
      },
      height: {
        13: '52px',
        22: '90px',
        60: '60px',
        72: '72px',
        80: '334px',
        210: '210px',
      },
    },
  },
  important: true,
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
      backgroundOpacity: ['disabled'],
      borderOpacity: ['disabled'],
      boxShadow: ['active', 'disabled'],
      cursor: ['disabled'],
      opacity: ['disabled'],
      textColor: ['active', 'disabled'],
      textOpacity: ['disabled'],
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        // body text semantic classes
        '.text-body-sm': {
          '@apply font-body text-xs leading-xs': {},
        },
        '.text-body-md': {
          '@apply font-body text-sm leading-sm': {},
        },
        '.text-body-lg': {
          '@apply font-body text-md leading-md': {},
        },

        // heading text semantic classes
        '.text-heading-sm': {
          '@apply font-heading text-lg leading-lg': {},
        },
        '.text-heading-md': {
          '@apply font-heading text-xl leading-xl': {},
        },
        '.text-heading-lg': {
          '@apply font-heading text-2xl leading-2xl': {},
        },
        '.text-heading-xl': {
          '@apply font-heading text-3xl leading-3xl': {},
        },
      });
    }),
  ],
};
