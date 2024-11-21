import React from 'react';
import {Grid2} from "@mui/material";
import {Outlet} from "react-router-dom";

export const RootLayout: React.FC = () => {
    return (
        <Grid2 p={5} size={12}>
            <Outlet/>
        </Grid2>
    );
};