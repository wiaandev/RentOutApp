import Grid2 from '@mui/material/Grid2';
import {CircularProgress, Paper} from '@mui/material';

export function Loading() {
    return (
        <Grid2
            container
            size='grow'
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={'100vh'}
            component={Paper}
        >
            <CircularProgress color={'primary'} />
        </Grid2>
    );
}
