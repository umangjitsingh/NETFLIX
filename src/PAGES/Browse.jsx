import BrowseHeader from "../COMPONENTS/BrowseHeader.jsx";
import MainContainer from "../COMPONENTS/MainContainer.jsx";
import SecondaryContainer from "../COMPONENTS/SecondaryContainer.jsx";
import useMovies from "../HOOKS/useMovies.js";
import GPT from '../COMPONENTS/GPT.jsx';
import {useSelector} from 'react-redux';
import React from "react";
import GptSearchContainer from "../COMPONENTS/GptSearchContainer.jsx";


function Browse() {
   useMovies('now_playing')
   const toggleGpt = useSelector(store => store.gpt.toggleGptUI);
   const AIMovies = useSelector(store => store.gpt.AIResults)

   return (
      <div className="w-full bg-black/90 relative scroll-smooth">
         <BrowseHeader/>
         {toggleGpt ? <>
            <GPT/>{AIMovies ? <GptSearchContainer/> :
            <>
               <MainContainer/>
               <SecondaryContainer/>
            </>
            }
         </> : <div className="-translate-y-[6%]">
            <MainContainer/>
            <SecondaryContainer/>
         </div>}

      </div>);
}

export default Browse;