import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Container, Stack, Fade, Grow, useTheme, useMediaQuery } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import heroImg from '../assets/images/hero.png';

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    const stats = [
        { icon: <GroupsIcon />, value: '1,200+', label: 'Students' },
        { icon: <SchoolIcon />, value: '50+', label: 'Expert Staff' },
        { icon: <EmojiEventsIcon />, value: '30+', label: 'Years of Excellence' },
    ];

    return (
        <Box id="home" component="section" sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            pt: { xs: '70px', md: 0 }, // Account for fixed navbar on mobile
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#0c111e'
        }}>
            {/* Background Image & Overlay */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1
            }}>
                <Box
                    component="img"
                    src={heroImg}
                    alt="School Campus"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        animation: 'slowZoom 30s infinite alternate linear',
                        opacity: 0.6
                    }}
                />
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(12, 17, 30, 0.4) 0%, rgba(12, 17, 30, 0.9) 100%)',
                    zIndex: 2
                }} />
            </Box>

            {/* Decorative Glass Elements */}
            <Box sx={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
                filter: 'blur(50px)',
                zIndex: 2,
                animation: 'float 10s infinite alternate ease-in-out'
            }} />
            <Box sx={{
                position: 'absolute',
                bottom: '15%',
                right: '5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 2,
                animation: 'float 12s infinite alternate-reverse ease-in-out'
            }} />

            <Container maxWidth="lg" sx={{ zInclude: 10, position: 'relative', zIndex: 5 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Fade in={checked} timeout={1000}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: 'primary.light',
                                fontWeight: 700,
                                letterSpacing: 4,
                                mb: 2,
                                display: 'block'
                            }}
                        >
                            ESTABLISHED 1964
                        </Typography>
                    </Fade>

                    <Grow in={checked} timeout={1500}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '2rem', md: '4rem' },
                                mb: 3,
                                fontWeight: 900,
                                color: 'white',
                                lineHeight: 1.1,
                                textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                        >
                            Welcome to <Box
                                component="span"
                                sx={{
                                    background: 'linear-gradient(135deg, #fbbf24 0%, #38bdf8 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-block'
                                }}
                            >
                                NKHOTAKOTA SECONDARY SCHOOL
                            </Box>
                        </Typography>
                    </Grow>

                    <Fade in={checked} timeout={2000}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                mb: 6,
                                fontWeight: 400,
                                maxWidth: '800px',
                                mx: 'auto',
                                lineHeight: 1.6,
                                fontStyle: 'italic'
                            }}
                        >
                            "Ambassadors of Positive Change"
                        </Typography>
                    </Fade>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={3}
                        justifyContent="center"
                        sx={{ mb: 8 }}
                    >
                        <Grow in={checked} timeout={2500}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    background: 'linear-gradient(135deg, #38bdf8, #0284c7)',
                                    borderRadius: '50px',
                                    px: { xs: 4, md: 6 },
                                    py: { xs: 1.5, md: 2 },
                                    fontSize: { xs: '0.9rem', md: '1.1rem' },
                                    boxShadow: '0 10px 20px rgba(2, 132, 199, 0.3)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #7dd3fc, #0369a1)',
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 15px 30px rgba(2, 132, 199, 0.5)'
                                    }
                                }}
                            >
                                Admissions 2024
                            </Button>
                        </Grow>
                        <Grow in={checked} timeout={2800}>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    color: 'white',
                                    borderColor: 'rgba(255, 255, 255, 0.4)',
                                    borderRadius: '50px',
                                    px: { xs: 4, md: 6 },
                                    py: { xs: 1.5, md: 2 },
                                    fontSize: { xs: '0.9rem', md: '1.1rem' },
                                    backdropFilter: 'blur(5px)',
                                    '&:hover': {
                                        borderColor: 'white',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        transform: 'translateY(-3px)'
                                    }
                                }}
                            >
                                Virtual Tour
                            </Button>
                        </Grow>
                    </Stack>
                </Box>

                {/* Stats Section */}
                <Fade in={checked} timeout={3500}>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: { xs: 4, md: 10 },
                        px: 3,
                        py: 4,
                        borderRadius: 8,
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        maxWidth: '1000px',
                        mx: 'auto'
                    }}>
                        {stats.map((stat, index) => (
                            <Box key={index} sx={{ textAlign: 'center', minWidth: '120px' }}>
                                <Box sx={{ color: 'primary.light', mb: 1, '& svg': { fontSize: '2rem' } }}>
                                    {stat.icon}
                                </Box>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: 'white', mb: 0.5 }}>
                                    {stat.value}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                                    {stat.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Fade>
            </Container>

            {/* Scroll Down Indicator */}
            <Box sx={{
                position: 'absolute',
                bottom: 30,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                opacity: 0.7,
                animation: 'bounce 2s infinite',
                cursor: 'pointer'
            }} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                <Typography variant="caption" sx={{ color: 'white', fontWeight: 600, letterSpacing: 2 }}>
                    SCROLL
                </Typography>
                <KeyboardArrowDownIcon sx={{ color: 'white', fontSize: '2rem' }} />
            </Box>

            <style>
                {`
                @keyframes float {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(20px, 40px); }
                }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
                    40% { transform: translateX(-50%) translateY(-10px); }
                    60% { transform: translateX(-50%) translateY(-5px); }
                }
                `}
            </style>
        </Box>
    );
};

export default Hero;

