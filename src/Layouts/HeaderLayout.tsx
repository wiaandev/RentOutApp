import {Header} from "../Components/Header/Header.tsx";
import {Grid2} from "@mui/material";
import {Outlet} from "react-router-dom";

export const HeaderLayout = () => {
    return (
        <Grid2 size={12}>
            <Header/>
            <Outlet/>
        </Grid2>
    )
};