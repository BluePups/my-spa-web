import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9bb3' // Pastel Pink theo yêu cầu
    },
    secondary: {
      main: '#6c5ce7'
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif'
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
