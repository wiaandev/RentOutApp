import {Grid2, Typography, Link as RouterLink} from "@mui/material";
import Logo from '../../assets/logo.svg'
import {Link} from "react-router-dom";

export const Header = () =>  {
    return (
        <Grid2 size={12} container justifyContent={'space-between'} alignItems={'center'} position={'sticky'} top={0} zIndex={999} p={3} sx={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(6.5px)',
            WebkitBackdropFilter: 'blur(6.5px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
        }}>
            <Grid2>

            <img src={Logo} alt={'logo'}/>
            </Grid2>
            <Grid2 container size={'auto'} columnGap={2}>


            <RouterLink fontSize={'14px'} fontWeight={'light'} underline={'hover'} component={Link}  to={"/"}>Home</RouterLink>
            <RouterLink fontSize={'14px'} fontWeight={'light'} underline={'hover'}  variant={'caption'} component={Link} to={"/listings"}>Listings</RouterLink>
            </Grid2>
        </Grid2>
    );
}