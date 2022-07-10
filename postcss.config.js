module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pseudo-classes': {
      // default contains `:root`.
      blacklist: [],

      // (optional) create classes for a restricted list of selectors
      // N.B. the colon (:) is optional
      restrictTo: ['active', 'hover', 'focus', 'visited'],

      // default is `false`. If `true`, will output CSS
      // with all combinations of pseudo styles/pseudo classes.
      allCombinations: true,

      // default is `true`. If `false`, will generate
      // pseudo classes for `:before` and `:after`
      preserveBeforeAfter: false,
    },
  },
};
