/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'beztern': {
          'blue': '#0066FF',
          'deep': '#001B3F',
          'darker': '#000C1F',
          'light-gray': '#E5E5E5',
        }
      },
      letterSpacing: {
        'wider-plus': '0.05em',
      },
      animation: {
        'particle-float': 'particleFloat 3s ease-in-out infinite',
        'particle-slow': 'particleSlow 4s ease-in-out infinite',
        'particle-medium': 'particleMedium 2.5s ease-in-out infinite',
      },
      keyframes: {
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) translateX(10px)', opacity: '0.7' },
        },
        particleSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.4' },
          '50%': { transform: 'translateY(-15px) translateX(-8px)', opacity: '0.6' },
        },
        particleMedium: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.5' },
          '50%': { transform: 'translateY(-25px) translateX(15px)', opacity: '0.7' },
        },
      }
    },
  },
  plugins: [],
};