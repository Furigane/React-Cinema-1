import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    films: [],
    status: 'loading',
    errors: null
}

export const fetchMovies = createAsyncThunk('movie/fetchmovies', async () => {
    try {
        const movies = await fetch("https://676c1c82bc36a202bb86c01d.mockapi.io/movies");
        if(!movies.ok) {
            throw new Error('Error on server, sorry');
        }
        return movies.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
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
                console.log(action.payload);
                state.films = action.payload;
                state.status = 'fulfilled';
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'loading';
                state.errors = action.error.message;
                console.error(action.error.message)
            })
    }
})


export default moviesSlice.reducer;
export const { test } = moviesSlice.actions;