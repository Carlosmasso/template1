import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#f5f5f7",
      main: "#000", // negro
      contrastText: "#fff",
    },
    secondary: {
      main: "#0071e3", // azul Apple para detalles
      contrastText: "#fff",
    },
    background: {
      default: "#f5f5f7", // fondo Apple
      paper: "#fff",
    },
    text: {
      primary: "#1d1d1f", // texto Apple
      secondary: "#6e6e73",
    },
    divider: "#d2d2d7",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#1d1d1f",
          boxShadow: "none",
          borderBottom: "1px solid #d2d2d7",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "48px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
  },
});