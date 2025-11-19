module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        // Cybersecurity themed palette: deep navy + neon green accent
        primary: '#071028', // deep navy background
        secondary: '#00FF99', // neon green accent
        tertiary: '#0b1220', // darker card/form background
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0 35px 120px -15px #211e35',
        primary: '0 0 12px 0 #00FF99, 0 0 40px 8px rgba(0,255,153,0.12)',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.png)`,
      },
    },
  },
  plugins: [],
  safelist: [
    // ensure runtime-generated classes and uncommon utilities are included
    'bg-tertiary',
    'text-secondary',
    'text-white',
    'text-white-100',
    'bg-primary',
    'shadow-primary',
    'black-gradient',
    'violet-gradient',
    'green-text-gradient',
    'blue-text-gradient',
    'pink-text-gradient',
    'yellow-text-gradient',
  ],
};
