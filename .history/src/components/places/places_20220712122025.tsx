import { Skeleton, SkeletonText } from "@chakra-ui/react";
import styled from "styled-components";

const Container = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        flex-wrap:wrap;

        margin:0.5em 0;

        .group{
            margin:0.25em;
            .image, .textgroup{
                width:300px;

                &.image{
                    height:300px;

                    border-radius:8px;
                }

                &.textgroup{
                    margin:0.5em 0;
                }
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
        return (
            <>
            {[...Array(12)].map(() => (
                <div className="group">
                    <Skeleton className="image"/>
                    <SkeletonText className="textgroup"/>
                </div>
            ))}
            </>
        );
    };

    return <Group />
}

interface IPlace{
    id:string
}

export const Place = ({id:string}:IPlace) => {

};

export default PlacesGroup;