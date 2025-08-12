import {useSelector} from "react-redux";
import {useTMDBSearch} from "../HOOKS/useTMDBSearch.js";


function GptSearchContainer() {
   useTMDBSearch();
   const TMDB_Movies=useSelector(store=>store.gpt.best_TMDB);



   return (

         <div className="w-[92%] h-max bg-zinc-900 mx-auto text-white">
            <ul>
               {TMDB_Movies?.map((m,i)=>(<li key={i}>{m.title}</li>))}
            </ul>
         </div>)



}

export default GptSearchContainer
