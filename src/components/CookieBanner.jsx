import React, { useState, useEffect } from "react";
import { Snackbar, Alert, Button, Link, Box, Typography } from "@mui/material";

const CookieBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setOpen(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      sx={{ zIndex: 9999 }}
    >
      <Alert
        icon={false}
        severity="info"
        sx={{
          bgcolor: "#222",
          color: "#fff",
          boxShadow: "0 -2px 16px rgba(0,0,0,0.12)",
          borderRadius: 3,
          px: 4,
          py: 2,
          minWidth: 340,
          display: "flex",
          alignItems: "center",
        }}
        action={
          <Button
            onClick={handleAccept}
            variant="contained"
            color="primary"
            sx={{ borderRadius: 2, fontWeight: 600, px: 3, py: 1 }}
          >
            Aceptar
          </Button>
        }
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: "1rem", mr: 2 }}>
            Utilizamos cookies técnicas y necesarias para el funcionamiento de la web. Más info en nuestra{' '}
            <Link href="/policy" underline="underline" color="inherit" sx={{ fontWeight: 600 }}>
              Política de Privacidad
            </Link>.
          </Typography>
        </Box>
      </Alert>
    </Snackbar>
  );
};

export default CookieBanner;
