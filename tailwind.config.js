module.exports = {
  // purge:  [ './src/**/*.{html,ts}' ] ,
  mode: 'jit',
  purge: {
    content: [    
      './src/**/*.{html,ts}',    
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4D38EE",
        secondary: "#1DC8BF",
        tertiary: "#1EA78E",
        grass: '#C7FFDE',
        yellow: '#FFDE40',
        gradient: {
          1: "#94EDFA" 
        },
        gray: {
          1: "#766E9C",
          2: "#55668C",
          3: "#BDBDBD",
          4: "#707C97",
          5:"#E9EBFF",
          6:"#47536f",
        },
        danger: {
          1:"#D50000",
          2:"#E75852"
      },
        bgreen:"#EAFFF6",
        lightblue:"#F5FAFF",
        black:"#000",
        white:"#fff",
        darkblue:{
          1:"#202B50",
          2: "#202A4E"
        }
      },
      fill: {
        transparent: 'transparent'
      }
    },
    fontFamily: {
      caption: ['Gilroy-Light', 'sans-serif'],
      headline: ['Gilroy-Bold', 'Times New Roman', 'serif'],
      title: ['Gilroy-SemiBold', 'Times New Roman', 'serif'],
      body: ['Gilroy-Regular', 'Times New Roman', 'serif']
    }
  },
  variants: {
    extend: {},
  }
  // plugins: [
  //   require('tailwindcss-logical')
  // ],
}
