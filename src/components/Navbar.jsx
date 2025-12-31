import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, Container, IconButton,
  Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ['Home', 'About', 'Academics', 'News', 'Events', 'Sports'];


  const navLinkStyle = {
    color: 'white',
    fontSize: '0.95rem',
    fontWeight: 600,
    mx: 2,
    position: 'relative',
    transition: 'all 0.3s ease',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '0%',
      height: '2px',
      bottom: -4,
      left: 0,
      background: 'linear-gradient(135deg, #fbbf24, #38bdf8)',
      transition: 'width 0.3s ease',
    },
    '&:hover': {
      color: 'primary.light',
      background: 'transparent',
      '&:after': {
        width: '100%',
      },
    },
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled ? 'rgba(12, 17, 30, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1100,
        height: { xs: scrolled ? '60px' : '70px', md: scrolled ? '70px' : '90px' },
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: scrolled ? 'space-between' : 'space-between' }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 900,
              letterSpacing: 2,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            NKK <Box component="span" sx={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>SEC</Box>
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item}
                href={`#${item.toLowerCase()}`}
                sx={navLinkStyle}
              >
                {item}
              </Button>
            ))}
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              sx={{
                ml: 3,
                background: 'linear-gradient(135deg, #38bdf8, #0284c7)',
                borderRadius: '50px',
                px: 3,
                fontWeight: 700,
                boxShadow: '0 8px 20px rgba(2, 132, 199, 0.3)',
                '&:hover': {
                  background: scrolled ? 'linear-gradient(135deg, #7dd3fc, #0369a1)' : 'white',
                  color: scrolled ? 'white' : 'primary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 25px rgba(2, 132, 199, 0.5)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Portal
            </Button>
          </Box>

          {/* Mobile Menu Toggle */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: 'white' }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: '280px',
            background: 'rgba(12, 17, 30, 0.95)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            padding: 2
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item}
              component="a"
              href={`#${item.toLowerCase()}`}
              onClick={handleDrawerToggle}
              sx={{
                mb: 2,
                borderRadius: 2,
                '&:hover': { background: 'rgba(56, 189, 248, 0.1)' }
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: { color: 'white', fontWeight: 700, fontSize: '1.2rem', textAlign: 'center' }
                }}
              />
            </ListItem>
          ))}
          <Box sx={{ mt: 4, px: 2 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #fbbf24, #d97706)',
                borderRadius: 3,
                py: 1.5,
                fontWeight: 800
              }}
            >
              Student Portal
            </Button>
          </Box>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

