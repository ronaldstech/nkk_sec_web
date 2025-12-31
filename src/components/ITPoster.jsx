import React from 'react';
import { Box, Typography, Container, Stack, Paper, IconButton } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import VerifiedIcon from '@mui/icons-material/Verified';

const ITPoster = () => {
    return (
        <Box sx={{
            minHeight: '100vh',
            background: '#0c111e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            p: 4
        }}>
            {/* Background Glows */}
            <Box sx={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0,
            }} />
            <Box sx={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '700px',
                height: '700px',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%)',
                filter: 'blur(100px)',
                zIndex: 0,
            }} />

            <Paper sx={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '900px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(30px)',
                borderRadius: '40px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                p: { xs: 4, md: 10 },
                textAlign: 'center',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
            }}>
                <Stack spacing={4} alignItems="center">
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: '24px',
                        background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                        boxShadow: '0 10px 30px rgba(251, 191, 36, 0.4)',
                        mb: 2
                    }}>
                        <VerifiedIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>

                    <Typography variant="h1" sx={{
                        fontWeight: 900,
                        fontSize: { xs: '3rem', md: '5rem' },
                        color: 'white',
                        lineHeight: 1,
                        letterSpacing: '-0.02em'
                    }}>
                        3 YEARS OF <br />
                        <Box component="span" sx={{
                            background: 'linear-gradient(135deg, #fbbf24 0%, #38bdf8 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>TRUST</Box>
                    </Typography>

                    <Typography variant="h5" sx={{
                        color: 'rgba(255,255,255,0.7)',
                        fontWeight: 500,
                        letterSpacing: 2,
                        textTransform: 'uppercase'
                    }}>
                        Empowering Growth through IT Excellence
                    </Typography>

                    <Box sx={{
                        width: '100px',
                        height: '4px',
                        background: 'linear-gradient(90deg, transparent, #38bdf8, transparent)',
                        borderRadius: '2px'
                    }} />

                    <Grid container spacing={4} sx={{ mt: 2 }}>
                        {[
                            { icon: <ComputerIcon />, label: 'Managed IT Services' },
                            { icon: <SecurityIcon />, label: 'Cyber Security' },
                            { icon: <CloudIcon />, label: 'Cloud Solutions' }
                        ].map((item, idx) => (
                            <Grid item xs={12} md={4} key={idx}>
                                <Stack alignItems="center" spacing={1.5}>
                                    <Box sx={{ color: 'primary.light' }}>
                                        {React.cloneElement(item.icon, { sx: { fontSize: 32 } })}
                                    </Box>
                                    <Typography variant="body2" sx={{ color: 'white', fontWeight: 700 }}>
                                        {item.label}
                                    </Typography>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>

                    <Typography variant="body1" sx={{
                        color: 'rgba(255,255,255,0.5)',
                        maxWidth: '500px',
                        lineHeight: 1.8,
                        pt: 4
                    }}>
                        A milestone achieved through dedication, innovation, and the unwavering support of our clients. We continue to redefine the digital landscape.
                    </Typography>
                </Stack>
            </Paper>
        </Box>
    );
};

// Simple Grid helper since it's not imported from MUI in this snippet for brevity, 
// though I should use real MUI Grid for the real file.
import { Grid } from '@mui/material';

export default ITPoster;
