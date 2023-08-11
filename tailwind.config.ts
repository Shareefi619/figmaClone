import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'aliceblue': '#F0F8FF',
      },
    },
    // screens: {
    //   "2xl": { min: "1535px" },
    //   // => @media (min-width: 1535px) { ... }

    //   xl: { min: "1279px" },
    //   // => @media (min-width: 1279px) { ... }

    //   lg: { min: "1023px" },
    //   // => @media (min-width: 1023px) { ... }

    //   md: { min: "767px" },
    //   // => @media (min-width: 767px) { ... }

    //   sm: { min: "639px" },
    //   // => @media (min-width: 639px) { ... }

    //   xs: { min: "479px" },
    //   // => @media (min-width: 479px) { ... }
    //   xxs: { min: "350px" },
    // },
  },
  plugins: [],
}
export default config
