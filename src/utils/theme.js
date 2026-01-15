import { createTheme } from "@mui/material/styles";

// Caffeine Theme - Adaptado de tweakcn.com
export const createAppTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            // Modo Oscuro (Caffeine Dark)
            primary: {
              main: "#ebe599", // oklch(0.9247 0.0524 66.1732) - amarillo suave
              light: "#f0edb3",
              dark: "#d6d177",
              contrastText: "#342f1a", // oklch(0.2029 0.0240 200.1962)
            },
            secondary: {
              main: "#4d4926", // oklch(0.3163 0.0190 63.6992) - amarillo oscuro
              light: "#676140",
              dark: "#3a371d",
              contrastText: "#ebe599",
            },
            background: {
              default: "#2d2d2d", // oklch(0.1776 0 0) - fondo muy oscuro
              paper: "#373737", // oklch(0.2134 0 0) - cards
            },
            text: {
              primary: "#f2f2f2", // oklch(0.9491 0 0) - texto principal
              secondary: "#c4c4c4", // oklch(0.7699 0 0) - texto secundario
            },
            divider: "#3c3c3c", // oklch(0.2351 0.0115 91.7467) - bordes
            error: {
              main: "#e57373", // oklch(0.6271 0.1936 33.3390) - destructivo
              contrastText: "#ffffff",
            },
            action: {
              hover: "#494949", // oklch(0.2850 0 0) - accent
              selected: "#404040", // oklch(0.2520 0 0) - muted
            },
          }
        : {
            // Modo Claro (Caffeine Light)
            primary: {
              main: "#6d5d1f", // oklch(0.4341 0.0392 41.9938) - marrón oscuro
              light: "#9b8640",
              dark: "#4a3f15",
              contrastText: "#ffffff",
            },
            secondary: {
              main: "#f5e8b8", // oklch(0.9200 0.0651 74.3695) - amarillo muy claro
              light: "#f9f0d1",
              dark: "#e8d89a",
              contrastText: "#594d1a",
            },
            background: {
              default: "#fafafa", // oklch(0.9821 0 0) - fondo muy claro
              paper: "#fcfcfc", // oklch(0.9911 0 0) - cards
            },
            text: {
              primary: "#3e3e3e", // oklch(0.2435 0 0) - texto principal
              secondary: "#808080", // oklch(0.5032 0 0) - texto secundario
            },
            divider: "#e1e1e1", // oklch(0.8822 0 0) - bordes
            error: {
              main: "#d84343", // oklch(0.6271 0.1936 33.3390) - destructivo
              contrastText: "#ffffff",
            },
            action: {
              hover: "#eeeeee", // oklch(0.9310 0 0) - accent
              selected: "#f3f3f3", // oklch(0.9521 0 0) - muted
            },
          }),
    },
    typography: {
      fontFamily: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
      ].join(","),
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    shape: {
      borderRadius: 8, // --radius: 0.5rem
    },
    shadows: [
      "none",
      "0 1px 3px 0px rgba(0, 0, 0, 0.05)", // 2xs/xs
      "0 1px 3px 0px rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)", // sm/default
      "0 1px 3px 0px rgba(0, 0, 0, 0.10), 0 2px 4px -1px rgba(0, 0, 0, 0.10)", // md
      "0 1px 3px 0px rgba(0, 0, 0, 0.10), 0 4px 6px -1px rgba(0, 0, 0, 0.10)", // lg
      "0 1px 3px 0px rgba(0, 0, 0, 0.10), 0 8px 10px -1px rgba(0, 0, 0, 0.10)", // xl
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)", // 2xl
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
      "0 1px 3px 0px rgba(0, 0, 0, 0.25)",
    ],
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: mode === "dark" ? "#666 #2b2b2b" : "#999 #f0f0f0",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#373737" : "#fcfcfc",
            color: mode === "dark" ? "#f2f2f2" : "#3e3e3e",
            boxShadow: "none",
            borderBottom: mode === "dark" ? "1px solid #3c3c3c" : "1px solid #e1e1e1",
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: "56px",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 500,
            borderRadius: 8,
          },
          contained: {
            boxShadow:
              "0 1px 3px 0px rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
            "&:hover": {
              boxShadow:
                "0 1px 3px 0px rgba(0, 0, 0, 0.10), 0 4px 6px -1px rgba(0, 0, 0, 0.10)",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            backgroundColor: mode === "dark" ? "#373737" : "#fcfcfc",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#373737" : "#fcfcfc",
            borderRadius: 8,
            boxShadow:
              "0 1px 3px 0px rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === "dark" ? "#363636" : "#fafafa",
            borderRight: mode === "dark" ? "1px solid #3c3c3c" : "1px solid #e1e1e1",
          },
        },
      },
    },
  });

// Export default theme para compatibilidad
export default createAppTheme("dark");