import {useDispatch} from "react-redux";
import axios from "axios";
import {API_OPTIONS, RECENT_MOVIES_URL} from "../../CONSTANTS/constants.js";
import {addRecentMovies} from "../REDUX-STORE-SLICE/movieSlice.js";
import {useEffect} from "react";


const useRecentMovies =()=>{
   const dispatch =useDispatch()

   const getRecentMovies = async () => {
      try {
         const data = await axios.get(RECENT_MOVIES_URL, API_OPTIONS);
         const MOVIE_LIST=data?.data.results;
         dispatch(addRecentMovies(MOVIE_LIST))

      } catch (error) {
         console.error('Failed to fetch movies:', error.message);
      }
   };

   useEffect(() => {
      getRecentMovies();
   }, []);
}


export default useRecentMovies;