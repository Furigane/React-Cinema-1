import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    films: [],
    status: 'loading',
    errors: null,
    searchFilm: null
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
})

const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        getFilmInfo: (state, action) => {
            const id = action.payload;
            console.log(id);
            const film = state.films.find(film => film.id === id);
            if(film) {
                state.searchFilm = film;
                console.log('Сработало');
                
            } else {
                console.log('Сработала ошибка');
            }
        }
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
                // console.log(action);
                console.error(action.error.message)
            })
    }
})


export default moviesSlice.reducer;
export const { getFilmInfo } = moviesSlice.actions;