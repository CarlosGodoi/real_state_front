import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#fff',

        yellow_60: '#FFE500',

        purple_60: '#7A00FF',
        purple_65: '#641AFF',
        purple_70: '#9533FF',
        purple_75: '#CA99FF',
        purple_90: '#E4CCFF',
        purple_95: '#ECE4FF',
        purple_97: '#FFF0F7',
        purple_99: '#FFFCFA',

        white_90: '#E4E4E7',
        white_95: '#F1F1F3',
        white_97: '#F7F7F8',
        white_99: '#FCFCFD',

        gray_08: '#141414',
        gray_10: '#1A1A1A',
        gray_15: '#262626',
        gray_20: '#333333',
        gray_30: '#4D4D4D',
        gray_40: '#666666',
        gray_50: '#808080',
        gray_60: '#999999',
      },
      fontFamily: {
        sans: ['var(--font-urbanist)'],
      },
      backdropBlur: {
        '2px': '2px',
      },
      boxShadow: {
        custom: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        home_bg: "url(../../public/assets/background.png)",
        'custom-gradient': 'linear-gradient(to right bottom, #7a00ff, #5921d3, #141414, #141414, #141414, #141414, #141414, #141414, #141414, #141414, #141414)',
      },
      screens: {
        notebook_13p: { max: "1366px" },

        desktop: { max: "1280px" },

        laptop: { max: "1024px" },

        ipad: { max: "768px" },

        tablet: { max: "639px" },
        //mobo2
        mobile_1: { max: "415px" },
        //mobo
        mobile_2: { max: "375px" },
      },
    },
  },
  plugins: [],
};

export default config;
