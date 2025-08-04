import { createSlice } from '@reduxjs/toolkit';


const gptSlice=createSlice({
	name:'gpt',
	initialState:{
		toggleGptUI:false
	},
	reducers:{
		toggleGptUI:(state,action)=>{
			state.toggleGptUI =!state.toggleGptUI
		}
	}
})

export const {toggleGptUI}=gptSlice.actions;
export default gptSlice.reducer;