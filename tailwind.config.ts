import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        noche: '#141414',      // negro principal (header/footer/nav)
        arena: '#F4EFE4',      // superficie clara
        marigold: '#D98E2B',   // acento cálido
        tierra: '#A8452F',     // acento secundario, terracota rojiza
        niebla: '#8B8FA8',     // texto secundario sobre noche
        mostaza: '#F7C331',    // amarillo de marca (header, banner, ticker)
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
};

export default config;
