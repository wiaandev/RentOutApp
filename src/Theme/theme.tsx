import {createTheme, responsiveFontSizes} from "@mui/material";

const fontList =
    `"Syne", "Poppins", "Helvetica", "Arial", "sans-serif"`;

let theme = createTheme({
    palette: {
        primary: {
            main: '#1d1b19',
        },
        secondary: {
            main: '#fe300b',
        },
        background: {
            default: '#faf5f1',
            paper: '#e1ddd9',
        },
        text: {
            primary: '#1d1b19',
        },
    },
    typography: {
        allVariants: {
            fontFamily: fontList,
        },
        h1: {
            fontSize: 48,
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
            fontFamily: 'Poppins',
        },
        body1: {
            fontSize: 14,
            fontWeight: 500,
            fontFamily: 'Poppins',
        },
        body2: {
            fontSize: 12,
            fontWeight: 500,
            fontFamily: 'Poppins',
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 700,
            fontFamily: 'Poppins',
        },
        subtitle2: {
            fontSize: 16,
            fontWeight: 500,
            fontFamily: 'Poppins',
        },
        caption: {
            fontSize: 12,
            fontWeight: 500,
            fontFamily: 'Poppins',
        },
        overline: {
            fontWeight: 500,
            fontSize: 10,
            fontFamily: 'Poppins',
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