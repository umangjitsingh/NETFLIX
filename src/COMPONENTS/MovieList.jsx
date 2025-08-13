

import {POSTER_PATH} from "../../CONSTANTS/constants.js";

function MovieList({ genre, name }) {

   return (
      <div className=" text-white w-full  z-30 scale-80">
         <section aria-label={name} className=" mt-18 border-b-1 border-zinc-800">
            <h2 className="pl-6 text-2xl font-inter pb-2 font-semibold capitalize">{name}</h2>
            <div className="px-4 w-full flex items-center gap-2 mb-8 overflow-x-scroll scrollbar-custom mx-auto rounded-md" >

               <ul className="flex gap-4 justify-between   flex-nowrap">
                  {genre?.map((currItem) => (
                     <li className=" border-2 border-zinc-600 max-w-72 min-w-52 h-56 shrink-0 cursor-pointer shadow-2xl rounded-md" key={currItem.id}>
                        <img
                           className=" w-full h-full object-cover center  "
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
