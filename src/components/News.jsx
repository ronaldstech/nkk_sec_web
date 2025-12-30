import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Card, CardContent, CardMedia, Fade, Zoom, Stack, Button, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import graduationImg from '../assets/images/graduation_news.png';

const News = () => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setChecked(true); },
            { threshold: 0.1 }
        );
        const element = document.getElementById('news');
        if (element) observer.observe(element);
        return () => { if (element) observer.unobserve(element); };
    }, []);

    const newsItems = [
        {
            title: 'National Science Fair Success',
            date: 'May 22, 2024',
            category: 'Achievement',
            readTime: '3 min read',
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1471&auto=format&fit=crop',
            desc: 'NKK-SEC students take home top prizes in the Regional Innovation Challenge for their sustainable energy projects and research.'
        },
        {
            title: 'Upcoming Arts & Culture Week',
            date: 'July 10, 2024',
            category: 'Culture',
            readTime: '4 min read',
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop',
            desc: 'A week-long celebration of Malawi’s rich heritage through traditional music, contemporary dance, and vibrant visual arts exhibitions.'
        }
    ];

    const glassCardStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        '&:hover': {
            transform: 'translateY(-15px)',
            background: 'rgba(255, 255, 255, 0.06)',
            borderColor: 'rgba(56, 189, 248, 0.4)',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.6)',
            '& .news-image': { transform: 'scale(1.1)' },
            '& .read-more-btn': { color: 'white', transform: 'translateX(5px)' }
        }
    };

    return (
        <Box id="news" component="section" sx={{
            py: { xs: 10, md: 15 },
            background: '#0c111e',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background Glows */}
            <Box sx={{
                position: 'absolute',
                top: '15%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0,
                animation: 'floatGlow 10s infinite ease-in-out'
            }} />
            <Box sx={{
                position: 'absolute',
                bottom: '10%',
                right: '-10%',
                width: '700px',
                height: '700px',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.06) 0%, transparent 70%)',
                filter: 'blur(100px)',
                zIndex: 0,
                animation: 'floatGlow 15s infinite ease-in-out reverse'
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Fade in={checked} timeout={1000}>
                        <Box>
                            <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="center" sx={{ mb: 3 }}>
                                <NewspaperIcon sx={{ color: 'primary.light', fontSize: '1.8rem' }} />
                                <Typography variant="overline" sx={{
                                    color: 'secondary.main',
                                    fontWeight: 900,
                                    letterSpacing: 4,
                                    fontSize: '0.9rem'
                                }}>
                                    CAMPUS HUB
                                </Typography>
                            </Stack>
                            <Typography variant="h2" sx={{
                                fontWeight: 900,
                                fontSize: { xs: '2.8rem', md: '4.5rem' },
                                color: 'white',
                                mb: 2,
                                letterSpacing: '-0.02em',
                                lineHeight: 1.1
                            }}>
                                Latest <Box component="span" sx={{
                                    background: 'linear-gradient(135deg, #fbbf24 0%, #38bdf8 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>School News</Box>
                            </Typography>
                        </Box>
                    </Fade>
                </Box>

                {/* 3-Column Grid Layout */}
                <Grid container spacing={4} alignItems="stretch">
                    {newsItems.map((news, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                            <Zoom in={checked} style={{
                                transitionDelay: `${index * 200}ms`,
                                display: 'flex',
                                width: '100%'
                            }}>
                                <Card sx={{ ...glassCardStyle, flex: 1 }}>
                                    <Box sx={{ position: 'relative', height: 240, overflow: 'hidden', flexShrink: 0 }}>
                                        <CardMedia
                                            component="img"
                                            image={news.image}
                                            className="news-image"
                                            sx={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.8s ease'
                                            }}
                                        />
                                        <Chip
                                            label={news.category}
                                            sx={{
                                                position: 'absolute',
                                                top: 20,
                                                left: 20,
                                                background: 'rgba(12, 17, 30, 0.7)',
                                                backdropFilter: 'blur(10px)',
                                                color: '#38bdf8',
                                                fontWeight: 800,
                                                fontSize: '0.7rem',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                textTransform: 'uppercase'
                                            }}
                                        />
                                    </Box>

                                    <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Stack direction="row" spacing={2} sx={{ mb: 2, color: 'rgba(255,255,255,0.5)' }} alignItems="center">
                                            <Typography variant="caption" sx={{ fontWeight: 600 }}>{news.date}</Typography>
                                            <Typography variant="caption">•</Typography>
                                            <Stack direction="row" alignItems="center" spacing={0.6}>
                                                <AccessTimeIcon sx={{ fontSize: 13 }} />
                                                <Typography variant="caption" sx={{ fontWeight: 600 }}>{news.readTime}</Typography>
                                            </Stack>
                                        </Stack>

                                        {/* Title Trimming (2 lines) */}
                                        <Typography variant="h5" sx={{
                                            color: 'white',
                                            fontWeight: 800,
                                            mb: 2,
                                            lineHeight: 1.3,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            height: '2.6em' // Ensures consistent height even for short titles
                                        }}>
                                            {news.title}
                                        </Typography>

                                        {/* Description Trimming (3 lines) */}
                                        <Typography variant="body2" sx={{
                                            color: 'rgba(255,255,255,0.6)',
                                            mb: 4,
                                            lineHeight: 1.7,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            height: '5.1em' // Ensures consistent height for all descriptions
                                        }}>
                                            {news.desc}
                                        </Typography>

                                        <Box sx={{ mt: 'auto' }}>
                                            <Button
                                                className="read-more-btn"
                                                endIcon={<ArrowForwardIcon />}
                                                sx={{
                                                    color: 'primary.light',
                                                    fontWeight: 700,
                                                    p: 0,
                                                    textTransform: 'none',
                                                    fontSize: '0.95rem',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': { background: 'transparent', gap: '8px' }
                                                }}
                                            >
                                                Read Story
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Zoom>
                        </Grid>
                    ))}
                </Grid>

                {/* Footer CTA */}
                <Fade in={checked} timeout={1500}>
                    <Box sx={{ mt: 10, textAlign: 'center' }}>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                color: 'white',
                                borderColor: 'rgba(255,255,255,0.2)',
                                borderRadius: '100px',
                                px: 10,
                                py: 2,
                                fontWeight: 800,
                                fontSize: '1.1rem',
                                transition: 'all 0.4s ease',
                                '&:hover': {
                                    borderColor: 'primary.light',
                                    background: 'rgba(56, 189, 248, 0.05)',
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 0 40px rgba(56, 189, 248, 0.2)'
                                }
                            }}
                        >
                            Explore All News
                        </Button>
                    </Box>
                </Fade>
            </Container>

            <style>
                {`
                @keyframes floatGlow {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(40px, -30px) scale(1.15); }
                }
                `}
            </style>
        </Box>
    );
};

export default News;
