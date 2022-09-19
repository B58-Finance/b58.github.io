const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
        dark: { raw: "(prefers-color-scheme: dark)" }
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-1-dark': '#5A5A5A',
        'accent-2-dark': '#333333',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        blue: {
          light: '#3414FC',
          medium: '#0087FF',
          dark: '#01084A',
          ultra: '#00101E',
        },
        gray: {
          dark: '#181818'
        }

      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '3.0rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.25)',
        medium: '4px 4px 10px rgba(0, 0, 0, 0.40)',
        smallDark: '0 5px 10px rgba(255, 255, 255, 0.30)',
        mediumDark: '0 8px 30px rgba(255, 255, 255, 0.30)',
      },
      opacity: {
        '10': '0.1',
        '15': '0.15',
        '30': '0.3',
      },
      fill: theme => ({
        'red': theme('colors.red.500'),
        'green': theme('colors.green.500'),
        'blue': theme('colors.blue.500'),
      })
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [
    function({ addBase, config }) {
      addBase({
        body: {
          color: config("theme.colors.black"),
          backgroundColor: config("theme.colors.white"),
        },
        'body.dark-theme': {
          color: config("theme.colors.white"),
          backgroundColor: config("theme.colors.gray.dark"),
        },
        "@screen dark": {
          body: {
            color: config("theme.colors.white"),
            backgroundColor: config("theme.colors.gray.dark"),
          },
          'body.light-theme': {
            color: config("theme.colors.black"),
            backgroundColor: config("theme.colors.white")
          }
        }
      });
    },
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ]
}
