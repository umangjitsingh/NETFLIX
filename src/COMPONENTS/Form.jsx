import React, {useState} from 'react'


function Form() {
   const [isSignInForm, setIsSignInForm] = useState(true);

   function toggleForm() {
      setIsSignInForm(prev => !prev)
   }

   return (

      <div className={`${isSignInForm ? "font-inter absolute h-[86%] w-[36%] md:w-[24%] bg-black/60 z-10 top-3/6 left-1/2 -translate-1/2 p-10 " : "font-inter absolute h-[86%] w-[36%] md:w-[24%] bg-black/60 z-10 top-3/6 left-1/2 -translate-1/2 p-10 "}`}>
         <div className="text-white  ">
            <h1 className="text-4xl font-bold mb-6 mt-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm &&
               <div className="relative w-full  mb-4">
                  <input className="cursor-pointer border border-zinc-400 rounded  peer focus:outline-none  px-3 py-4 w-full text-sm"
                         type="text" placeholder=""/>
                  <label className="text-sm text-zinc-400 absolute left-4 top-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:text-[10px] peer-focus:top-[6px] transition-all duration-400" htmlFor="email">name</label>
               </div>}
            <div className="relative w-full  mb-4">
               <input className="cursor-pointer border border-zinc-400 rounded  peer focus:outline-none  px-3 py-4 w-full text-sm"
                      type="email" placeholder=""/>
               <label className="text-sm text-zinc-400 absolute left-4 top-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:text-[10px] peer-focus:top-[6px] transition-all duration-400" htmlFor="email">Email</label>
            </div>

            <div className="relative w-full mb-4">
               <input className="cursor-pointer border border-zinc-400 rounded  peer focus:outline-none  px-3 py-4 w-full text-sm"
                      type="password" placeholder=""/>
               <label className="text-sm text-zinc-400 absolute left-4 top-4  peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:text-[10px] peer-focus:top-[6px] transition-all duration-400 " htmlFor="password">Password</label>
            </div>


            <button className="my-4 w-full bg-red-700 py-4 rounded-sm hover:bg-red-800">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className={`${isSignInForm ? "underline text-sm font-light text-center mb-8 cursor-pointer" : "mb-8 text-center underline text-sm font-light"}`}>Forgot
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
