import BrowseHeader from "../COMPONENTS/BrowseHeader.jsx";
import useRecentMovies from "../HOOKS/useRecentMovies.js";
import MainContainer from "../COMPONENTS/MainContainer.jsx";


function Browse() {
   useRecentMovies()
   return (
      <div className="w-full min-h-screen  relative">
         <BrowseHeader/>
         <div className="w-full h-fit  ">
            <MainContainer/>
         </div>

         <div className="w-full h-screen bg-teal-800"></div>


      </div>);
}

export default Browse;