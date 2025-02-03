import {Divider, Typography} from "@mui/material";
import {useParams} from "react-router";
import {graphql, useLazyLoadQuery} from "react-relay";
import {ViewPropertyQuery} from "./__generated__/ViewPropertyQuery.graphql.ts";

export const ViewProperty = () => {
    const {id} = useParams<{id: string}>();

    const data = useLazyLoadQuery<ViewPropertyQuery>(
        graphql`
            query ViewPropertyQuery($id: ID!) {
                property(propertyId: $id){
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
            }
        `, {id: id ?? ''}
    )
    return (
        <>
            <Typography variant={'h1'}>R {data.property.weeklyAmount}</Typography>
            <Typography variant={'body2'}>Per week</Typography>
            <Divider/>
            <Typography>{data.property.bedroomAmount} bedroom {data.property.propertyType}</Typography>
        </>
    )
};