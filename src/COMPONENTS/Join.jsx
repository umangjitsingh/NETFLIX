import {IoIosArrowForward} from "react-icons/io";


function Join() {
   return (


      <div className="absolute w-full h-full text-white selection:bg-transparent">
         <div className="flex items-center justify-center text-center w-full h-full px-4 sm:px-8 md:px-16">
            <div className="max-w-2xl">
               <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-extrabold leading-tight">
                  Unlimited movies, TV <br /> shows, and more
               </h1>
               <h4 className="pt-3 text-base sm:text-lg font-semibold font-headline">
                  Starts at $7.99. Cancel anytime.
               </h4>
               <p className="pt-6 text-sm sm:text-base">
                  Ready to watch? Enter your email to create or restart your membership.
               </p>

               <div className="pt-6 flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative w-full sm:w-2/3">
                     <input
                        type="email"
                        placeholder=""
                        className="w-full peer px-4 py-3 sm:py-4 text-white text-sm sm:text-base border border-zinc-600 rounded bg-black/60 focus:outline-none"
                     />
                     <label
                        className="absolute left-4 top-3 text-sm text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-[6px] peer-focus:text-[10px]"
                     >
                        Email address
                     </label>
                  </div>

                  <button className="flex w-full sm:w-1/3 items-center justify-center gap-2 px-4 py-3 bg-red-600 rounded hover:bg-red-700 font-semibold font-headline text-sm sm:text-lg">
                     Get Started <IoIosArrowForward />
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Join
