import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        gptSearch:false,
        movieNames: null,
        movieResults: null
    },
    reducers:{
        toggleGPT: (state)=>{
            state.gptSearch = !state.gptSearch
        },
        addGptMovieResults: (state, action)=>{
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }

    }
})

export const {toggleGPT, addGptMovieResults} = gptSlice.actions

export default gptSlice.reducer