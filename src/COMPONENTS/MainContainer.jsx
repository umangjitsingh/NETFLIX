import React from 'react'
import {useSelector} from "react-redux";
import VideoTitle from "./VideoTitlte.jsx";
import VideoBackground from "./VideoBackground.jsx";


function MainContainer() {
   const movies = useSelector(store => store?.movie?.recentMovies);
   if (!movies) return;
   const mainMovie = movies[11];

const {original_title,overview,id}=mainMovie;
   return (
      <div>
         <VideoTitle title={original_title} overview={overview}/>
         <VideoBackground movieId={id}/>
      </div>

   )
}

export default MainContainer
