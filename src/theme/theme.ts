import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9bb3' // Pastel Pink
    },
    secondary: {
      main: '#6c63ff'
    },
    background: {
      default: '#fff',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: ['"Inter"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 700, fontSize: '2rem' },
    h2: { fontWeight: 700, fontSize: '1.5rem' }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    }
  }
});

export default theme;
