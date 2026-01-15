import { Paper, Typography, Box } from "@mui/material";

const PhotographerCard = ({ name, description, avatar }) => (
  <Paper
    elevation={2}
    sx={{
      borderRadius: 4,
      flex: '1 1 340px',
      minWidth: 280,
      maxWidth: 500,
      height: 400,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 2px 16px 0 rgba(60,60,60,0.07)',
      background: '#fff',
      cursor: 'pointer',
      transition: 'box-shadow 0.2s',
      '&:hover': {
        boxShadow: '0 4px 24px 0 rgba(60,60,60,0.12)',
      },
    }}
  >
    <Box
      sx={{
        width: '100%',
        height: '100%',
        background: `url(${avatar}) center/cover no-repeat`,
        filter: 'grayscale(0.1)',
        transition: 'filter 0.3s',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        py: 2,
        opacity: 0,
        pointerEvents: 'none',
        background: 'rgba(255,255,255,0.92)',
        transition: 'opacity 0.4s cubic-bezier(.4,0,.2,1)',
        '&:hover': {
          opacity: 1,
          pointerEvents: 'auto',
        },
        // Para que el hover funcione en el padre
        ...(typeof window !== 'undefined' ? {
          '@media (hover: hover)': {
            '.MuiPaper-root:hover &': {
              opacity: 1,
              pointerEvents: 'auto',
            },
          },
        } : {}),
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: '#222' }}>
        {name}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </Box>
  </Paper>
);

export default PhotographerCard;
