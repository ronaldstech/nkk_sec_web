import React from 'react';
import { Container, Grid, Typography, Box, Stack, Paper } from '@mui/material';
import sportsImg from '../assets/images/sports.png';

const Sports = () => {
    const features = [
        { title: 'State Champions', icon: '🏆', desc: 'Winners of the 2024 Northern Region Games.' },
        { title: 'Elite Coaching', icon: '🏃‍♂️', desc: 'Professional training programs for all skill levels.' },
    ];

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        borderRadius: 4
    };

    return (
        <Box id="sports" component="section" sx={{ py: 12, background: '#0f172a' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} lg={5}>
                        <Box component="img"
                            src={sportsImg}
                            alt="Sports at Nkhotakota"
                            sx={{
                                width: '100%',
                                borderRadius: 8,
                                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                                border: '1px solid rgba(255, 255, 255, 0.08)'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <Typography variant="h2" sx={{ mb: 4, fontWeight: 700 }}>
                            Beyond the <Box component="span" sx={{ color: '#fbbf24' }}>Classroom</Box>
                        </Typography>
                        <Typography variant="h5" sx={{ color: '#fcd34d', mb: 3, fontWeight: 400 }}>
                            At Nkhotakota Sec, we believe in the power of sports to build character, teamwork, and resilience.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#94a3b8', mb: 6, fontSize: '1.1rem' }}>
                            Our students excel in various disciplines, from football and netball to athletics and swimming. We participate in regional competitions and have a track record of sportsmanship and victory.
                        </Typography>

                        <Stack spacing={4}>
                            {features.map((feature, index) => (
                                <Stack direction="row" spacing={3} key={index} alignItems="flex-start">
                                    <Paper sx={{
                                        ...glassStyle,
                                        p: 2,
                                        borderRadius: 3,
                                        fontSize: '2rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: '60px',
                                        height: '60px',
                                        background: 'rgba(2, 132, 199, 0.15)',
                                        borderColor: 'rgba(56, 189, 248, 0.3)'
                                    }}>
                                        {feature.icon}
                                    </Paper>
                                    <Box>
                                        <Typography variant="h6" sx={{ color: '#fbbf24', fontWeight: 700 }}>{feature.title}</Typography>
                                        <Typography variant="body2" sx={{ color: '#94a3b8' }}>{feature.desc}</Typography>
                                    </Box>
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Sports;
