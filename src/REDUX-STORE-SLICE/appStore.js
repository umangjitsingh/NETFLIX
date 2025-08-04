import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import movieReducer from "./movieSlice.js";
import gptReducer from "./gptSlice.js";
import languageReducer from "./languageSlice.jsx"

const appStore=configureStore({

   reducer:{
      user:userReducer,
      movie:movieReducer,
      gpt:gptReducer,
      language:languageReducer
   }
})


export default appStore