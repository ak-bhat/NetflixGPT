import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        gptSearch:false
    },
    reducers:{
        toggleGPT: (state)=>{
            state.gptSearch = !state.gptSearch
        }
    }
})

export const {toggleGPT} = gptSlice.actions

export default gptSlice.reducer