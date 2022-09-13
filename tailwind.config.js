module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes: {
        btn: {
          '0%, 100%': {transform: 'translateY(-0.25rem)'},
          '50%': {transform: 'translateY(0)'},
        },
      },
      animation: {
        btn: 'btn .3s',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
