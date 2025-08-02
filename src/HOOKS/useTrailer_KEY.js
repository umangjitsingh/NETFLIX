import {API_OPTIONS} from "../../CONSTANTS/constants.js";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addTrailer} from "../REDUX-STORE-SLICE/movieSlice.js";
import {useEffect} from "react";


export const useTrailer_KEY = (movieId) => {
   const dispatch = useDispatch();
   const getTrailer = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

      try {
         const data = await axios.get(url, API_OPTIONS);
         const bgVideoArray = data?.data?.results || [];

         const Trailer = bgVideoArray.filter((video) => video.type === "Trailer");
         const selectedTrailer = Trailer.length ? Trailer[0] : bgVideoArray[0];
         dispatch(addTrailer(selectedTrailer.key))
      } catch (e) {
         console.log(e);
      }
   };

   useEffect(() => {
      getTrailer();
   }, [movieId]);
};