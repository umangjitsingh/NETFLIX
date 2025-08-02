import {useDispatch} from "react-redux";
import axios from "axios";
import {API_OPTIONS, MOVIES_URL} from "../../CONSTANTS/constants.js";
import {addMovies} from "../REDUX-STORE-SLICE/movieSlice.js";
import {useEffect} from "react";


const useMovies = (category) => {
   const dispatch = useDispatch()

  const COMPLETE_URL =MOVIES_URL + category + "?language=en-US&page=1"

   const getMovies = async () => {
      try {
         const data = await axios.get(COMPLETE_URL, API_OPTIONS);
         const MOVIE_LIST = data?.data.results;

         dispatch(addMovies({
            category: category, data: MOVIE_LIST
         }))

      } catch (error) {
         console.error('Failed to fetch movies:', error.message);
      }
   };

   useEffect(() => {
      getMovies();
   }, []);
}


export default useMovies;