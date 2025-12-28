import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1100
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight: 800, letterSpacing: 1 }}
          >
            NKHOTAKOTA <Box component="span" sx={{ color: 'secondary.main' }}>SEC</Box>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            {['Home', 'About', 'Academics', 'Sports'].map((item) => (
              <Button
                key={item}
                href={`#${item.toLowerCase()}`}
                sx={{
                  color: 'text.primary',
                  opacity: 0.8,
                  '&:hover': {
                    opacity: 1,
                    color: 'secondary.main',
                    background: 'transparent'
                  }
                }}
              >
                {item}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              sx={{
                ml: 2,
                background: 'linear-gradient(135deg, #38bdf8, #0284c7)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(2, 132, 199, 0.4)',
                  background: 'linear-gradient(135deg, #7dd3fc, #0369a1)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Enroll Now
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
