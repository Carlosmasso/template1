import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Link, Outlet } from "react-router-dom";
import { Stack, Box, IconButton } from "@mui/material";
import Footer from "../Footer/Footer";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../../contexts/ThemeContext";

const HEADERS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
};

export default function Header(props) {
  const { mode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <Box>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ height: "50px !important" }}>
          <Toolbar
            sx={{
              minHeight: "100% !important",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6" component="div">
                ICON
              </Typography>
            </Link>
            <Stack direction="row" spacing={2} alignItems="center">
              {HEADERS.map((header) => (
                <Link
                  to={header.path}
                  key={header.label}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography fontWeight={500}>{header.label}</Typography>
                </Link>
              ))}
              <IconButton onClick={toggleTheme} color="inherit" size="small">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="main" sx={{ flex: 1, mt: "50px" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
