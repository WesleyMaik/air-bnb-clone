import { Skeleton, SkeletonText } from "@chakra-ui/react";
import styled from "styled-components";

const Container = styled.div`
        margin:0.5em 0;

        .image, .textgroup{
            width:250px;

            &.image{
                height:250px;
            }

            &.textgroup{
                margin:0.5em 0;
            }
        }
    `;

const PlacesGroup = () => {
    

    return(
        <Container>
            <PlacesGroupSkeleton />
        </Container>
    )
}

const PlacesGroupSkeleton = () => {
    const Group = () => {
        
    }

    return(
        <>
            <Skeleton className="image"/>
            <SkeletonText className="textgroup"/>
        </>
    )
}

interface IPlace{
    id:string
}

export const Place = ({id:string}:IPlace) => {

};

export default PlacesGroup;