module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#38BDF8',
        tertiary: '#1E293B',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0 35px 120px -15px #211e35',
        primary: '0 0 16px 0 #0F172A',
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
