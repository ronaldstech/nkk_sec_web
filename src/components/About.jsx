import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';

const About = () => {
    const stats = [
        { label: 'Years of History', value: '50+' },
        { label: 'Pass Rate', value: '98%' },
        { label: 'Alumni globally', value: '1200+' },
    ];

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        borderRadius: 4
    };

    return (
        <Box id="about" component="section" sx={{ py: 12, background: '#0f172a' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} lg={7}>
                        <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700 }}>
                            A Legacy of <Box component="span" sx={{ color: '#fbbf24' }}>Greatness</Box>
                        </Typography>
                        <Typography variant="h5" sx={{ color: '#fcd34d', mb: 3, fontWeight: 400, fontStyle: 'italic' }}>
                            Established in the historical heart of Nkhotakota, our school has been a beacon of hope and knowledge for generations.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#94a3b8', mb: 6, fontSize: '1.1rem' }}>
                            We believe in more than just academic achievement. Our mission is to nurture well-rounded individuals who are
                            equipped with the skills, values, and passion needed to make a meaningful impact in Malawi and beyond.
                        </Typography>
                        <Grid container spacing={3}>
                            {stats.map((stat, index) => (
                                <Grid item xs={4} key={index}>
                                    <Paper sx={{ ...glassStyle, p: 3, textAlign: 'center' }}>
                                        <Typography variant="h4" sx={{ color: '#fbbf24', fontWeight: 800 }}>{stat.value}</Typography>
                                        <Typography variant="caption" sx={{ color: '#94a3b8' }}>{stat.label}</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} lg={5}>
                        <Paper sx={{ ...glassStyle, p: 5, borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Box>
                                <Typography variant="h6" sx={{ color: '#38bdf8', mb: 1, fontWeight: 700 }}>Our Mission</Typography>
                                <Typography variant="body1" sx={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                                    "To provide holistic education that empowers students to achieve academic excellence and social responsibility."
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{ color: '#38bdf8', mb: 1, fontWeight: 700 }}>Our Vision</Typography>
                                <Typography variant="body1" sx={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                                    "To be the leading institution in Northern Malawi, recognized for innovation, discipline, and outstanding results."
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
