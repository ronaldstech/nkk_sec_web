import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Paper, Fade, Zoom, Stack, useTheme } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Events = () => {
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

        const element = document.getElementById('events');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const events = [
        {
            title: 'Parent-Teacher Consultations',
            date: 'July 5, 2024',
            time: '08:00 AM - 04:00 PM',
            location: 'Main School Hall',
            icon: <GroupsIcon />,
            color: '#fbbf24'
        },
        {
            title: 'Inter-School Football Finals',
            date: 'July 15, 2024',
            time: '02:30 PM',
            location: 'School Sports Grounds',
            icon: <AutoAwesomeIcon />, // Sporting spirit
            color: '#38bdf8'
        },
        {
            title: 'End of Term 2 Examinations',
            date: 'July 22 - Aug 2, 2024',
            time: 'All Day',
            location: 'Classrooms',
            icon: <EventIcon />,
            color: '#fbbf24'
        }
    ];

    const eventItemStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        borderRadius: 6,
        p: 4,
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'rgba(56, 189, 248, 0.3)',
            transform: 'translateX(12px)',
            '& .event-accent': {
                width: '8px'
            }
        }
    };

    return (
        <Box id="events" component="section" sx={{
            py: { xs: 10, md: 15 },
            background: '#0c111e', // Match theme
            position: 'relative'
        }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 8 }}>
                    <Fade in={checked} timeout={1000}>
                        <Box>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                                <EventIcon sx={{ color: 'secondary.main', fontSize: '1rem' }} />
                                <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: 3 }}>
                                    MARK YOUR CALENDAR
                                </Typography>
                            </Stack>
                            <Typography variant="h2" sx={{
                                fontWeight: 900,
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                color: 'white'
                            }}>
                                Upcoming <Box component="span" sx={{
                                    background: 'linear-gradient(135deg, #fbbf24 0%, #38bdf8 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>School Events</Box>
                            </Typography>
                        </Box>
                    </Fade>
                </Box>

                <Stack spacing={3}>
                    {events.map((event, index) => (
                        <Zoom in={checked} style={{ transitionDelay: `${index * 200}ms` }} key={index}>
                            <Paper sx={eventItemStyle}>
                                <Box className="event-accent" sx={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: '4px',
                                    background: `linear-gradient(to bottom, ${event.color}, transparent)`,
                                    transition: 'width 0.3s ease'
                                }} />
                                <Grid container spacing={4} alignItems="center">
                                    <Grid item xs={12} md={1} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' } }}>
                                        <Box sx={{
                                            p: 2,
                                            borderRadius: 4,
                                            background: 'rgba(255,255,255,0.05)',
                                            color: event.color,
                                            boxShadow: `0 0 20px ${event.color}33`
                                        }}>
                                            {event.icon}
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={5}>
                                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, mb: 1 }}>
                                            {event.title}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={4}>
                                                <Stack direction="row" spacing={1.5} alignItems="center">
                                                    <EventIcon sx={{ color: 'primary.light', fontSize: '1.2rem' }} />
                                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
                                                        {event.date}
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <Stack direction="row" spacing={1.5} alignItems="center">
                                                    <AccessTimeIcon sx={{ color: 'primary.light', fontSize: '1.2rem' }} />
                                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                                        {event.time}
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <Stack direction="row" spacing={1.5} alignItems="center">
                                                    <LocationOnIcon sx={{ color: 'primary.light', fontSize: '1.2rem' }} />
                                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                                        {event.location}
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Zoom>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Events;
