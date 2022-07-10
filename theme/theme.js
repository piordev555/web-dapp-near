const colors = {
  primary: '#7871FF',
  secondary: '#FFCE76',
  collection: '#719FF7',
  white: '#FFFFFF',
  lightGrey: '#F6F6F4',
  darkGrey: '#8383A5',
  black: '#000000',
  success: '#1BD022',
  error: '#F771A1',
  current: 'currentColor',
  transparent: 'transparent',
  inherit: 'inherit',
};

const fontFamily = {
  body: 'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  heading:
    'Anton, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
};

const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.5rem',
  '2xl': '2rem',
  '3xl': '3rem',
};

const lineHeight = {
  xs: '1rem',
  sm: '1.25rem',
  md: '1.5rem',
  lg: '1.75rem',
  xl: '2.25rem',
  '2xl': '3rem',
  '3xl': '4rem',
};

const boxShadow = {
  DEFAULT: '0 0 4.375rem 0 rgba(48,43,140, 0.36)',
  button: '0 0 2rem 0 rgba(119, 113, 247, 0.38)',
  'button-secondary': '0 0 2rem 0 rgba(246, 208, 130, 0.38)',
  none: 'none',
};

module.exports = {
  colors,
  fontFamily,
  fontSize,
  lineHeight,
  boxShadow,
};
