module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      softblue: 'hsl(231, 69%, 60%)',
      softred: 'hsl(0, 94%, 66%)',
      grayishblue: 'hsl(229, 8%, 60%)',
      darkblue: 'hsl(229, 31%, 21%)',
      white: "#ffffff"
    },
    fontFamily: {
        'rubik' : ['rubik', 'sans-serif']
    },
    screens: {
      'mobile': '357px',
      'desktop': '1000px'
    },
    extend: {},
  },
  plugins: [],
}