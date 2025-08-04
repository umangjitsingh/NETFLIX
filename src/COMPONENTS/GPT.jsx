import React from 'react'
import GptSearch from './GPTSearch.jsx';
import { HERO_BG_IMG } from '../../CONSTANTS/constants.js';




function Gpt() {
	return (

		<div className="relative w-full h-[calc(100vh+400px)] bg-cover bg-center "
			style={{ backgroundImage: `url(${HERO_BG_IMG})` }}>
			<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/30"/>
			<GptSearch/>

		</div>)
}

export default Gpt
