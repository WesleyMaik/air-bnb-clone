import { configureStore } from '@reduxjs/toolkit'
import places from './places';

const store = configureStore({
    reducer: {
        places: places,
    },
})

export default store;