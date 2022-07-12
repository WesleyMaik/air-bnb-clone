import { Skeleton, SkeletonText } from "@chakra-ui/react";
import styled from "styled-components";

const Container = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        flex-wrap:wrap;

        margin:0.5em 0;

        .group{
            width:300px;
            margin:0.25em;
            .image, .textgroup{

                &.image{
                    height:300px;

                    border-radius:8px;
                }

                &.textgroup{
                    margin:0.5em 0;
                }
            }
        }

        @media screen and (max-width:768px){
            .group{
                
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