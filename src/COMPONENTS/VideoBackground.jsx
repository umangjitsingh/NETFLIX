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
      <div className="w-full">
         <div className="relative  max-w-full">
            {/*<iframe*/}
            {/*   className=" w-full h-full aspect-video -translate-y-[17%]"*/}
            {/*   src={BACKGROUND_TRAILER_URL}*/}
            {/*   allowFullScreen*/}
            {/*></iframe>*/}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
         </div>
      </div>
   );
}

export default VideoBackground
