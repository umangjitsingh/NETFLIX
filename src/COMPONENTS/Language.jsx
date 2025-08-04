import React from 'react'
import {MdOutlineTranslate} from "react-icons/md";
import {BiSolidDownArrow} from "react-icons/bi";
import { lang } from '../../CONSTANTS/language.js';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../REDUX-STORE-SLICE/languageSlice.jsx';


function Language() {
   const dispatch=useDispatch();
   function handleLanguageChange(e) {
      dispatch(changeLanguage(e.target.value))
   }

   return (
      <div  className=" text-white bg-zinc-800 flex border border-zinc-400 items-center rounded relative">


         <label htmlFor="language"></label>
         <MdOutlineTranslate className="absolute left-3 "/>

         <select name="language"
                 className="text-white bg-black/20 inset-0  w-30 py-1 text-center outline-0 z-20 hover:bg-black/40 hover:text-zinc-300"
                 onChange={handleLanguageChange}
                 style={{ WebkitAppearance: 'none', appearance      : 'none' }}
         >
            {Object.keys(lang).map((k,i)=> <option key={i} value={k} className="bg-zinc-200 text-black/80">{lang[k]?.name}</option>)

            }


         </select>

         <BiSolidDownArrow className="pl-1 text-xs absolute right-4"/>
      </div>


   )
}

export default Language
