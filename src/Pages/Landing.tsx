import {Grid2, Typography} from "@mui/material";
import LandingImage from '../assets/landing.jpg';

export function Landing() {

    return (
        <Grid2 size={'grow'}>
            <Grid2 size={12} textAlign={'center'} mb={2}>
            <Typography variant={'h1'}>The best way to rent your place.</Typography>
            </Grid2>

            <Grid2 size={12} container justifyContent={'center'} alignItems={'center'}>
               <img src={LandingImage} width={'700'} style={{ borderRadius: '20' }} />
            </Grid2>
        </Grid2>
    );
}
