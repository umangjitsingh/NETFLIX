
import Language from "./Language.jsx";
import {Link} from "react-router-dom";



function HeaderOptions() {

   return (
      <div className="flex  items-center gap-3">
         <Language/>
         <Link className="text-sm bg-red-600 text-white px-4 py-1  rounded tracking-tight hover:bg-red-700 selection:bg-transparent z-20"  to="/login" > Sign
            In
         </Link>
      </div>
   )
}

export default HeaderOptions
