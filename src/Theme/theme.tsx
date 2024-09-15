import { createTheme } from "@mui/material";

const fontList = `"FONT_NAME1, FONTNAME_2"`;

let theme = createTheme({
    palette: {
        primary: {
            main: ''
        },
        secondary: {
            main: ''
        },
    },
    typography: {
        allVariants: {
            fontFamily: fontList
        },
    }
})

export {theme};