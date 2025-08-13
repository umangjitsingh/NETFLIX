import React, {useEffect, useState} from 'react'
import {FaInfo, FaPlay} from "react-icons/fa";
import {useSelector} from "react-redux";

function VideoTitle({title, overview,onPlay}) {

   const [index, setIndex] = useState(0);
   const TMDB_Movies=useSelector(store=>store.gpt.best_TMDB);
   const fontOptions = ['font-movie2 ', 'font-movie2 animate-color',]

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((p) => (p + 1) % fontOptions.length);
      }, 10000);
      return () => clearInterval(interval);
   }, [fontOptions.length]);

   return  (
      <div className={`${TMDB_Movies ? "px-3 pb-4 pt-6 rounded-md w-88" : "absolute top-[290px] left-[4%] z-10 py-2 scale-85 max-h-90"}`}>
         <h1
            className={`${TMDB_Movies ? "text-[28px] font-normal" : "text-6xl font-bold"} [text-shadow:_12px_12px_18px_rgb(1_2_41_/_0.9)] ${fontOptions[index]} text-red-100 tracking-tighter`}
         >
            {title}
         </h1>
         <p className={`${TMDB_Movies ? "max-w-[80%] py-7 mb-4 break-words line-clamp-6" : "max-w-[48%] py-4 font-headline text-lg text-zinc-50 break-words"}`}>
            {overview}
         </p>
         <div className={`${TMDB_Movies ? "absolute bottom-10 flex gap-2" : "flex items-center gap-2"}`}>
            <button
               onClick={onPlay}
               className="hover:bg-white/80 bg-white font-semibold text-black px-6 py-2 rounded inline-flex justify-center items-center gap-2"
            >
               <span><FaPlay /></span>Play
            </button>
            <button
               className="hover:bg-black/90 bg-zinc-900 border-1 border-white/30 font-semibold text-white px-6 py-2 rounded inline-flex justify-center items-center gap-2"
            >
               <span><FaInfo /></span>More Info
            </button>
         </div>
      </div>
   )
}

export default VideoTitle
