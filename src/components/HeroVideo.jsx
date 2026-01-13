import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

// Componente principal
const HeroVideo = ({ videoSrc, title = "", height = "40vh" }) => {
  return (
    <Section height={height}>
      <Video src={videoSrc} autoPlay muted loop playsInline />
      {title && (
        <Overlay>
          <div>
            <Typography color="white" variant="h4">
              {title}
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
              <Button variant="contained" color="primary" size="large">
                Nuestros Servicios
              </Button>
              <Button variant="contained" color="secondary" size="large">
                Contáctanos
              </Button>
            </Stack>
          </div>
        </Overlay>
      )}
    </Section>
  );
};

// Styled components
const Section = styled.section`
  position: relative;
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  border-radius: 0;
  overflow: hidden;
  min-height: ${({ height }) => height};
  height: ${({ height }) => height};
`;

const Video = styled.video`
  width: 100vw;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  display: block;
`;

const Overlay = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
`;

export default HeroVideo;
