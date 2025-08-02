import React from 'react'
import MovieList from "./MovieList.jsx";
import useMovies from "../HOOKS/useMovies.js";
import {useSelector} from "react-redux";


function SecondaryContainer() {
   useMovies('top_rated');
   useMovies('popular');
   useMovies('now_playing');
   useMovies('upcoming');


   const {top_rated,popular,now_playing,upcoming,latest}=useSelector(store=>store?.movie)

   return (
      <div  className="relative -translate-y-[400px] z-40">

         <MovieList genre={top_rated} name={'top rated'}/>
         <MovieList genre={popular} name={'popular'}/>
         <MovieList genre={now_playing} name={'now playing'}/>
         <MovieList genre={upcoming} name={'upcoming'}/>

      </div>
   )
}

export default SecondaryContainer
