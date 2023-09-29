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
      screens:{
        largeTablet: {
          min: "1280px",
          max: "1300px"
        },
        smallTablet: {
          min: "700px",
          max: "963px"
        },
        extrasmallTablet: {
          min: "700px",
          max: "800px"
        },
        smallScreen: {
          min: "0px",
          max: "800px"
        }
      }
    },
  },
  plugins: [],
}
export default config
