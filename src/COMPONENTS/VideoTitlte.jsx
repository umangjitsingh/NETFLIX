import React, {useEffect, useState} from 'react'
import {FaInfo, FaPlay} from "react-icons/fa";

function VideoTitle({title, overview}) {

   const [index, setIndex] = useState(0);

   const fontOptions = ['font-movie2 ', 'font-movie2 animate-color',]
   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((p) => (p + 1) % fontOptions.length);
      }, 10000);
      return () => clearInterval(interval);
   }, [fontOptions.length]);

   return (
      <div className=" absolute top-[160px]  left-[6%] z-10 py-2  scale-90  max-h-90 ">
         <h1 className={`text-6xl [text-shadow:_12px_12px_18px_rgb(1_2_41_/_0.9)] font-bold ${fontOptions[index]} text-red-100 tracking-tighter`}>{title}</h1>
         <p className=" max-w-[60%] py-6  font-headline text-lg text-zinc-50 break-words">{overview}</p>
         <div className="flex items-center gap-2">
            <button className="hover:bg-white/80 bg-white font-semibold text-black  px-6 py-2 rounded inline-flex justify-center items-center gap-2">
               <span><FaPlay/></span>Play
            </button>
            <button className="hover:bg-black/90 bg-zinc-900 border-1 border-white/30 font-semibold text-white px-6 py-2 rounded  inline-flex justify-center items-center gap-2">
               <span><FaInfo/></span>More Info
            </button>

         </div>
      </div>
   )
}

export default VideoTitle
