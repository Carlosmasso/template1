import React from "react";
import { Box, Typography, Fade } from "@mui/material";
import useInView from "../hooks/useInView";

const ServiceCard = ({ servicio, index }) => {
  const [ref, inView] = useInView({ threshold: 0.18 });

  return (
    <Fade in={inView} timeout={700 + index * 700}>
      <Box
        ref={ref}
        sx={{
          position: "relative",
          borderRadius: 5,
          overflow: "hidden",
          minHeight: 380,
          boxShadow: 2,
          bgcolor: "action.hover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          transition: "transform 0.5s ease-out, box-shadow 0.5s ease-out",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 8px 24px rgba(235, 229, 153, 0.15)",
          },
        }}
      >
        <Box sx={{ width: "100%", height: 220, overflow: "hidden" }}>
          <img
            src={servicio.imagen}
            alt={servicio.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "filter 0.3s, transform 0.3s",
              filter: "brightness(0.88)",
            }}
          />
        </Box>
        <Box
          sx={{
            p: 4,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ mb: 1, color: "text.primary", letterSpacing: 1 }}
          >
            {servicio.titulo}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ opacity: 0.92 }}
          >
            {servicio.descripcion}
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
};

export default ServiceCard;
