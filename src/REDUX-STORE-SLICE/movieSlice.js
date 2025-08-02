import {createSlice} from "@reduxjs/toolkit";


const movieSlice=createSlice({
   name:'movie',
   initialState:{
      now_playing:null,
      popular:null,
      top_rated:null,
      upcoming:null,

      trailer:null
   },
   reducers:{
      addMovies:(state,action)=>{
         const {category,data}=action.payload;
         if(state.hasOwnProperty(category)){
            state[category]=data
         }
      },
      addTrailer:(state,action)=>{
         state.trailer=action.payload
      }
   }
});

export const {addMovies,addTrailer}= movieSlice.actions

export default movieSlice.reducer;