import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Stack, Paper, Fade, Zoom, useTheme } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import sportsImg from '../assets/images/sports.png';

const Sports = () => {
    const theme = useTheme();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setChecked(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('sports');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const features = [
        {
            title: 'State Champions',
            icon: <MilitaryTechIcon />,
            color: '#fbbf24',
            desc: 'Proud winners of the 2024 Northern Region Athletics Championship.'
        },
        {
            title: 'Elite Coaching',
            icon: <FitnessCenterIcon />,
            color: '#38bdf8',
            desc: 'World-class training programs designed for holistic athletic development.'
        },
    ];

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        boxShadow: '0 20px 40px 0 rgba(0, 0, 0, 0.4)',
        borderRadius: 6,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            transform: 'translateX(10px)',
            background: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'rgba(255, 255, 255, 0.12)',
        }
    };

    return (
        <Box id="sports" component="section" sx={{
            py: { xs: 10, md: 15 },
            background: '#0c111e',
            position: 'relative'
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} lg={5}>
                        <Fade in={checked} timeout={1200}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: '-30px',
                                    right: '-30px',
                                    width: '150px',
                                    height: '150px',
                                    background: 'rgba(251, 191, 36, 0.1)',
                                    borderRadius: '50%',
                                    filter: 'blur(40px)',
                                    zIndex: 0
                                }} />
                                <Box component="img"
                                    src={sportsImg}
                                    alt="Sports at Nkhotakota"
                                    sx={{
                                        width: '100%',
                                        position: 'relative',
                                        zIndex: 1,
                                        borderRadius: 10,
                                        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        animation: 'floatSports 6s infinite ease-in-out'
                                    }}
                                />
                            </Box>
                        </Fade>
                    </Grid>

                    <Grid item xs={12} lg={7}>
                        <Fade in={checked} timeout={1000}>
                            <Box>
                                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                                    <AutoAwesomeIcon sx={{ color: 'secondary.main', fontSize: '1rem' }} />
                                    <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: 2 }}>
                                        CHAMPION SPIRIT
                                    </Typography>
                                </Stack>
                                <Typography variant="h2" sx={{
                                    mb: 4,
                                    fontWeight: 900,
                                    fontSize: { xs: '2.5rem', md: '4rem' },
                                    lineHeight: 1.1,
                                    color: 'white'
                                }}>
                                    Beyond the <Box component="span" sx={{
                                        background: 'linear-gradient(135deg, #fbbf24 0%, #38bdf8 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>Classroom</Box>
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 3, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.6 }}>
                                    At Nkhotakota Secondary, we believe in the power of sports to build character, teamwork, and resilience.
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, fontSize: '1.15rem', lineHeight: 1.8 }}>
                                    Our students excel in various disciplines, from football and netball to athletics and swimming.
                                    We don't just play games; we cultivate leaders through sportsmanship and victory.
                                </Typography>

                                <Stack spacing={3}>
                                    {features.map((feature, index) => (
                                        <Zoom in={checked} style={{ transitionDelay: `${index * 200}ms` }} key={index}>
                                            <Paper sx={{ ...glassStyle, p: 3 }}>
                                                <Stack direction="row" spacing={3} alignItems="center">
                                                    <Box sx={{
                                                        minWidth: 64,
                                                        height: 64,
                                                        borderRadius: 4,
                                                        background: 'rgba(255,255,255,0.05)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        '& svg': { fontSize: '2.5rem', color: feature.color }
                                                    }}>
                                                        {feature.icon}
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 800, mb: 0.5 }}>
                                                            {feature.title}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                                                            {feature.desc}
                                                        </Typography>
                                                    </Box>
                                                </Stack>
                                            </Paper>
                                        </Zoom>
                                    ))}
                                </Stack>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>

            <style>
                {`
                @keyframes floatSports {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(1deg); }
                }
                `}
            </style>
        </Box>
    );
};

export default Sports;
