import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';
import academicsImg from '../assets/images/academics.png';

const Academics = () => {
    const departments = [
        { title: 'Sciences', icon: '🧪', desc: 'Cutting-edge labs and dedicated research opportunities.' },
        { title: 'Humanities', icon: '🌍', desc: 'Understanding society, history, and cultural heritage.' },
        { title: 'Mathematics', icon: '📐', desc: 'Nurturing analytical thinking and problem-solving skills.' },
        { title: 'Information Tech', icon: '💻', desc: 'Preparing students for the digital frontier.' },
    ];

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        borderRadius: 6
    };

    return (
        <Box id="academics" component="section" sx={{ py: 12, background: '#0c111e' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" sx={{ mb: 8, fontWeight: 700 }}>
                    Academic <Box component="span" sx={{ color: '#fbbf24' }}>Excellence</Box>
                </Typography>

                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} lg={5}>
                        <Box component="img"
                            src={academicsImg}
                            alt="Students Studying"
                            sx={{
                                width: '100%',
                                borderRadius: 8,
                                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                                border: '1px solid rgba(255, 255, 255, 0.08)'
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} lg={7}>
                        <Grid container spacing={3}>
                            {departments.map((dept, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Card sx={{
                                        ...glassStyle,
                                        height: '100%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            borderColor: 'rgba(56, 189, 248, 0.3)',
                                            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
                                        }
                                    }}>
                                        <CardContent sx={{ p: 4 }}>
                                            <Typography variant="h3" sx={{ fontSize: '2.5rem', mb: 2 }}>{dept.icon}</Typography>
                                            <Typography variant="h6" sx={{ color: '#fbbf24', mb: 1, fontWeight: 700 }}>{dept.title}</Typography>
                                            <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.6 }}>{dept.desc}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Academics;
