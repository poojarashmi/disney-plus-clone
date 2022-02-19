import { createSlice } from "@reduxjs/toolkit";

//we always initially define the initial state - that is what we have - which is nothing
const initialState = {
    movies : []
};

const movieSlice = createSlice({
    name : "movie",
    initialState,
    reducers:{
        setMovies : (state, action) => {
            state.movies = action.payload;
        }
    }
});

//dispatch action
export const {setMovies} = movieSlice.actions;

//export the actual state
export const selectMovies = (state) => state.movie.movies;

//export the reducer
export default movieSlice.reducer;