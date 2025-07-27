
import Language from "./Language.jsx";
import {Link} from "react-router-dom";



function HeaderOptions() {

   return (

      <div className="flex  items-center justify-around sm:gap-3  sm:px-6">
         <Language />
         <Link
            to="/login"
            className=" sm:scale-90 text-xs sm:text-sm bg-red-600 text-white px-4 sm:px-4 py-2 rounded tracking-tight hover:bg-red-700 selection:bg-transparent z-20"
         >
            Sign In
         </Link>
      </div>
   )
}

export default HeaderOptions
