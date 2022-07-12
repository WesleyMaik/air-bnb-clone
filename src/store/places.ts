import { createSlice } from "@reduxjs/toolkit";

export interface IPlaceObject{
    data: [
        {
            id:string,
            country:string
            name:string,
            description:string,
            currency:string
            price:number,
            rating:number
            coords:{
                lat:number,
                lng:number
            }
        }
    ] | null
}

const initialState:IPlaceObject = {
    data:null
};

const placeSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {},
});

// export {} from placeSlice.actions;

export default placeSlice.reducer;