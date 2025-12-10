import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const pastelPink = '#ff9bb3'

const theme = createTheme({
  palette: {
    primary: {
      main: pastelPink
    },
    secondary: {
      main: '#6b6bff'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: ['"Inter"', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: '2rem',
      fontWeight: 700
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none'
        }
      }
    }
  }
})

export default theme
