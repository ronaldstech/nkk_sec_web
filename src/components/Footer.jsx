import React from 'react';
import { Container, Grid, Typography, Box, Link, List, ListItem } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 8,
                mt: 8,
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                            NKHOTAKOTA <Box component="span" sx={{ color: '#fbbf24' }}>SEC</Box>
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#9ca3af', maxWidth: 400 }}>
                            Empowering the next generation with quality education and strong values. Located in the beautiful lakeside district of Nkhotakota.
                        </Typography>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" sx={{ color: '#fbbf24', mb: 2, fontSize: '1rem', fontWeight: 700 }}>
                            Quick Links
                        </Typography>
                        <List dense disablePadding>
                            {['Home', 'About Us', 'Academics', 'Sports'].map((text) => (
                                <ListItem key={text} disableGutters>
                                    <Link
                                        href={`#${text.toLowerCase().replace(' ', '')}`}
                                        underline="none"
                                        sx={{
                                            color: '#9ca3af',
                                            '&:hover': { color: '#fbbf24' },
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        {text}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" sx={{ color: '#fbbf24', mb: 2, fontSize: '1rem', fontWeight: 700 }}>
                            Contact Info
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#9ca3af', mb: 1 }}>📍 P.O. Box 136, Nkhotakota</Typography>
                        <Typography variant="body2" sx={{ color: '#9ca3af', mb: 1 }}>📞 +265 (0) 99 123 4567</Typography>
                        <Typography variant="body2" sx={{ color: '#9ca3af' }}>📧 info@nkksec.edu.mw</Typography>
                    </Grid>
                </Grid>

                <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', mt: 6, pt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                        &copy; {new Date().getFullYear()} Nkhotakota Secondary School. All Rights Reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
