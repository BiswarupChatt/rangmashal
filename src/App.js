import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Home from './pages/Home'; 


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif', 
  },
  palette: {
    primary: {
      main: '#32BFC2',
    },
    secondary: {
      main: '#FFD041',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  spacing: 8,
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       body: {
  //         margin: '20px', 
  //       },
  //     },
  //   },
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
