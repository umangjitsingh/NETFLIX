import React from 'react'
import VideoBackground from "../COMPONENTS/VideoBackground.jsx";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


function Play() {
   const gptTrailerId =useSelector(store=>store.gpt.gptTrailerId);
   const navigate =useNavigate()

   function handleGoBack() {
      navigate(-1);
   }

   return (<>
         <div className=' h-screen bg-zinc-950 flex justify-center items-center relative'>
            <img className="w-16 h-14 absolute top-3 left-8 z-40" src="https://imgs.search.brave.com/fk5wYGggtiuAGGplz-C51dxr5PzdZhwciZkdx-44rms/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/NjU4LzMzMy9zbWFs/bC9uZXRmbGl4LWxv/Z28tc3F1YXJlLXJv/dW5kZWQtbmV0Zmxp/eC1sb2dvLW5ldGZs/aXgtbG9nby1mcmVl/LWRvd25sb2FkLWZy/ZWUtcG5nLnBuZw" alt=""/>
            <div className=" overflow-hidden"> <VideoBackground movieId={gptTrailerId}/></div>
         </div>
         <div className="w-24 h-14 bg-black/60 absolute top-8 right-8 rounded flex justify-center items-center shadow-2xl">
            <button onClick={handleGoBack} className="text-white bg-red-600  px-6 py-2 rounded shadow-2xl hover:bg-red-700 border-1 border-red-950">Back</button>
         </div>

</>
   )
}

export default Play
