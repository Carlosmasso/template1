import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      width: "100%",
      bgcolor: "#222",
      color: "#fff",
      py: 3,
      px: 2,
      textAlign: "center",
      fontSize: "1rem",
      boxShadow: "0 -2px 16px rgba(0,0,0,0.08)",
      position: { xs: "inherit", md: "fixed" },
      left: { md: 0 },
      bottom: { md: 0 },
      zIndex: 100,
      mt: { xs: "auto", md: 0 },
    }}
  >
    <Typography variant="body2" sx={{ opacity: 0.8 }}>
      &copy; {new Date().getFullYear()} MinimalPhoto. Todos los derechos reservados.
    </Typography>
  </Box>
);

export default Footer;
