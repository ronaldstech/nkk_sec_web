import React from 'react';
import { ThemeProvider, CssBaseline, GlobalStyles, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Sports from './components/Sports';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{
        '@keyframes slowZoom': {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.15)' }
        },
        html: {
          scrollBehavior: 'smooth'
        },
        body: {
          background: '#0c111e'
        },
        '::-webkit-scrollbar': {
          width: '8px'
        },
        '::-webkit-scrollbar-track': {
          background: '#0c111e'
        },
        '::-webkit-scrollbar-thumb': {
          background: '#0284c7',
          borderRadius: '4px'
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#38bdf8'
        }
      }} />
      <Box sx={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        <Hero />
        <About />
        <Academics />
        <Sports />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
