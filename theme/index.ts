import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'Poppins', sans-serif",
        background: '#F8F8F8',
        height: '100%',
      },
      button: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 'inherit',
        fontSize: 'inherit',
      },
      select: {
        border: 0,
        textAlign: 'center',
        backgroundColor: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.03)',
        color: 'rgb(188, 187, 187)',
      },
      input: {
        color: 'rgb(188, 187, 187)',
        backgroundColor: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.03)',
        _placeholder: {
          color: 'rgb(188, 187, 187)',
        },
      },
      img: {
        maxWidth: '100%',
        height: 'auto',
      },
    },
  },
})

export default theme
