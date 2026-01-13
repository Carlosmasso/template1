import React from "react";
import { Typography, Container, Divider } from "@mui/material";

const PrivacyPolicyScreen = () => (
  <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
    <Typography
      variant="h3"
      fontWeight={700}
      sx={{
        mb: 3,
        color: "primary.main",
        textAlign: "center",
        letterSpacing: 1,
      }}
    >
      Política de Privacidad
    </Typography>
    <Divider sx={{ mb: 4 }} />
    <Typography
      variant="body1"
      sx={{
        mb: 3,
        color: "#444",
        textAlign: "left",
        maxWidth: 700,
        mx: "auto",
      }}
    >
      Esta web utiliza únicamente cookies técnicas y necesarias para su
      funcionamiento. No se recopilan datos personales ni se realiza seguimiento
      de usuarios con fines publicitarios o analíticos.
    </Typography>
    <Typography
      variant="h5"
      fontWeight={600}
      sx={{
        mt: 5,
        mb: 2,
        color: "primary.main",
        textAlign: "center",
      }}
    >
      ¿Qué son las cookies?
    </Typography>
    <Typography
      variant="body1"
      sx={{
        mb: 3,
        color: "#444",
        textAlign: "left",
        maxWidth: 700,
        mx: "auto",
      }}
    >
      Las cookies son pequeños archivos que se almacenan en tu dispositivo para
      garantizar el correcto funcionamiento de la web y mejorar tu experiencia
      de usuario.
    </Typography>
    <Typography
      variant="h5"
      fontWeight={600}
      sx={{
        mt: 5,
        mb: 2,
        color: "primary.main",
        textAlign: "center",
      }}
    >
      Tipos de cookies utilizadas
    </Typography>
    <ul
      style={{
        color: "#444",
        marginBottom: 32,
        maxWidth: 700,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "left",
      }}
    >
      <li>
        <strong>Cookies técnicas:</strong> Permiten la navegación y el uso de
        las diferentes opciones o servicios de la web.
      </li>
      <li>
        <strong>Cookies de preferencia:</strong> Almacenan tus preferencias de
        idioma o configuración.
      </li>
    </ul>
    <Typography
      variant="h5"
      fontWeight={600}
      sx={{
        mt: 5,
        mb: 2,
        color: "primary.main",
        textAlign: "center",
      }}
    >
      ¿Cómo gestionar las cookies?
    </Typography>
    <Typography
      variant="body1"
      sx={{
        mb: 3,
        color: "#444",
        textAlign: "left",
        maxWidth: 700,
        mx: "auto",
      }}
    >
      Puedes configurar tu navegador para aceptar o rechazar cookies, aunque
      algunas funcionalidades de la web pueden verse afectadas si las
      desactivas.
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 6,
        color: "#888",
        textAlign: "center",
      }}
    >
      Última actualización: Enero 2026
    </Typography>
  </Container>
);

export default PrivacyPolicyScreen;
