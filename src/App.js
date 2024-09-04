import { createTheme, ThemeProvider } from '@mui/material';
import Home from './pages/Home';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

  );
}

export default App;
