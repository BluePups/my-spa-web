import { createTheme } from '@mui/material/styles';
import { PaletteOptions } from '@mui/material';

const pastelPink = '#ff9bb3';

const palette: PaletteOptions = {
  primary: {
    main: pastelPink
  },
  secondary: {
    main: '#6c5ce7'
  }
};

const theme = createTheme({
  palette,
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    },
    MuiAppBar: {
      defaultProps: {}
    }
  }
});

export default theme;