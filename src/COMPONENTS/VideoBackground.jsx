import React from 'react'
import {useTrailer_KEY} from "../HOOKS/useTrailer_KEY.js";
import {useSelector} from "react-redux";


function VideoBackground({movieId}) {
   useTrailer_KEY(movieId);

   const youtubeKey = useSelector((store) => store.movie.trailer);


   if (!youtubeKey) {
      return <p>Loading trailer...</p>;
   }

   const BACKGROUND_TRAILER_URL = `https://www.youtube.com/embed/${youtubeKey}?&autoplay=1&mute=1&controls=0&modestbranding=0&rel=0&showinfo=0`;

   return (

         <div className="w-screen  h-full ">
            <iframe
               className="w-screen  aspect-video  "
               src={BACKGROUND_TRAILER_URL}
               allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent"></div>
         </div>

   );
}

export default VideoBackground
