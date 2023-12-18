/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        publicsans: ['Public Sans', 'sans-serif'],
      },
      fontWeight: {
        normal: '300',
        medium: '400',
        extrabold: '700',
      },
      fontSize: {
        md: '16px',
        xxs: '12px',
      },
      colors: {
        primary: {
          DarkBlue: 'hsl(233, 26%, 24%)',
          LimeGreen: 'hsl(136, 65%, 51%)',
          BrightCyan: 'hsl(192, 70%, 51%)',
        },
        neutral: {
          GrayishBlue: 'hsl(233, 8%, 62%)',
          LightGrayishBlue: 'hsl(220, 16%, 96%)',
          VeryLightGray: 'hsl(0, 0%, 98%)',
          White: 'hsl(0, 0%, 100%)',
        },
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'ping-short': 'ping 1s ease-in 1',
      },
    },
  },
  plugins: [],
};
