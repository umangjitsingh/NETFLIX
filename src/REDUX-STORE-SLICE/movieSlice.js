import {createSlice} from "@reduxjs/toolkit";


const movieSlice=createSlice({
   name:'movie',
   initialState:{
      recentMovies:null,
      trailer:null
   },
   reducers:{
      addRecentMovies : (state,action)=>{
         state.recentMovies=action.payload;
      },
      addTrailer:(state,action)=>{
         state.trailer=action.payload
      }
   }
});

export const {addRecentMovies,addTrailer}= movieSlice.actions

export default movieSlice.reducer;