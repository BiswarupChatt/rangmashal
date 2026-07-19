import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./global/theme";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
