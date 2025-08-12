import {useDispatch, useSelector} from 'react-redux';
import { lang } from '../../CONSTANTS/language.js';
import {useRef} from "react";
import {client} from "../../CONSTANTS/constants.js";
import optimisedAIresults from "../HELPER/optimisedAI.JS";
import {addAIResults} from "../REDUX-STORE-SLICE/gptSlice.js";



function GptSearch() {
	const current_language=useSelector(store=>store.language.lang);
   const dispatch=useDispatch()
   const searchRef=useRef(null)


   async function handleSearch(e) {
      e.preventDefault();

      const userSearchedQuery = searchRef.current?.value?.trim();
      if (!userSearchedQuery) {
         console.warn("Search query is empty");
         return;
      }

      const OPTIMISED_SEARCH_QUERY = `I am making a movie webapp, in which user can search a movie using AI. This is the user's search query: "${userSearchedQuery}". Please provide me not more than 4 movie results each time, comma seperated. Here is the example of results : 'Hera Pheri, 'Don', 'Chal Mera Putt', 'Shareek'`;

      try {
         const getResults = await client.chatCompletion({
            provider: "fireworks-ai",
            model: "moonshotai/Kimi-K2-Instruct",
            messages: [
               {
                  role: "user",
                  content: OPTIMISED_SEARCH_QUERY,
               },
            ],
         });


         const AI_MOVIES=optimisedAIresults(getResults.choices[0].message.content)
         console.log(AI_MOVIES)

         dispatch(addAIResults(AI_MOVIES))
      } catch (error) {
         console.error("Error fetching results:", error);
      }
   }

   return (
		<div className="w-full max-w-3xl flex items-center justify-center    h-18 absolute top-29 left-1/2 -translate-x-1/2 border border-zinc-600 rounded bg-black  shadow-2xl">

			<form className="w-full  px-2 flex justify-between items-center">
				<input
               ref={searchRef}
					className="w-[70%] cursor-text mr-2 font-bold font-inter text-base outline-none border px-4 py-3   hover:bg-zinc-100 bg-zinc-300 text-black"
					type="text"
					placeholder={lang[current_language].placeholder}
				/>
				<button
               onClick={(e)=>handleSearch(e)}
					type="submit"
					className="  min-w-[30%]  text-white bg-red-700    hover:bg-red-600 text-base  py-3 rounded tracking-tight  z-20 border border-white/20">{lang[current_language].search}</button>
			</form>

		</div>
	);
}

export default GptSearch;