import { configureStore  } from "@reduxjs/toolkit";

import { articleApi } from './article.js';



export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer // it will manages the API-related states 
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(articleApi.middleware)

    //  Handles API requests and caching

 }); 