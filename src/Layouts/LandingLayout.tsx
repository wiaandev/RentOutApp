import {Grid2} from "@mui/material";
import {Outlet} from "react-router-dom";

export function LandingLayout() {
    return (
        <Grid2 size={12}>
            <Outlet/>
        </Grid2>
    );
}