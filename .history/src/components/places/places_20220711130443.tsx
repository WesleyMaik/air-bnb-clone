import { Skeleton, SkeletonText } from "@chakra-ui/react";
import styled from "styled-components";

const PlacesGroup = () => {

    return(
        <>
            <Skeleton width={250} height={250}/>
            <SkeletonText width={250}/>
        </>
    )
}

interface IPlace{
    id:string
}

export const Place = ({id:string}:IPlace) => {

};

export default PlacesGroup;