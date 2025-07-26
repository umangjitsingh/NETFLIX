import React, {useState} from 'react'
import {validateData, validateName} from "../UTILS/dataValidation(Form).js";
import {VscError} from "react-icons/vsc";


function Form() {
   const [isSignInForm, setIsSignInForm] = useState(true);
   const [formInput, setFormInput] = useState({
      name    : "",
      email   : "",
      password: ""
   })
   const [error, setError] = useState("");


   function toggleForm() {
      setIsSignInForm(prev => !prev);
      setError("")
   }

   function handleForm(e) {
      e.preventDefault();
      if (!isSignInForm) {
         const nameError = validateName(formInput.name);
         if(nameError){
            setError(nameError);
            return;
         }
      }
      const dataError = validateData(formInput.email, formInput.password);
      if(dataError){
         setError(dataError);
         return;
      }
      return null;
   }

   function handleDataChange(e) {
      setFormInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
         })
      )
   }

   return (

      <div className={`${isSignInForm ? " font-inter absolute h-[80%] w-[90%]  sm:w-[49%] md:w-[39%] lg:w-[32%] sm:bg-black/60 z-10 top-[60%] md:top-3/6 left-1/2 -translate-1/2 p-10 " : "font-inter absolute h-[80%] w-[90%] sm:max-w-[46%] md:w-[39%] lg:w-[32%] sm:bg-black/60 z-10 top-[60%] md:top-3/6 left-1/2 -translate-1/2 p-10  "}`}>
         <div className="text-white  ">
            <h1 className="text-4xl font-bold mb-6 mt-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm &&
               <div className="relative w-full  mb-4">
                  <input className="cursor-pointer border border-zinc-400 rounded  peer focus:outline-none  px-3 pt-4 pb-2 w-full text-lg font-normal"
                         type="text"
                         name="name"
                         value={formInput.name}
                         onChange={handleDataChange}
                         placeholder=" "/>
                  <label className={`text-sm  text-zinc-400 absolute left-4 top-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:text-[10px] peer-focus:top-[6px] transition-all duration-400 font-light ${formInput.name && "text-[10px] tracking-wide top-[4px]"}`} htmlFor="email">name</label>
                  {error === "Name is not valid" ?
                     <p className="text-sm  text-red-500 pt-1 font-light inline-flex justify-center items-center gap-1"><VscError /> {error}</p> : ""}
               </div>}
            <div className="relative w-full  mb-4">
               <input className="cursor-pointer border border-zinc-400 rounded  peer focus:outline-none  px-3 pt-4 pb-2 w-full text-lg font-normal"
                      name="email"
                      type="email"
                      value={formInput.email}
                      onChange={handleDataChange}
                      placeholder=" "/>
               <label className={`text-sm  text-zinc-400 absolute left-4 top-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:text-[10px] peer-focus:top-[6px] transition-all duration-400 font-light ${formInput.email && "text-[10px] tracking-wide top-[4px]"}`}
                      htmlFor="email">Email</label>
               {error === "Email ID is not valid" ?
                  <p className="text-sm text-red-500 pt-1 font-light inline-flex gap-1 justify-center items-center"> <VscError /> {error} </p> : ""}
            </div>

            <div className="relative w-full mb-4">
               <input className="cursor-pointer border border-zinc-400 rounded  peer focus:outline-none  px-3 pt-4 pb-3 w-full text-sm font-normal"
                      name="password"
                      type="password"
                      value={formInput.password}
                      onChange={handleDataChange}
                      placeholder=" "/>
               <label className={`text-sm  text-zinc-400 absolute left-4 top-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:text-[10px] peer-focus:top-[6px] transition-all duration-400 ${formInput.password && "text-[10px] top-[4px]"}`} htmlFor="password">Password</label>
               {error === "Password is not valid" ?
                  <p className="text-sm text-red-500 pt-1 font-light inline-flex justify-center items-center gap-1"><VscError /> {error}</p> : ""}
            </div>


            <button type="submit" className="my-4 w-full bg-red-700 py-4 rounded-sm hover:bg-red-800" onClick={(e) => handleForm(e)}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className={`${isSignInForm ? "underline text-sm font-light text-center mb-8 cursor-pointer" : "cursor-pointer mb-8 text-center underline text-sm font-light"}`}>Forgot
               password?</p>
            <p onClick={() => toggleForm()}>
               <span className="tex-sm text-zinc-400 tracking-tight">{isSignInForm ? "New to Netflix? " : "Already a member? "} </span>
               <span className="tex-sm  tracking-tight hover:underline cursor-pointer">{isSignInForm ? "Sign Up Now" : "Sign In Now"} </span>
            </p>
         </div>
      </div>

   )
}

export default Form
