

import {POSTER_PATH} from "../../CONSTANTS/constants.js";

function MovieList({ genre, name }) {

   return (
      <div className=" text-white px-4 w-full  z-30 scale-90">
         <section aria-label={name} className="py-8 border-b-1 border-zinc-800">
            <h2 className="pl-6 text-2xl font-inter pb-2 font-semibold capitalize">{name}</h2>
            <div className="px-4 w-full flex items-center gap-2 mb-8 overflow-x-scroll scrollbar-custom mx-auto rounded-md" >

               <ul className="flex gap-3 justify-center px-2 flex-nowrap">
                  {genre?.map((currItem) => (
                     <li className="max-w-64 min-w-56 h-60 shrink-0" key={currItem.id}>
                        <img
                           className="rounded-sm w-full h-full object-cover center"
                           src={POSTER_PATH + currItem.poster_path}
                           alt=""
                        />
                     </li>
                  ))}
               </ul>


            </div>
         </section>
      </div>
   );


}
export default MovieList
