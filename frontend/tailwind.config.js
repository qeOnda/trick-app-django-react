module.exports = {
  purge: [],
  theme: {
  	backgroundColor: {
  		primary: "var(--color-bg-primary)",
  		secondary: "var(--color-bg-secondary)",
      shadow: "var(--color-bg-shadow)"
  	},
  	textColor: {
  		primary: "var(--color-text-primary)",

  	},
    fontFamily: {
      display: "var(--font-display)",
      body: "var(--font-body)"
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
