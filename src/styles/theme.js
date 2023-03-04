import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#2880bb',
    },
    secondary: {
      main: '#48bbc1',
    },
  },
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
  },
});

export default theme;