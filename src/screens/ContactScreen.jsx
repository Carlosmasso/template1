import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Alert,
  Box,
  Fade,
  Grid,
  Paper,
  Snackbar,
  Stack,
  Typography
} from "@mui/material";
import { useState } from "react";
import useInView from "../hooks/useInView";

const ContactScreen = () => {
  const [refInfo, inViewInfo] = useInView();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      title: "Email",
      detail: "info@fotografo.com",
      link: "mailto:info@fotografo.com",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 32 }} />,
      title: "Teléfono",
      detail: "+34 123 456 789",
      link: "tel:+34123456789",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 32 }} />,
      title: "Ubicación",
      detail: "Albacete, España",
      link: null,
    },
  ];

  return (
    <Box className="content" sx={{ maxWidth: 1200, mx: "auto" }}>
      {/* Hero Section */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        fontWeight={700}
        sx={{ mb: 2 }}
      >
        Contacto
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          fontSize: "1.1rem",
          lineHeight: 1.8,
          textAlign: "center",
          mb: 6,
          maxWidth: 700,
          mx: "auto",
        }}
      >
        ¿Tienes un proyecto en mente? Nos encantaría escucharte. Completa el
        formulario y te responderemos lo antes posible.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Contact Information */}
        <Grid item xs={12} md={8}>
          <Fade in={inViewInfo} timeout={900}>
            <Box ref={refInfo}>
              <Typography variant="h5" fontWeight={600} sx={{ mb: 3, textAlign: "center" }}>
                Información de Contacto
              </Typography>
              <Stack spacing={3} direction={{ xs: "column", sm: "row" }} justifyContent="center">
                {contactInfo.map((item, idx) => (
                  <Paper
                    key={idx}
                    elevation={0}
                    sx={{
                      p: 3,
                      bgcolor: "action.hover",
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      transition: "transform 0.3s ease",
                      cursor: item.link ? "pointer" : "default",
                      "&:hover": item.link
                        ? {
                            transform: "translateX(8px)",
                          }
                        : {},
                    }}
                    onClick={() => item.link && window.open(item.link, "_self")}
                  >
                    <Box sx={{ color: "primary.main" }}>{item.icon}</Box>
                    <Box>
                      <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.detail}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Stack>

              {/* Additional Info */}
              <Box sx={{ mt: 4, p: 3, bgcolor: "action.hover", borderRadius: 3, textAlign: "center" }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Horario de Atención
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Lunes - Viernes: 9:00 - 18:00
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Sábados: 10:00 - 14:00
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Domingos: Cerrado
                </Typography>
              </Box>
            </Box>
          </Fade>
        </Grid>
      </Grid>

      {/* Map Section (opcional - placeholder) */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" align="center" fontWeight={600} sx={{ mb: 4 }}>
          Nuestra Ubicación
        </Typography>
        <Paper
          elevation={0}
          sx={{
            height: 400,
            bgcolor: "action.hover",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100876.08283768906!2d-1.9321906!3d38.9943835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6797ed21a90a15%3A0x408ab3dc2e7b230!2sAlbacete%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890123!5m2!1sen!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Paper>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          ¡Mensaje enviado correctamente! Te responderemos pronto.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactScreen;
