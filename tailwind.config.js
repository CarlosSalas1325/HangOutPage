/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#A855F7',
        'primary-purple-dark': '#9333EA',
        'primary-purple-light': '#C084FC',
        'primary-yellow': '#FBBF24',
        'primary-yellow-dark': '#F59E0B',
        'primary-pink': '#F472B6',
        'primary-cyan': '#22D3EE',
        'primary-green': '#34D399',
        'primary-orange': '#FB923C',
        'text-dark': '#0F172A',
        'text-medium': '#475569',
        'text-light': '#94A3B8',
        'bg-dark': '#0A0118',
        'bg-darker': '#050010',
        'bg-light': '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #A855F7 0%, #F472B6 50%, #22D3EE 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0A0118 0%, #1E0B3E 50%, #3B0764 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(168, 85, 247, 0.4) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(244, 114, 182, 0.35) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(34, 211, 238, 0.3) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(251, 191, 36, 0.25) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(52, 211, 153, 0.3) 0px, transparent 50%)',
      },
      keyframes: {
        gradientText: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { opacity: '0.9', transform: 'translate(-50%, -50%) scale(1.2)' },
        },
      },
      animation: {
        gradientText: 'gradientText 3s ease infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
