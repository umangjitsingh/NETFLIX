import React from 'react'
import {MdOutlineTranslate} from "react-icons/md";
import {BiSolidDownArrow} from "react-icons/bi";


function Language() {
   return (
      <div className=" text-white bg-zinc-800 flex border border-zinc-400 items-center rounded relative">


         <label htmlFor="language"></label>
         <MdOutlineTranslate className="absolute left-3 "/>
         <select name="language" id="language" className="text-white bg-black/20 inset-0  w-30 py-1 text-center outline-0 z-20 " style={{
            WebkitAppearance: 'none',
            appearance      : 'none'
         }}>
            <option value="english" className="bg-zinc-200 text-black/80">English</option>
            <option value="french" className="bg-zinc-200 text-black/80">Français</option>
         </select>
         <BiSolidDownArrow className="pl-1 text-xs absolute right-4"/>
      </div>


   )
}

export default Language
