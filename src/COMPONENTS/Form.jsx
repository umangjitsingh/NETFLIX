import React, {useState} from 'react'
import {validateData, validateName} from "../UTILS/dataValidation(Form).js";
import {VscError} from "react-icons/vsc";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../UTILS/firebase.js";
import {updateProfile} from "firebase/auth";
// import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser} from "../REDUX-STORE-SLICE/userSlice.js";


function Form() {
   const [isSignInForm, setIsSignInForm] = useState(true);
   // const navigate = useNavigate();
   const [formInput, setFormInput] = useState({
      name    : "",
      email   : "",
      password: "",
      photo   : ""
   })
   const [error, setError] = useState("");
   const [fError, setFError] = useState("")
const dispatch=useDispatch();


   function toggleForm() {
      setIsSignInForm(prev => !prev);
      setError("")
   }

   function handleForm(e) {
      e.preventDefault();
      if (!isSignInForm) {
         const nameError = validateName(formInput.name);
         if (nameError) {
            setError(nameError);
            return;
         }
      }
      const dataError = validateData(formInput.email, formInput.password);
      if (dataError) {
         setError(dataError);
         return;
      }
      if (!isSignInForm) {
         createUserWithEmailAndPassword(auth, formInput.email, formInput.password)
            .then((userCredential) => {
               const user = userCredential.user;
               updateProfile(user, {
                  displayName: formInput?.name,
                  photoURL   : formInput?.photo
               }).then(() => {
                  const {uid,email,displayName,photoURL}=auth.currentUser;
                  dispatch(addUser({uid,email,displayName,photoURL}))
                  // navigate('/browse')
               }).catch((error) => {
                  console.log(error.message)

               })
               console.log(user)

            })
            .catch((error) => {
               const errorMessage = error.message;
               setFError(errorMessage);
            });

      } else {

         signInWithEmailAndPassword(auth, formInput.email, formInput.password)
            .then((userCredential) => {
               const user = userCredential.user;
               console.log(user)

            })
            .catch((error) => {
               console.log(error)

               const errorMessage = error.message;
               setFError(errorMessage);
            });
      }

   }

   function handleDataChange(e) {
      setFormInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
         })
      )
   }

   return (

      <div className={`${isSignInForm
         ? "font-inter absolute h-[80%] w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[32%] sm:bg-black/60 z-10 top-[65%] sm:top-[60%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 sm:p-8 md:p-10"
         : "font-inter absolute h-[80%] w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[32%] sm:bg-black/60 z-10 top-[65%] sm:top-[60%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 sm:p-8 md:p-10"}`}>

         <div className="text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 mt-4">
               {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && (
               <div className="relative w-full mb-4">
                  <input
                     className="cursor-pointer border border-zinc-400 rounded peer focus:outline-none px-3 pt-4 pb-2 w-full text-base sm:text-lg font-normal"
                     type="text"
                     name="name"
                     value={formInput.name}
                     onChange={handleDataChange}
                     placeholder=" "
                  />
                  <label
                     htmlFor="name"
                     className={`text-sm text-zinc-400 absolute left-4 top-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:text-[10px] peer-focus:top-[6px] transition-all duration-400 font-light ${formInput.name && "text-[10px] tracking-wide top-[4px]"}`}>
                     Name
                  </label>
                  {error === "Name is not valid" && (
                     <p className="text-sm text-red-500 pt-1 font-light inline-flex justify-center items-center gap-1">
                        <VscError/> {error}
                     </p>
                  )}
               </div>
            )}

            <div className="relative w-full mb-4">
               <input
                  className="cursor-pointer border border-zinc-400 rounded peer focus:outline-none px-3 pt-4 pb-2 w-full text-base sm:text-lg font-normal"
                  type="email"
                  name="email"
                  value={formInput.email}
                  onChange={handleDataChange}
                  placeholder=" "
               />
               <label
                  htmlFor="email"
                  className={`text-sm text-zinc-400 absolute left-4 top-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:text-[10px] peer-focus:top-[6px] transition-all duration-400 font-light ${formInput.email && "text-[10px] tracking-wide top-[4px]"}`}>
                  Email
               </label>
               {error === "Email ID is not valid" && (
                  <p className="text-sm text-red-500 pt-1 font-light inline-flex gap-1 justify-center items-center">
                     <VscError/> {error}
                  </p>
               )}
            </div>

            <div className="relative w-full mb-4">
               <input
                  className="cursor-pointer border border-zinc-400 rounded peer focus:outline-none px-3 pt-4 pb-2 w-full text-base sm:text-lg font-normal"
                  type="password"
                  name="password"
                  value={formInput.password}
                  onChange={handleDataChange}
                  placeholder=" "
               />
               <label
                  htmlFor="password"
                  className={`text-sm text-zinc-400 absolute left-4 top-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:text-[10px] peer-focus:top-[6px] transition-all duration-400 font-light ${formInput.password && "text-[10px] top-[4px]"}`}>
                  Password
               </label>

               {error === "Password is not valid" && (
                  <p className="text-sm text-red-500 pt-1 font-light inline-flex justify-center items-center gap-1">
                     <VscError/> {error}
                  </p>
               )}


            </div>

            <button
               type="submit"
               className="my-4 w-full bg-red-700 py-3 sm:py-4 text-sm sm:text-base rounded-sm hover:bg-red-800"
               onClick={(e) => handleForm(e)}>
               {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p className="underline text-sm font-light text-center mb-6 cursor-pointer">
               Forgot password?
            </p>

            <p onClick={toggleForm} className="text-sm text-center">
      <span className="text-zinc-400 tracking-tight">
        {isSignInForm ? "New to Netflix? " : "Already a member? "}
      </span>
               <span className="tracking-tight hover:underline cursor-pointer">
        {isSignInForm ? "Sign Up Now" : "Sign In Now"}
      </span>
            </p>
         </div>
         {
            !isSignInForm && <div className="relative bg-gradient-to-r from-pink-600 via-violet-600 to-amber-600 mt-2">
               <input
                  className=" cursor-pointer border border-zinc-400 rounded peer focus:outline-none px-3 pt-4 pb-2 w-full text-base sm:text-lg font-normal"
                  type="text"
                  name="photo"
                  value={formInput.photo}
                  onChange={handleDataChange}
                  placeholder=" "
               />
               <label
                  htmlFor="photo"
                  className={`flex text-sm text-zinc-900 absolute left-4 top-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:text-[10px] peer-focus:top-[6px] transition-all duration-400 font-semibold ${formInput.name && "text-[10px] tracking-wide top-[4px]"}`}>
                  Enter a photo
                  URL <div className="text-2xl pl-4 h-8 animate-bounce">🤖</div>

               </label>
            </div>
         }


         <div className="h-18 w-full bg-clip-text bg-gradient-to-b from-red-600 via-orange-600 to-red-600 animate-wiggle
         ">
            <p className="text-[14.4px] text-transparent pt-8 text-center font-semibold ">{fError}</p>

         </div>

      </div>
   )
}

export default Form;
