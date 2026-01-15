import React from "react";
import { Box, Typography, Grid, Paper, Fade } from "@mui/material";
import PhotographerCard from "../components/PhotographerCard";
import NativeCarousel from "../components/NativeCarousel";
import useInView from "../hooks/useInView";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const photographers = [
  {
    name: "Camila Masso",
    description:
      "Camila es una fotógrafa especializada en retratos y fotografía artística. Su trabajo destaca por la sensibilidad y el uso de luz natural.",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&facepad=2",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    name: "Juan Pérez",
    description:
      "Juan es experto en fotografía documental y urbana. Captura momentos espontáneos y la esencia de la ciudad en cada imagen.",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&facepad=2",
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    ],
  },
];

const AboutScreen = () => {
  // Unir todas las imágenes de ambos fotógrafos para el carousel común
  const allImages = photographers.reduce(
    (arr, ph) => arr.concat(ph.images),
    []
  );

  const [refStats, inViewStats] = useInView();
  const [refMission, inViewMission] = useInView();
  const [refValues, inViewValues] = useInView();

  const stats = [
    {
      icon: <CameraAltIcon sx={{ fontSize: 40 }} />,
      value: "10+",
      label: "Años de Experiencia",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      value: "500+",
      label: "Proyectos Completados",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      value: "300+",
      label: "Clientes Satisfechos",
    },
    {
      icon: <FavoriteBorderIcon sx={{ fontSize: 40 }} />,
      value: "100%",
      label: "Pasión y Dedicación",
    },
  ];

  const values = [
    {
      title: "Autenticidad",
      width: 60,
      description:
        "Capturamos momentos reales y emociones genuinas, sin artificios ni poses forzadas.",
    },
    {
      title: "Creatividad",
      width: 50,
      description:
        "Cada proyecto es una oportunidad para innovar y crear algo único y memorable.",
    },
    {
      title: "Profesionalismo",
      width: 70,
      description:
        "Compromiso total con la calidad, puntualidad y las necesidades de nuestros clientes.",
    },
    {
      title: "Cercanía",
      width: 90,
      description:
        "Trabajamos codo a codo contigo para entender tu visión y hacerla realidad.",
    },
  ];

  return (
    <Box className="content">
      {/* Hero Section */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        fontWeight={700}
        sx={{ mb: 2 }}
      >
        Sobre Nosotros
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "center" }}
      >
        Somos un equipo apasionado por contar historias a través de la
        fotografía. Creemos que cada imagen tiene el poder de transmitir
        emociones, preservar recuerdos y conectar personas.
      </Typography>

      {/* Stats Section */}
      <Fade in={inViewStats} timeout={900}>
        <Grid
          ref={refStats}
          container
          spacing={2}
          sx={{ mb: 8 , mt: 4}}
          justifyContent="space-around"
        >
          {stats.map((stat, idx) => (
            <Grid item xs={6} md={3} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  minWidth: 250,
                  textAlign: "center",
                  bgcolor: "action.hover",
                  borderRadius: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 24px rgba(235, 229, 153, 0.15)",
                  },
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>{stat.icon}</Box>
                <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Fade>

      {/* Mission Section */}
      <Fade in={inViewMission} timeout={900}>
        <Box
          ref={refMission}
          sx={{ mb: 8, textAlign: "center", maxWidth: 900, mx: "auto" }}
        >
          <Typography variant="h4" fontWeight={600} sx={{ mb: 3 }}>
            Nuestra Misión
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Transformar momentos ordinarios en recuerdos extraordinarios.
            Nuestro objetivo es ofrecer un servicio fotográfico que no solo
            cumpla con tus expectativas, sino que las supere, creando imágenes
            que cuenten tu historia de la manera más auténtica y emotiva
            posible.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Ya sea para tu marca personal, tu negocio, un evento especial o
            simplemente para capturar la belleza de lo cotidiano, estamos aquí
            para hacer que cada sesión sea una experiencia única.
          </Typography>
        </Box>
      </Fade>

      {/* Team Section */}
      <Typography variant="h4" align="center" fontWeight={600} sx={{ mb: 4 }}>
        Nuestro Equipo
      </Typography>
      <Box
        sx={{
          mb: 8,
          gap: 4,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        {photographers.map((ph) => (
          <PhotographerCard
            key={ph.name}
            name={ph.name}
            description={ph.description}
            avatar={ph.avatar}
          />
        ))}
      </Box>

      {/* Values Section */}
      <Fade in={inViewValues} timeout={900}>
        <Box ref={refValues} sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            align="center"
            fontWeight={600}
            sx={{ mb: 4 }}
          >
            Nuestros Valores
          </Typography>
          <Grid container spacing={3}>
            {values.map((value, idx) => (
              <Grid item xs={12} sm={6} key={idx} minWidth={`${value.width}%`}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderLeft: "4px solid",
                    borderColor: "primary.main",
                    bgcolor: "action.hover",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 1.5 }}>
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>

      {/* Gallery Section */}
      <Box sx={{ mt: 10, maxWidth: 800, mx: "auto" }}>
        <Typography variant="h4" align="center" fontWeight={600} sx={{ mb: 3 }}>
          Galería Destacada
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Algunos momentos que hemos tenido el privilegio de capturar
        </Typography>
        <NativeCarousel images={allImages} interval={3000} />
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          mt: 10,
          mb: 6,
          textAlign: "center",
          p: 6,
          bgcolor: "action.hover",
          borderRadius: 4,
        }}
      >
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
          ¿Listo para crear algo increíble juntos?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3, maxWidth: 600, mx: "auto" }}
        >
          Ya sea que necesites un retrato profesional, fotografía de producto o
          cobertura de eventos, estamos aquí para ayudarte a contar tu historia.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutScreen;
