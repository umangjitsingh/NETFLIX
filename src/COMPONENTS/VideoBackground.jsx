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
      < >
         <iframe
            className="w-full aspect-video "
            src={BACKGROUND_TRAILER_URL}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
         <div className="w-full h-full absolute bg-gradient-to-r from-black/90 from-0% via-black/50 via-50% to-transparent to-100% top-0"></div>
      </>

   )
}

export default VideoBackground
