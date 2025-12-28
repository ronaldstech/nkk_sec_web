import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0284c7', // Sky Blue 600
            light: '#38bdf8', // Sky Blue 400
            dark: '#0369a1', // Sky Blue 700
        },
        secondary: {
            main: '#fbbf24', // Sun Gold
            light: '#fcd34d',
            dark: '#d97706',
        },
        background: {
            default: '#0c111e', // Dark Deep Blue/Black
            paper: 'rgba(255, 255, 255, 0.05)',
        },
        text: {
            primary: '#f9fafb',
            secondary: '#94a3b8', // Slate 400
        },
    },
    typography: {
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        h1: {
            fontWeight: 800,
            letterSpacing: '-0.025em',
        },
        h2: {
            fontWeight: 700,
            letterSpacing: '-0.025em',
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: '10px 24px',
                    transition: 'all 0.3s ease',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 20px 40px 0 rgba(0, 0, 0, 0.4)',
                },
            },
        },
    },
});

export default theme;
