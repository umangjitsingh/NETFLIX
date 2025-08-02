import BrowseHeader from "../COMPONENTS/BrowseHeader.jsx";

import MainContainer from "../COMPONENTS/MainContainer.jsx";
import SecondaryContainer from "../COMPONENTS/SecondaryContainer.jsx";
import useMovies from "../HOOKS/useMovies.js";


function Browse() {
   useMovies('now_playing')
   return (
      <div className="w-full  relative scroll-smooth">
         <BrowseHeader/>
         <div >
            <MainContainer/>
         </div>

         <div className=" w-full min-h-screen  bg-gradient-to-br from-zinc-950 to-zinc-800 ">
            <SecondaryContainer/>
         </div>


      </div>);
}

export default Browse;