import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#D8AD3D'   
    }
  },
  overrides: {
    MuiButton: {
      label: {
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: '26px',    
        color: 'white',
        fontFamily: 'Source Sans Pro, sans-serif'
      }
    },
    MuiTypography: {
      body1: {
        fontSize: '14px',
        fontWeight: 400,
        fontFamily: 'Open Sans, sans-serif;',
        color: '#3F454A',
        lineHeight: '24px',
      },
      body2: {
        fontSize: '12px',
        fontWeight: 400,
        fontFamily: 'Open Sans, sans-serif;',
        color: '#3F454A',
        lineHeight: '23px',
      },
      subtitle1: {
        fontSize: '13px',
        fontWeight: 'bold',
        fontFamily: 'Open Sans, sans-serif;',
        color: '#24272A',
        lineHeight: '24px',
      },
      subtitle2: {
        fontSize: '18px',
        fontWeight: 'bold',
        fontFamily: 'Open Sans, sans-serif;',
        color: '#24272A',
        lineHeight: '24px',
      },
      h1: {
        fontSize: '120px',
        fontWeight: 700,
        fontFamily: 'Caveat, cursive;',
        color: '#24272A',
        fontStyle: 'normal',
        lineHeight: '100px'
      },
      h2: {
        fontSize: '80px',
        fontWeight: 700,
        fontFamily: 'Caveat, cursive;',
        color: '#24272A',
        fontStyle: 'normal'
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: '12px 22px'
      }
    },
    MuiInputBase: {
      input: {
        height:'26px',
        fontSize: '14px',
        color: '#3F4544',
        fontFamily: 'Open Sans, sans-serif;',
        fontWeight: 'normal'
      }
    }
  }
})

export default theme