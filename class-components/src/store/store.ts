import {configureStore  } from "@reduxjs/toolkit";
import searchReducer from './reducers/headerReducer';
import { peopleApi } from '../services/api' 

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [peopleApi.reducerPath]: peopleApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApi.middleware),
});
  


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;