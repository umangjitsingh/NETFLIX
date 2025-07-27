import {HERO_BG_IMG} from "../../CONSTANTS/constants.js";
import Header from "../COMPONENTS/Header.jsx";
import Join from "../COMPONENTS/Join.jsx";



function Hero() {

   return (

      <div
         className="relative w-full h-screen bg-cover bg-center"
         style={{ backgroundImage: `url(${HERO_BG_IMG})` }}
      >
         <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/60" />

         <Header />
         <Join />
      </div>
   )
}

export default Hero
