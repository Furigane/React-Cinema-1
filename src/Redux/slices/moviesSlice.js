import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    films: [],
    status: 'loading',
    errors: null
}

export const fetchMovies = createAsyncThunk('movie/fetchmovies', () => {
    return axios.get("https://676c1c82bc36a202bb86c01d.mockapi.io/movies")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            let errorMessage = '';
            switch (error.response?.status) {
                case 500:
                    errorMessage = 'Произошла непонятная ошибка, скоро исправим';
                    
                    break;
            
                default:
                    break;
            }
            console.error(error);
            throw new Error(errorMessage);
        })
    // try {
    //     const movies = await fetch("https://676c1c82bc36a202bb86c01.mockapi.io/movies");
    //     // if(!movies.ok) {
    //     //     throw new Error('Error on server, sorry');
    //     // }
    //     return movies.json();
    // } catch (error) {
    //     console.error(error);
    //     throw error;
    // }
})

const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            }) 
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.films = action.payload;
                state.status = 'fulfilled';
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'loading';
                state.errors = action.error.message;
                console.log(action);
                console.error(action.error.message)
            })
    }
})


export default moviesSlice.reducer;
export const { test } = moviesSlice.actions;