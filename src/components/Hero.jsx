import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import heroImg from '../assets/images/hero.png';

const Hero = () => {
    return (
        <Box id="home" component="section" sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
            }}>
                <Box
                    component="img"
                    src={heroImg}
                    alt="School Campus"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        animation: 'slowZoom 20s infinite alternate linear'
                    }}
                />
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(12, 17, 30, 0.6) 0%, rgba(12, 17, 30, 0.9) 100%)'
                }} />
            </Box>

            <Container maxWidth="md" sx={{ zIndex: 10, textAlign: 'center' }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '2.5rem', md: '5rem' },
                        mb: 3,
                        fontWeight: 800,
                        color: 'white'
                    }}
                >
                    Inspiring <Box
                        component="span"
                        sx={{
                            background: 'linear-gradient(135deg, #fbbf24 0%, #38bdf8 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        Excellence
                    </Box> <br />
                    at the Heart of Malawi
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        mb: 5,
                        fontSize: '1.2rem',
                        maxWidth: '700px',
                        mx: 'auto'
                    }}
                >
                    Nkhotakota Secondary School provides a world-class education where culture meets innovation.
                    Discover a community dedicated to shaping the leaders of tomorrow.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            background: 'linear-gradient(135deg, #38bdf8, #0284c7)',
                            borderRadius: 3,
                            px: 4,
                            '&:hover': {
                                background: 'linear-gradient(135deg, #7dd3fc, #0369a1)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 25px rgba(2, 132, 199, 0.3)'
                            }
                        }}
                    >
                        Discover More
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            color: 'white',
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            borderRadius: 50,
                            px: 4,
                            '&:hover': {
                                borderColor: 'white',
                                background: 'rgba(255, 255, 255, 0.1)'
                            }
                        }}
                    >
                        Virtual Tour
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;
