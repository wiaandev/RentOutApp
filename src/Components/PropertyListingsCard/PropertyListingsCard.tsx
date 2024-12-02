import {Avatar, Button, Divider, Grid2, Paper, Typography} from "@mui/material";
import {calculateTimeDifference} from "../../Utils/timeHelper.ts";
import {Bathroom, BedroomParent, Deck, DirectionsCar, Pets, Pool, SignalWifi4Bar} from "@mui/icons-material";
import {graphql, useFragment} from "react-relay";
import {PropertyListingsCard_query$key} from "./__generated__/PropertyListingsCard_query.graphql.ts";
import {useNavigate} from "react-router";

interface PropertyListingsCardProps {
    propertyListingsCardRef: PropertyListingsCard_query$key;
}

export const PropertyListingsCard = ({propertyListingsCardRef}: PropertyListingsCardProps) => {
    const navigate = useNavigate();
    const data = useFragment(graphql`
        fragment PropertyListingsCard_query on PropertyPost {
            id
            propertyType
            createdAt
            parkingAmount
            weeklyAmount
            bathroomAmount
            bedroomAmount
            propertyExtras {
                id
                hasPatio
                hasGarden
                petsAllowed
                hasFlatlet
                hasPool
                hasFiber
            }
        }
    `, propertyListingsCardRef)
    return (
        <Paper elevation={2} sx={{
            padding: 2,
            margin: 1,
            my: 2,
        }} variant={'outlined'}>
            <Grid2 size={12} container alignItems={'center'} columnGap={2} mb={2}>
                <Grid2 container size={'auto'} direction={'column'} justifyContent={'center'}
                       alignItems={'center'}>
                    <Avatar
                        src={'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg'}/>

                </Grid2>
                <Grid2>
                    <Typography variant={'h2'}>{data.propertyType.toLocaleLowerCase()}</Typography>
                    <Typography variant="body2" fontStyle={'italic'}>
                        Uploaded {calculateTimeDifference(data.createdAt)}
                    </Typography>
                </Grid2>
            </Grid2>
            <Grid2 size={'grow'} container alignItems={'center'} columnGap={2} mb={2}>
                <Grid2 size={'auto'} container alignItems={'center'} gap={1}>
                    <BedroomParent/>
                    <Typography variant="body1">
                        {data.bedroomAmount}
                    </Typography>
                </Grid2>

                <Grid2 size={'auto'} container alignItems={'center'} gap={1}>
                    <Bathroom/>
                    <Typography variant="body2">
                        {data.bathroomAmount}
                    </Typography>
                </Grid2>

                <Grid2 size={'auto'} container alignItems={'center'} gap={1}>
                    <DirectionsCar/>
                    <Typography variant="body2">
                        {data.parkingAmount}
                    </Typography>
                </Grid2>
                <Grid2 size={'grow'} container justifyContent={'flex-end'}>
                    <Button onClick={() => navigate(`/listings/view/${data.id}`)} variant={'contained'}>View</Button>
                </Grid2>
            </Grid2>

            <Divider sx={{mb: 2}}/>
            <Typography>Extras</Typography>
            <Grid2 size={'auto'} container columnGap={4} alignItems={'center'}>


                {data.propertyExtras?.hasFiber && (
                    <Grid2 container alignItems={'center'} size={'auto'} direction={'column'} rowGap={1}>
                        <SignalWifi4Bar/>
                        <Typography variant={'body2'}>Fiber</Typography>
                    </Grid2>
                )}

                {data.propertyExtras?.hasPatio && (
                    <Grid2 container alignItems={'center'} size={'auto'} direction={'column'} rowGap={1}>
                        <Deck/>
                        <Typography variant={'body2'}>Patio</Typography>
                    </Grid2>
                )}
                {data.propertyExtras?.hasPool && (
                    <Grid2 container alignItems={'center'} size={'auto'} direction={'column'} rowGap={1}>
                        <Pool/>
                        <Typography variant={'body2'}>Pool</Typography>
                    </Grid2>
                )}
                {data.propertyExtras?.petsAllowed && (
                    <Grid2 container alignItems={'center'} size={'auto'} direction={'column'} rowGap={1}>
                        <Pets/>
                        <Typography variant={'body2'}>Pets Allowed</Typography>
                    </Grid2>
                )}
            </Grid2>
        </Paper>
    );
}