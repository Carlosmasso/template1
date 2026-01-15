import React, { useEffect, useState } from "react";
import HeroVideo from "../components/HeroVideo";
import { Box, Typography, Button, Fade, Avatar, Stack } from "@mui/material";
import useInView from "../hooks/useInView";
import ServiceCard from "../components/ServiceCard";
import GalleryCard from "../components/GalleryCard";
import { Link } from "react-router-dom";

const HERO_VIDEO = "https://www.w3schools.com/howto/rain.mp4";

const skills = [
  {
    title: "Creatividad",
    description: "Cada sesión es única, adaptada a tu estilo y necesidades.",
  },
  {
    title: "Profesionalidad",
    description:
      "Más de 10 años de experiencia en fotografía comercial y artística.",
  },
  {
    title: "Tecnología",
    description:
      "Equipos de última generación y edición avanzada para resultados perfectos.",
  },
];

const servicios = [
  {
    titulo: "Retrato profesional",
    descripcion: "Imágenes limpias y modernas que expresan tu personalidad.",
    imagen:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1400&q=80",
    alt: "Retrato profesional",
  },
  {
    titulo: "Fotografía de producto",
    descripcion: "Resalta los detalles y la calidad de tus productos.",
    imagen:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1400&q=80",
    alt: "Fotografía de producto",
  },
  {
    titulo: "Cobertura de evento",
    descripcion: "Momentos únicos capturados con estilo y naturalidad.",
    imagen:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    alt: "Cobertura de evento",
  },
  {
    titulo: "Sesión creativa",
    descripcion:
      "Fotografía artística para portafolio, redes o proyectos personales.",
    imagen:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80",
    alt: "Sesión creativa",
  },
];

const testimonios = [
  {
    nombre: "Laura G.",
    texto:
      "La sesión fue increíble, capturaron mi esencia y el resultado fue espectacular.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nombre: "Carlos M.",
    texto:
      "Las fotos de nuestro evento son modernas y naturales, ¡gran trabajo!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    nombre: "Sofía P.",
    texto:
      "El book creativo superó mis expectativas, muy profesionales y atentos.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const MenuScreen = () => {
  // Slider de testimonios
  const [testiIdx, setTestiIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTestiIdx((prev) => (prev + 1) % testimonios.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const [refTitle, inViewTitle] = useInView();
  const [refInfo, inViewInfo] = useInView();
  const [refGallery, inViewGallery] = useInView();
  const [refTesti, inViewTesti] = useInView();

  return (
    <>
      <HeroVideo
        videoSrc={HERO_VIDEO}
        title="Creamos contenido visual que conecta"
        height="100vh"
      />
      <section className="content">
        <Fade in={inViewTitle} timeout={900}>
          <Typography
            ref={refTitle}
            variant="h3"
            align="center"
            fontWeight={600}
            gutterBottom
            sx={{ letterSpacing: 1, mb: 4 }}
          >
            Capturamos tu esencia
          </Typography>
        </Fade>
        {/* Grid de cards minimalistas y llamativas para servicios con animación Fade al hacer scroll */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
            gap: 6,
            mb: 8,
          }}
        >
          {servicios.map((servicio, idx) => (
            <ServiceCard
              key={servicio.titulo}
              servicio={servicio}
              index={idx}
            />
          ))}
        </Box>
        {/* Sección informativa sobre el servicio */}
        <Fade in={inViewInfo} timeout={900}>
          <Box ref={refInfo} sx={{ mb: 8, maxWidth: 900, mx: "auto" }}>
            <Typography
              variant="h5"
              fontWeight={500}
              sx={{ mb: 2, textAlign: "center" }}
            >
              Fotografía profesional para empresas, eventos y particulares
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, textAlign: "center" }}>
              Nuestro equipo está especializado en crear imágenes que transmiten
              emociones y cuentan historias. Utilizamos tecnología de última
              generación y técnicas creativas para ofrecer resultados únicos y
              personalizados.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                justifyContent: "center",
                mb: 4,
              }}
            >
              {skills.map(({ title, description }) => (
                <Box
                  key={description}
                  sx={{
                    p: 3,
                    minWidth: 220,
                    borderRadius: 3,
                    flex: "1 1 220px",
                    bgcolor: "background.paper",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Typography
              variant="h6"
              fontWeight={500}
              sx={{ mb: 2, mt: 4, textAlign: "center" }}
            >
              ¿Cómo trabajamos?
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 4,
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box sx={{ flex: 1, minWidth: 220, textAlign: "center" }}>
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                  1. Consulta personalizada
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Analizamos tus necesidades y proponemos ideas creativas para
                  tu sesión.
                </Typography>
              </Box>
              <Box sx={{ flex: 1, minWidth: 220, textAlign: "center" }}>
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                  2. Sesión fotográfica
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Realizamos la sesión en estudio, exteriores o en tu
                  empresa/evento.
                </Typography>
              </Box>
              <Box sx={{ flex: 1, minWidth: 220, textAlign: "center" }}>
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                  3. Edición y entrega
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Editamos y entregamos las imágenes en alta calidad, listas
                  para usar.
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" sx={{ mt: 6, textAlign: "center" }}>
              ¿Tienes dudas o quieres reservar tu sesión? Contáctanos y te
              asesoramos sin compromiso.
            </Typography>
          </Box>
        </Fade>
        {/* Galería animada con fade-in y hover zoom */}
        <Fade in={inViewGallery} timeout={900}>
          <Box
            ref={refGallery}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 4,
              mb: 6,
            }}
          >
            {servicios.map((servicio, idx) => (
              <GalleryCard key={idx} servicio={servicio} />
            ))}
          </Box>
        </Fade>
        {/* Slider de testimonios con transición */}
        <Fade in={inViewTesti} timeout={900}>
          <Box ref={refTesti} sx={{ textAlign: "center", mt: 8, mb: 2 }}>
            <Typography variant="h4" fontWeight={500} sx={{ mb: 3 }}>
              Opiniones de nuestros clientes
            </Typography>
            <Stack
              spacing={2}
              direction="column"
              alignItems="center"
              sx={{ maxWidth: 420, margin: "0 auto" }}
            >
              <Avatar
                src={testimonios[testiIdx].avatar}
                alt={testimonios[testiIdx].nombre}
                sx={{ width: 64, height: 64, mb: 1 }}
              />
              <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                "{testimonios[testiIdx].texto}"
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                {testimonios[testiIdx].nombre}
              </Typography>
            </Stack>
          </Box>
        </Fade>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            component={Link}
            to="/contact"
          >
            Solicita tu sesión
          </Button>
        </div>
      </section>
    </>
  );
};

export default MenuScreen;
