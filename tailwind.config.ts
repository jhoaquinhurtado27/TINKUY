import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        noche: '#161A2E',      // fondo principal, azul-noche andino
        arena: '#F4EFE4',      // superficie clara
        marigold: '#D98E2B',   // acento cálido
        tierra: '#A8452F',     // acento secundario, terracota rojiza
        niebla: '#8B8FA8',     // texto secundario sobre noche
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
