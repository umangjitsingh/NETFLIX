import {useSelector} from "react-redux";
import {useTMDBSearch} from "../HOOKS/useTMDBSearch.js";
import VideoTitle from "./VideoTitlte.jsx";
import React, {useState} from "react";
import { POSTER_PATH} from "../../CONSTANTS/constants.js";


function GptSearchContainer() {
   useTMDBSearch();
   const TMDB_Movies = useSelector(store => store.gpt.best_TMDB);
   const [poster, setPoster] = useState(null)


   // do not show movie if poster or some information is missing
   const validMovies = TMDB_Movies?.filter(m => m && m.poster_path);




   return (

      <div className=" absolute  w-[99%]  mx-auto text-white z-50 top-80 left-2">

            <ul className="  w-full h-screen flex justify-between items-center flex-wrap gap-3  ">
            {validMovies?.map((m, i) => (
               <li className=" p-3  h-[400px]  transition-all duration-700 relative " key={i}
                   style={
                      poster === i ?
                         {  backgroundImage: `
         linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)),
         url(${POSTER_PATH + m?.poster_path})
      `,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '8px',
                         }
                         :
                         {backgroundColor:"black",
                            opacity:0.8,
                         }
                   }
                   onMouseEnter={()=>setPoster(i)}
                   onMouseLeave={()=>setPoster(null)}
               >

                  <VideoTitle title={m?.title} overview={m?.overview}
                  />
               </li>

            ))}
         </ul>


      </div>)


}

export default GptSearchContainer
