import { useSelector } from 'react-redux';
import { lang } from '../../CONSTANTS/language.js';


function GptSearch() {
	const current_language=useSelector(store=>store.language.lang);

	return (
		<div className="w-full max-w-3xl flex items-center justify-center    h-18 absolute top-29 left-1/2 -translate-x-1/2 border border-zinc-600 rounded bg-black  shadow-2xl">

			<form className="w-full  px-2 flex justify-between items-center">
				<input
					className="w-[70%] cursor-text mr-2 font-bold font-inter text-base outline-none border px-4 py-3   hover:bg-zinc-100 bg-zinc-300 text-black"
					type="text"
					placeholder={lang[current_language].placeholder}
				/>
				<button
					type="submit"
					className="  min-w-[30%]  text-white bg-red-700    hover:bg-red-600 text-base  py-3 rounded tracking-tight  z-20 border border-white/20">{lang[current_language].search}</button>
			</form>

		</div>
	);
}

export default GptSearch;