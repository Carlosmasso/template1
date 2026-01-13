import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Link, Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import Footer from "../Footer/Footer";

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
  return (
    <div>
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
            <Typography variant="h6" component="div">
              ICON
            </Typography>
            <Stack direction="row" spacing={2}>
              {HEADERS.map((header) => (
                <Link
                  to={header.path}
                  key={header.label}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography variant="subtitle2">{header.label}</Typography>
                </Link>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
       <Outlet />
     {/*  <div className="content">
        <Outlet />
      </div> */}
      <Footer />
    </div>
  );
  return (
    <div>
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
            <Typography variant="h6" component="div">
              ICON
            </Typography>
            <Stack direction="row" spacing={2}>
              {HEADERS.map((header) => (
                <Link
                  to={header.path}
                  key={header.label}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography variant="subtitle2">{header.label}</Typography>
                </Link>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
