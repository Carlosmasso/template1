import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";

const NativeCarousel = ({ images, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [current, interval, images.length]);

  const goTo = (idx) => setCurrent(idx);

  return (
    <Box sx={{
      position: "relative",
      width: "100%",
      maxWidth: 600,
      height: 260,
      margin: "0 auto",
      borderRadius: 3,
      overflow: "hidden",
      background: "#f5f5f7"
    }}>
      {images.map((img, idx) => (
        <Box
          key={img}
          component="img"
          src={img}
          alt=""
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: idx === current ? 1 : 0,
            transition: "opacity 0.7s cubic-bezier(.4,0,.2,1)",
          }}
        />
      ))}
      <Box sx={{
        position: "absolute",
        bottom: 12,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 1,
      }}>
        {images.map((_, idx) => (
          <Box
            key={idx}
            component="button"
            onClick={() => goTo(idx)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              border: "none",
              background: idx === current ? "#0071e3" : "#d2d2d7",
              opacity: idx === current ? 0.8 : 0.5,
              cursor: "pointer",
              transition: "background 0.2s",
              p: 0,
            }}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default NativeCarousel;
