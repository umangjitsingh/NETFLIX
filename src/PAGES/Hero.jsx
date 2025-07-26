import {HERO_BG_IMG} from "../../CONSTANTS/constants.js";
import Header from "../COMPONENTS/Header.jsx";
import Join from "../COMPONENTS/Join.jsx";



function Hero() {

   return (
      <div className="relative w-full " style={{
         backgroundImage   : `url(${HERO_BG_IMG})`,
         height            : '100vh',
         backgroundSize    : 'cover',
         backgroundPosition: 'center',
      }}>
         <div className=" absolute bg-gradient-to-b from-black/90 via-black/70 to-black/60 inset-0 ">
         </div>
               <Header/>
               <Join/>

      </div>
   )
}

export default Hero
