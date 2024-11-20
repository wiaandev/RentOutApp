import {createTheme, ThemeOptions} from "@mui/material";

const fontList = `"Syne, Inter, Roboto"`;

const theme: ThemeOptions = createTheme({
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
            fontFamily: fontList
        },
    }
})

export {theme};