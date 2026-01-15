import React from "react";
import { Box, Typography } from "@mui/material";

const GalleryCard = ({ servicio }) => {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
        minHeight: 320,
        boxShadow: 3,
        cursor: "pointer",
        transition: "transform 0.4s",
        "&:hover img": {
          transform: "scale(1.07)",
          filter: "brightness(1)",
        },
        "&:hover .overlay": {
          bgcolor: "rgba(0,0,0,0.7)",
        },
      }}
    >
      <img
        src={servicio.imagen}
        alt={servicio.alt}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          display: "block",
          filter: "brightness(0.85)",
          transition: "transform 0.4s, filter 0.3s",
        }}
      />
      <Box
        className="overlay"
        sx={{
          p: 4,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          bgcolor: "rgba(0,0,0,0.55)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          minHeight: 80,
          transition: "background 0.3s",
        }}
      >
        <Typography variant="h5" fontWeight={600} sx={{ mb: 0.5 }}>
          {servicio.titulo}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.85 }}>
          {servicio.descripcion}
        </Typography>
      </Box>
    </Box>
  );
};

export default GalleryCard;
