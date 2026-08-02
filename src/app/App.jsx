import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../shared/theme/theme";
import AppRoutes from "./AppRoutes";
import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";

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
