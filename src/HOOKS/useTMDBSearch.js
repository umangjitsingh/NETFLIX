
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { API_OPTIONS } from '../../CONSTANTS/constants.js';
import {addBest_TMDB} from "../REDUX-STORE-SLICE/gptSlice.js";

export const useTMDBSearch = () => {
   const AImovies = useSelector(store => store.gpt.AIResults);
   const dispatch=useDispatch()

   useEffect(() => {
      if (!AImovies || AImovies.length === 0) return;

      async function fetchTMDBResults() {
         try {
            const promiseArray = AImovies.map((m) => {
               const url = `https://api.themoviedb.org/3/search/movie?query=${m}&include_adult=false&language=en-US&page=1`;
               return axios.get(url, API_OPTIONS);
            });

            const responses = await Promise.all(promiseArray);
            const allResults = responses.map(res => res.data.results.filter((m)=>['hi','en','pa'].includes(m.original_language)));
            const best_results=allResults.map((movie)=>movie[0])
            console.log(best_results)

            dispatch(addBest_TMDB(best_results))



         } catch (error) {
            console.error("Error fetching TMDB data:", error);
         }
      }

      fetchTMDBResults();
   }, [AImovies,dispatch]);


};
