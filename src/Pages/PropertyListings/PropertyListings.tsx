import {Typography} from "@mui/material";
import {graphql, useLazyLoadQuery} from "react-relay";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import {PropertyListingsQuery} from "./__generated__/PropertyListingsQuery.graphql.ts";
import {PropertyListingsCard} from "../../Components/PropertyListingsCard/PropertyListingsCard.tsx";

dayjs.extend(relativeTime);


export const PropertyListings = () => {
    const data = useLazyLoadQuery<PropertyListingsQuery>(graphql`
        query PropertyListingsQuery {
            properties {
               ...PropertyListingsCard_query
            }
        }
    `, {});

    console.log(data.properties);

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
                    <PropertyListingsCard propertyListingsCardRef={i} key={index} />
                ))}
        </>
    );
};
