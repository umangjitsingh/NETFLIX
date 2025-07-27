import React from 'react'
import Language from "./Language.jsx";


function Footer() {
   return (

      <div className="h-68 sm:h-72 md:h-80 w-full bg-zinc-800 relative py-10 px-6 sm:px-10 md:px-16">
         <div className="text-zinc-400 flex flex-col gap-3">
            <p className="pb-4 text-sm sm:text-base md:text-lg">
               Questions? Call 1-866-839-3195 (Toll-Free)
            </p>
            <ul className="capitalize flex flex-wrap underline">
               {[
                  "FAQ",
                  "help center",
                  "netflix shop",
                  "terms of use",
                  "privacy",
                  "cookie preferences",
                  "corporate information",
                  "ad choices",
               ].map((item, idx) => (
                  <li key={idx} className="w-1/2 sm:w-1/3 md:w-1/4 text-sm sm:text-base pb-3">
                     {item}
                  </li>
               ))}
            </ul>
            <div className="absolute bottom-1  sm:bottom-6">
               <Language />
            </div>
         </div>
      </div>
   )
}

export default Footer
