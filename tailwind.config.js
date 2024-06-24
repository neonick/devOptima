const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['aeonick', ...defaultTheme.fontFamily.sans],
      secondary: ['inter', ...defaultTheme.fontFamily.sans],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '',
      white: '#fff',
      primary: {
        blue: '#243BB9',
      },
      secondary: {
        blue: '#3F57DA',
      },
      gray: {
        100: '#EFF1F6',
        200: '#BDC4D1',
      },
      red: '#F04242',
    }),
    // FIXME: Check if the breakpoints ("screens") are correct for the project
    screens: {
      xl: { max: '1439px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '639px' },
      '2xs': { max: '413px' },
    },
    extend: {
      filter: {
        white: 'brightness(0) invert(1)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwindcss-safe-area'),

    // eslint-disable-next-line func-names
    function ({ addUtilities }) {
      addUtilities({
        '.filter-white': {
          filter: 'brightness(0) invert(1)',
        },
      });
    },
  ],
};
