import { createSlice } from '@reduxjs/toolkit';


const gptSlice=createSlice({
	name:'gpt',
	initialState:{
		toggleGptUI:false,
      AIResults:null,
      best_TMDB:null
	},
	reducers:{
		toggleGptUI:(state)=>{
			state.toggleGptUI =!state.toggleGptUI
		},
      addAIResults:(state,action)=>{
         state.AIResults=action.payload;
      },
      addBest_TMDB:(state,action)=>{
         state.best_TMDB=action.payload;
      }
	}
})

export const {toggleGptUI,addAIResults,addBest_TMDB}=gptSlice.actions;
export default gptSlice.reducer;