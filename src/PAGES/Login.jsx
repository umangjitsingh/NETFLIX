import React from 'react'
import {HERO_BG_IMG} from "../../CONSTANTS/constants.js";
import Header from "../COMPONENTS/Header.jsx";
import Form from "../COMPONENTS/Form.jsx";


function Login() {
   return (
      <div className="relative w-full min-h-screen " style={{
         backgroundImage   : `url(${HERO_BG_IMG})`,
         backgroundSize    : 'cover',
         backgroundPosition: 'center',
      }}>
         <div className=" absolute bg-gradient-to-b from-black to-black sm:bg-gradient-to-b sm:from-black/90 sm:via-black/40 sm:to-black/60 inset-0 ">
         </div>
         {/*   Login ui */}
         <Header/>
         <Form />
      </div>
   )
}

export default Login
