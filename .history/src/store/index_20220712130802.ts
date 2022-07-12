import { configureStore } from '@reduxjs/toolkit'
import places from './places';

export const store = configureStore({
    reducer: {
        places: places,
    },
  })