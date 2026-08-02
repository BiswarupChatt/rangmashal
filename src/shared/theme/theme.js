import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#32BFC2",
      light: "#E3F1F2",
    },
    secondary: {
      main: "#FFD041",
      light: "#F9F0D3",
    },
    background: {
      default: "#f7f7f7",
    },
  },
  spacing: 8,
});
