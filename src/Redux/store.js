import { configureStore } from "@reduxjs/toolkit";
import movies from "./slices/moviesSlice";

const store = configureStore({
    reducer: {
        movies
    }
});

export default store;