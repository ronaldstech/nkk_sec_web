import React from 'react';
import { Container, Grid, Typography, Box, Link, Stack, IconButton, Divider, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
    return (
        <Box component="footer" sx={{
            position: 'relative',
            background: 'rgba(12, 17, 30, 0.95)',
            pt: { xs: 10, md: 12 },
            pb: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            overflow: 'hidden'
        }}>
            {/* Background Aesthetic Glows */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: '15%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.03) 0%, transparent 70%)',
                filter: 'blur(50px)',
                zIndex: 0
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={6}>
                    {/* Brand & Mission Column */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" sx={{
                            fontWeight: 900,
                            mb: 3,
                            letterSpacing: -1,
                            color: 'white'
                        }}>
                            NKK <Box component="span" sx={{ color: 'secondary.main' }}>SEC</Box>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, mb: 4, maxWidth: 320 }}>
                            Empowering students through innovation, tradition, and academic excellence. Together, we build the future leaders of Malawi from the heart of Nkhotakota.
                        </Typography>
                        <Stack direction="row" spacing={1.5}>
                            {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map((Icon, index) => (
                                <IconButton key={index} sx={{
                                    bgcolor: 'rgba(255,255,255,0.03)',
                                    color: 'rgba(255,255,255,0.7)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        bgcolor: 'primary.main',
                                        color: 'white',
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 10px 20px rgba(56, 189, 248, 0.3)'
                                    }
                                }}>
                                    <Icon fontSize="small" />
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Quick Navigation */}
                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 800, mb: 3 }}>
                            Explore
                        </Typography>
                        <Stack spacing={2}>
                            {['About Us', 'Academics', 'News', 'Events', 'Life at NKK'].map((item) => (
                                <Link key={item} href={`#${item.toLowerCase().replace(' ', '')}`} underline="none" sx={{
                                    color: 'rgba(255,255,255,0.5)',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    transition: '0.2s',
                                    '&:hover': { color: 'primary.light', pl: 1 }
                                }}>
                                    {item}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Student Resources */}
                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 800, mb: 3 }}>
                            Resources
                        </Typography>
                        <Stack spacing={2}>
                            {['Student Portal', 'Exam Results', 'School Calendar', 'Library', 'E-Learning'].map((item) => (
                                <Link key={item} href="#" underline="none" sx={{
                                    color: 'rgba(255,255,255,0.5)',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    transition: '0.2s',
                                    '&:hover': { color: 'secondary.light', pl: 1 }
                                }}>
                                    {item}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact & Newsletter */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 800, mb: 3 }}>
                            Stay Updated
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 3, fontSize: '0.85rem' }}>
                            Subscribe to receive the latest school updates and newsletters.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
                            <TextField
                                placeholder="Email Address"
                                size="small"
                                variant="outlined"
                                sx={{
                                    flexGrow: 1,
                                    '& .MuiOutlinedInput-root': {
                                        color: 'white',
                                        bgcolor: 'rgba(255,255,255,0.03)',
                                        borderRadius: '12px',
                                        '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                        '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' }
                                    }
                                }}
                            />
                            <Button variant="contained" sx={{
                                borderRadius: '12px',
                                minWidth: '50px',
                                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)'
                            }}>
                                <SendIcon fontSize="small" />
                            </Button>
                        </Box>

                        <Stack spacing={2}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <LocationOnIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>Private Bag 14, Nkhotakota, Malawi</Typography>
                            </Stack>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <EmailIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>info@nkk-sec.com</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 6, borderColor: 'rgba(255,255,255,0.05)' }} />

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
                        &copy; {new Date().getFullYear()} Nkhotakota Secondary School. Crafted with Excellence.
                    </Typography>
                    <Stack direction="row" spacing={4}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                            <Link key={item} href="#" underline="none" sx={{
                                color: 'rgba(255,255,255,0.3)',
                                fontSize: '0.7rem',
                                '&:hover': { color: 'white' }
                            }}>
                                {item}
                            </Link>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;

