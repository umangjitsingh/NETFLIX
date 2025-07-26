import {IoIosArrowForward} from "react-icons/io";


function Join() {
   return (
      <div className="absolute w-full h-[100%] text-white selection:bg-transparent">
         <div className="w-full h-full flex items-center justify-center text-center">
            <div>
               <h1 className="text-6xl font-headline font-extrabold">Unlimited
                  movies, TV <br/>shows, and more</h1>
               <h4 className="pt-3 text-lg font-semibold font-headline">Starts at $7.99. Cancel anytime.</h4>
               <p className="pt-6 text-sm">Ready to watch? Enter your email to create
                  or restart your membership.</p>
               <div className=" pt-4 flex justify-between items-center gap-2">
                  <div className="relative w-2/3">
                     <input type="email"
                            placeholder=""
                            className="w-full peer px-3 py-4 text-white text-sm border
                             border-zinc-600 rounded bg-black/30 focus:outline-none "/>

                     <label className={`absolute left-3 top-4  text-sm text-zinc-400 transition-all 
                     peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-[6px] peer-focus:text-[10px] `}>
                        Email address
                     </label>
                  </div>



                  <button className="flex w-1/3 text-lg items-center justify-center gap-2 px-3 py-2 bg-red-600 rounded hover:bg-red-700 selection:bg-transparent font-semibold font-headline">Get
                     Started <IoIosArrowForward />
                  </button>
               </div>
            </div>

         </div>

      </div>
   )
}

export default Join
