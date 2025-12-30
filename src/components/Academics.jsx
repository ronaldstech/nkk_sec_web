import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Card, CardContent, Box, Fade, Zoom, Stack } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import PublicIcon from '@mui/icons-material/Public';
import CalculateIcon from '@mui/icons-material/Calculate';
import ComputerIcon from '@mui/icons-material/Computer';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import academicsImg from '../assets/images/academics.png';

const Academics = () => {
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

        const element = document.getElementById('academics');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const departments = [
        { title: 'Sciences', icon: <ScienceIcon />, color: '#38bdf8', desc: 'Cutting-edge labs and dedicated research opportunities.' },
        { title: 'Humanities', icon: <PublicIcon />, color: '#fbbf24', desc: 'Understanding society, history, and cultural heritage.' },
        { title: 'Mathematics', icon: <CalculateIcon />, color: '#34d399', desc: 'Nurturing analytical thinking and problem-solving skills.' },
        { title: 'Information Tech', icon: <ComputerIcon />, color: '#8b5cf6', desc: 'Preparing students for the digital frontier.' },
    ];

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        boxShadow: '0 20px 40px 0 rgba(0, 0, 0, 0.4)',
        borderRadius: 8,
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        '&:hover': {
            transform: 'translateY(-12px)',
            background: 'rgba(255, 255, 255, 0.06)',
            borderColor: 'rgba(56, 189, 248, 0.4)',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)',
            '& .icon-box': {
                transform: 'scale(1.1) rotate(5deg)',
                background: 'rgba(56, 189, 248, 0.2)'
            }
        }
    };

    return (
        <Box id="academics" component="section" sx={{
            py: { xs: 10, md: 15 },
            background: '#0c111e',
            position: 'relative'
        }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Fade in={checked} timeout={1000}>
                        <Box>
                            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mb: 2 }}>
                                <AutoAwesomeIcon sx={{ color: 'primary.light', fontSize: '1rem' }} />
                                <Typography variant="overline" sx={{ color: 'primary.light', fontWeight: 800, letterSpacing: 3 }}>
                                    WINGS TO FLY
                                </Typography>
                            </Stack>
                            <Typography variant="h2" sx={{
                                fontWeight: 900,
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                letterSpacing: '-0.02em',
                                color: 'white'
                            }}>
                                Academic <Box component="span" sx={{
                                    background: 'linear-gradient(135deg, #fbbf24 0%, #38bdf8 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-block'
                                }}>Excellence</Box>
                            </Typography>
                        </Box>
                    </Fade>
                </Box>

                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} lg={5}>
                        <Fade in={checked} timeout={1500}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{
                                    position: 'absolute',
                                    top: '-20px',
                                    left: '-20px',
                                    width: '100px',
                                    height: '100px',
                                    background: 'rgba(56, 189, 248, 0.1)',
                                    borderRadius: '50%',
                                    filter: 'blur(30px)',
                                    zIndex: 0
                                }} />
                                <Box component="img"
                                    src={academicsImg}
                                    alt="Students Studying"
                                    sx={{
                                        width: '100%',
                                        position: 'relative',
                                        zIndex: 1,
                                        borderRadius: 10,
                                        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        animation: 'floatImage 6s infinite ease-in-out'
                                    }}
                                />
                            </Box>
                        </Fade>
                    </Grid>

                    <Grid item xs={12} lg={7}>
                        <Grid container spacing={3}>
                            {departments.map((dept, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Zoom in={checked} style={{ transitionDelay: `${index * 150}ms` }}>
                                        <Card sx={glassStyle}>
                                            <CardContent sx={{ p: 4 }}>
                                                <Box className="icon-box" sx={{
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: 4,
                                                    background: 'rgba(255,255,255,0.05)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mb: 3,
                                                    transition: 'all 0.3s ease',
                                                    '& svg': { fontSize: '2rem', color: dept.color }
                                                }}>
                                                    {dept.icon}
                                                </Box>
                                                <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 800 }}>
                                                    {dept.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                                                    {dept.desc}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Zoom>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <style>
                {`
                @keyframes floatImage {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                `}
            </style>
        </Box>
    );
};

export default Academics;
