import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Paper, Box, Fade, Zoom, Stack, useTheme } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PublicIcon from '@mui/icons-material/Public';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VisibilityIcon from '@mui/icons-material/Visibility';

const About = () => {
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

        const element = document.getElementById('about');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const stats = [
        { label: 'Years of History', value: '60+', icon: <HistoryEduIcon sx={{ color: '#fbbf24' }} /> },
        { label: 'Pass Rate', value: '98%', icon: <TrendingUpIcon sx={{ color: '#38bdf8' }} /> },
        { label: 'Alumni Globally', value: '5,000+', icon: <PublicIcon sx={{ color: '#fbbf24' }} /> },
    ];

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        boxShadow: '0 20px 40px 0 rgba(0, 0, 0, 0.4)',
        borderRadius: 6,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            transform: 'translateY(-5px)',
            background: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'rgba(255, 255, 255, 0.12)',
        }
    };

    return (
        <Box id="about" component="section" sx={{
            py: { xs: 10, md: 15 },
            background: '#0c111e',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Glow elements */}
            <Box sx={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }} />

            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} lg={7}>
                        <Fade in={checked} timeout={1000}>
                            <Box>
                                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                                    <AutoAwesomeIcon sx={{ color: 'secondary.main', fontSize: '1rem' }} />
                                    <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: 2 }}>
                                        OUR STORY
                                    </Typography>
                                </Stack>
                                <Typography variant="h2" sx={{
                                    mb: 4,
                                    fontSize: { xs: '2.5rem', md: '4rem' },
                                    fontWeight: 900,
                                    lineHeight: 1.1,
                                    color: 'white'
                                }}>
                                    A Legacy of <Box component="span" sx={{
                                        background: 'linear-gradient(135deg, #fbbf24 0%, #38bdf8 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>Greatness</Box>
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.6 }}>
                                    Established in the heart of Nkhotakota in 1964, our school has been a lighthouse of knowledge and character for generations.
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, fontSize: '1.2rem', lineHeight: 1.8 }}>
                                    We go beyond textbooks. Our mission is to forge world-class thinkers,
                                    driven by integrity and innovation, ready to lead Malawi into a bright future.
                                </Typography>

                                <Grid container spacing={3}>
                                    {stats.map((stat, index) => (
                                        <Grid item xs={12} sm={4} key={index}>
                                            <Zoom in={checked} style={{ transitionDelay: `${index * 200}ms` }}>
                                                <Paper sx={{ ...glassStyle, p: 3, textAlign: 'center' }}>
                                                    <Box sx={{ mb: 1.5, display: 'flex', justifyContent: 'center' }}>
                                                        {stat.icon}
                                                    </Box>
                                                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 900 }}>{stat.value}</Typography>
                                                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
                                                        {stat.label}
                                                    </Typography>
                                                </Paper>
                                            </Zoom>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Fade>
                    </Grid>

                    <Grid item xs={12} lg={5}>
                        <Fade in={checked} timeout={1500}>
                            <Paper sx={{ ...glassStyle, p: { xs: 4, md: 6 }, borderRadius: 10 }}>
                                <Stack spacing={6}>
                                    <Box>
                                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                                            <RocketLaunchIcon sx={{ color: 'primary.light' }} />
                                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 800 }}>Our Mission</Typography>
                                        </Stack>
                                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.7, borderLeft: '3px solid', borderColor: 'primary.main', pl: 3 }}>
                                            "To provide holistic education that empowers students to achieve academic excellence and social responsibility through discipline and innovation."
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                                            <VisibilityIcon sx={{ color: 'secondary.light' }} />
                                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 800 }}>Our Vision</Typography>
                                        </Stack>
                                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.7, borderLeft: '3px solid', borderColor: 'secondary.main', pl: 3 }}>
                                            "To be a premier center of academic excellence in Malawi, nurturing individuals who drive positive global change."
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;

