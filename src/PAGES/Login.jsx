import React from 'react'
import {HERO_BG_IMG} from "../../CONSTANTS/constants.js";
import Header from "../COMPONENTS/Header.jsx";
import Form from "../COMPONENTS/Form.jsx";


function Login() {
   return (

      <div
         className="relative w-full min-h-screen bg-cover bg-center"
         style={{ backgroundImage: `url(${HERO_BG_IMG})` }}
      >
         <div className="absolute inset-0 bg-gradient-to-b from-black sm:from-black/90 sm:via-black/40 sm:to-black/60 to-black" />
         <Header />
         <Form />
      </div>
   )
}

export default Login
