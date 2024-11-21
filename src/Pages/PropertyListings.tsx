import {Card, CardHeader, Paper, Typography} from "@mui/material";
import {graphql, useLazyLoadQuery} from "react-relay";
import {PropertyListingsQuery} from "./__generated__/PropertyListingsQuery.graphql.ts";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import {calculateTimeDifference} from "../Utils/timeHelper.ts";
import {Bathroom, BedroomParent, FiberNew, SignalWifi1Bar, SignalWifi4Bar} from "@mui/icons-material";

dayjs.extend(relativeTime);


export const PropertyListings = () => {
    const data = useLazyLoadQuery<PropertyListingsQuery>(graphql`
        query PropertyListingsQuery {
            properties {
                createdAt
                propertyType
                bedroomAmount
                bathroomAmount
                propertyExtras {
                    hasFiber
                    hasPool
                }
            }
        }
    `, {});

    return (
        <>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <Typography variant="h1">
                Property Listings
            </Typography>
            {/*<Typography>{consolidatedProperties}</Typography>*/}
            {data &&
                data.properties.map((i, index) => (
                    // The added `return` statement ensures JSX is returned.
                    <Paper key={index} elevation={2} sx={{ padding: 2, margin: 1, backgroundColor: 'transparent', my: 2 }} variant={'outlined'}>
                        <Typography variant={'h3'}>{i.propertyType.toLocaleLowerCase()}</Typography>
                        <Typography variant="body2">
                           Uploaded {calculateTimeDifference(i.createdAt)}
                        </Typography>
                        <Typography variant="body2">
                            <BedroomParent/>
                            {i.bedroomAmount}
                        </Typography>
                        <Typography variant="body2">
                            <Bathroom/>
                            {i.bedroomAmount}
                        </Typography>
                        <Typography>Extras</Typography>
                        {i.propertyExtras?.hasFiber && (
                            <>
                        <SignalWifi4Bar/>
                        Fiber
                            </>
                        )}
                    </Paper>
                ))}
        </>
    );
};
