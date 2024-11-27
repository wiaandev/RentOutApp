import {Button, Grid2, ImageList, ImageListItem, Paper, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import Logo from '../assets/logo.svg';

export function Landing() {

    const navigate = useNavigate();

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage',
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
        },
        {
            img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
            title: 'Coffee table',
        },
    ];


    return (
        <Grid2 size={'grow'} container>
            <Grid2 size={'grow'} p={3} rowGap={2} justifyContent={'center'} alignItems={'center'}>
            <img src={Logo} alt={'logo'}/>
                <Grid2 size={12} mb={5}>
                    <Typography fontFamily={'Syne'} fontSize={'60px'}>Welcome to RentOut.</Typography>
                    <Typography variant={'subtitle2'}>Rentout is a platform for renting your home</Typography>
                </Grid2>
                <Grid2 my={2}>

                    <Grid2 container size={12} columnGap={2}>

                <Button variant={'contained'} onClick={() => navigate('/register')}>Sign Up</Button>
                <Button variant={'outlined'} onClick={() => navigate('/listings')}>View Listings</Button>
                    </Grid2>
                </Grid2>
                <Paper variant={'outlined'} sx={{p: 2, backgroundColor: 'transparent', borderColor: 'primary.main'}}>
                    <Typography variant={'h2'}>How does it work?</Typography>
                <Typography variant={'body1'}>It's as easy as 1, 2, 3 and you can sign up and start renting a place to stay for the vacation. <br/> Or maybe you are renting out your place because it is close to an attraction.</Typography>

                </Paper>

            </Grid2>

            <Grid2 size={4} container justifyContent={'center'} alignItems={'center'}>
                {/*<Box display='flex'*/}
                {/*     flexDirection={'column'}*/}
                {/*     overflow={'auto'}*/}
                {/*     sx={{objectFit: 'cover'}}*/}
                {/*     borderRadius={10}*/}
                {/*     component={"img"} src={LandingImage} flex={1} position={'relative'} minHeight={'100%'}*/}
                {/*     height={'100vh'}/>*/}

                <ImageList variant="masonry" cols={2} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                style={{borderRadius: '10px'}}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

            </Grid2>
        </Grid2>
    );
}
