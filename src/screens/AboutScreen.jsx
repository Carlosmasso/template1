import React from "react";
import { Box, Typography } from "@mui/material";
import PhotographerCard from "../components/PhotographerCard";
import NativeCarousel from "../components/NativeCarousel";

const photographers = [
  {
    name: "Camila Masso",
    description:
      "Camila es una fotógrafa especializada en retratos y fotografía artística. Su trabajo destaca por la sensibilidad y el uso de luz natural.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&facepad=2",
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
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&facepad=2",
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    ],
  },
];

const AboutScreen = () => {
  // Unir todas las imágenes de ambos fotógrafos para el carousel común
  const allImages = photographers.reduce((arr, ph) => arr.concat(ph.images), []);

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Sobre Nosotros
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Dos fotógrafos, dos miradas, una pasión por capturar momentos únicos.
      </Typography>
      <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'stretch', flexWrap: 'wrap', mb: 2 }}>
        {photographers.map((ph) => (
          <PhotographerCard
            key={ph.name}
            name={ph.name}
            description={ph.description}
            avatar={ph.avatar}
          />
        ))}
           {photographers.map((ph) => (
          <PhotographerCard
            key={ph.name}
            name={ph.name}
            description={ph.description}
            avatar={ph.avatar}
          />
        ))}
           {photographers.map((ph) => (
          <PhotographerCard
            key={ph.name}
            name={ph.name}
            description={ph.description}
            avatar={ph.avatar}
          />
        ))}
      </Box>
      <Box sx={{ mt: 6, maxWidth: 600, mx: "auto" }}>
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          Galería Destacada
        </Typography>
        <NativeCarousel images={allImages} interval={3000} />
      </Box>
    </Box>
  );
};

export default AboutScreen;