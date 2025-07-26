import React from 'react'
import Language from "./Language.jsx";


function Footer() {
   return (
      <div className="h-60 w-full bg-zinc-800 relative py-10 px-16">
         <div className="text-zinc-400 flex flex-col gap-3 ">
            <p className="pb-4">Questions? Call 1-866-839-3195 (Toll-Free)</p>
            <ul className="capitalize flex underline  flex-wrap ">
               <li className="w-1/4 text-base pb-3">FAQ</li>
               <li className="w-1/4 text-base pb-3">help center</li>
               <li className="w-1/4 text-base pb-3">netflix shop</li>
               <li className="w-1/4 text-base pb-3">terms of use</li>
               <li className="w-1/4 text-base pb-3">privacy</li>
               <li className="w-1/4 text-base pb-3">cookie preferences</li>
               <li className="w-1/4 text-base pb-3">corporate information</li>
               <li className="w-1/4 text-base pb-3">ad choices</li>
            </ul>
            <div className="absolute bottom-6"><Language/></div>

         </div>
      </div>
   )
}

export default Footer
