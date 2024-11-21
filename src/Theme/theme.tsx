import {createTheme, responsiveFontSizes} from "@mui/material";

const fontList =
    `"Syne", "Inter", "Helvetica", "Arial", "sans-serif"`;

let theme = createTheme({
    palette: {
        primary: {
            main: '#FE5534',
        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            default: '#16171B',
            paper: '#3B3E45',
        },
        text: {
            primary: 'rgba(255,255,255,0.87)',
        },
    },
    typography: {
        allVariants: {
            fontFamily: fontList,
        },
        h1: {
            fontSize: 32,
            fontWeight: 700,
            fontFamily: 'Syne',
        },
        h2: {
            fontSize: 28,
            fontWeight: 700,
            fontFamily: 'Syne',
        },
        h3: {
            fontSize: 26,
            fontWeight: 600,
            fontFamily: 'Syne',
        },
        h4: {
            fontSize: 22,
            fontWeight: 700,
            fontFamily: 'Syne',
        },
        h5: {
            fontSize: 20,
            fontWeight: 600,
            fontFamily: 'Syne',
        },
        h6: {
            fontSize: 18,
            fontWeight: 600,
            fontFamily: 'Inter',
        },
        body1: {
            fontSize: 14,
            fontWeight: 500,
            fontFamily: 'Inter',
        },
        body2: {
            fontSize: 12,
            fontWeight: 500,
            fontFamily: 'Inter',
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 700,
            fontFamily: 'Inter',
        },
        subtitle2: {
            fontSize: 16,
            fontWeight: 500,
            fontFamily: 'Inter',
        },
        caption: {
            fontSize: 12,
            fontWeight: 500,
            fontFamily: 'Inter',
        },
        overline: {
            fontWeight: 500,
            fontSize: 10,
            fontFamily: 'Inter',
        },
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                }
            }
        }
    },

})

theme = responsiveFontSizes(theme);

export {theme};